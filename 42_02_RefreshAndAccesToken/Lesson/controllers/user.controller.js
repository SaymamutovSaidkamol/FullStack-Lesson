import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  UserLoginValidation,
  UserValidation,
  VerifyNumberValidation,
} from "../validations/user.validation.js";
import logger from "../log/logger.js";
import { totp } from "otplib";

const access_token = (user) => {
  let token = jwt.sign(
    {
      id: user.id,
      fullnmae: user.fullname,
      role: user.role
    },
    "very-secret",
    { expiresIn: "15m" }
  );
  return token;
};
const refresh_token = (user) => {
  let token = jwt.sign(
    {
      id: user.id,
      fullnmae: user.fullname,
    },
    "refresh-secret",
    { expiresIn: "7d" }
  );

  return token;
};

async function findAll(req, res) {
  try {
    let all = await User.findAll();
    res.send(all);

    logger.info(`Method: ${req.method};  findAll-Users`);
  } catch (e) {
    console.log(e);
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let all = await User.findOne({ where: { id: id } });

    if (!all) {
      logger.info(`ERROR: Method ${req.method}; User not found`);
      return res.send({ error: "User not found" });
    }

    logger.info(`Method ${req.method}; findOne;  User: ${JSON.stringify(all)}`);
    res.send(all);
  } catch (e) {
    console.log(e);
  }
}

async function VerifyOtp(req, res) {
  try {
    let { error, value } = VerifyNumberValidation.validate(req.body);

    if (error) {
      logger.info(`ERROR: ${error.details[0].message};  Method ${req.method};`);
      res.send({ error: error.details[0].message });
    }

    let {phone, otp} = value

    if (!otp) {
      logger.info(`ERROR: Not Found OTP;  Method ${req.method};  VerifyOTP`);
      return res.send({ error: "Not found Opt" });
    }

    let check_user = await User.findOne({ where: { phone } });

    if (!check_user) {
      logger.info(`ERROR: VerifyOtp;  Method ${req.method}; User not found`);
      return res.send({ error: "User not found" });
    }

    let chek_OTP = totp.check(otp, phone + "secret")

    if (!chek_OTP) {
      logger.info(`ERROR: Wrong OTP;  Method ${req.method}; VerifyOTP`);
      return res.send({ error: "Wrong OTP" });
    }

    await User.update({status: "Activied"}, {where: {phone}})

    res.send({data: "Verified"})
  } catch (e) {
    res.send({e});
  }
}

async function register(req, res) {
  try {
    let { error, value } = UserValidation.validate(req.body);

    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method ${req.method}; REGISTER`
      );
      return res.send({ error: error.details[0].message });
    }

    let { fullname, password, phone } = value;

    let chek_user = await User.findOne({
      where: { fullname: fullname },
    });

    if (chek_user) {
      let otp = totp.generate(phone + "secret");
      logger.info(
        `NewOTP: [${otp}];   Method ${req.method}; REGISTER`
      );
      return res.send({ New_Otp: otp });
    }
    let hash_password = bcrypt.hashSync(password, 10);

    value.password = hash_password;
    console.log(phone);

    let userCreate = await User.create(value);
    let otp = totp.generate(phone + "secret");
    console.log(otp);

    logger.info(
      `Method ${req.method}; Verify sendet-[${otp}];  User: ${JSON.stringify(
        userCreate
      )}`
    );
    res.send({ otp });
  } catch (e) {
    console.log(e);
  }
}

async function login(req, res) {
  try {
    let { error, value } = UserLoginValidation.validate(req.body);
    if (error) {
      logger.info(
        `ERROR: ${error.details[0].message};  Method ${req.method}; LOGIN`
      );
      return res.send({ error: error.details[0].message });
    }

    let { fullname, password } = value;

    let check_user = await User.findOne({ where: { fullname: fullname } });

    if (!check_user) {
      {
        logger.info(`ERROR: User not found;  Method ${req.method}; LOGIN`);
        return res.send({ data: "User not found" });
      }
    }
    let user_status = check_user.dataValues.status;

    if (user_status != "Activied") {
      logger.info(
        `ERROR: Please confirm your number.;  Method ${req.method}; LOGIN`
      );
      return res.send({ error: "Please confirm your number." });
    }

    let verify_password = bcrypt.compareSync(password, check_user.password);

    if (!verify_password) {
      logger.info(`ERROR: Wrong password;  Method ${req.method}; LOGIN`);
      return res.send({ error: "Wrong password" });
    }

    let acces_token = access_token(check_user);
    let refreshtoken = refresh_token(check_user);

    let updated = await User.update(
      { refreshToken: refreshtoken },
      { where: { id: check_user.id } }
    );

    logger.info(`Method ${req.method}; LOGIN-ACCES`);
    res.send({ acces_token });
  } catch (e) {
    console.log(e);
  }
}

async function refresh(req, res) {
  try {
    let { id } = req.user;

    let user = await User.findOne({ where: { id: id } });

    if (user.refreshToken != req.token) {
      logger.info(`ERROR;  Method ${req.method}; REFRESH-TOKEN`);
      return res.send({ error });
    }

    let token = access_token(user);
    logger.info(`Method ${req.method}; REFRESH-TOKEN-ACCES`);
    res.send({ acces_token: token });
  } catch (e) {
    console.log(e);
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check_user = await User.findOne({ where: { id } });

    if (!check_user) {
      logger.info(`ERROR: User not found;  Method ${req.method}; DELETE`);
      return res.send({ error: "User not found" });
    }

    await User.destroy({ where: { id } });
    logger.info(`Method ${req.method}; DELETE-ACCES`);
    res.send({ data: "deleted" });
  } catch (e) {
    res.send(e);
  }
}

export { findAll, findOne, register, login, refresh, remove, VerifyOtp };

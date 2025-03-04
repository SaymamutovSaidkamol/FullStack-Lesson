import { client } from "../main.js";
import {
  RegisterValidation,
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from "../validations/user.validation.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { totp } from "otplib";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saymamutovsaidkamol6@gmail.com",
    pass: "qccj cygp ymdn ghrh",
  },
});

totp.options = { step: 1800, digits: 6 };


async function Register(req, res) {
  try {
    let { error, value } = RegisterValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { lastName, firstName, phone, email, password, role } = value;

    const checklastName = validateName(lastName);
    if (!checklastName) {
      return res.status(422).json({ error: "Please enter only letters." });
    }

    const checkFirstName = validateName(firstName);
    if (!checkFirstName) {
      return res.status(422).json({ error: "Please enter only letters." });
    }

    const checkEmail = validateEmail(email);
    if (!checkEmail) {
      return res.status(422).json({
        error: "Email format is incorrect!Format: 'example@example.com'",
      });
    }

    const checkPhone = validatePhoneNumber(phone);
    if (!checkPhone) {
      return res.status(422).json({
        error: "Phone Number format is incorrect!Format: +998900000000",
      });
    }

    const checkPassword = validatePassword(password);
    if (!checkPassword) {
      return res.status(422).json({
        error:
          "Please, USE stronger password for your safety!For Example: #Abcd123$",
      });
    }

    value.role = role;

    let existUser = await client.users.findFirst({ where: { email } });
    let secret = `salom${email}`

    if (existUser) {
      try {
        let otp = totp.generate(secret);
        await transporter.sendMail({
          from: "your-email@example.com",
          to: email,
          subject: "Your OTP Code",
          text: `Your OTP is: ${otp}`,
        });

        return res.status(200).json({ message: "Your registration was successful. Please verify your account.", otp });
      } catch (error) {
        return res.status(404).json({ error: "Email not sent" });
      }
    }

    let hashPassword = bcrypt.hashSync(password, 7);

    value.password = hashPassword;

    let result = await client.users.create({ data: value });

    try {
      let otp = totp.generate(`${"salom"} ${email}`);
      await transporter.sendMail({
        from: "your-email@example.com",
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is: ${otp}`,
      });

      return res.status(200).json({ to: email, otp });
    } catch (error) {}

    res.status(200).json({ message: "Salom" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { Register };

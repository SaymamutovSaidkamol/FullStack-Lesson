import { client } from "../main.js";
import { totp } from "otplib";

async function verify(req, res) {
  try {
    let { email, otp } = req.body;

    let checkUserVerify = await client.users.findFirst({ where: { email } });

    if (!checkUserVerify) {
      return res.status(404).json({ error: "Users Not Found" });
    }

    let secret = `salom${email}`;
    let checkOtp = totp.verify({ token: otp, secret, window: 1 });

    if (!checkOtp) {
      return res.status(400).json({ error: "OTP error occurred." });
    }

    let ActiveUser = await client.users.update({
      where: { id: checkUserVerify.id },
      data: { status: "ACTIVE" },
    });

    res
      .status(200)
      .json({ message: "Your account has been successfully activated." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { verify };

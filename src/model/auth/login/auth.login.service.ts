import { UserModel } from "../../user/user.model.js";
import type { ILoginData } from "./auth.register.interface.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'




export const loginService = async(payLoad: ILoginData) => {
    const { email, password } = payLoad;

    const user = await UserModel.findOne({ email });

    if (!user) throw new Error("user not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET_TOKEN! as string,
      { expiresIn: "1d" }
    );
    return { token, user };
  }

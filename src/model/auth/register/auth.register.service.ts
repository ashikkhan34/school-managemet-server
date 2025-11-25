import { UserModel } from "../../user/user.model.js";
import type { IRegisterUser } from "./auth.register.interface.js";
import bcrypt from 'bcrypt'




  export const registerService = async(payload: IRegisterUser) => {
    const { name, email, password, role } = payload;

    // Security: prevent creating admin from register
    if (role === "admin") throw new Error("Cannot create admin via register");

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) throw new Error("user already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: role || "student",
    });
    return newUser;
  }


import type { IUser } from "./user.interface.js";
import bcrypt from 'bcrypt'
import { UserModel } from "./user.model.js";


const createUserService = async (payload:IUser)=>{
    const hashedPassword = await bcrypt.hash(payload.password,10)
    payload.password = hashedPassword;
    const createUser = await UserModel.create(payload)
    return createUser;

}

const getAllUserService = async()=>{
    return await UserModel.find()
}


const getAUserService = async(id:string)=>{
    return await UserModel.findById(id)
}

const updateUserService = async(id:string,payload:Partial<IUser>) =>{
    return await UserModel.findByIdAndUpdate(id,payload,{new:true})
}

const deleteAUserService = async(id:string)=>{
    return await UserModel.findByIdAndDelete(id)
}

export const userService = {
    createUserService,
    getAllUserService,
    getAUserService,
    updateUserService,
    deleteAUserService
}
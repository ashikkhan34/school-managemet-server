import type { NextFunction, Request, Response } from "express";
import { userService } from "./user.service.js";
import AppError from "../helper/AppError.js";


const createUserController = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const createUser = await userService.createUserService(req.body)
        res.status(201).json({
            success:true,
            message:"user created successful",
            data:createUser
        })
    } catch (error:any) {
        next(new AppError(
            error.statusCode || 500,
            error.message || "Internal server error"
        ))
    }
}

const getAllUserController = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const allUser = await userService.getAllUserService()
        if(!allUser) return next(new AppError(404,"User not found"))
            res.status(200).json({
        success:true,
        message:"get all user data",
        data:allUser
        })
    }catch(err:any){
        next(
            new AppError(
                err.statusCode || 500,
                err.message || "Internal server error"
            )
        )
    }
}

const getAUserController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        if(!id) return next(new AppError(404,"id is required"))
        const aUser = await userService.getAUserService(id)
       if(!aUser) return next(new AppError(404,"User not found"))
        res.status(200).json({
    message:"get a user data",
    success:true,
    data:aUser
        })

    } catch (err:any) {
        next(
            new AppError(
                err.statusCode || 500,
                err.message || "internal server error"
            )
        )
    }
}

const updateUserController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        if(!id) return next(new AppError(404,"id is required"))
        const aUser = await userService.updateUserService(id,req.body)
       if(!aUser) return next(new AppError(404,"User not found"))
        res.status(200).json({
    message:"user data update successful",
    success:true,
    data:aUser
        })

    } catch (err:any) {
        next(
            new AppError(
                err.statusCode || 500,
                err.message || "internal server error"
            )
        )
    }
}

const deleteUserController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        if(!id) return next(new AppError(404,"id is required"))
        const aUser = await userService.deleteAUserService(id)
       if(!aUser) return next(new AppError(404,"User not found"))
        res.status(200).json({
    message:"delete user data successful",
    success:true,
    data:aUser
        })

    } catch (err:any) {
        next(
            new AppError(
                err.statusCode || 500,
                err.message || "internal server error"
            )
        )
    }
}


export const userController = {
    createUserController,
    getAUserController,
    getAllUserController,
    updateUserController,
    deleteUserController
}
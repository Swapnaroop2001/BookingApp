import express from 'express';
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js';

const router = express.Router();

//Registration
router.post('/registration', async (req, res, next) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        next(error)
    }
})


//Login
router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return next(createError(404, 'User not found'))
        }
        const Passwordcheck= bcrypt.compareSync(req.body.password, user.password);
        if (!Passwordcheck) {
            return next(createError(400,"Wrong password or username"))
        }
        const token=jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT)
        const{password,isAdmin,...otherDetails}=user.toJSON();


        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({...otherDetails})
    } catch (error) {
        next(error)
    }
})

export default router;
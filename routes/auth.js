import express from 'express';
import User from '../models/User.js'
import bcrypt from 'bcryptjs'

const router = express.Router();


router.post('/registration', async (req, res,next) => {
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

export default router;
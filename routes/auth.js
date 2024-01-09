import express from 'express';
import User from '../models/User.js'

const router = express.Router();


router.post('/', async (req, res,next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        next(error)
    }
})

router.get('/registration', (req, res) => {
    res.send("Welcome to auth registration endpoint");
})
export default router;
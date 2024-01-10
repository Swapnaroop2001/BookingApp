import express from 'express';
import User from '../models/User.js'
import { verifyAdmin, verifyToken,verifyUser } from '../utils/verifyTokens.js';

const router = express.Router();

router.get("/checkauth",verifyToken,(req,res,next)=>{
    res.send("You are logged in123!")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("You are logged in123 yu can delete your account!")
})


//Edit
router.put('/:id',verifyUser, async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//getById
router.get('/:id',verifyUser, async (req, res) => {
    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//getAll
router.get('/',verifyAdmin, async (req, res, next) => {
    try {
        const allUsers= await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error)
    }
})

//Delete
router.delete('/:id',verifyUser, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})




export default router;
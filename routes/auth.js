import express from 'express';

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Welcome to auth endpoint");
})
router.get('/registration',(req,res)=>{
    res.send("Welcome to auth registration endpoint");
})
export default router;
import express from 'express';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/verifyTokens.js';


const router = express.Router();

//CreateNew
router.post('/',async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Edit
router.put('/:id',async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

//getById
router.get('/find/:id', async (req, res) => {
    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})
//getcitycount
router.get('/countbycity', async (req, res) => {
    const cities=req.query.cities.split(',')
    try {
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error)
    }
})
//getcounttype
router.get('/countByType', async (req, res) => {
    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

//getAll
router.get('/', async (req, res, next) => {
    try {
        const Allhotel = await Hotel.find();
        res.status(200).json(Allhotel)
    } catch (error) {
        next(error)
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router;
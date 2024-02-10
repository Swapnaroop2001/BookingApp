import express from 'express';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/verifyTokens.js';
import Room from "../models/Room.js";


const router = express.Router();

//CreateNew
router.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Edit
router.put('/:id', async (req, res) => {
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
router.get('/countByCity', async (req, res, next) => {
    const cities = req.query.cities?.split(",");
    if (cities) {
        try {
            const list = await Promise.all(
                cities?.map((city) => {
                    return Hotel.countDocuments({ city: city });
                })
            );
            return res.status(200).json(list);
        } catch (err) {
            next(err);
        }
    }
})
//getcounttype
router.get('/countByType', async (req, res) => {
    try {
        const hotelcount = await Hotel.countDocuments({ type: "hotel" })
        const apartmentcount = await Hotel.countDocuments({ type: "apartment" })
        const resortcount = await Hotel.countDocuments({ type: "resort" })
        const villacount = await Hotel.countDocuments({ type: "villa" })
        const cabincount = await Hotel.countDocuments({ type: "cabin" })
        res.status(200).json([
            { type: "hotel", count: hotelcount },
            { type: "apartment", count: apartmentcount },
            { type: "resort", count: resortcount },
            { type: "villa", count: villacount },
            { type: "cabin", count: cabincount },
        ]);
    } catch (error) {
        res.status(500).json(error)
    }
})

//getAll
router.get('/', async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find().limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
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

//get room
router.get('/room/:id', async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
})


export default router;
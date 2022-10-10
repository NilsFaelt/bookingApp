import express from "express";
import Hotels from "../models/Hotels.js";
const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newHotel = new Hotels(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get
router.get("/:id", async (req, res, next) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get all
router.get("/", async (req, res, next) => {
  try {
    const allHotels = await Hotels.findById("s");
    res.status(200).json(allHotels);
  } catch (err) {
    return next(err);
  }
});
export default router;

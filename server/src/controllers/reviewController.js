const mongoose = require("mongoose");
const reviewModel = require("../models/reviewModel");

const Valid = require("../utils/validator");

// Add Review
const addReview = async =>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error", error });
    }
}
import mongoose from "mongoose";

const {Schema} = mongoose

const {serviceSchema} = require("./Service")

const carSchema = new Schema({
    name: {
        trype: {
            type: String,
            require: true
        }
    },
    brand:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true,
    },
    model:{
        type: String,
        require: true,
    },
    budget:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    services:{
        trype:[serviceSchema],
    }
},{timestamps: true});

const Car = mongoose.model("Car", carSchema);

export default Car; 
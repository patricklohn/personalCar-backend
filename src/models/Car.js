import mongoose from "mongoose";

const {Schema} = mongoose

import {serviceSchema} from "./Service.js";

const carSchema = new Schema({
    name: {
        type: {
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
        type:[serviceSchema],
    }
},{timestamps: true});

const Car = mongoose.model("Car", carSchema);

export default Car; 
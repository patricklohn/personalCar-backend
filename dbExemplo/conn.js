const mongoose = require("mongoose")

async function main(){
    try {
        await mongoose.connect(
            "mongodb+srv://LinkMongoDB",
        );
        console.log("Banco de dados conectado!!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main;
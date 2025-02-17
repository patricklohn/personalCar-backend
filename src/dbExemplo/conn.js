import mongoose from "mongoose";

async function main(){
    try {
        await mongoose.connect(
            "",
        );
        console.log("Banco de dados conectado!!")
    } catch (error) {
        console.log(error)
    }
}

export default main
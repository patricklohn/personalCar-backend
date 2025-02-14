const express = require("express")
const cors = require("cors")
const app = express(); 

const port = 3000;

app.use(cors())
app.use(express.json())

app.listen(port, function(){
    console.log("Servidor Online!!")
})
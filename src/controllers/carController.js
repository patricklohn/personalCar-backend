import Car from "../models/Car.js"

//functions 

const checkCarBudget = function(budget, services){

    const priceSum = services.reduce((sum,service) => sum + service.price, 0)
    if(priceSum > budget){
        return false
    }
    return true;
}

async function createCar(req,res){
    try {
        const car = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            model: req.body.model,
            budget: req.body.budget,
            image: req.body.image,
            services: req.body.services
        }

        // budget < valor dos serviços 

        if(car.services && !checkCarBudget(car.budget, car.services)){
            res.status(406).json({menssage:"buget é menor services price"})
            return
        }

        const carCreate = await Car.create(car);
        console.log(car)
        res.status(201).json({carCreate, menssage:"Criado cadastro com sucesso!"})


    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: "Internal error Server!"})
    }
}

async function getAllCar(req,res){
    try {
        const carAll = await Car.find();
        res.status(200).json(carAll);
    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: "Internal Error Server!"})
    }
}

async function getCar(req,res){
    try {
        const id = req.params.id; 
        const carGet = await Car.findById(id);

        if(!carGet){
            res.status(404).json({message:"Não foi encontrado nenhum Carro!!"})
            return 
        }

        res.status(200).json(carGet);

    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: "Internal Error Server!"})
    }
}

async function deleteCar(req,res){
    try {
        const id = req.params.id;
        const deleteCar = await Car.findByIdAndDelete(id);

        if(!carGet){
            res.status(404).json({message:"Não foi encontrado nenhum Carro!!"})
            return
        }

        res.status(200).json({message: "Car deletado com sucesso", deleteCar})
    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: "Internal Error Server!"})
    }
}

async function updateCar(req,res){
    try {
        const id = req.params.id;
        const car = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            model: req.body.model,
            budget: req.body.budget,
            image: req.body.image,
            services: req.body.services
        }

        // budget < valor dos serviços 

        if(car.services && !checkCarBudget(car.budget, car.services)){
            res.status(406).json({message:"buget é menor services price"})
            return
        }

        const carUpdate = await Car.findByIdAndUpdate(id, car);
        res.status(200).json({carUpdate, menssage: "Dados atualizados!"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: "Internal Error Server!"})
    }
}

export default {
    createCar,
    getAllCar,
    getCar,
    deleteCar,
    updateCar
}
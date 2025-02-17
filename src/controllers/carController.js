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
            res.status(406).json({message:"buget é menor services price"})
            return
        }

        const carCreate = await Car.create(car);

        res.status(201).json({carCreate, menssage:"Criado cadastro com sucesso!"})


    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: "Internal error Server!"})
    }
}

export default {
    createCar,
}
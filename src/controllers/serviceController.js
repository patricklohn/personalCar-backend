import { Service as ServiceModel } from "../models/Service.js";

/*Module.exports 
const serviceCOntroller={
    criar as funções aqui dentro
}
 */

async function createService(req,res){
    try {
        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        };

        const response = await ServiceModel.create(service);
        res.status(201).json({response, mensage: "Serviço criado com sucesso!"})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal error Server!"});
    }
}

async function getAllService(req,res){
    try {
        const allService = await ServiceModel.find()
        res.status(200).json(allService)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal error Server!"});
    }
}

//module.exports = serviceController;

export default {
    createService,
    getAllService
};

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

async function getService(req,res){
    try {
        const id = req.params.id;
        const service = await ServiceModel.findById(id)

        if(!service){
            res.status(404).json({menssage: "Serviço não encontrado."})
            return
        }

        res.status(200).json(service);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal error Server!"});
    }
}

async function deleteService(req,res){
    try {
        const id = req.params.id;
        const service = await ServiceModel.findById(id)

        if(!service){
            res.status(404).json({menssage: "Serviço não encontrado."})
            return
        }

        const serviceDelete = await ServiceModel.findByIdAndDelete(id);
        res.status(200).json(serviceDelete);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal error Server!"});
    }
}

async function editService(req,res){
    try {
        const id = req.params.id; 
        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        };

        if(!service){
            res.status(404).json({menssage: "Serviço não encontrado."})
            return
        }

        const serviceUpdate = await ServiceModel.findByIdAndUpdate(id, service); 
        res.status(200).json({message:"Cadastro alterado com sucesso",serviceUpdate});

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal error Server!"});
    }
}

//module.exports = serviceController;

export default {
    createService,
    getAllService,
    getService,
    deleteService,
    editService
};


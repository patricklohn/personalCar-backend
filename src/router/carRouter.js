import {Router} from "express";
import carController from "../controllers/carController.js";

const carRouter = Router();

carRouter.post("/carCreate", carController.createCar);
carRouter.get("/carGet", carController.getAllCar);
carRouter.get("/carGet/:id", carController.getCar);
carRouter.delete("/carGet/:id", carController.deleteCar);
carRouter.put("/carGet/:id", carController.updateCar);

export default carRouter;
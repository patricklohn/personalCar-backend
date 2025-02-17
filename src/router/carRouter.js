import {Router} from "express";
import carController from "../controllers/carController.js";

const carRouter = Router();

carRouter.post("/carCreate", carController.createCar);

export default carRouter;
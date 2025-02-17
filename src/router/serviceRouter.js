import {Router} from "express";

import serviceController from "../controllers/serviceController.js";

const serviceRouter = Router();

//router.route("/services").post((req,res) => serviceController.create(req,res));
serviceRouter.post("/services", serviceController.createService);
serviceRouter.get("/services", serviceController.getAllService);

//

export default serviceRouter;
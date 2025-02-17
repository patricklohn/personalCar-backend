import { Router } from "express";
import serviceRouter from "./serviceRouter.js";
import carRouter from "./carRouter.js";

const router = Router();

router.use("/", serviceRouter)
router.use("/", carRouter)

export default router;

import { Router } from "express";
import serviceRouter from "./serviceRouter.js";

const router = Router();

router.use("/", serviceRouter)

export default router;

import express from "express"; 
import cors from "cors"; 
import main from "./db/conn.js"
import router from "./router/routes.js";

// comunicação com banco
main();

const app = express();
app.use(cors());
app.use(express.json())

//Rotas
app.use('/api', router);

export default app;
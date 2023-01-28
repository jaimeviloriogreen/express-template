import express from "express";
import router from "../routers/mainRouter.js";

export default class{
    constructor(){
        this.app = express();
        this.port = 4500 || process.env.PORT;

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }
    middlewares(){
        this.app.use(express.static("src/views"));
    }

    routes(){
         this.app.use(router);
    }
    listen(){
        this.app.listen(this.port, ()=> console.log(`Runinng on port ${this.port}.`));
    }
}
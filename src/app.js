import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:dev123@cluster0.kqq0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middleware();
        this.routes();
    }

    middleware(){
        //Comando usado para usar comunicação em Json
        this.server.use(express.json());
    }

    routes(){
        //Comando usado acima para importa
        this.server.use(routes);
    }

}

export default new App().server;
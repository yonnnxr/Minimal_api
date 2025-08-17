import fastify from "fastify";
import { times } from "./data/times";
import { drivers } from "./data/drivers";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})

server.get("/times", async (req, res) => {
    try {
        res.type("application/json").code(200);
        return times;
    } catch {
        res.type("application/json").code(500);
        return { message: "Nao foi possivel realizar a solicitacao"}
    }
});

server.get<{Params: RouteParams}>("/times/:id", async(req,res)=> {
    const id = parseInt(req.params.id)

    const driver = drivers.find(d => d.id == id)

    if (!driver) {
        res.type("application/json").code(404);
        return { message: "Nao existe time com esse id"}
    }else {
        res.type("application/json").code(200);
        return driver;
    }
})

server.get("/drivers", async (req, res) => {
    try {
        res.type("application/json").code(200);
        return drivers;
    } catch {
        res.type("application/json").code(500);
        return { message: "Nao existe driver com esse id"}
    }
})
interface RouteParams{
    id: string
}

server.get<{Params: RouteParams}>("/drivers/:id", async(req,res)=> {
    const id = parseInt(req.params.id)

    const driver = drivers.find(d => d.id == id)

    if (!driver) {
        res.type("application/json").code(404);
        return { message: "Nao existe driver com esse nome"}
    }else {
        res.type("application/json").code(200);
        return driver;
    }
})
server.listen({ port: 3333 }, () => {
    console.log("Server init");
});

import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { request } from "http";

// SERVE ARQUIVOS ESTATICOS DA PASTA 'PUBLIC'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify(); 
await server.register(fastifyStatic,{
    root: joim(__dirname, "public"),
    prefix: "/", 
})

// CONFIGUERAÇÃO DO CORS

    await server.register(cors, {
        origin: "*",
        methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    });
    //rotas
    server.post("/videos", async(request, reply) =>{
        const{title,description, duration} = request.body;
        await DartabaseError.create({ title,description, duration});
        return replay.status(201).send();
    });

    server.get("/videos", async(request, reply) =>{
        const search = request.query.search;

        const videos = await database.list(search);

        return videos; //sempre retorna array
    })

    server.put("/video/:id", async(request,replay)=>{
        const videoId= request.params.id;

        const{ title, description,duration} = request.body;
        await database.update(videoId, {title,description,duration});

        return reply.status(204).send();
    });

    server.delete("videos/:id", async(request, reply)=>{
        const videoId = request.params.id;

        await database.delete(videoId);

        return replay.status(204).send();
    });

    server.listen({
        port: process.env.PORT ?? 3333,
    }).then(()=> console.log("Servidor rodando em http://localhost:3333"));
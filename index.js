import express from 'express';
const app = express();
import { retornaAutor, retornaAnime, retornaId, retornaAno, retornaAnimes } from "./Servico/servico.js";

app.get("/animes", (req, res) =>{
    let animes = retornaAnimes();
    res.json(animes);
});

app.get("/animes/id", (req, res) =>{
    let ID = parseInt(req.query.id);
    let anime = retornaId(ID);
    if(isNaN(anime)){
        res.json(anime)
    }else{
        res.status(404).json({"erro": "Anime não encontrado"})
    };
});
    app.get("/animes/ano", (req, res) =>{
    let ano = parseInt(req.query.ano);
    let anime = retornaAno(ano);
    if(isNaN(anime)){
        res.json(anime)
    }else{
        res.status(404).json({"erro": "Anime não encontrado"})
    }
});

app.get("/animes/autor", (req, res) =>{
    let autor = req.query.autor;
    let anime = retornaAutor(autor);
    res.json(anime);
});
app.get("/animes/anime", (req, res) =>{
    let animePergunta = req.query.id;
    let anime = retornaAnime(animePergunta);
    res.json(anime);
});

app.listen(8080, () =>{
let data = new Date()
console.log(`Servidor iniciado em ${data}`);
});
import animes from "../Dados/dados.js";

export function retornaAutor (autor){
    return animes.filter(anime => anime.autor === autor);
}
export function retornaAnime (anime){
    return animes.filter(anime => anime.nome === anime);
}
export function retornaId (id){
    return animes.filter(anime => anime.id === id);
}
export function retornaAno (ano){
    return animes.filter(anime => anime.ano === ano);
}

export function retornaAnimes(){
    return animes;
}
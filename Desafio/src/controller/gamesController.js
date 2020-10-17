const games = require("../model/games.json");

const atualizaComPut = (request, response) => {
    const jogoAtualizado = request.body;
    const id = parseInt(request.params.id);
    
    const jogoId = games.map(game => game.id);

    const atualizaId = jogoId.indexOf(id);

    const jogoIdAtualizado = {id, ...jogoAtualizado}
    games.splice(atualizaId, 1, jogoIdAtualizado);
 
    response.status(200).send(games.find(game => game.id === id));
    console.log(games);
}

const atualizaComPatch  = (request, response) => {
    const jogoAtualizado = request.body
    const id = parseInt(request.params.id)
    const jogoParaAtualizar = games.find(game => game.id == id)
    

    for(key in jogoAtualizado){
        jogoParaAtualizar[key] = jogoAtualizado[key]
    }

    response.status(200).send(jogoParaAtualizar)
}

module.exports = {
    atualizaComPut,
    atualizaComPatch
}
console.log("trabalhando com listas");
// const salavador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array(
    
'Salvador',
'São Paulo', 
'Rio de Janeiro'

)
listaDeDestinos.push('curitiba'); //adicionando itens na lista
console.log ("destinos possiveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],  listaDeDestinos[0]);
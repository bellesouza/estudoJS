console.log("trabalhando com condicionais");
const listaDeDestinos = new Array(

    'Salvador',
    'São Paulo',
    'Rio de Janeiro'

)
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("destinos possiveis");
console.log(listaDeDestinos);

// if ( idadeComprador >= 18){
//     console.log ("comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item

// }
// else{
//     //a pessoa é maior de idade
//     if(estaacompanhada){
//         console.log ("comprador esta acompanhado");
//     listaDeDestinos.splice(1,1);


//     }else{
//         console.log("nao é maior de idade e nao posso vender");
// }

//     }

if (                                      
    idadeComprador >= 18 || estaAcompanhada == true
    ) {
    console.log("Boa viagem!!!!");
    listaDeDestinos.splice(2, 1); //removendo item
 }
  else {
        console.log("nao é maior de idade e nao posso vender");
    }

    console.log ("Embarque: \n \n ")
    if (idadeComprador >= 18 && temPassagemComprada) {
        console.log ("Boa viagem");
    } else{
        console.log ("voce nao pode embarcar...");
    }


console.log(listaDeDestinos);

// console.log( idadeComprador >18);
// console.log(idadeComprador < 18);
// console.log( idadeComprador <=18);
// console.log( idadeComprador >=18);
// console.log( idadeComprador ==18);
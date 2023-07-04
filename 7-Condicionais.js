console.log("trabalhando com condicionais");
const listaDeDestinos = new Array(

    'Salvador',
    'São Paulo',
    'Rio de Janeiro'

)
const idadeComprador = 17;
const estaacompanhada = true;

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

if (                                      //arrumar erro
    idadeComprador >= 18
    estaacompanhada == true
    ) {
    console.log("comprador maior de idade");
    listaDeDestinos.splice(2, 1); //removendo item

}
else {
    //a pessoa é maior de idade
    else if () {
        console.log("comprador esta acompanhado");
        listaDeDestinos.splice(2, 1);


    } else {
        console.log("nao é maior de idade e nao posso vender");
    }

}


console.log(listaDeDestinos);

// console.log( idadeComprador >18);
// console.log(idadeComprador < 18);
// console.log( idadeComprador <=18);
// console.log( idadeComprador >=18);
// console.log( idadeComprador ==18);
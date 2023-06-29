console.log("trabalhando com condicionais");
const listaDeDestinos = new Array(
    
'Salvador',
'São Paulo', 
'Rio de Janeiro'

)
const idadeComprador = 21;
console.log ("destinos possiveis");

if ( idadeComprador >= 18){
    console.log ("comprador maior de idade");
    listaDeDestinos.splice(1,1);

}
else{

console.log("nao é maior de idade e nao posso vender");
}


console.log(listaDeDestinos);

console.log( idadeComprador >18);
console.log(idadeComprador < 18);
console.log( idadeComprador <=18);
console.log( idadeComprador >=18);
console.log( idadeComprador ==18);
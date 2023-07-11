console.log(" \n trabalhando com condicionais");
const listaDeDestinos = new Array(

    'Salvador',
    'São Paulo',
    'Rio de Janeiro'

)
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino ="Salvador";

console.log(" \n destinos possiveis");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

// transformando a lista de destinos em um contador de 0 a 3

let contador = 0; // let = variaveis que podem ser atualizadas
let destinoExiste = false;
while(contador <3 ){ // enquanto contador for menor que 3 = tamanho da lista...
     if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
     

// anteriormente........
// console.log (listaDeDestinos [contador]) ;   // fazer o que estiver dentro dos{} = blocos
//cria-se um loop, o computador verifica e faz essa ação novamente sem parar
// entao Se não queremos que o contador tenha esse comportamento, precisamos coletar o valor dentro de contador e somar 1 e realizar uma reatribuição. Ao executarmos novamente o código teremos:
   contador +=1;
     }
   }
console.log("destino existe:" , destinoExiste);


if (podeComprar && destinoExiste) {
   console.log ("boa viagem")
}else {
   console.log ("desculpe, tivemos um erro :(")
}

for(let i = 0 ; i <3 ; i++){
   if(listaDeDestinos[contador] == destino){
       destinoExiste = true;
       }
}
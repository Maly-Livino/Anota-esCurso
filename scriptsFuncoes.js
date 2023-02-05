/*
// ALterando Endereço
function Autenticar (){
let usuario = prompt('Digite o seu usuario:');
let senha = prompt('Digite sua senha ');

if (usuario == 'admin' && senha == '123'){
    alert('Dados Confirmados!');
}else{
    alert('Dados incorretos!');
}
}

Autenticar();

*/

//--------------------------------------------------------------

/*


1. Crie uma função que leia a distancia percorrida e o consumo do veiculo. Em seguida calcule quantos lts de gasolina o veiculo gastou na viagem.

function Pecorrido(){
    let distancia = prompt('Digite quantos quilometros o carro pecorre:');
    let gasolina = prompt('Digite o consumo do Veiculo:');

    consumo = distancia/ gasolina

    alert(`O carro gastara ${consumo.toFixed(2)} Lts`);

}

Pecorrido();

*/


// --------------------------------------------------------------------------

/*
2. Crie uma função que calcula a velocidade média de um veiculo. Para isso leia a distancia e o tempo da viagem.

function VelocidadeMedia(){

    let distancia = prompt('Digite a distancia pecorrida:');
    let tempo = prompt ('Digite o tempo da viagem:');

    velocidade = distancia / tempo

    alert(`A velocidade média é de ${velocidade.toFixed(2)} Km/H`);
}

VelocidadeMedia();
*/

//-------------------------------------------------------------------------
/*
3. Crie uma função que leia base maior, base menor, altura. E em seguida calcule a área de um trapézio. 
area = (base maior + base menor) * altura / 2


function AreaTrapezio(){
    
    let baseMaior = prompt('Digite a Base Maior do Trapezio:');
    let baseMenor = prompt ('Digite a Base Menor do Trapezio:');
    let altura = prompt ('Digite a altura do Trapezio:');

    area = ((baseMaior + baseMenor) * altura)/2

    alert(`A área do Trapezio é ${area.toFixed(2)}`);
}
 AreaTrapezio();

*/

//----------------------------------------------------------------------------
/*
4. Crie uma função que imprima uma sequencia de números de 0 a 50. Utilize o laço for

function Sequencia (){
    for(let i = 0; i <= 50; i++) {
        console.log(i);
    }
}

Sequencia();
*/

//----------------------------------------------------------------------------

//Criando a função com parametros 
/*
function calcConsumo(distancia, consumo){
      let consumoTotal = distancia / consumo;
      alert(`Consumo Total = ${consumoTotal}Lts`);

}

calcConsumo(240,12);
*/




/*

function velocidadeMedia (distancia, tempo){
    let velocidade = distancia / tempo ; 
    alert(`A velocidade media é de ${velocidade} km/h`);
}

velocidadeMedia(200,2);
*/

//---------------------------------------------------------------------------
/* 
function areaTrapezio(baseMaior,baseMenor, altura){
    let area = ((baseMaior + baseMenor) * altura)/2
    alert(`A area do trapezio é ${area}`);
 }

areaTrapezio(12,12,6);
*/

//----------------------------------------------------------------------------

//Escreva uma função que recebe um nome como parâmetro e imprima uma mensagem “Olá” + nome
/*
function Saudaçao(nome){
    console.log("Olá,"+ nome);
 }

 Saudaçao("Augusto");
/*
 //

 //---------------------------------------------------------------------

 //Escreva uma função que recebe um lado como parâmetro, calcule a área desse quadrado e exiba no console. 

 /*
 function areaQuadrado (lado){
  let area = lado**2
  alert(`A area do quadrado é: ${area}`);
 }

 areaQuadrado(6);
*/

//---------------------------------------------------------------------------

//Escreva uma função que recebe dois parâmetros, base e altura. Em seguida calcula a área desse triângulo e a exiba na tela.
/*
function areaTriangulo(base,altura){
    let area = (base*altura)/2
    alert(`A area do triangulo é: ${area}`);
}

areaTriangulo(12,10);
*/

//----------------------------------------------------------------------------

//Escreva uma função que recebe um número e imprima todos os inteiros de 0 até este número recebido.
/*

function numerosInteiros(Number){
    for(let i = 0; i <= Number; i++) {
        console.log(i);

}
}

numerosInteiros(100);
*/

//----------------------------------------------------------------------------

//Escreva uma função que recebe um número como parâmetros e imprima todos os pares de 0 até esse número.
/*
function numerosPares(Number){

var contador = 0;

while (contador <= Number){
    contador = contador + 2
 
    console.log(contador);
}
}
 
numerosPares(96);
*/

//---------------------------------------------------------------------------

//Criue uma função que recebe 3 parametros (2 inteiros e um real) em seguida calcule e mostre.
//a. O produto (multiplicação) do dobro do primeiro com a metade do segundo
//b. A soma do triplo do primeiro com o terceiro
//c. O terceiro ao cubo

/*
function calculo (primeiro,segundo,terceiro){
    let resultado1 = (primeiro*2) * (segundo/2);
    let resultado2 = (primeiro*3) + terceiro;
    let resultado3 = terceiro**3;
    alert(resultado1);
    alert(resultado2);
    alert(resultado3);
}
calculo(10,5,3.5);
*/

//----------------------------------------------------------------------------

//Criando uma função com retorno
/*
function calculoConsumo(distancia,consumo){
    let consumoTotal = distancia / consumo;
    return consumoTotal;

}

let consumoViagem = calculoConsumo (240,12);
alert(consumoViagem)
*/

//----------------------------------------------------------------------------

//Crie uma função que recebe duas notas por parâmetro e retorne aprovado se a média for maior que 6 e recuperação senão.
/*
function mediaNotas(nota1, nota2){
    let media = (nota1+nota2)/2

    if (media > 6){
        return 'Aprovado';
    }else{
        return 'Recuperação';
    }
    
}

let resultadoMedia = mediaNotas(6,2);
alert(resultadoMedia);
*/

//----------------------------------------------------------------------------

//Crie uma função que recebe três números como parâmetro e retorne o maior deles 
/*
function numeroCompararacao (valor1, valor2, valor3){
    if (valor1 > valor2 &&  valor1 > valor3){
        return valor1;
    }else if (valor2 > valor1 && valor2 > valor3){
        return valor2;
    }else{
        return valor3;
    }
}

let numeroMaior = numeroCompararacao(8,3,4)
alert(numeroMaior);
*/

//----------------------------------------------------------------------------

//Crie uma função que recebe a idade e um booleano indicando se o usuário tem cnh. Se o usuário possuir cnh e for maior de idade retorne “voce pode dirigir” senão, retorne "você não pode dirigir.

/*
function Habilitado(idade,cnh){
  if (idade >= 18 && cnh == true){
    return 'Pode Dirigir'
  }else{
    return 'Não pode Dirigir'
  }
}

let apvHabilitado = Habilitado(18, true);
alert(apvHabilitado);
*/

//---------------------------------------------------------------------------


//CRIANDO UMA ARROW FUNCTION
/*
const areaQuadrado = (lado) => {
    return lado**2;
}

alert(areaQuadrado(5));
*/

//----------------------------------------------------------------------------

const areaTriangulo = (base,altura) =>{
    let area
}
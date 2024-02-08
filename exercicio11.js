/*Soma dos Elementos: Escreva um programa que calcula a soma de todos os elementos em um vetor de números inteiros.

Maior e Menor Elemento: Escreva um programa que encontre o maior e o menor elemento em um vetor de números inteiros.

Média dos Elementos: Escreva um programa que calcula a média dos elementos em um vetor de números inteiros.

Contagem de Elementos Pares: Escreva um programa que conta quantos elementos pares existem em um vetor de números inteiros.

Inversão do Vetor: Escreva um programa que inverta a ordem dos elementos em um vetor.

Ordenação do Vetor: Escreva um programa que ordene os elementos em um vetor em ordem crescente ou decrescente.

Remoção de Elemento: Escreva um programa que remova um elemento específico de um vetor.

Intercalação de Vetores: Escreva um programa que intercale os elementos de dois vetores em um terceiro vetor.

Verificação de Elemento Único: Escreva um programa que verifique se um determinado elemento existe em um vetor e, se existir, exiba a posição em que ele está.

Combinação de Vetores: Escreva um programa que combine dois vetores em um terceiro vetor, alternando os elementos de cada vetor.*/

// TOPICO1
/*var num;
var  soma =0; 
num = [1, 2, 3, 5, 4, 7, 8, 5, 6]
for (let i = 0; i < num.length; i++)
soma += num[i];
console.log(soma) */

/*//topico2: Maior e Menor Elemento: Escreva um programa que encontre o maior e o menor elemento em um vetor de números inteiros.
function encontrarPosicaoMaiorMenor(vetor) {
    let posicaoMaior = 0;
    let posicaoMenor = 0;

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[posicaoMaior]) {
            posicaoMaior = i;
        }

        if (vetor[i] < vetor[posicaoMenor]) {
            posicaoMenor = i;
        }
    }

    return { posicaoMaior, posicaoMenor };
}

// Exemplo de uso
let vetor = [10, 5, 3, 8, 15, 2, 9];
let { posicaoMaior, posicaoMenor } = encontrarPosicaoMaiorMenor(vetor);

console.log("Posição do maior valor:", posicaoMaior); // Deve retornar 4 (posição do valor 15)
console.log("Posição do menor valor:", posicaoMenor); // Deve retornar 5 (posição do valor 2)*/

// EXERCICIO

/* function encontrarMaioreMenorValor(vetor) {
    let maiorPosicao = 0;
    let menorPosicao = 0;

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[maiorPosicao]) {
            maiorPosicao = i;
        }

        if (vetor[i] < vetor[menorPosicao]) {
            menorPosicao = i;
        }
    }

    return { maiorPosicao, menorPosicao };
}

let vet = [10,85,69,33,1,5,2,3,9,7,203]
let { maiorPosicao, menorPosicao } = encontrarMaioreMenorValor(vet);

console.log("A maior posição é: " + maiorPosicao)
console.log("A menor posição é: " + menorPosicao)*/


/* function maiorMenorPosição(vetor) {
    let maior = 0
    let menor = 0

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[maior]) {
            maior = i;
        }
            if (vetor[i] < vetor[menor]) {
                menor = i;
            }
        }

    return { maior, menor };
}

let vetor = [50, 5, 4, 3, 109, 87]
let { maior, menor } = maiorMenorPosição(vetor);

console.log("A maior posição é: " + maior)
console.log("A menor posição é: " + menor)
*/

// Média dos Elementos: Escreva um programa que calcula a média dos elementos em um vetor de números inteiros.

/*var num = [1, 2, 3, 5, 4, 7, 8, 5, 6];
var soma = 0;

// Somando todos os elementos do array
for (let i = 0; i < num.length; i++) {
    soma += num[i];
}

// Calculando a média corretamente
var media = soma / num.length;
console.log(media);

*/

/*
// Contagem de Elementos Pares: Escreva um programa que conta quantos elementos pares existem em um vetor de números inteiros.

var vet;
vet = [1,1,2,2,3,5,6,4,8,9];
for(a=0; a< vet.length; a++){
    if(vet[a] % 2 ===0){
        console.log(vet[a]);
    }
}

*/

//Inversão do Vetor: Escreva um programa que inverta a ordem dos elementos em um vetor.

function inverterVetor (vetor) {
    let novoVetor = [];
    for ( let a = vetor.length -1; a >=0; a--) {
        novoVetor.push(vetor[a]);
    }
    return novoVetor;
}

let vetorOriginal = [1,2,3,4,5,6,7,8,9];
let vetorInvertido = inverterVetor(vetorOriginal);
console.log("O seu vetor original é: " + vetorOriginal)
console.log("O vetor invertido: " + vetorInvertido)
// Média dos Elementos: Escreva um programa que calcula a média dos elementos em um vetor de números inteiros.

var num = [1, 2, 3, 4, 5, 6, 7, 8];
var soma = 0;

for (let i = 0; i < num.length; i++) {
    soma += num[i];
}

var media = soma / num.length;
console.log(media);

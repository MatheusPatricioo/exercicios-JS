var repeticoes;

repeticoes = [1, 2, 3, 5, 6, 98, 74, 2, 3, 5, 98];

repeticoes.sort((a, b) => a - b);

for (let a = 0; a < repeticoes.length; a++) {
    if (repeticoes[a] % 2 !== 0) {
        console.log(repeticoes[a]);
    }
}

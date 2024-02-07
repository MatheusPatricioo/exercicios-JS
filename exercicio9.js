let totalNotas = 0; // Variável para armazenar a soma das notas
let quantidadeNotas = 0; // Variável para armazenar a quantidade de notas inseridas

while (true) {
    let nota = prompt("Digite uma nota (ou digite -1 para encerrar):");

    // Verifica se o usuário deseja encerrar a inserção de notas
    if (nota === "-1") {
        break; // Sai do loop
    }

    // Converte a nota para um número
    nota = parseFloat(nota);

    // Verifica se a nota é válida (um número)
    if (!isNaN(nota)) {
        totalNotas += nota; // Adiciona a nota à soma total
        quantidadeNotas++; // Incrementa a quantidade de notas inseridas
    } else {
        alert("Por favor, digite um número válido."); // Exibe um alerta se a nota não for válida
    }
}

// Calcula a média das notas
const media = totalNotas / quantidadeNotas;

// Exibe a média das notas na tela
alert("A média das notas é: " + media.toFixed(2)); // Utiliza o método toFixed() para exibir apenas duas casas decimais

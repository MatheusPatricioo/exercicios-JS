const fs = require('fs');

// Função para decifrar uma letra usando a cifra de César
function decifrar(letra, chave) {
    if (letra >= 'A' && letra <= 'Z') {
        let codigo = letra.charCodeAt(0) - chave;
        if (codigo < 'A'.charCodeAt(0)) {
            codigo = codigo + ('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
        }
        return String.fromCharCode(codigo);
    }
    return letra;
}

// Função para decifrar a mensagem
function decifrarMensagem(mensagem) {
    let mensagemDecifrada = '';
    for (let i = 0; i < mensagem.length; i++) {
        mensagemDecifrada += decifrar(mensagem[i], 5);
    }
    return mensagemDecifrada;
}

// Função para inverter uma string
function inverterString(str) {
    return str.split('').reverse().join('');
}

// Função para permutar os blocos de uma mensagem
function permutarBlocos(mensagem) {
    let blocos = mensagem.match(/.{1,2}/g); // Divide a mensagem em blocos de duas letras
    for (let i = 0, j = blocos.length - 1; i < j; i += 2, j -= 2) {
        [blocos[i], blocos[j]] = [blocos[j], blocos[i]]; // Troca os blocos
    }
    return blocos.join('');
}

// Função principal
function main() {
    fs.readFile('mensagem_codificada.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao abrir o arquivo:', err);
            return;
        }
        // Substituir espaços por #
        let mensagem = data.replace(/ /g, '#');
        // Completar com # se a mensagem tiver tamanho ímpar
        if (mensagem.length % 2 !== 0) {
            mensagem += '#';
        }
        // Decifrar a mensagem
        let mensagemDecifrada = decifrarMensagem(mensagem);
        // Refletir os blocos
        mensagemDecifrada = inverterString(mensagemDecifrada);
        // Permutar os blocos
        mensagemDecifrada = permutarBlocos(mensagemDecifrada);
        // Imprimir mensagem decifrada
        console.log('Mensagem decifrada:', mensagemDecifrada);
    });
}

// Chamada da função principal
main();

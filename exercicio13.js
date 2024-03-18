const fs = require('fs');

// Função para decifrar uma letra usando a cifra de César
function decifrar(letra, chave) {
    const codigoA = 'A'.charCodeAt(0);
    const codigoZ = 'Z'.charCodeAt(0);
    let codigo = letra.charCodeAt(0);
    if (codigo >= codigoA && codigo <= codigoZ) {
        codigo -= chave;
        if (codigo < codigoA) {
            codigo += codigoZ - codigoA + 1;
        }
    }
    return String.fromCharCode(codigo);
}

// Função para realizar a decodificação da mensagem
function decodificar(mensagemCodificada, chave) {
    // Substituir espaços por #
    mensagemCodificada = mensagemCodificada.replace(/ /g, '#');
    // Completar com # se o tamanho for ímpar
    if (mensagemCodificada.length % 2 !== 0) {
        mensagemCodificada += '#';
    }

    // Decifrar a mensagem usando a cifra de César
    let mensagemDecifrada = '';
    for (let i = 0; i < mensagemCodificada.length; i++) {
        mensagemDecifrada += decifrar(mensagemCodificada[i], chave);
    }

    // Dividir a mensagem em blocos de 2 letras
    const blocos = [];
    for (let i = 0; i < mensagemDecifrada.length; i += 2) {
        blocos.push(mensagemDecifrada.slice(i, i + 2));
    }

    // Refletir cada bloco
    for (let i = 0; i < blocos.length; i++) {
        blocos[i] = blocos[i].split('').reverse().join('');
    }

    // Permutar os blocos
    for (let i = 0, j = blocos.length - 1; i < j; i += 2, j -= 2) {
        [blocos[i], blocos[j]] = [blocos[j], blocos[i]];
    }

    // Juntar os blocos e retornar a mensagem decifrada
    return blocos.join('');
}

// Ler a mensagem codificada do arquivo
fs.readFile('mensagem_codificada.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao abrir o arquivo:', err);
        return;
    }
    // Decodificar a mensagem e imprimir na saída padrão
    const mensagemDecodificada = decodificar(data.trim(), 5);
    console.log('Mensagem decodificada:', mensagemDecodificada);
});

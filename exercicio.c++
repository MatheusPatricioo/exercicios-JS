#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h> // Para usar a função tolower

// Função para decifrar a mensagem usando a cifra de César com uma rotação à esquerda de 5 posições
void decifrarCifraCesar(char *mensagem) {
    int i;
    for (i = 0; mensagem[i] != '\0'; ++i) {
        if (mensagem[i] != '#') {
            mensagem[i] = ((mensagem[i] - 'A' - 5 + 26) % 26) + 'A';
        }
    }
}

// Função para refletir uma substring de uma string
void refletirSubstring(char *mensagem, int inicio, int fim) {
    char temp;
    while (inicio < fim) {
        temp = mensagem[inicio];
        mensagem[inicio] = mensagem[fim];
        mensagem[fim] = temp;
        inicio++;
        fim--;
    }
}

// Função para permutar os blocos trocando o primeiro com o último, o segundo com o penúltimo, e assim por diante
void permutarBlocos(char *mensagem, int tamanhoBloco) {
    int inicio = 0;
    int fim = strlen(mensagem) - tamanhoBloco;
    while (inicio < fim) {
        refletirSubstring(mensagem, inicio, fim);
        inicio += tamanhoBloco;
        fim -= tamanhoBloco;
    }
}

int main() {
    FILE *arquivo;
    char mensagem[1000];

    // Abrir o arquivo
    arquivo = fopen("mensagem.txt", "r");
    if (arquivo == NULL) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Ler a mensagem do arquivo
    fgets(mensagem, sizeof(mensagem), arquivo);

    // Substituir espaços por '#'
    int i;
    for (i = 0; mensagem[i] != '\0'; ++i) {
        if (mensagem[i] == ' ') {
            mensagem[i] = '#';
        }
    }

    // Completar a mensagem com '#' caso tenha uma quantidade ímpar de letras
    int len = strlen(mensagem);
    if (len % 2 != 0) {
        mensagem[len] = '#';
        mensagem[len + 1] = '\0';
    }

    // Decifrar a mensagem usando a cifra de César
    decifrarCifraCesar(mensagem);

    // Subdividir a mensagem em blocos de duas letras
    int tamanhoBloco = 2;
    int j;
    for (j = 0; mensagem[j] != '\0'; j += tamanhoBloco) {
        refletirSubstring(mensagem, j, j + tamanhoBloco - 1);
    }

    // Permutar os blocos
    permutarBlocos(mensagem, tamanhoBloco);

    // Imprimir a mensagem decifrada
    printf("Mensagem decifrada: %s\n", mensagem);

    // Fechar o arquivo
    fclose(arquivo);

    return 0;
}

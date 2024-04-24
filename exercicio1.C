#include <stdio.h>

int main() {
    // Definindo as dimensões da matriz
    int linhas = 3;
    int colunas = 3;

    // Definindo e inicializando a matriz
    int matriz[linhas][colunas];

    // Preenchendo a matriz com valores
    for (int i = 0; i < linhas; i++) {
        for (int j = 0; j < colunas; j++) {
            matriz[i][j] = i * colunas + j + 1;
        }
    }

    // Imprimindo a matriz
    printf("Matriz:\n");
    for (int i = 0; i < linhas; i++) {
        for (int j = 0; j < colunas; j++) {
            printf("%d\t", matriz[i][j]);
        }
        printf("\n");
    }

    return 0;
}

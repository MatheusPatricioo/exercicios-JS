#include <stdio.h>

int main() {
    printf("Números pares de 1 a 100:\n");

    // Loop de 1 a 100
    for (int i = 1; i <= 100; i++) {
        // Verifica se o número é par
        if (i % 2 == 0) {
            printf("%d ", i); // Imprime o número par
        }
    }

    printf("\n");

    return 0;
}

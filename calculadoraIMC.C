#include <stdio.h>

int main() {
    // Metas diárias de macronutrientes (em gramas)
    int metaProteinas = 150;
    int metaCarboidratos = 200;
    int metaGorduras = 50;

    // Consumo diário de macronutrientes (em gramas)
    int consumoProteinas;
    int consumoCarboidratos;
    int consumoGorduras;

    // Dados do usuário para o cálculo do IMC
    float peso;
    float altura;

    // Solicita ao usuário que insira o consumo de macronutrientes
    printf("Digite o consumo diário de proteínas (em gramas): ");
    scanf("%d", &consumoProteinas);
    printf("Digite o consumo diário de carboidratos (em gramas): ");
    scanf("%d", &consumoCarboidratos);
    printf("Digite o consumo diário de gorduras (em gramas): ");
    scanf("%d", &consumoGorduras);

    // Verifica se as metas diárias foram alcançadas
    if (consumoProteinas >= metaProteinas && consumoCarboidratos >= metaCarboidratos && consumoGorduras >= metaGorduras) {
        printf("Parabéns! Você atingiu suas metas diárias de macronutrientes.\n");
    } else {
        printf("Você não atingiu suas metas diárias de macronutrientes. Veja o que falta:\n");

        // Calcula e exibe a diferença entre o consumo e as metas diárias de cada macronutriente
        if (consumoProteinas < metaProteinas) {
            printf("Falta consumir %d gramas de proteínas.\n", metaProteinas - consumoProteinas);
        }
        if (consumoCarboidratos < metaCarboidratos) {
            printf("Falta consumir %d gramas de carboidratos.\n", metaCarboidratos - consumoCarboidratos);
        }
        if (consumoGorduras < metaGorduras) {
            printf("Falta consumir %d gramas de gorduras.\n", metaGorduras - consumoGorduras);
        }
    }

    // Solicita ao usuário que insira o peso e a altura para calcular o IMC
    printf("\nAgora, vamos calcular o seu Índice de Massa Corporal (IMC).\n");
    printf("Digite o seu peso (em kg): ");
    scanf("%f", &peso);
    printf("Digite a sua altura (em metros): ");
    scanf("%f", &altura);

    // Calcula o IMC
    float imc = peso / (altura * altura);

    // Exibe o IMC calculado
    printf("Seu IMC é %.2f\n", imc);

    return 0;
}

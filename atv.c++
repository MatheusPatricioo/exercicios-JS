#include <iostream>
#include <vector>
using namespace std;

#define MAX_SIZE 40000 // Definição do tamanho máximo para o array que armazena o resultado

// Função para multiplicar o número armazenado em 'result' por 'x'
// 'size' é um ponteiro para o tamanho atual do número armazenado em 'result'
void multiply(vector<int>& result, int& size, int x);

// Função para mostrar o resultado armazenado em 'result'
// 'size' é o tamanho do número armazenado em 'result'
void show_result(const vector<int>& result, int size);

int main() {
    int n;
    cin >> n; // Solicita ao usuário que insira o número para o qual o fatorial será calculado

    if (n < 2) {
        cout << "Resultado: 1" << endl; // Se 'n' for menor que 2, o fatorial é 1, então imprime o resultado e sai
    } else {
        vector<int> result(MAX_SIZE, 0); // Inicializa um vector para armazenar o resultado do fatorial, preenchido com zeros
        result[0] = 1; // O resultado inicial é 1
        int size = 1; // Tamanho inicial do número armazenado em 'result' é 1

        for (int i = 2; i <= n; i++) {
            multiply(result, size, i); // Multiplica o número armazenado em 'result' pelo próximo número no fatorial (de 2 até 'n')
        }

        cout << "Resultado: ";
        show_result(result, size); // Mostra o resultado armazenado em 'result'
    }

    return 0;
}

// Função para multiplicar o número armazenado em 'result' por 'x'
// 'size' é um ponteiro para o tamanho atual do número armazenado em 'result'
void multiply(vector<int>& result, int& size, int x) {
    int carry = 0; // Variável para armazenar o valor a ser carregado para a próxima posição

    for (int i = 0; i < size; i++) {
        int prod = result[i] * x + carry; // Multiplica o dígito atual pelo próximo número no fatorial e adiciona o carry
        result[i] = prod % 10; // Armazena o dígito da unidade do resultado na posição atual
        carry = prod / 10; // Atualiza o carry para a próxima iteração
    }

    while (carry) {
        result[size] = carry % 10; // Se ainda houver carry, armazena o dígito da unidade na próxima posição
        carry /= 10; // Atualiza o carry para a próxima iteração
        size++; // Incrementa o tamanho do número armazenado em 'result'
    }
}

// Função para mostrar o resultado armazenado em 'result'
// 'size' é o tamanho do número armazenado em 'result'
void show_result(const vector<int>& result, int size) {
    for (int i = size - 1; i >= 0; i--) { // Loop reverso para imprimir o número armazenado em 'result'
        cout << result[i]; // Imprime cada dígito do número armazenado em 'result'
    }
    cout << endl; // Imprime uma nova linha no final
}

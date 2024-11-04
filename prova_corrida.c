#include <stdio.h>

int main() {
    int n, i, tempo, menorTempo;

    printf("Digite o número de corredores: ");
    scanf("%d", &n);

    menorTempo = 10000000; // Inicializa com um valor alto

    // Loop para ler os tempos dos corredores
    for (i = 0; i < n; i++) {
        printf("Digite o tempo do corredor %d em segundos: ", i + 1);
        scanf("%d", &tempo);

        // Verifica se o tempo lido é menor que o menorTempo atual
        if (tempo < menorTempo) {
            menorTempo = tempo; // Atualiza menorTempo
        }
    }

    printf("O recorde da prova foi de %d segundos\n", menorTempo);

    return 0;
}
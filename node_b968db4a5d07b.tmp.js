const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua primeira nota: ', (Nota1) => {
  rl.question('Digite sua segunda nota: ', (Nota2) => {
    rl.question('Digite sua terceira nota: ', (Nota3) => {
      // Convertendo as strings para números
      Nota1 = parseFloat(Nota1);
      Nota2 = parseFloat(Nota2);
      Nota3 = parseFloat(Nota3);

      // Calculando a média das notas
      const mediaNotas = (Nota1 + Nota2 + Nota3) / 3;

      console.log("Sua média é: " + mediaNotas);

      rl.close();
    });
  });
});

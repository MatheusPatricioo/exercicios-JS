var hora = 23;
console.log('Agora são ' + hora + " horas.");

if (hora <= 8) {
    console.log("Bom dia!!");
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!!");
} else if (hora > 19) {
    console.log("Boa noite!!");
}

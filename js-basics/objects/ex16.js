const dispositivos = [
    {
        nome: "Mouse",
        status: "Vendido"
    },
    {
        nome: "Teclado",
        status: "Disponível"
    },
    {
        nome: "Monitor",
        status: "Disponível"
    }
]

for(let i = 0; i < dispositivos.length; i++) {
    console.log(`Dispositivo: ${dispositivos[i].nome} | Status: ${dispositivos[i].status}`);
}

// outra forma de percorrer arrays + objetos
for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}
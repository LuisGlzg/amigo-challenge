// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se crean las variables a utilizar
let nombres = [];

function agregarAmigo(){
    let nombrehtml = document.querySelector(input);
    nombres.push(nombrehtml);

    console.log(nombres);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = nombres;
}

agregarAmigo();
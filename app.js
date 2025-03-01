// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se crean las variables a utilizar
let nombres = [];
let intento = 0;

function agregarAmigo(){
    let nombrehtml = document.getElementById('amigo').value;
    nombres.push(nombrehtml);

    if (intento == 0) nombres.pop();
    if (nombres[intento] == '') nombres.pop();
    console.log(nombres);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = nombres;
    intento++;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

agregarAmigo();
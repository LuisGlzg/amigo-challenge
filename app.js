// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Se crean las variables a utilizar
let nombres = [];
let intento = 0;

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
function agregarAmigo(){
    let nombrehtml = document.getElementById('amigo').value;
    if (nombrehtml.trim() == "") { //evita espacios en blanco y que haya informacion
        alert("Por favor, inserte un nombre.");
        return;
    }
    nombres.push(nombrehtml);

    console.log(nombres);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (var i = 0; i < nombres.length; i++) {
        // Crear un nuevo elemento 'li'
        var item = document.createElement('li');
        // Establecer el texto del elemento
        item.textContent = nombres[i];
        // Agregar el elemento a la lista HTML
        lista.append(item);
    }
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){

    if(nombres){
        let generanumero = Math.floor(Math.random()*(nombres.length));
        let nombresort = document.getElementById('resultado');
        nombresort.innerHTML = "El amigo secreto es: " + nombres[generanumero];
    }

   // if (document.querySelector('#resultado').value == '') exit;
}

function reiniciarTodo() {

    nombres = [];   // Vaciar la lista de nombres

    // Limpiar la lista HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    limpiarCaja(); // Limpiar el campo de entrada

    // Limpiar el resultado del sorteo
    let nombresort = document.getElementById('resultado');
    nombresort.innerHTML = "";

    console.log("Listo puedes empezar de nuevo el juego.");
}


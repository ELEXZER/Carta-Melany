const sobre = document.getElementById("sobre");
const boton = document.getElementById("boton");
const escena = document.querySelector(".escena");
const instruccion = document.getElementById("instruccion");

let abierto = false;


/* ===================================
   ABRIR / CERRAR
=================================== */

function abrirCarta() {

    abierto = true;

    sobre.classList.add("abierto");

    escena.classList.add("abierta");

    boton.textContent = "Cerrar carta";

    instruccion.textContent =
        "Nuestra primera carta del 21 de septiembre ❤️";

}


/* ===================================
   CERRAR
=================================== */

function cerrarCarta() {

    abierto = false;

    sobre.classList.remove("abierto");

    escena.classList.remove("abierta");

    boton.textContent = "Abrir carta";

    instruccion.textContent =
        "Haz clic en el sobre para abrirlo 💌";

}


/* ===================================
   BOTÓN
=================================== */

boton.addEventListener(
    "click",
    function() {

        if (!abierto) {

            abrirCarta();

        } else {

            cerrarCarta();

        }

    }
);


/* ===================================
   CLIC SOBRE EL SOBRE
=================================== */

sobre.addEventListener(
    "click",
    function() {

        if (!abierto) {

            abrirCarta();

        }

    }
);
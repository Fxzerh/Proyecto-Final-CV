let Boton_inf_personal = document.getElementById('Boton_inf_personal');
let Boton_formacion = document.getElementById('Boton_formacion');
let Boton_habili = document.getElementById('Boton_habili');
let Boton_Exp = document.getElementById('Boton_Exp');

let lista1 = document.getElementById('lista1');
let lista2 = document.getElementById('lista2');
let lista3 = document.getElementById('lista3');
let lista4 = document.getElementById('lista4');

Boton_inf_personal.addEventListener('click', toggleLista1);
Boton_formacion.addEventListener('click', toggleLista2);
Boton_habili.addEventListener('click', toggleLista3);
Boton_Exp.addEventListener('click', toggleLista4);

function toggleLista1(){
    lista1.classList.toggle('show');
    if (lista1.classList.contains('show')) {
        Boton_inf_personal.innerHTML = '<img class="img_boton" src="icono flecha cerrar.png" alt="Ocultar Infomacion">';
    } else {
        Boton_inf_personal.innerHTML = '<img class="img_boton" src="icono flecha abrir.png" alt="Desplegar Informacion">';
    }
}
function toggleLista2() {
    lista2.classList.toggle('show');
    if (lista2.classList.contains('show')) {
        Boton_formacion.innerHTML = '<img class="img_boton" src="icono flecha cerrar.png" alt="Ocultar Infomacion">';
    } else {
        Boton_formacion.innerHTML = '<img class="img_boton" src="icono flecha abrir.png" alt="Desplegar Informacion">';
    }
}
function toggleLista3() {
    lista3.classList.toggle('show');
    if (lista3.classList.contains('show')) {
        Boton_habili.innerHTML = '<img class="img_boton" src="icono flecha cerrar.png" alt="Ocultar Infomacion">';
    } else {
        Boton_habili.innerHTML = '<img class="img_boton" src="icono flecha abrir.png" alt="Desplegar Informacion">';
    }
}
function toggleLista4() {
    lista4.classList.contains('show');
    if (lista4.classList.toggle('show')) {
        Boton_Exp.innerHTML = '<img class="img_boton" src="icono flecha cerrar.png" alt="Ocultar Infomacion">';
    } else {
        Boton_Exp.innerHTML = '<img class="img_boton" src="icono flecha abrir.png" alt="Desplegar Informacion">';
    }
}


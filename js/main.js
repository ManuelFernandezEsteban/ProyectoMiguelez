/*const seleccionPais = document.getElementById("seleccionPais");
seleccionPais.addEventListener('click',seleccionarPais);
const wrapSeleccionPais = document.getElementById("wrapSeleccionPais");

function seleccionarPais(ev){
    ev.preventDefault();
    wrapSeleccionPais.classList.toggle("wrapSeleccionPaisnoOculta");
}*/

$(document).ready(function(){

    $("#flip").click(function(){
        console.log("jola");
        $('#wrapSeleccionPais').slideToggle('slow');   
        document.getElementById("crosspais").classList.toggle('fa-times',true);
        document.getElementById("crosspais").classList.toggle('fa-angle-up',true);
    });


})
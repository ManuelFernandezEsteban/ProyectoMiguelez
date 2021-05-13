/*const seleccionPais = document.getElementById("seleccionPais");
seleccionPais.addEventListener('click',seleccionarPais);
const wrapSeleccionPais = document.getElementById("wrapSeleccionPais");

function seleccionarPais(ev){
    ev.preventDefault();
    wrapSeleccionPais.classList.toggle("wrapSeleccionPaisnoOculta");
}*/

$(document).ready(function(){

    $("#flip").click(function(){
       
        $('#wrapSeleccionPais').slideToggle('slow');   
        document.getElementById("crosspais").classList.toggle('fa-times',true);
        document.getElementById("crosspais").classList.toggle('fa-angle-up',true);
    });

    $("#empresa").on('click', function(event){
        event.preventDefault();
        console.log("despliega");

        $('#empresa i').removeClass('fa-angle-down');
        $('#empresa i').addClass('fa-times');
        $('#box-empresa').slideToggle('slow');  
                 
    })

})
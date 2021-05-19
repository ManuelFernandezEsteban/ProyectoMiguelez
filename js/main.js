/*const seleccionPais = document.getElementById("seleccionPais");
seleccionPais.addEventListener('click',seleccionarPais);
const wrapSeleccionPais = document.getElementById("wrapSeleccionPais");

function seleccionarPais(ev){
    ev.preventDefault();
    wrapSeleccionPais.classList.toggle("wrapSeleccionPaisnoOculta");
}*/



$(document).ready(function(){

    let flagCajaFuera=false;    

    $("#flip").click(function(){
       
        $('#wrapSeleccionPais').slideToggle('slow');   
        document.getElementById("crosspais").classList.toggle('fa-times',true);
        document.getElementById("crosspais").classList.toggle('fa-angle-up',true);
    });

    function cerrarMenuDropdown(){
        if (!($('.box-empresa').is('close'))){
            console.log('cierro');
            $('.box-empresa').addClass('close');
            $('.box-empresa').css('display','none');
            $('#empresa').removeClass('iluminar');
        }
        if (!($('.box-contacto').is('close'))){
            console.log('cierro');
            $('.box-contacto').addClass('close');
            $('.box-contacto').css('display','none');
            $('#contacto').removeClass('iluminar');
        }
        if (!($('.box-cpr').is('close'))){
            console.log('cierro');
            $('.box-cpr').addClass('close');
            $('.box-cpr').css('display','none');
            $('#cpr').removeClass('iluminar');
        }
        if (!($('.box-producto').is('close'))){
            console.log('cierro');
            $('.box-producto').addClass('close');
            $('.box-producto').css('display','none');
            $('#productos').removeClass('iluminar');
        }
    }

    $("#empresa").on('click', function(event){
        event.preventDefault();
        
        if ($('.box-empresa').is('.close')){
            console.log("despliega");
            cerrarMenuDropdown();
            $('.box-empresa').css('display','flex');
            $('.box-empresa').removeClass('close');
            $('#empresa').addClass('iluminar');
            //$(this).addClass('open');
        }else{
            console.log("repliega");
            cerrarMenuDropdown();
        }
        $('#empresa i').removeClass('fa-angle-down');
        $('#empresa i').addClass('fa-times');
        /*$('#box-empresa').slideToggle(); */
                 
    })
    $("#productos").on('click', function(event){
        event.preventDefault();

        if ($('.box-producto').is('.close')){
            console.log("despliega");
            cerrarMenuDropdown();
            $('.box-producto').css('display','flex');
            $('.box-producto').removeClass('close');
            $('#productos').addClass('iluminar');
            //$(this).addClass('open');
        }else{
            console.log("repliega");
            cerrarMenuDropdown();
        }
        $('#productos i').removeClass('fa-angle-down');
        $('#productos i').addClass('fa-times');
        /*$('#box-empresa').slideToggle(); */
                 
    })
    $("#contacto").on('click', function(event){
        event.preventDefault();

        if ($('.box-contacto').is('.close')){
            console.log("despliega");
            cerrarMenuDropdown();
            $('.box-contacto').css('display','flex');
            $('.box-contacto').removeClass('close');
            $('#contacto').addClass('iluminar');
            //$(this).addClass('open');
        }else{
            console.log("repliega");
            cerrarMenuDropdown();
        }
        $('#contacto i').removeClass('fa-angle-down');
        $('#contacto i').addClass('fa-times');
        /*$('#box-empresa').slideToggle(); */
                 
    })
    $("#cpr").on('click', function(event){
        event.preventDefault();

        if ($('.box-cpr').is('.close')){
            console.log("despliega");
            cerrarMenuDropdown();
            $('.box-cpr').css('display','flex');
            $('.box-cpr').removeClass('close');
            $('#cpr').addClass('iluminar');
            //$(this).addClass('open');
        }else{
            console.log("repliega");
            cerrarMenuDropdown();
        }
        $('#cpr i').removeClass('fa-angle-down');
        $('#cpr i').addClass('fa-times');
        /*$('#box-empresa').slideToggle(); */
                 
    })
})
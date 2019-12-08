import { timeout } from "q";

// SELECTORES //

$(window).ready(function(){
    cambiarestilo();
    cargarinicio();
});

$("#inicio").click(function(){
    cargarinicio();
});

$("#gestionar").click(function(){
    cargargestionarclientes();
});

$("#verificarburo").click(function(){
    cargarverificarburo();
});

$("#calcularpre").click(function(){
    cargarcalcularpre();
});

$("#genrepopre").click(function(){
    cargargenrepopre();
});

$("#asignarpre").click(function(){
    cargarasignarpre();
});

$("#gestacob").click(function(){
    cargargestacob();
});

$("#asigtar").click(function(){
    cargarasigtar();
});

// JAVASCRIPT //

function cambiarestilo() {
    $(".nav-header").css("color","#000000")
    $(".fa-bars").css("filter","invert(100%)")
}

function cargarinicio() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewInicio");
}

function cargargestionarclientes() {
    $(".content-wrapper").empty();
    var cont="";
    $.ajax({
        url:"/getClientes",
        type:"get",
        success:function (response) {
            console.log(response)
            debugger;
            $(".content-wrapper").load("viewGestionarClientes");
            setTimeout(function(){
                let nombres=$("#tbody");
                $.each(response, function(i,r){
                    cont+="<tr>" +
                        "<td>"+r.id_cliente+"</td>" +
                        "<td>"+r.nombre+"</td>" +
                        "<td>"+r.apellidos+"</td>" +
                        "<td>"+r.fecha_nacimiento+"</td>" +
                        "<td>"+r.curp+"</td>" +
                        "<td>"+r.rfc+"</td>" +
                        "<td><button class='btn btn-primary' id='btnEditar' type='button'>Editar</button></td>"+
                        "<td><button class='btn btn-danger' id='btnEliminar' type='button'>Eliminar</button></td>"+
                        "</tr>";
                });
                nombres.append(cont);
                $("#tbody tr").click(function(){
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var value=$(this).find('td:first-child').html();
                    alert(value);
                });
                }, 1000);

        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
    
}//Jorge

function cargarverificarburo() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Verificar buró de crédito</h1>");
}//Jorge

function cargarcalcularpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Calcular préstamo</h1>");
}//Jorge

function cargargenrepopre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Generar reporte de préstamos</h1>");
}

function cargarasignarpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Asignar préstamos</h1>");
}

function cargargestacob() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Gestionar cobranza</h1>");
}

function cargarasigtar() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Gestionar tarjetas de débito y crédito</h1>");
}

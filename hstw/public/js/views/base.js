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
            $(".content-wrapper").load("viewGestionarClientes");
            setTimeout(function(){
                let nombres=$("#bodytabla");
                if (response.length==0){
                    cont="<tr>" +
                        "<td colspan='9' style='text-align: center'>No hay registros para mostrar</td>" +
                        "</tr>"
                }
                else {
                    $.each(response, function (i, r) {
                        cont += "<tr>" +
                            "<td>" + r.id_cliente + "</td>" +
                            "<td>" + r.nombre + "</td>" +
                            "<td>" + r.apellidos + "</td>" +
                            "<td>" + r.fecha_nacimiento + "</td>" +
                            "<td>" + r.curp + "</td>" +
                            "<td>" + r.rfc + "</td>" +
                            "<td><button class='btn btn-block btn-primary' id='btnDireccion' type='button'><i class='fas fa-eye'></i></button></td>" +
                            "<td><button class='btn btn-primary' id='btnEditar' type='button'><i class='fas fa-edit'></i></button></td>" +
                            "<td><button class='btn btn-danger' id='btnEliminar' type='button'><i class='fas fa-trash-alt'></i></button></td>" +
                            "</tr>";
                    });
                }
                nombres.append(cont);
                    $("#bodytabla tr td #btnEliminar").click(function(){
                        $(this).addClass('selected').siblings().removeClass('selected');
                        var idCliente=$(this).parent().siblings('td:first').html();
                        // alert("seleccionado "+idCliente);
                        eliminarcliente(idCliente);
                    });
                }, 1000);
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
}//Jorge

function eliminarcliente(cliente){
    var token=$("input[name=_token]").val();
    $.ajax({
        url:"deleteCliente",
        type:"post",
        data: {id:cliente, _token:token},
        success:function () {
            cargargestionarclientes();
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
}

function cargarverificarburo() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewVerificarBuro");
}//Jorge

function cargarcalcularpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Calcular préstamo</h1>");
}//Jorge

function cargargenrepopre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewGenerarReportesPrestamos");
}

function cargarasignarpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewAsignarPrestamos");
}

function cargargestacob() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewGestionarCobranza");
}

function cargarasigtar() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewAsignarTarjetas");
}

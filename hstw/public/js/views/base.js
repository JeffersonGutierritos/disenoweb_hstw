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
                            "<td><button class='btn btn-danger' id='btnEliminar' type='button' data-toggle='modal' data-target='#modalConfirm'><i class='fas fa-trash-alt'></i></button></td>"+
                            "</tr>";
                    });
                }
                nombres.append(cont);

                    $("#bodytabla tr td #btnEliminar").click(function(){
                        $(this).addClass('selected').siblings().removeClass('selected');
                        var idCliente=$(this).parent().siblings('td:first').html();
                        // alert("seleccionado "+idCliente);
                        getDirecciones(idCliente);
                    });
                    $("#bodytabla tr td #btnDireccion").click(function(){
                        $(this).addClass('selected').siblings().removeClass('selected');
                        var idCliente=$(this).parent().siblings('td:first').html();
                        // alert("seleccionado "+idCliente);
                        deleteCliente(idCliente);
                    });
                    
                }, 1000);
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
}//Jorge

function setCliente(){
    
}
function deleteCliente(idCliente){
    $("#modalSi").click(function(){
        var token=$("input[name=_token]").val();
        $.ajax({
            url:"deleteCliente",
            type:"post",
            data: {id:idCliente,_token:token},
            success:function (response) {
                cargargestionarclientes()   
            },
            error: function() {
                alert('There was some error performing the AJAX call!');
            }
        });
    });
}


function cargarverificarburo() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewVerificarBuro");
    tipoBusqueda()
    
    
}//Jorge

function tipoBusqueda(){
    setTimeout(function(){
        $("#txtNombre").attr("disabled", false)
        $("#txtFecha").attr("disabled", false)
        $("#btnVerificarNombre").attr("disabled", false)

        $("#porNombre").click(function(){
            $("#txtNombre").attr("disabled", false)
            $("#txtFecha").attr("disabled", false)
            $("#btnVerificarNombre").attr("disabled", false)
            //curp
            $("#txtCURP").attr("disabled", true)
            $("#btnVerificarCURP").attr("disabled", true)
            //rfc
            $("#txtRFC").attr("disabled", true)
            $("#btnVerificarRFC").attr("disabled", true)
            //nocliente
            $("#txtNoCliente").attr("disabled", true)
            $("#btnVerificarNoCliente").attr("disabled", true)
        })
        $("#porCURP").click(function(){
            $("#txtCURP").attr("disabled", false)
            $("#btnVerificarCURP").attr("disabled", false)
            //rfc
            $("#txtRFC").attr("disabled", true)
            $("#btnVerificarRFC").attr("disabled", true)
            //nombre
            $("#txtNombre").attr("disabled", true)
            $("#txtFecha").attr("disabled", true)
            $("#btnVerificarNombre").attr("disabled", true)
            //nocliente
            $("#txtNoCliente").attr("disabled", true)
            $("#btnVerificarNoCliente").attr("disabled", true)
        })
        $("#porRFC").click(function(){
            $("#txtRFC").attr("disabled", false)
            $("#btnVerificarRFC").attr("disabled", false)
            //curp
            $("#txtCURP").attr("disabled", true)
            $("#btnVerificarCURP").attr("disabled", true)
            //nombre
            $("#txtNombre").attr("disabled", true)
            $("#txtFecha").attr("disabled", true)
            $("#btnVerificarNombre").attr("disabled", true)
            //nocliente
            $("#txtNoCliente").attr("disabled", true)
            $("#btnVerificarNoCliente").attr("disabled", true)
        })
        $("#porNoCliente").click(function(){
            $("#txtNoCliente").attr("disabled", false)
            $("btnVerificarNoCliente").attr("disabled", false)
            //rfc
            $("#txtRFC").attr("disabled", true)
            $("#btnVerificarRFC").attr("disabled", true)
            //curp
            $("#txtCURP").attr("disabled", true)
            $("#btnVerificarCURP").attr("disabled", true)
            //nombre
            $("#txtNombre").attr("disabled", true)
            $("#txtFecha").attr("disabled", true)
            $("#btnVerificarNombre").attr("disabled", true)
        })
    }, 1000)

}

function cargarcalcularpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("calcularPrestamos");
}//Jorge

function cargargenrepopre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewGenerarReportesPrestamos");
    tipoBusqueda()
}

function cargarasignarpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewAsignarPrestamos");
    tipoBusqueda()
}

function cargargestacob() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewGestionarCobranza");
}

function cargarasigtar() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewAsignarTarjetas");
}

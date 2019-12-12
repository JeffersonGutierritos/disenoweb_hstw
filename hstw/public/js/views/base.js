// SELECTORES //

$(window).ready(function() {
    cambiarestilo();
    cargarinicio();
});
$("#inicio").click(function() {
    cargarinicio();
});
$("#gestionar").click(function() {
    cargargestionarclientes();
});

$("#verificarburo").click(function() {
    cargarverificarburo();
});

$("#calcularpre").click(function() {
    cargarcalcularpre();
});

$("#genrepopre").click(function() {
    cargargenrepopre();
});

$("#asignarpre").click(function() {
    cargarasignarpre();
});

$("#gestacob").click(function() {
    cargargestacob();
});

$("#asigtar").click(function() {
    cargarasigtar();
});
// JAVASCRIPT //

function cambiarestilo() {
    $(".nav-header").css("color", "#000000")
    $(".fa-bars").css("filter", "invert(100%)")
}

function cargarinicio() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewInicio");
}

function cargargestionarclientes() {
    $(".content-wrapper").empty();
    var cont = "";
    $.ajax({
        url: "/getClientes",
        type: "get",
        success: function(response) {
            $(".content-wrapper").load("viewGestionarClientes");
            setTimeout(function() {
                let nombres = $("#bodytabla");
                if (response.length == 0) {
                    cont = "<tr>" +
                        "<td colspan='9' style='text-align: center'>No hay registros para mostrar</td>" +
                        "</tr>"
                } else {
                    $.each(response, function(i, r) {
                        cont += "<tr>" +
                            "<td>" + r.id_cliente + "</td>" +
                            "<td>" + r.nombre + "</td>" +
                            "<td>" + r.apellidos + "</td>" +
                            "<td>" + r.fecha_nacimiento + "</td>" +
                            "<td>" + r.curp + "</td>" +
                            "<td>" + r.rfc + "</td>" +
                            "<td><button class='btn btn-block btn-primary' id='btnDireccion' type='button' data-toggle='modal' data-target='#modalDir'><i class='fas fa-eye'></i></button></td>" +
                            "<td><button class='btn btn-primary' id='btnEditar' type='button' data-toggle='modal' data-target='#modalupdate'><i class='fas fa-edit'></i></button></td>" +
                            "<td><button class='btn btn-danger' id='btnEliminar' type='button' data-toggle='modal' data-target='#modalConfirm'><i class='fas fa-trash-alt'></i></button></td>" +
                            "</tr>";
                    });
                }
                nombres.append(cont);
                $("#bodytabla tr td #btnDireccion").click(function() {
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var idCliente = $(this).parent().siblings('td:first').html();
                    getdireccioncte(idCliente);
                });
                $("#bodytabla tr td #btnEliminar").click(function() {
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var idCliente = $(this).parent().siblings('td:first').html();
                    deleteCliente(idCliente);
                });
                $("#bodytabla tr td #btnEditar").click(function() {
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var idCliente = $(this).parent().siblings('td:first').html();
                    editarCliente(idCliente);
                });
                autocompletado();

            }, 1000);
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
}

function autocompletado() {
    var options = {
        url: "getClientes",
        getValue: "nombre",
        placeholder: "Buscar un cliente por nombre.",
        list: {
            showAnimation: {
                type: "fade", //normal|slide|fade
                time: 400,
                callback: function() {}
            },
            hideAnimation: {
                type: "slide", //normal|slide|fade
                time: 400,
                callback: function() {}
            },
            onChooseEvent: function() {
                var token = $("input[name=_token]").val();
                $.ajax({
                    url: "/nombresfiltrados",
                    // en data se envían los datos
                    data: { nombre: $("#inputBuscar").val(), _token: token },
                    type: "post",
                    dataType: 'json',
                    success: function(response) {
                        // alert("sss");
                        var cont = "";
                        var nombres = $("#bodytabla");
                        nombres.empty();
                        $.each(response, function(i, r) {
                            cont += "<tr>" +
                                "<td>" + r.id_cliente + "</td>" +
                                "<td>" + r.nombre + "</td>" +
                                "<td>" + r.apellidos + "</td>" +
                                "<td>" + r.fecha_nacimiento + "</td>" +
                                "<td>" + r.curp + "</td>" +
                                "<td>" + r.rfc + "</td>" +
                                "<td><button class='btn btn-block btn-primary' id='btnDireccion' type='button' data-toggle='modal' data-target='#modalDir'><i class='fas fa-eye'></i></button></td>" +
                                "<td><button class='btn btn-primary' id='btnEditar' type='button' data-toggle='modal' data-target='#modalupdate'><i class='fas fa-edit'></i></button></td>" +
                                "<td><button class='btn btn-danger' id='btnEliminar' type='button' data-toggle='modal' data-target='#modalConfirm'><i class='fas fa-trash-alt'></i></button></td>" +
                                "</tr>";
                        });
                        nombres.append(cont);
                    }
                })
            },
            match: {
                enabled: true
            }
        }
    };
    $("#inputBuscar").easyAutocomplete(options);
}

function editarCliente(idCliente) {
    var token = $("input[name=_token]").val();
    setTimeout(function() {
        var nombre = $("#txtNombreupdate");
        var apellido = $("#txtApellidoupdate");
        var date = $('#txFechaupdate');
        var curp = $("#txtCURPupdate");
        var rfc = $("#txtRFCupdate");
        var calle = $("#txtCalleupdate");
        var ninterior = $("#txtNinteriorupdate");
        var nexterior = $("#txtNexteriorupdate");
        var entrecalles = $("#txtEntreCallesupdate");
        var codigopostal = $("#txtCodigoPostalupdate");
        var colonia = $("#txtColoniaupdate");
        var estado = $("#txtEstadoupdate");
        var ciudad = $("#txtCiudadupdate");
        var pais = $("#txtPaisupdate");
        $.ajax({
            url: "/getCliente",
            type: "get",
            data: { id: idCliente, _token: token },
            dataType: 'json',
            success: function(response) {
                nombre.val(response[0].nombre);
                apellido.val(response[0].apellidos);
                date.val(response[0].fecha_nacimiento);
                curp.val(response[0].curp);
                rfc.val(response[0].rfc);
                calle.val(response[0].calle);
                ninterior.val(response[0].num_interior);
                nexterior.val(response[0].num_exterior);
                entrecalles.val(response[0].entre_calles);
                codigopostal.val(response[0].codigo_postal);
                colonia.val(response[0].colonia);
                estado.val(response[0].estado);
                ciudad.val(response[0].ciudad);
                pais.val(response[0].pais);
            },
            error: function(error, exception) {
                alert('There was some error performing the AJAX call!' + exception);
            }
        });
        $("#update").click(function() {
            var fecha = "";
            if ($("#txFechaupdate").val() !== "") {
                date = new Date($('#txFechaupdate').val());
                day = date.getDate() + 1;
                month = date.getMonth() + 1;
                year = date.getFullYear();
                fecha = [year, month, day].join('-');
            } else {
                fecha = "0000-00-00";
            }
            $.ajax({
                url: "/editarCte",
                type: "post",
                data: {
                    id: idCliente,
                    nombre: nombre.val(),
                    apellido: apellido.val(),
                    fecha: fecha,
                    curp: curp.val(),
                    rfc: rfc.val(),
                    calle: calle.val(),
                    ninterior: ninterior.val(),
                    nexterior: nexterior.val(),
                    entrecalles: entrecalles.val(),
                    codigopostal: codigopostal.val(),
                    colonia: colonia.val(),
                    estado: estado.val(),
                    ciudad: ciudad.val(),
                    pais: pais.val(),
                    _token: token
                },
                success: function(response) {
                    setTimeout(function() {
                        cargargestionarclientes();
                    }, 200);
                },
                error: function(error, exception) {
                    alert('There was some error performing the AJAX call!' + exception);
                }
            });
        });
    }, 500);
}

function getdireccioncte(idCliente) {
    var token = $("input[name=_token]").val();
    var content = "";
    $.ajax({
        url: "/getdireccioncte",
        type: "post",
        data: { id: idCliente, _token: token },
        dataType: 'json',
        success: function(response) {
            setTimeout(function() {
                let modalbody = $("#direccioncte");
                modalbody.empty();
                if (response.length == 0) {
                    content = "<p>No hay direcciones para mostrar</p>"
                } else {
                    // for(var i=0;i<response.length;i++){
                    $.each(response, function(i, r) {
                        content +=
                            "<p><b>Calle: </b>" + r.calle + "</p>" +
                            "<p><b>Número interior: </b>" + r.num_interior + "</p>" +
                            "<p><b>Número exterior: </b>" + r.num_exterior + "</p>" +
                            "<p><b>Entre calles: </b>" + r.entre_calles + "</p>" +
                            "<p><b>Código postal: </b>" + r.codigo_postal + "</p>" +
                            "<p><b>Colonia: </b>" + r.colonia + "</p>" +
                            "<p><b>Estado: </b>" + r.estado + "</p>" +
                            "<p><b>País: </b>" + r.pais + "</p>" +
                            "<hr>";
                    });
                    // }
                }
                modalbody.append(content);
            }, 200);
        },
        error: function(error, exception) {
            alert('There was some error performing the AJAX call!' + exception);
        }
    });
}

function setCliente() {
    var token = $("input[name=_token]").val();
    var nombre = $("#txtNombre");
    var apellido = $("#txtApellido");

    var fecha = "";
    if ($("#txFecha").val() !== "") {
        date = new Date($('#txFecha').val());
        day = date.getDate() + 1;
        month = date.getMonth() + 1;
        year = date.getFullYear();
        fecha = [year, month, day].join('-');
    } else {
        fecha = "0000-00-00";
    }

    var curp = $("#txtCURP");
    var rfc = $("#txtRFC");
    var calle = $("#txtCalle");
    var ninterior = $("#txtNinterior");
    var nexterior = $("#txtNexterior");
    var entrecalles = $("#txtEntreCalles");
    var codigopostal = $("#txtCodigoPostal");
    var colonia = $("#txtColonia");
    var estado = $("#txtEstado");
    var ciudad = $("#txtCiudad");
    var pais = $("#txtPais");
    $.ajax({
        url: "/registrarCte",
        type: "post",
        data: {
            nombre: nombre.val(),
            apellido: apellido.val(),
            fecha: fecha,
            curp: curp.val(),
            rfc: rfc.val(),
            calle: calle.val(),
            ninterior: ninterior.val(),
            nexterior: nexterior.val(),
            entrecalles: entrecalles.val(),
            codigopostal: codigopostal.val(),
            colonia: colonia.val(),
            estado: estado.val(),
            ciudad: ciudad.val(),
            pais: pais.val(),
            _token: token
        },
        success: function(response) {
            setTimeout(function() {
                cargargestionarclientes();
            }, 200);
        },
        error: function(error, exception) {
            alert('There was some error performing the AJAX call!' + exception);
        }
    })

}

function deleteCliente(idCliente) {
    $("#borrar").click(function() {
        var token = $("input[name=_token]").val();
        $.ajax({
            url: "deleteCliente",
            type: "post",
            data: { id: idCliente, _token: token },
            success: function(response) {
                cargargestionarclientes();
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


} //Jorge

function tipoBusqueda() {
    setTimeout(function() {
        $("#txtNombre").attr("disabled", false)
        $("#txtFecha").attr("disabled", false)
        $("#btnVerificarNombre").attr("disabled", false)

        $("#porNombre").click(function() {
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
        $("#porCURP").click(function() {
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
        $("#porRFC").click(function() {
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
        $("#porNoCliente").click(function() {
            $("#txtNoCliente").attr("disabled", false)

            $("#btnVerificarNoCliente").attr("disabled", false)
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
} //Jorge

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

    tipoBusqueda()

    setTimeout(function(){
        $("#slctTipo").change(function(){
            var tipo = $(this).val();
            if (tipo == "credito"){
                $("#btnVerificarNombre").html("Verificar")
                $("#btnVerificarRFC").html("Verificar")
                $("#btnVerificarCURP").html("Verificar")
                $("#btnVerificarNoCliente").html("Verificar")
                
            } else if(tipo == "debito"){
                $("#btnVerificarNombre").html("Asignar")
                $("#btnVerificarRFC").html("Asignar")
                $("#btnVerificarCURP").html("Asignar")
                $("#btnVerificarNoCliente").html("Asignar")
            }
        })
        
    },400)
 
}

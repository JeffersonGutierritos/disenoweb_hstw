

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
    $(".main-header").css("color", "#dc3546")
    $(".fa-bars").css("filter", "invert(100%)")
}

function cargarinicio() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewInicio");
}

function cargargestionarclientes() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewGestionarClientes");
    setTimeout(function() {
        cargartablaclientes('');
    }, 500);
}

function cargartablaclientes(nomCliente) {
    var token = $("input[name=_token]").val();
    $.ajax({
        url: "/getClientes",
        type: "post",
        data: { nombre: nomCliente, _token: token },
        dataType: "json",
        success: function(response) {
            var cont = "";
            let nombres = $("#bodytabla");
            nombres.empty();
            if (response.length == 0) {
                cont = "<tr>" +
                    "<td colspan='9' style='text-align: center'>No hay registros para mostrar</td>" +
                    "</tr>"
            } else {
                $.each(response, function(i, r) {
                    cont += "<tr>" +
                        "<td>" + r.id_cliente + "</td>" +
                        "<td>" + r.nombres + "</td>" +
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
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
}

function autocompletado() {
    var options = {
        url: "getClientes",
        getValue: "nombres",
        placeholder: "Buscar un cliente por nombre.",
        list: {
            showAnimation: {
                type: "fade", //normal|slide|fade
                time: 100,
                callback: function() {}
            },
            hideAnimation: {
                type: "slide", //normal|slide|fade
                time: 100,
                callback: function() {}
            },
            onChooseEvent: function() {
                buscarCliente();
            },
            match: {
                enabled: true
            },
        },
        adjustWidth: false
    };
    $("#inputBuscar").easyAutocomplete(options);
}

function buscarCliente() {
    cargartablaclientes($("#inputBuscar").val());
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
                nombres.val(response[0].nombre);
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
                        cargartablaclientes('');
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
                cargartablaclientes('');
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
                cargartablaclientes('');
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
    setTimeout(function(){
        verBuro()
    },200)
} //Jorge



function tipoBusqueda() {
    setTimeout(function() {
        $("#txtNombre").attr("disabled", false)
        $("#txtFecha").attr("disabled", false)
        $("#btnVerificarNombre").attr("disabled", false)
        $("#txtApellidos").attr("disabled", false)

        $("#porNombre").click(function() {
            $("#txtNombre").attr("disabled", false)
            $("#txtApellidos").attr("disabled", false)
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
            $("#txtApellidos").attr("disabled", true)
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
            $("#txtApellidos").attr("disabled", true)
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
            $("#txtApellidos").attr("disabled", true)
            $("#txtFecha").attr("disabled", true)
            $("#btnVerificarNombre").attr("disabled", true)
        })
    }, 1000)

}

function cargarcalcularpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("calcularPrestamos");   
    
    $("#btnCalcular").click(function(){
        var nombre = $("#txtxNombre").val()

    })
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

    setTimeout(function(){
        $("#btnVerificarNoCliente").click(function(){
            var token = $("input[name=_token]").val();
            var id = $("#txtNoCliente").val();
            var tipo = $("#slctTipo").val();
            var compania = $("#slctCompania").val();
            var hoy = new Date();
            var day = hoy.getDate();
            var month = hoy.getMonth();
            var year = hoy.getFullYear();
            var fecha_venc = [year, month, day].join('-');
            
            
            $.ajax({
                url: "/verificarBuroNoCliente",
                type: "get",
                data: {numero:id, tipo:tipo, compania:compania, fecha:fecha_venc, _token:token},
                success: function(response) {
                    if(response == "True"){
                        alert("Tarjeta asignada con éxito.")
                    }else{
                        alert("Cliente no apto.")
                    }                            
                },
                error: function() {
                    alert('There was some error performing the AJAX call!');
                }
            });
        })
    }, 200)
}

function cargargestacob() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewGestionarCobranza");
}

function cargarasigtar() {
    $(".content-wrapper").empty();
    $(".content-wrapper").load("viewAsignarTarjetas");
    tipoBusqueda()
    asignarTarjetas()
    
 
}

unction verBuro(){
    //nombre
$('#btnVerificarNombre').click(function(){
    var nombres = $('#txtNombre').val();
    var apellidos = $('#txtApellidos').val();
    var token = $("input[name=_token]").val();
    var fecha = $("#txtFecha").val();
    

    $.ajax({
        url: "/verificarBuroNombre",
        type: "get",
        data: {nombre:nombres, apellido:apellidos, fecha:fecha, _token:token},
        success: function(response) {
            alert(response)
            console.log(response)
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
})
//curp
$('#btnVerificarCURP').click(function(){
    var token = $("input[name=_token]").val();
    var curp = $("#txtCURP").val();
    

    $.ajax({
        url: "/verificarBuroCURP",
        type: "get",
        data: {curp:curp, _token:token},
        success: function(response) {
            alert(response)
            console.log(response)
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
})
//rfc
$('#btnVerificarRFC').click(function(){
    var token = $("input[name=_token]").val();
    var rfc = $("#txtRFC").val();
    

    $.ajax({
        url: "/verificarBuroRFC",
        type: "get",
        data: {rfc:rfc, _token:token},
        success: function(response) {
            alert(response)
            console.log(response)
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
})
//no.cliente
$('#btnVerificarNoCliente').click(function(){
    var token = $("input[name=_token]").val();
    var nocliente = $("#txtNoCliente").val();
    
    
    $.ajax({
        url: "/verBuroNoCliente",
        type: "get",
        data: {numero:nocliente, _token:token},
        success: function(response) {
            setTimeout(function(){
                var content;
                let cb = $("#cardbody")
                cb.empty()

                content = '<div class="card">'+
                '<div class="card-header bg-danger">'+
                '<h3 class="header">Informacion del cliente</h3>'+
                '</div>'+
                '<div class="card-body">'+
                '<h4 class="header">Datos generales</h4>'+
                '<hr>'+
                '<div class="row">'+
                    '<div class="col-md-6 font-weight-bold">'+
                        '<p>Nombre del cliente:</p>'+
                        '<p>Fecha de nacimiento:</p>'+
                        '<p>RFC:</p>'+
                        '<p>Folio de consulta:</p>'+
                        '<p>Fecha de registro de BC:</p>'+
                    '</div>'+
                    
                    '<div class="col-md-6">'+
                        '<p>'+response[0].nombres+' '+response[0].apellidos+'</p>'+
                        '<p>'+response[0].fecha_nacimiento+'</p>'+
                        '<p>'+response[0].rfc+'</p>'+
                        '<p>'+response[0].folio+'</p>'+
                        '<p>'+response[0].fecha_registro+'</p>'+
                    '</div>'+
                '</div>'+
                '<br>'+
                '<h4 class="header">Domicilios Reportados</h4>'+
                '<hr>'+
                '<div class="row">'+
                    '<div class="col-md-6">'+
                       
                        
                        "<p><b>Calle: </b>" + response[0].calle + "</p>" +
                        "<p><b>Número interior: </b>" + response[0].num_interior + "</p>" +
                        "<p><b>Número exterior: </b>" + response[0].num_exterior + "</p>" +
                        "<p><b>Entre calles: </b>" + response[0].entre_calles + "</p>" +
                        "<p><b>Código postal: </b>" + response[0].codigo_postal + "</p>" +
                        "<p><b>Colonia: </b>" + response[0].colonia + "</p>" +
                        "<p><b>Estado: </b>" + response[0].estado + "</p>" +
                        "<p><b>País: </b>" + response[0].pais + "</p>" +
                            
                    '</div>'+
                '</div>'+
                '<br>'+
                '<h4 class="header">Resumen de créditos</h4>'+
                '<hr>'+
                '<div class="row">'+
                    '<div class="col-md-6">'+
                        '<p class="font-weight-bold">Créditos bancarios</p>'+
                        '<p>No se encontraron...</p>'+
                        '<p class="font-weight-bold">Créditos no bancarios</p>'+
                        '<p><b>Institucion: </b>'+response[0].nombre+'</p>'+
                        '<p><b>Codigo: </b>'+response[0].id_institucion+'</p>'+
                        '<p><b>Descripcion: </b>'+response[0].descripcion+'</p>'+
                        '<p><b>Estado: </b>'+response[0].estado+'</p>'+
                        '<p><b>comportamiento: </b>'+response[0].comportamiento+'</p>'+
                    '</div>'+
                '</div>'+
                '<br>'+
                '<div class="form-group">'+
                    '<label class="font-weight-bold" for="btnImprimir">Imprimir reporte:</label>'+
                    '<button role="button" class="btn btn-primary" id="btnImprimir"><i class="fas fa-print"></i></button>'+
                '</div>'+ 
                '</div>'+
                '</div>';

                cb.append(content);

                $("#btnImprmir").click(function(){
                    alert("hola")
                })
                                 
            
            }, 200)
            
            
        },
        error: function() {
            alert('There was some error performing the AJAX call!');
        }
    });
})

}
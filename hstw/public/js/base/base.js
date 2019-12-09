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
    //$(".content-wrapper").load("viewGestionarClientes");

      $.ajax({
        
        type: 'GET',
        url: 'getClientes',
        dataType: 'json',
        
        success: function(data){
            console.log(data)
            
            $(".content-wrapper").load("viewGestionarClientes");
            var tbody = $("#tbody")
            var cont = ''

            $.each(data, function(i,r){
                cont+='<tr>'+
                '<th scope="row">'+r.id_cliente+'</th>'+
                    '<td>'+r.nombre+'</td>'+
                    '<td>'+r.apellidos+'</td>'+
                    '<td>'+r.fecha_nacimiento+'</td>'+
                    '<td>'+r.curp+'</td>'+
                    '<td>'+r.rfc+'</td>'+
                '</tr>'
            });
            tbody.append(cont);
           
        },
        error: function(){
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

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
    $(".content-wrapper").html("<h1>Bienvenido a HSTW</h1>");
}

function cargargestionarclientes() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Gestionar CLIETNEEEEEES</h1>");
}

function cargarverificarburo() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Verificar buró de crédito</h1>");
}

function cargarcalcularpre() {
    $(".content-wrapper").empty();
    $(".content-wrapper").html("<h1>Calcular préstamo</h1>");
}

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

$(window).ready(function(){

});

$("td #btnEliminar").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    var idCliente=$('#bodytabla tr').find('td:first-child').html();
    
    
});
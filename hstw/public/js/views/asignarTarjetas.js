function asignarTarjetas(){
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
                data: {numero:id, _token:token},
                success: function(response) {
                    if(response == "True"){
                        $.ajax({
                            url: "/setTarjeta",
                            type: "get",
                            data: {numero:id, tipo:tipo, compania:compania, fecha:fecha_venc, _token:token},
                            success: function(response) {
                                alert("Tarjeta asignada con éxito.")                    
                            },
                            error: function() {
                                alert('There was some error performing the AJAX call!');
                            }
                        });
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
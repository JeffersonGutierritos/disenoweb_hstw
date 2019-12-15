<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>pdf</title>
</head>
<body>
    
    <div class="card">
        <div class="card-header bg-danger">
        <h3 class="header">Informacion del cliente</h3>
        </div>
        <div class="card-body">
        <h4 class="header">Datos generales</h4>
        <hr>
        <div class="row">
            <div class="col-md-6 font-weight-bold">
                <p><b>Nombre del cliente: </b></p>
                <p><b>Fecha de nacimiento: </b></p>
                <p><b>RFC: </b></p>
                <p><b>Folio de consulta: </b></p>
                <p><b>Fecha de registro de BC: </b></p>
            </div>
            
        </div>
        <br>
        <h4 class="header">Domicilios Reportados</h4>
        <hr>
        <div class="row">
            <div class="col-md-6">
                            
                <p><b>Calle: </b> + response[0].calle + </p> 
                <p><b>Número interior: </b> + response[0].num_interior </p>
                <p><b>Número exterior: </b> + response[0].num_exterior </p>
                <p><b>Entre calles: </b> + response[0].entre_calles + "</p>
                <p><b>Código postal: </b> + response[0].codigo_postal + "</p>
                <p><b>Colonia: </b> + response[0].colonia + "</p>
                <p><b>Estado: </b> + response[0].estado + "</p>
                <p><b>País: </b> + response[0].pais + "</p>
                    
            </div>
        </div>
        <br>
        <h4 class="header">Resumen de créditos</h4>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <p class="font-weight-bold">Créditos bancarios</p>
                <p>No se encontraron...</p>
                <p class="font-weight-bold">Créditos no bancarios</p>
                <p><b>Institucion: </b>'+response[0].nombre+'</p>
                <p><b>Codigo: </b>'+response[0].id_institucion+'</p>
                <p><b>Descripcion: </b>'+response[0].descripcion+'</p>
                <p><b>Estado: </b>'+response[0].estado+'</p>
                <p><b>comportamiento: </b>'+response[0].comportamiento+'</p>
            </div>
        </div>
        <br>
    </div>
    
    
</body>
</html>
<div class="container-fluid py-3">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header bg-danger">
                    <h3 class="header">Verificar Buró de Crédito</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <p class="font-weight-bold">Verificar por:</p>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-danger" id="porNombre">Nombre</button>
                                <button type="button" class="btn btn-danger" id="porCURP">CURP</button>
                                <button type="button" class="btn btn-danger" id="porRFC">RFC</button>
                                <button type="button" class="btn btn-danger" id="porNoCliente">No. Cliente</button>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <form action="">
                        <div class="form-group">      
                            <div class="row">
                                <div class="col-md-5">
                                    <label for="txtNombre">Nombre/s</label>
                                    <input id="txtNombre" type="text" class="form-control" placeholder="Nombre" disabled>
                                </div>
                                <div class="col-md-5">
                                    <label for="txtApellidos">Apellidos</label>
                                    <input id="txtApellidos" type="text" class="form-control" placeholder="Apellidos" disabled>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-md-7">
                                        <label for="txtFecha">Fecha de nacimiento</label>
                                        <input id="txtFecha" type="date" class="form-control" disabled>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-success" id="btnVerificarNombre" disabled>Verificar</button>
                    </form>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <form action="">
                                <div class="form-group">
                                    <label for="txtCURP">CURP</label>
                                    <input id="txtCURP" type="text" class="form-control" placeholder="CURP" disabled>
                                </div>
                                <button class="btn btn-success" id="btnVerificarCURP" disabled>Verificar</button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <form action="">
                                <div class="form-group">
                                    <label for="txtNoCliente">No. Cliente</label>
                                    <input id="txtNoCliente" type="text" class="form-control" placeholder="No. Cliente" disabled>
                                </div>
                                <button class="btn btn-success" id="btnVerificarNoCliente" disabled>Verificar</button>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <form action="">
                                <div class="form-group">
                                    <label for="txtRFC">RFC</label>
                                    <input id="txtRFC" type="text" class="form-control" placeholder="RFC" disabled>
                                </div>
                                <button class="btn btn-success" id="btnVerificarRFC" disabled>Verificar</button>
                            </form>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
        <div class="col-md-5">
            <div class="card">
                <div class="card-header bg-danger">
                    <h3 class="header">Informacion del cliente</h3>
                </div>
                <div class="card-body">
                    <h4 class="header">Datos generales</h4>
                    <hr>
                    <div class="row">
                        <div class="col-md-6 font-weight-bold">
                            <p>Nombre del cliente:</p>
                            <p>Fecha de nacimiento:</p>
                            <p>RFC:</p>
                            <p>Folio de consulta:</p>
                            <p>Fecha de registro de BC:</p>
                        </div>
                        
                        <div class="col-md-4">
                            <p>jorge</p>
                            <p>1999-06-04</p>
                            <p>r342234t</p>
                            <p>23</p>
                            <p>2019-06-12</p>
                        </div>
                    </div>
                    <br>
                    <h4 class="header">Domicilios Reportados</h4>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Domicilio 1</p>
                            <p>Domicilio 2</p>
                        </div>
                    </div>
                    <br>
                    <h4 class="header">Notas:</h4>
                    <hr>
                    <div class="row"> 
                        <div class="col-md-6">
                            Es 1 estupido
                        </div>
                    </div>
                    <br>
                    <h4 class="header">Resumen de créditos</h4>
                    <hr>
                    <div class="row">
                        <dvi class="col-md-6">
                            <p class="font-weight">Créditos bancarios</p>

                            <p class="font-weight">Créditos no bancarios</p>
                        </dvi>
                    </div>
                    <br>
                    <label class="font-weight-bold" for="btnImprimir">Imprimir reporte:</label>
                    <a href="#" role="button" class="btn btn-primary" id="btnImprimir"><i class="fas fa-print"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
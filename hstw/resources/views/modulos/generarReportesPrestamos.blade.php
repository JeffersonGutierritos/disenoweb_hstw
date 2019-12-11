<div class="container-fluid py-3">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-danger">
                        <h3 class="header">Generar Reporte de préstamo</h3>
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
                                <div class="col-md-7">
                                    <label for="txtNombre">Nombre del cliente</label>
                                    <input id="txtNombre" type="text" class="form-control" placeholder="Nombre y apellidos" disabled>
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
                        <h3 class="header">Reporte de Préstamo</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="header">Datos generales</h4>
                        <hr>
                        <div class="row">
                            <div class="col-md-6 font-weight-bold">
                                <p>Nombre del cliente:</p>
                                <p>Años para pagar:</p>
                                <p>Tipo de pago:</p>
                                <p>Tasa de interés:</p>
                                <p>Monto del prestamos:</p>
                                <p>Monto a pagar:</p>
                            </div>
                            
                            <div class="col-md-4">
                                <p>jorge argumaniz</p>
                                <p>10 años</p>
                                <p>no se</p>
                                <p>5%</p>
                                <p>$12313</p>
                                <p>$41212</p>
                            </div>
                        </div>
                        <br>
                        <h4 class="header">Pagos</h4>
                        <hr>
                        <div class="row">
                            <div class="col-md-5 font-weight-bold">
                                <p>Numero de pagos:</p>
                            </div>
                            <div class="col-md-5">
                                <p>5</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10">
                    <table class="table table-responsive">
                            <thead>
                                <tr class="bg-danger">
                                  <th scope="col">#</th>
                                  <th scope="col">Fecha de pago</th>
                                  <th scope="col">Cuota a pagar</th>
                                  <th scope="col">Fecha de Nacimiento</th>
                                  <th scope="col">Interés</th>
                                  <th scope="col">Capital Amortizado</th>
                                  <th scope="col">Capital final</th>
                                </tr>
                              </thead>
                              <tbody id="bodytabla">
                              
                              
                              </tbody>
                      </table>
            </div>
        </div>
    </div>
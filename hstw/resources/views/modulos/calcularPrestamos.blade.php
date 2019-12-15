<div class="container py-3">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header bg-danger">
                    <h3 class="header">Calcular prestamos</h3>
                </div>
                <div class="card-body">
                    <form action="">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-8">
                                    <label for="txtNombre">Nombre del cliente</label>
                                    <input type="text" placeholder="Nombre del cliente" id="txtNombre" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="txtCantidad">Cantidad</label>
                                    <input type="text" class="form-control" id="txtCantidad" placeholder="Cantidad">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Interes(%)</label>
                                    <input type="text" class="form-control" id="txtInteres" placeholder="Interes(%)">
                                    <!--tipo, mensualidad-->
                                </div>
                       
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="txtCantidad">Plazo de amortización</label>
                                    <input type="text" class="form-control" id="txtPlazo" placeholder="Plazo de amortizacion">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Tipo de pago</label>
                                    <select name="tipoPago" id="tipoPago" class="form-control">
                                        <option value="años">Quincenal</option>
                                        <option value="meses">Mensual</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <button class="btn btn-primary" id="btnCalcular">Calcular</button>
                            </div>
                        </div>   
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
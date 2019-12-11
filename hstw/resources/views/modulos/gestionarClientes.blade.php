<div class="container-fluid py-3">
  <div class="row">
    <div class="col-md-3 col-sm-1">
      <div class="input-group mb-1">
        <input type="text" class="form-control" placeholder="Buscar cliente por nombre" id="inputBuscar">
        <div class="input-group-append">
          <button class="btn btn-danger" type="button" id="btnBuscar">
            <i class="fas fa-fw fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <button type="button" class="btn-danger btn" id="btnRegistrar" data-toggle="modal" data-target="#modalRegistrar">Registrar Cliente</button>
    </div>
  </div>
  <div class="row">
      <div class="col-md-12">
              <table class="table table-hover table-responsive">
                    <thead>
                        <tr class="bg-danger">
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellidos</th>
                          <th scope="col">Fecha de Nacimiento</th>
                          <th scope="col">CURP</th>
                          <th scope="col">RFC</th>
                          <th scope="col">Direccion/es</th>
                          <th scope="col">Editar</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody id="bodytabla">


                      </tbody>
              </table>
      </div>
  </div>
</div>

<!-- Modal Confirmacion -->
<div class="modal fade" id="modalRegistrar" tabindex="-1" role="dialog" aria-labelledby="modalConfirmLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title" id="modalConfirmLabel">Registrar Cliente</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="row">
              <div class="col-md-12">
                  <h5 class="header">Datos generales</h5>
                  <hr>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form group">
                  <label for="txtNombre">Nombre</label>
                  <input type="text" id="txtNombre" class="form-control" placeholder="Nombre">
                </div>
              </div>
              <div class="col-md-6">
                  <div class="form group">
                    <label for="txtApellido">Apellidos</label>
                    <input type="text" id="txtApellido" class="form-control" placeholder="Apellidos">
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                  <label for="txtFecha">Fecha de Nacimiento</label>
                  <input type="date" id="txFecha" class="form-control" placeholder="Fecha">
              </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label for="txtCURP">CURP</label>
                    <input type="text" id="txtCURP" class="form-control" placeholder="CURP">
                </div>
                <div class="col-md-6">
                    <label for="txtRFC">RFC</label>
                    <input type="text" id="txtRFC" class="form-control" placeholder="RFC">
                </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <br>
                      <h5 class="header">Direccion</h5>
                      <hr>
                  </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                    <label for="txtCalle">Calle</label>
                    <input type="text" id="txtCalle" class="form-control" placeholder="Calle">
                </div>
                <div class="col-md-3">
                    <label for="txtNinterior">N. Interior</label>
                    <input type="number" id="txtNinterior" class="form-control" placeholder="#">
                </div>
                <div class="col-md-3">
                    <label for="txtNexterior">N. Exterior</label>
                    <input type="number" id="txtNexterior" class="form-control" placeholder="#">
                </div>
              </div>
              <div class="row">
                <div class="col-md-7">
                    <label for="txtEntreCalles">Entre Calles</label>
                    <input type="text" id="txtEntreCalles" class="form-control" placeholder="Entre Calles">
                </div>
                <div class="col-md-5">
                    <label for="txtCodigoPostal">Codigo Postal</label>
                    <input type="text" id="txtCodigoPostal" class="form-control" placeholder="Codigo Postal">
                </div>
              </div>
              <div class="row">
                  <div class="col-md-6">
                      <label for="txtColonia">Colonia</label>
                      <input type="text" id="txtColonia" class="form-control" placeholder="Colonia">
                  </div>
                  <div class="col-md-6">
                      <label for="txtEstado">Estado</label>
                      <input type="text" id="txtEstado" class="form-control" placeholder="Estado">
                  </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="txtCiudad">Ciudad</label>
                        <input type="text" id="txtCiudad" class="form-control" placeholder="Ciudad">
                    </div>
                    <div class="col-md-6">
                        <label for="txtPais">Pais</label>
                        <input type="text" id="txtPais" class="form-control" placeholder="Pais">
                    </div>
                  </div>
          </form>
        </div>
        <div class="modal-footer">
          <div class="col-6">
              <button type="button" class="btn btn-block btn-primary" data-dismiss="modal" id="modalSi">Confirmar</button>
          </div>
          <div class="col-6">
              <button type="button" class="btn btn-block btn-danger" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
</div>
<!-- Modal Registrar Cliente -->
<div class="modal fade" id="modalConfirm" tabindex="-1 " role="dialog" aria-labelledby="modalConfirmLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalConfirmLabel">Eliminar Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Estas a punto de eliminar un Cliente. ¿Estas seguro?
      </div>
      <div class="modal-footer">
        <div class="col-6">
          <button type="button" class="btn btn-block btn-primary" data-dismiss="modal" id="modalSi">Si</button>
        </div>
        <div class="col-6">
          <button type="button" class="btn btn-block btn-danger" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
</div>
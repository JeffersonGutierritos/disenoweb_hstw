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
      <button type="button" class="btn-danger btn" id="btnRegistrarCliente">Registrar Cliente</button>
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

<!-- Modal -->
<div class="modal fade" id="modalConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar Cliente</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Estas a punto de eliminar un Cliente. ¿Estas seguro?
        </div>
        <div class="modal-footer">
          <div class="col-6">
              <button type="button" class="btn btn-block btn-success" data-dismiss="modal" id="modalSi">Si</button>
          </div>
          <div class="col-6">
              <button type="button" class="btn btn-block btn-danger" data-dismiss="modal">No</button>
          </div>
          
          
        </div>
      </div>
    </div>


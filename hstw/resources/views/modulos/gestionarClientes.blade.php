<div class="container">
  <div class="row">
    <div class="col-md-3 col-sm-1">
      <div class="input-group mb-1">
        <input type="text" class="form-control" placeholder="Buscar cliente por nombre" id="inputBuscar">
        <div class="input-group-append">
          <button class="btn btn-outline-danger" type="button" id="btnBuscar">
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
      <div class="col-md-8">
              <table class="table table-lg table-responsive table-striped bg-danger">
                    <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellidos</th>
                          <th scope="col">Fecha de Nacimiento</th>
                          <th scope="col">CURP</th>
                          <th scope="col">RFC</th>
                          <th scope="col">Direccion</th>
                          <th scope="col">Editar</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody id="tbody">
                      
                      
                      </tbody>
              </table>
      </div>
  </div>
</div>
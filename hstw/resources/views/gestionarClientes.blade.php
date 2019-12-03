<div class="container">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12">
                <table class="table table-sm table-dark">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">CURP</th>
                            <th scope="col">RFC</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach($clientes as $cliente)
                                <tr>
                                    <th scope="row">$user->id_cliente</th>
                                    <td>$user->nombre</td>
                                    <td>$user->apellidos</td>
                                    <td>$user->fecha_nacimiento</td>
                                    <td>$user->curp</td>
                                    <td>$user->rfc</td>
                                </tr>
                            @endforeach
                          
                          
                        </tbody>
                      </table>
        </div>
    </div>
</div>
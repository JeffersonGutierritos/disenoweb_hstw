<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


        <link href="/css/bootstrap.css" rel="stylesheet">
    </head>

    <body style="background-color: #FF0000; ">
    <span class="navbar-toggler-icon"></span>

  <div  class="container"  style="background-color:transparent; padding-left: 300px; padding-right: 300px;">
   <div class="card" style="background-color: white; border-color:#FF0000;border-width: 3px; ">


  <div class="card-body">
  <div class="text-center">
       <img src="/img/logohstw.png" width="150" rigth="150">
    <h2 style="color: #69291B">INICIAR SESION </h2>
    </div>

   <form class="login" method="POST" action="/login">
    {{csrf_field()}}

    <div class="form-group">
      <label for="num" style="color:#030201; ">Usuario</label>
      <i class="fas fa-user"></i>
      <input type="number" class="form-control" placeholder="Ingrese Usuario" name="num">
    </div>
    <div class="form-group">
      <label for="pass" style="color:#030201 ">Contraseña</label>
      <input type="password" class="form-control" placeholder="Ingresa Contraseña" name="pass">
       </div>
    <div class="form-check">
    </div>
    <br>
    @if(Session::has("mensaje"))
    <div clas="alertn alert-danger" role="alert">
      <strong>{{Session::get("mensaje")}}</strong>
    </div>
    @endif
    <div class="text-center">
      <button type="submit" class="btn btn-block" style="background-color: #FF0000; color: white">Iniciar sesión</button><br>
      <a href="/plataforma/identificacion" style="color:#030201">¿Olvidaste tus datos?</a>
    </div>

    </form>
  </div>
</div>
</div>

       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


    </body>

</html>

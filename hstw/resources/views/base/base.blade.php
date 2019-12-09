@extends('adminlte::page')

@section('title', 'HSTW')
<link rel="icon" type="image/x-icon" href="img/logohstw.ico">
@section('content_header')
    <input type="hidden" name="_token" value="{{csrf_token()}}">
@stop

@section('content')
{{--    <p>Contenido</p>--}}
@stop

@section('css')
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="css/base/base.css">
@stop

@section('js')
    <script src="js/bootstrap/bootstrap.js"></script>
    <script src="js/jquery-3.4.1.js"></script>
    <script src="js/views/base.js"></script>
    <script src="js/views/gestionarClientes.js"></script>
@stop

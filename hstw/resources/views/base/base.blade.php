@extends('adminlte::page')

@section('title', 'HSTW')

@section('content_header')
    <h1>Bienvenido a HSTW</h1>
@stop

@section('content')
    <p>Welcome to this beautiful admin panel.</p>
@stop

@section('css')
    @push('css')
    @push('js')
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop

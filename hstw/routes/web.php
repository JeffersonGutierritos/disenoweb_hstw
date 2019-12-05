<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('base.base');
});
Route::get('/hstw', function () {
    return view('base.base');
});
Route::get('getClientes', 'ClienteController@getClientes');

Route::get('viewGestionarClientes','ClienteController@getViewClientes');
Route::get('viewInicio', function(){
    return view('inicio');
});
Route::get('viewGestionarClientes', function(){
    return view('gestionarClientes');
});
Route::get('/login', function () {
    return view('login.login');
});
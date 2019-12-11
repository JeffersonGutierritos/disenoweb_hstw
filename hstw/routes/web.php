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
//Controllers
Route::get('getClientes', 'ClienteController@getClientes');


//views


Route::get('/login', function () {
    return view('login.login');
});
Auth::routes();
Route::group(['middleware' => ['auth']], function () {
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/logout', 'HomeController@logout')->name('logout');
    Route::get('/', function () {
        return view('base.base');
    });
    Route::get('/hstw', function () {
        return view('base.base');
    });
    Route::get('getClientes', 'ClienteController@getClientes');
    Route::get('viewGestionarClientes', function () {
        return view('modulos.gestionarClientes');
    });
    Route::get('viewGestionarCobranza', function(){
        return view('modulos.gestionarAreaCobranza');
    });

    Route::post('getdireccioncte', 'ClienteController@getdireccioncte');
    Route::post('deleteCliente', 'ClienteController@deleteCliente');
    Route::get('viewVerificarBuro', 'ClienteController@getviewverificarburo');
    Route::get('viewGenerarReportesPrestamos', function(){
        return view('modulos.generarReportesPrestamos');
    });
    Route::get('viewAsignarPrestamos', function(){
        return view('modulos.asignarPrestamos');
    });
    Route::get('viewAsignarTarjetas', function(){
        return view('modulos.asginarTarjetas');
    });
    Route::get('viewInicio', function(){
        return view('inicio');
    });
});

<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function getClientes(Request $request){
        $clientes = DB::table('clientes')->get();

        return $clientes;
    }
    public function getViewClientes(Request $request){

        return view("gestionarClientes");
    }

    public function getviewverificarburo(){
        return view('modulos.verificarBuroCredito');
    }
}
 


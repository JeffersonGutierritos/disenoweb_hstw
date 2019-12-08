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

<<<<<<< HEAD
        return view("modulos.gestionarClientes");
=======
    public function  getviewclientes(){
        return view('gestionarClientes');
>>>>>>> 1a49917d7d140466c91cc2c52ae873b2c88ffc4c
    }
}

<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function getClientes(){
        $clientes = DB::table('clientes')->get();

        return $clientes;
    }
    public function getViewClientes(){

        return view("modulos.gestionarClientes");
    }

    public function getviewverificarburo(){
        return view('modulos.verificarBuroCredito');
    }

    public function deleteCliente(Request $r){
        dd($r->input("id"));
        $id = 1;
        DB::table('clientes')->where('id','=', $id)->delete();
        
    }
}
 


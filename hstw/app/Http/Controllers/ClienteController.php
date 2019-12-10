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

        $id=intval($r->id);
//        dd($id);
        $deleted = DB::statement('delete from clientes where id_cliente ='.$id);
//         DB::delete(DB::raw("delete from clientes where id_cliente= "+$id));
        dd($deleted);
        return $deleted;
    }
}



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
        $deleted = DB::statement('delete from clientes where id_cliente ='.$id);
        return $deleted;
    }

    public function getdireccioncte(Request $r){
        $id=intval($r->id);
        $consulta = DB::select('select direcciones.calle, direcciones.num_interior, direcciones.num_exterior, direcciones.num_exterior, '.
        'direcciones.entre_calles, direcciones.codigo_postal,'.
        'direcciones.colonia, direcciones.estado, direcciones.pais '.
        'from direcciones '.
        'inner join clientes on direcciones.clientes_id_cliente = clientes.id_cliente '.
        'where direcciones.clientes_id_cliente='.$id);
        return $consulta;
    }

}



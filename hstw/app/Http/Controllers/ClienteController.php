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
        $deleted = DB::statement('delete from hstw.clientes where clientes.id_cliente ='.$id);
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

    public function getCliente(Request $r){
        $id=intval($r->id);
        $consulta = DB::select('select direcciones.calle, direcciones.num_interior, direcciones.num_exterior, direcciones.num_exterior, '.
        'direcciones.entre_calles, direcciones.codigo_postal, direcciones.ciudad, '.
        'direcciones.colonia, direcciones.estado, direcciones.pais, clientes.nombre, clientes.curp, clientes.fecha_nacimiento, clientes.apellidos, clientes.rfc '.
        'from direcciones '.
        'inner join clientes on direcciones.clientes_id_cliente = clientes.id_cliente '.
        'where direcciones.clientes_id_cliente='.$id.' limit 1;');
        return $consulta;
    }

    public function editarCte(Request $r){
        $id=intval($r->id);
        DB::table('clientes')
            ->where('id_cliente',$id)
            ->update(['nombre' => $r->nombre,
                'apellidos'=>$r->apellido,
                'fecha_nacimiento'=>$r->fecha,
                'curp'=>$r->curp,
                'rfc'=>$r->rfc]);
        DB::table('direcciones')
            ->where('clientes_id_cliente', $id)
            ->update(['calle' => $r->calle,
                'num_interior'=>$r->ninterior,
                'num_exterior'=>$r->nexterior,
                'entre_calles'=>$r->entrecalles,
                'codigo_postal'=>$r->codigopostal,
                'colonia'=>$r->colonia,
                'estado'=>$r->estado,
                'ciudad'=>$r->ciudad,
                'pais'=>$r->pais]);
    }
    public function registrarCte(Request $r){

        $id=DB::table('clientes')->insertGetId(
            [  'nombre' => $r->nombre,
                'apellidos'=>$r->apellido,
                'fecha_nacimiento'=>$r->fecha,
                'curp'=>$r->curp,
                'rfc'=>$r->rfc]
        );
        DB::table('direcciones')
            ->insertGetId(['calle' => $r->calle,
                'num_interior'=>$r->ninterior,
                'num_exterior'=>$r->nexterior,
                'entre_calles'=>$r->entrecalles,
                'codigo_postal'=>$r->codigopostal,
                'colonia'=>$r->colonia,
                'estado'=>$r->estado,
                'ciudad'=>$r->ciudad,
                'pais'=>$r->pais,
                'clientes_id_cliente'=>$id]);
    }

}



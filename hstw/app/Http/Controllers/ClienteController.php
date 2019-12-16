<?php

namespace App\Http\Controllers;

use Dompdf\Dompdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;
use PDF;

use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function getClientes(Request $r){
        $nombre=$r->nombre;
        $clientes = DB::table('clientes')
        ->where('nombres','like','%'.$nombre.'%')
        ->get();
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
        'direcciones.colonia, direcciones.estado, direcciones.pais, clientes.nombres, clientes.curp, clientes.fecha_nacimiento, clientes.apellidos, clientes.rfc '.
        'from direcciones '.
        'inner join clientes on direcciones.clientes_id_cliente = clientes.id_cliente '.
        'where direcciones.clientes_id_cliente='.$id.' limit 1;');
        return $consulta;
    }

    public function editarCte(Request $r){
        $id=intval($r->id);
        DB::table('clientes')
            ->where('id_cliente',$id)
            ->update(['nombres' => $r->nombre,
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
            [  'nombres' => $r->nombre,
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
    public function verificarBuroNombre(Request $r){
        $verificacion = "True";
        $sql = DB::select('select clientes_has_instituciones.comportamiento from clientes inner join direcciones on direcciones.clientes_id_cliente = clientes.id_cliente inner join'.
        ' clientes_has_instituciones on clientes.id_cliente = clientes_has_instituciones.id_cliente inner join'.
        ' instituciones on clientes_has_instituciones.id_institucion = instituciones.id_institucion'.
        " where clientes.nombres = '$r->nombre' and clientes.apellidos = '$r->apellido' and clientes.fecha_nacimiento = '$r->fecha'");

        foreach ($sql as $estado)
            if($estado->comportamiento == "rojo")
                $verificacion = "False";
            else{

            }
            
        return $verificacion;
    }
    public function verificarBuroRFC(Request $r){
        $verificacion = "True";
        $sql = DB::select('select clientes_has_instituciones.comportamiento from clientes inner join direcciones on direcciones.clientes_id_cliente = clientes.id_cliente inner join'.
        ' clientes_has_instituciones on clientes.id_cliente = clientes_has_instituciones.id_cliente inner join'.
        ' instituciones on clientes_has_instituciones.id_institucion = instituciones.id_institucion'.
        " where clientes.rfc = '$r->rfc'");

        foreach ($sql as $estado)
            if($estado->comportamiento == "rojo")
                $verificacion = "False";
            
        return $verificacion;
    }
    public function verificarBuroCURP(Request $r){
        $verificacion = "True";
        $sql = DB::select('select clientes_has_instituciones.comportamiento from clientes inner join direcciones on direcciones.clientes_id_cliente = clientes.id_cliente inner join'.
        ' clientes_has_instituciones on clientes.id_cliente = clientes_has_instituciones.id_cliente inner join'.
        ' instituciones on clientes_has_instituciones.id_institucion = instituciones.id_institucion'.
        " where clientes.curp = '$r->curp'");

        foreach ($sql as $estado)
            if($estado->comportamiento == "rojo")
                $verificacion = "False";
            
        return $verificacion;
    }
    public function verificarBuroNoCliente(Request $r){
        $verificacion = "True";
        $numero = intval($r->numero);
        $sql = DB::select('select clientes_has_instituciones.comportamiento from clientes inner join direcciones on direcciones.clientes_id_cliente = clientes.id_cliente inner join'.
        ' clientes_has_instituciones on clientes.id_cliente = clientes_has_instituciones.id_cliente inner join'.
        ' instituciones on clientes_has_instituciones.id_institucion = instituciones.id_institucion'.
        " where clientes.id_cliente = ".$numero);

        if($r->tipo == "credito"){
            foreach ($sql as $estado)
                if($estado->comportamiento == "rojo")
                    $verificacion = "False";
        }


        return $verificacion;
    }

    public function setTarjeta(Request $r){
        DB::table('tarjetas')->insertGetId(
            ['clientes_id_cliente' => $r->numero,
            'tipo_tarjeta'=>$r->tipo,
            'fecha_vencimiento'=>,
            'compania_servicio'=>$r->compania]);
    }

    public function verBuroNoCliente(Request $r){
        
        $id=DB::table('consultas_buro')->insertGetId(
            ['id_cliente' => $r->numero]);

        $numero = intval($r->numero);
        $sql = DB::select('select * from clientes inner join direcciones on direcciones.clientes_id_cliente = clientes.id_cliente inner join'.
        ' clientes_has_instituciones on clientes.id_cliente = clientes_has_instituciones.id_cliente inner join'.
        ' instituciones on clientes_has_instituciones.id_institucion = instituciones.id_institucion inner join consultas_buro on clientes.id_cliente = consultas_buro.id_cliente'.
        ' inner join buro_credito on clientes.id_cliente = buro_credito.clientes_id_cliente'.
        " where clientes.id_cliente = ".$numero." and consultas_buro.folio = ".$id);
            
        return $sql;
    }

    public function pdfBuro(Request $r){
        
        $pdf = PDF::loadView('modulos.pdfBuroCredito');
        return $pdf->stream();
        
    }

}



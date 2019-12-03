<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function getClientes(){
        $clientes = DB::table('clientes')->get();

        return $clientes;
    }
}   

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consulta extends Model
{
    protected $primaryKey = 'folio';
    protected $table = 'consultas_buro';
    public $timestamps = false;
}

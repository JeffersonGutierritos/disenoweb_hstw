<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Direccion extends Model
{
    protected $table = 'direcciones';
    public $timestamps = false;

    public function clientes(){
        return $this->belongsToMany('App\Clientes');
    }

}

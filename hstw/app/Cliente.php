<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = 'clientes';
    public $timestamps = false;

    public function direcciones(){
        return $this->belongsToMany('App\Direccion');
    }
     
}

<?php

use Illuminate\Database\Eloquent\Model as Eloquent;

class Customer extends Eloquent {

    protected $table = 'customers';
    protected $fillable = ['name', 'contact'];

}

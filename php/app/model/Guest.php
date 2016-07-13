<?php

use Illuminate\Database\Eloquent\Model as Eloquent;

class Guest extends Eloquent {

    protected $table = 'guests';
    protected $fillable = ['name', 'user_agent'];

}

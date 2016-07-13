<?php

use Illuminate\Database\Eloquent\Model as Eloquent;



class Album extends Eloquent {

    protected $table = 'albums';
    protected $fillable = ['title', 'categoty_id'];

}

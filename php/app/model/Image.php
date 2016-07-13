<?php

use Illuminate\Database\Eloquent\Model as Eloquent;

class Image extends Eloquent {

    protected $table = 'images';
    protected $fillable = ['full', 'mini','album_id','position_index'];
	
}

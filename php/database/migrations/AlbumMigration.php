<?php

use Illuminate\Database\Capsule\Manager as Capsule;


class AlbumMigration {
    function run()
    {
        Capsule::schema()->dropIfExists('albums');
        Capsule::schema()->create('albums', function ($table) {
            $table->increments('id');
            $table->string('name');
            $table->string('category');
            $table->timestamps();

/*            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');*/
        });
    }
}
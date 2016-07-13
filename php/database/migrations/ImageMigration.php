<?php

use Illuminate\Database\Capsule\Manager as Capsule;


class ImageMigration {
    function run()
    {
        Capsule::schema()->dropIfExists('images');
        Capsule::schema()->create('images', function ($table) {
            $table->increments('id');
            $table->integer('album_id')->unsigned();
            $table->string('full');
            $table->string('mini');
            $table->integer('position_index');
            $table->string('name');
            $table->timestamps();


            /*            $table->foreign('category_id')
                            ->references('id')
                            ->on('categories')
                            ->onDelete('cascade');*/
        });
    }
}
<?php

use Illuminate\Database\Capsule\Manager as Capsule;


class GuestMigration {
    function run()
    {
        Capsule::schema()->dropIfExists('guests');
        Capsule::schema()->create('guests', function($table) {
            $table->increments('id');
            $table->string('name')->default('guest');
            $table->string('user_agent');
            $table->timestamps();
        });
    }
}

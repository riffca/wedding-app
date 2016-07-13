<?php

use Illuminate\Database\Capsule\Manager as Capsule;

class CustomerMigration {
    function run()
    {
        Capsule::schema()->dropIfExists('customers');
        Capsule::schema()->create('customers', function($table) {
            $table->increments('id');
            $table->string('name');
            $table->string('contact');
            $table->timestamps();
        });
    }
}
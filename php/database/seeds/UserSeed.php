<?php

class UserSeed {

    function run()
    {
        User::create([
           "username" => "admin",
            "password" => "password"
        ]);
    }
}

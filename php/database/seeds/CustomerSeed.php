<?php

class CustomerSeed {

    function run()
    {

        for($i = 1; $i<11; $i++) {

            Customer::create([
                "name" => "Sasha - {$i}",
                "contact" => $i + 5000
            ]);
        }
    }
}

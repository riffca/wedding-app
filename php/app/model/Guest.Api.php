<?php


$app->group('/api/guest', function(){

    $this->post('/new',function($req,$res){
        $data = $req->getParsedBody();
        Guest::create($data);
        return $res->write(Guest::count());
    });
});
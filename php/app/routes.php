<?php

$app->post('/api/auth/check', function($request, $response){

    $data = $request->getParsedBody();
    $password = $data['password'];
    $token = getenv('AUTH_KEY');

    if(!$password || $password != $token) {
        return $response->withJson(['success' => false, 'message' => 'Не получается!']);
    } else {
        return $response->withJson(['success' => true, 'token' => $token, 'message' => 'Все получилось!']);
    }

});

require __DIR__ . '/model/Album.Api.php';
require __DIR__ . '/model/Guest.Api.php';
require __DIR__ . '/model/Customer.Api.php';

$app->get('/phpinfo', function ($request, $response) {
    phpinfo();
});

$app->get('/what', function ($request, $response) {
    return "hello";
});


$app->get('/[{params:.*}]', function ($request, $response) {
    return $this->renderer->render($response, 'index.phtml');
});

/*$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");
    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});*/

<?php
// request customer
$app->post('/api/customer/request', function($req, $res){

    $data = $req->getParsedBody();
    $customer = Customer::create($data);

    //$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');
    //$transport = Swift_MailTransport::newInstance();
    $transport = Swift_SmtpTransport::newInstance(getenv('SMTP_MAIL'), 465, 'ssl')
        ->setUsername(getenv('MAIL_USERNAME'))
        ->setPassword(getenv('MAIL_PASSWORD'));

    $mailer = Swift_Mailer::newInstance($transport);

    $message = Swift_Message::newInstance('Новая заявка на Фото')
        ->setFrom(['riffcamailer@gmail.com' => 'Фото заявка'])
        ->setTo(['riffca@yandex.ru', 'anna-pliusnina@mail.ru'])
        ->setBody("Заявка от {$customer->name} \n\n Контакт: {$customer->contact}");

    $result = $mailer->send($message);

        if($result > 0) {
            return $res->withJson($customer);
        } else {
            return $res->withJson('Не получилось...');
        }

});

// edit customer
$app->group('/api/customer', function(){

    $this->get('/all', function($req, $res){
        $customers = Customer::orderBy('created_at', 'desc')->get();
        return $res->withJson($customers);
    });

    $this->post('/update', function($req,$res){
        $data= $req->getParsedBody();
        $customer = Customer::findOrFail($data['id']);
        $customer->update($data);
        return $res->withJson($customer);
    });

    $this->post('/create', function($req, $res){
        $data = $req->getParsedBody();
        Customer::create($data);
        return $res->withJson($data);

    });

    $this->delete('/delete', function($req, $res){
        $data= $req->getParsedBody();
        $customer = Customer::findOrFail($data['id']);
        $customer->delete();
        return $res->withJson($customer);
    });

})->add(function($req,$res,$next){

    $password = [getenv('AUTH_KEY')];

    $token = $req->getHeader('x-access-token');

    if(!$token || $token != $password){
        return $res->withJson(['success' => false , 'password' => false]);
    }

    return $next($req,$res);

});
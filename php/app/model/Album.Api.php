<?php


$app->group('/api/album', function () {

    $this->get('/file', function ($request, $response) {

        $contents = $this->fileSystem->read('/images/wedding.icon.svg');
        $response->write($contents);

    });

    $this->post('/create', function ($request, $response) {

        $data = $request->getParsedBody();
        $album = Album::create($data);
        return $response->withJson([
            'success' => true,
            'message' => 'Альбом успешно создан!',
            'album' => $album
        ]);
    });


    $this->post('/upload-images', function ($request, $response) {

        $files = $request->getUploadedFiles();


        foreach($_FILES as $key => $file)

        $this->uploadHandler->addRule('extension',
                ['allowed' => ['jpg', 'jpeg']],
                '{label} should be a valid image (jpg, jpeg, png)',
                'Profile picture');
            //$handler->addRule('filesize',
            ///   ['max' => '20M']);

            $result = $this->uploadHandler->process($file);

            if ($result->isValid()) {
                $result->confirm();
                return $response->withJson([
                    'success' => $result->isValid(),
                    'result' => $result->name
                ]);

            } else {
                $messages = $result->getMessages();
                return $response->withJson([
                    'success' => $result->isValid(),
                    'messages' => $messages
                ]);
            }

        /*foreach ($files as $key => $file) {

            if (empty($file)) {
                throw new Exception('Expected a newfile');
            };


            if( $file->getSize() > 2000000){
                return $response->write('Слишком большой  файл, надо менее 2mb!');
            }

            $type = $file->getClientMediaType();

            if($type != 'image/jpeg'){
                return $response->write('ОШИБКА! Надо JPEG ');
            } else if ($type != 'image/jpeg'){
                return $response->write('ОШИБКА! Надо JPEG ');
            }

            if ($file->getError() === UPLOAD_ERR_OK) {
                $uploadFileName = $file->getClientFilename();
                var_dump($uploadFileName);
                $file->moveTo(__DIR__ . "/../storage/{$uploadFileName}");
                return $response->withJson([
                   "success" => "true",
                    "message" => "Файлы успешно загружены"
                ]);
            }
        }*/

    });
});
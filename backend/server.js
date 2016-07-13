import express from 'express';

let app = new express();

app.get('*', ()=>{

	res.sendFile(__dirname + 'index.html');
});

app.listen(3000);



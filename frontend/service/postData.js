import token from './token';
//let $ = document.querySelector.bind(document);


class PostData {

    constructor() {}

    post(url, data, method = 'POST') {
        return new Promise((resolve, reject) => {
            //$('#loading').classList.add('open');

            let timeId = setInterval(() => {
                console.log('Loading...');
            }, 10);
            return fetch(url, {
                method: method,
                headers: {
                    'x-access-token': token.getToken(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(
                response => {
                    let data = response.json();
                    clearTimeout(timeId);
                    //$('#loading').classList.remove('open');
                    resolve(data);

                },
                err => {
                    clearTimeout(timeId);
                    reject(err);
                    console.log(err);
                }
            );
        });
    }
}


export default new PostData();

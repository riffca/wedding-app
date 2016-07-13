import token from './token';
let $ = document.querySelector.bind(document);

class GetData {

    constructor() {}

    get(url, interval = true) {
        return new Promise((resolve, reject) => {
            //$('#loading').classList.add('open');
            let timeId = setInterval(() => {
                console.log('Loading...');
            }, 10);

            return fetch(url, {
                    headers: {
                        'x-access-token': token.getToken()
                    }
                })
                .then(
                    response => {

                        let data = response.json();
                       //$('#loading').classList.remove('open');
                        clearTimeout(timeId);
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

    getAlbum(story, album) {
        return this.get(`images/${story}/${album}.json`);
    }

    getImages(folder, name, count) {
        return new Promise((resolve, reject) => {
            let images = [];
            for (let i = 1; i < count + 1; i++) {
                let img = {};
                img.path = `./img/${folder}/${name} (${i}).jpg`;
                img.id = i;
                img.mini = `./img/${folder}/${name}-mini (${i}).jpg`;
                images.push(img);
            }
            resolve(images);
            reject('Error');
        });
    }
    getCustomers() {
        return this.get('/api/customer/all');
    }
}


export default new GetData();

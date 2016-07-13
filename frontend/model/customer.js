import postData from '../service/postData';


export default class Customer {

    constructor({ id, name, contact }) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.showForm = false;
        this.sliceItem = false;
    }
    create(url) {
        return postData.post('api/customer/' + url, this);
    }

    update() {
        return postData
            .post('api/customer/update', this)
            .then(data => {
                this.showForm = !this.showForm;
            });
    }

    delete() {
        if (confirm('Удалить?')) {
            return postData
                .post('api/customer/delete', this, 'DELETE')
                .then(data => {
                    console.log(data);
                    this.sliceItem = true;
                });
        }
    }
}

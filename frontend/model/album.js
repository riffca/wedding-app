class Album {

    constructor({
    	id = '',
        title = '',
        logo = '',
        positionIndex = ''
    }) {
    	this.id = id;
        this.title = title;
        this.logo = logo;
        this.positionIndex = positionIndex;
    }
    getImages() {
        return Vue.http('/api/album/' + this.id);
    }
    create(data) {
        return Vue.http('/api/album/create', {
            method: 'post',
            data: data
        });
    }
    delete(id) {
        return Vue.http('/api/album/delete', {
            method: 'post',
            data: id
        });
    }
    addImages(data) {
        return Vue.http('/api/album/create', {
            method: 'post',
            data: data
        });
    }
}

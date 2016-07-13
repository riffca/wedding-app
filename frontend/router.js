//Ч А С Т И  П Р И Л О Ж Е Н И Я
import loveStory from './view/global/love-story';
import wedding from './view/global/wedding';
import customers from './view/global/customers.vue';
import contacts from './view/global/contacts.vue';
import getData from './service/getData';
import postData from './service/postData';

export default {

    '/': {
        name: 'root',
        component: {
            template: '<an-service></an-service>'
        }
    },
    /*
    /**********************С В А Д Ь Б Ы
    */
    '/wedding': {
        name: 'wedding',
        component: wedding,
        subRoutes: {
            '/': {
                name: 'weddingIndex',
                component: {
                    props: ['albums', 'indexpage', 'title'],
                    template: `
                        <an-album-brand v-for="album in albums" 
                                    :indexpage.sync="indexpage"
                                        :albumtitle.sync="title"
                                            :album="album"
                                               routename="weddingAlbum"
                                                img="images/wedding.icon.svg">
                        </an-album-brand>
                    `,
                    route: {
                        activate() {
                            this.indexpage = true;
                        }
                    }
                }
            },
            '/:album': {
                name: 'weddingAlbum',
                component: {
                    template: `
                        <an-album :album="weddingAlbum" :title="title"></an-album>
                    `,
                    props: ['title', 'indexpage'],
                    data() {
                        return {
                            weddingAlbum: []
                        };
                    },
                    route: {
                        data(transition) {
                            getData
                                .getAlbum('wedding', transition.to.params.album)
                                .then((data) => {
                                    this.weddingAlbum = data;
                                });
                        },
                        activate() {
                            this.indexpage = false;
                        }
                    }
                }
            }
        }

    },

    /*
    /**********************L O V E  S T O R Y
    */
    '/lovestory': {
        name: 'loveStory',
        component: loveStory,
        subRoutes: {
            '/': {
                name: 'loveIndex',
                component: {
                    props: ['albums', 'indexpage', 'title'],
                    template: `
                        <an-album-brand v-for="album in albums" 
                                    :indexpage.sync="indexpage"
                                        :albumtitle.sync="title"
                                             :album="album"
                                                routename="loveAlbum"
                                                    img="images/love-story.icon.svg">
                        </an-album-brand>
                    `,
                    route: {
                        activate() {
                            this.indexpage = true;
                        }
                    }
                }
            },
            '/:album': {
                name: 'loveAlbum',
                component: {
                    template: `
                        <an-album :album="loveAlbum" :title="title"></an-album>
                    `,
                    props: ['title', 'indexpage'],
                    data() {
                        return {
                            loveAlbum: []
                        };
                    },
                    route: {
                        data(transition) {
                            getData
                                .getAlbum('love-story', transition.to.params.album)
                                .then((data) => {
                                    this.loveAlbum = data;
                                });
                        },
                        activate() {
                            this.indexpage = false;
                        }
                    }
                }
            }
        }
    },

    /*
    /**********************C U S T O M E R S
    */
    '/customers': {
        name: 'customers',
        component: customers
    },

    /*
    /**********************C O N T A C T S
    */
    '/contacts': {
        name: 'contacts',
        component: contacts
    },
    /*
    /**********************A L B U M   M A N A G M E N T
    */
    '/admin/album': {
        name: 'adminAlbum',
        component: {
            template: `
                <div id="admin-album">
                    <a v-link="{name: 'createAlbum'}">Новый альбом</a>
                    <a v-link="{name: 'allAlbums'}">Все альбомы</a>
                    <a v-link="{name: 'allAlbums'}">Все альбомы</a>-->
                    <router-view></router-view>
                </div>  
            `
        },
        subRoutes: {
            '/create': {
                name: 'createAlbum',
                component: {
                    template: `
                        <div id="create-album">
                            <div class="set-name" v-form-wrapper>
                                <form @submit.prevent="createAlbum">
                                    <div>
                                        <label for="albumName">Название альбома</label>
                                        <input type="text" id="albumName" v-model="name">
                                    </div>
                                    <div>
                                        <label for="albumCategory">Направление</label>
                                        <input type="text" id="albumCategory" v-model="category">
                                    </div>
                                    <button type="submit">Создать</button>     
                                </form>
                            </div>
                        </div>
                    `,
                    data() {
                        return {
                            name: '',
                            category: ''
                        };
                    },
                    methods: {
                        createAlbum() {
                            postData.post('/api/album/create', { name: this.name, category: this.category })
                                .then(data => {
                                    console.log(data);
                                    this.$route.router.go({ name: 'albumImages', params: { name: data.album.name } });
                                });
                        }
                    }
                }
            },
            '/:name/images': {
                name: 'albumImages',
                component: {
                    template: `
                        <div id="album-images>
                            <div class="add-images">
                                <div v-form-wrapper>
                                    <form>
                                        <div>
                                            <input type="file" @change="uploadFiles" multiple>
                                        </div>
                                        <button type="submit">Загрузить</button>
                                    </form>
                                </div>
                            </div>
                            <h1>Все фото</h1>
                            <div class="images-wrapper">
                                <div v-for="image in [{full:1},{full:2}]">
                                    <span>{{ image.full }}</span>
                                </div>
                            </div>
                        </div>
                    `,
                    methods: {
                        uploadFiles(e) {
                            let files = e.target.files;
                            console.log(files);
                            postData.post('/api/album/upload-images', files)
                                .then(data => {
                                    console.log(data);
                                });
                        }
                    }
                }
            }
        }
    },

    /*
    /**********************F I L E S  M A N A G M E N T
    */
    '/files': {
        name: 'files',
        component: {
            template: `
                <input type="file" multiple @change="getFile">
                <div id="image-container" :style="{backgroundSize: 'contain',
                                                    width: '100%',
                                                    height: '300px',
                                                    background: 'url(images/wedding.jpg) no-repeat'
                                                    }">
                    
                </div>
            `,
            methods: {
                getFile(e) {
                    console.log(e.target.files || e.dataTransfer.files);
                }
            }
        }
    }
};

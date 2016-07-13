import './view/style.scss';

//fix
require('./fix');

//App Dependecies
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

//Root Element
import rootElement from './view/root.vue';
let root = Vue.extend(rootElement);

//Global Components подключены через роутер

//Local components
import anForm from './view/local/an-form';
Vue.component('an-form', anForm);
import anCustomerAdd from './view/local/an-customer-add';
Vue.component('an-customer-add', anCustomerAdd);
import anCustomer from './view/local/an-customer';
Vue.component('an-customer', anCustomer);
import anSvgIcon from './view/local/an-svg-icon';
Vue.component('an-svg-icon', anSvgIcon);
import anAlbumBrand from './view/local/an-album-brand';
Vue.component('an-album-brand', anAlbumBrand);
import anBrand from './view/local/an-brand';
Vue.component('an-brand', anBrand);
import anService from './view/local/an-service';
Vue.component('an-service', anService);
import anModal from './view/local/an-modal';
Vue.component('an-modal', anModal);
import anLightbox from './view/local/an-lightbox';
Vue.component('an-lightbox', anLightbox);
import anAlbum from './view/local/an-album';
Vue.component('an-album', anAlbum);

//Directives
import formWrapper from './view/directive/form-wrapper';
Vue.directive('form-wrapper', formWrapper);
import loadImg from './view/directive/load-img';
Vue.directive('load-img', loadImg);
import animated from './view/directive/animated';
Vue.directive('animated', animated);

//Transitions
Vue.transition('fade', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});

//postData
import postData from './service/postData';


//Router Config
import routerMap from './router';

let router = new VueRouter({
    history: false
})
.map(routerMap)
    .start(root, '#root', () => {
        console.log('Приложение работает');
        //счетчикпосетителей таблица guests
        postData.post('/api/guest/new', {
            user_agent: navigator.userAgent
        })
        .then(data => {
            console.log(`${data} загрузок!`);
        });

    });

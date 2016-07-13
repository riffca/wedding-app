import './wedding.scss';
export default {
    template: `
        <div id="wedding">
            <div class="wedding-brand">
                <h1 v-link="{name: 'wedding'}">Свадьбы</h1>
                <div class="wedding-links" v-if="!indexPage">                
                    <div v-for="album in albums" 
                        @click="albumTitle = album.title"
                        v-link="{ name: 'weddingAlbum', params: { album: album.urlParams }}">
                        <img v-load-img src="images/wedding.icon.svg">
                        <span class="service-name">
                            {{ album.title }}
                        </span>
                    </div>
                </div>
            </div>
            <router-view :title.sync="albumTitle" :albums="albums" :indexpage.sync="indexPage"></router-view>
        </div>
    `,
    data() {
        return {
            indexPage: true,
            albumTitle: '',
            albums: [
                {
                    title: 'Антон и Настя',
                    urlParams: 'AntonNastia',
                    img: '/images/wedding/AntonNastia/img (5).jpg'
                }, 
                {
                    title: 'Борис и Дарья',
                    urlParams: 'BorisDaria',
                    img: '/images/wedding/BorisDaria/img (5).jpg'
                }, 
                {
                    title: 'Ольга и Сергей',
                    urlParams: 'OlgaSergey',
                    img: '/images/wedding/OlgaSergey/img (5).jpg'
                }, 
                {
                    title: 'Виктор и Вероника',
                    urlParams: 'VictorVeronika',
                    img: '/images/wedding/VictorVeronika/img (5).jpg'
                }
            ]
        };
    }
};

import './love-story.scss';
export default {

    template: `
        <div id="love-story">
            <div class="love-brand">
                <h1 v-link="{name: 'loveStory'}">Love Story</h1>
                <div class="love-links" v-if="!indexPage">                
                    <div v-for="album in albums" 
                        @click="albumTitle = album.title"
                        v-link="{ name: 'loveAlbum', params: { album: album.urlParams }}">
                        <img v-load-img src="images/love-story.icon.svg">
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
                    title: 'Мария и Михаил',
                    urlParams: 'MariaMihail',
                    img: '/images/wedding/MariaMihail/img(5).jpg'
                }, 

                {
                    title: 'Наташа и Александр',
                    urlParams: 'NatashaAlexander',
                    img: '/images/wedding/NatashaAlexander/img(5).jpg'
                },
                {
                    title: 'Татьяна и Дмитрий',
                    urlParams: 'TatianaDmitry',
                    img: '/images/wedding/TatianaDmitry/img(5).jpg'
                },
                
                {
                    title: 'Елена и Алексей',
                    urlParams: 'ElenaAleksey',
                    img: '/images/wedding/ElenaAleksey/img(5).jpg'
                }

            ]
        };
    }
};

import './an-album-brand.scss';

export default {
    props: [
        'album',
        'indexpage',
        'albumtitle',
        'routename',
        'img'
    ],

    template: `
        <div id="an-album-brand">
            <div class="album-icon">
                <span v-link="{name: routename, params: { album: album.urlParams }}"
                      @click="setAlbumTitle(album.title)">
                    <an-svg-icon class="icon" :path="img"></an-svg-icon>
                    <h1>{{  album.title  }}</h1>
                </span>
            </div>
        </div>
    `,
    methods: {
        setAlbumTitle(title) {
            this.albumtitle = title;
            this.indexpage = false;
        }
    },
    route: {
        activate() {
            this.indexpage = true;
        }
    }
};

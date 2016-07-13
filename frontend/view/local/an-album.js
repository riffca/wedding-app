import './an-album.scss';
import getData from '../../service/getData';

export default {
    template: `
	
		<div id="an-album" v-bind:class="{'fixed-album': fullScreen}">
			<h1><span @click="fullScreen = !fullScreen">{{ title }}</span></h1>
			<an-lightbox :foto="album"></an-lightbox>	
		</div>

	`,
    props: ['album', 'title'],
    data(){
    	return {
    		fullScreen: false
    	};
    }
};

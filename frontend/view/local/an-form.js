import './an-form.scss';
import postData from '../../service/postData';

export default {

	props: ['model', 'url'],
	template: `
		<div id="an-form">
			<form @submit.prevent="submit()">
				<div v-for="(key, value) in model" class="input-wrapper">
					<label for="{{ key }}"></label>
					<input type="text" 
							id="{{ key }}" 
							value="{{ value }}" 
							v-model="input[key]">	
				</div>
				<div class="button-wrapper">
					<button type="submit" class="">button</button>
				</div>
			</form>
		</div>
	`,
	data(){
		return {
			input: {}
		};
	},
	methods:{
		submit(){
			postData.post(this.url, this.input);
		}
	}
};
import './an-modal.scss';
export default {

	template: require('./an-modal.html'),
	props: ['name'],
	
	data() {
		return {
			show: false
		};
	},
	events: {
		'close-modal'(boolean){
			this.show = boolean;
		}
	}
};
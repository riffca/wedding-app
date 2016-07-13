import './an-customer-add.scss';
import Customer from '../../model/customer';

export default {
	props: ['url'],
	template: `
		<div id="an-customer-add">
	        <div v-form-wrapper>
	            <form @submit.prevent="createRequest()">
	                <div class="input-wrapper">
	                	<label for="customer-contact">Имя</label>	
	                    <input type="text" v-model="customer.name">
	                </div>
	                <div class="input-wrapper">
	                	<label for="customer-contact">Контакт</label>	
	                    <input type="text" id="customer-contact" v-model="customer.contact" required>
	                </div>
	                <button type="submit">Готово</button>
	            </form>
	        </div>
	    </div>
	`,
	data(){
		return {
			customer: {}
		};
	},
	ready(){
		this.customer = new Customer({
			name: '',
			contact: ''
		});
	},
	methods:{
		createRequest(){
			this.customer
				.create(this.url)
				.then((data)=>{
					//console.log(data);
					alert('Ваша заявка принята');
					this.customer.name = '';
					this.customer.contact = '';
				});
		}
	}
};
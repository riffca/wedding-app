import './an-customer.scss';
export default {
	props: ['customer', 'index'],
	template: `
		<div id="an-customer" v-if="!customer.sliceItem">
	        <div class="show-view" v-show="!customer.showForm"> 
	            <span class="customer-name">{{ customer.name }}</span> 
	            <span class="customer-name">{{ customer.contact }}</span>  
	        </div>
	        <!-----------------  F O R M ---------------->
	        <div class="edit-view" v-form-wrapper v-show="customer.showForm">
	            <form @submit.prevent="customer.update()">
	                <div class="input-wrapper">
	                    <input type="text" v-model="customer.name">
	                </div>
	                <div class="input-wrapper">
	                    <input type="text" v-model="customer.contact">
	                </div>
	                <button type="submit">Обновить</button>
	                <button @click="deleteOne(customer)">Удалить</button>
	            </form>
	        </div>
	        <!--------------E N D  F O R M --------------->
	        <button @click="customer.showForm = !customer.showForm" v-show="!customer.showForm">Редактировать
	        </button>
	    </div>
	`,
	methods: {

		deleteOne(index){
			this.customer.delete().then( data => {
					this.index = index;
			});
		}
	}
};
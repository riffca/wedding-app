<template>
	<ul class="price-options">
		<img class="hand-made-disc" src="/images/handmadedisc.jpg" alt="диск">
		<li class="one-hour-price">
			<h1>Стоимость одного часа работы фотографа:</h1>
			<p><span class="price">1500 рублей</span>(Минимальный заказ 2 часа)</p>
		</li>	
		<li class="wedding-price">
			<h1>Свадебные предложения:</h1>
			<ul>
				<li class="wedding-mini">
				    <h2>Мини - 5500 рублей.</h2>
					<ul>
					    <li>Сборы невесты, ЗАГС, прогулка (до 5 часов съемки)</li>
						<li>200 и более кадров</li>
						<li>Цветокоррекция всех фотографий</li>
						<li>Индивидуально оформленный DVD диск</li>
					</ul>
					<span class="buy-button" v-link="{name: 'contacts'}" @click="closeModal">заказать</span>
				</li>
				<li class="wedding-normal">
					<h2>Свадьба - 7000 рублей.</h2>
					<ul>
						<li>Сборы невесты, ЗАГС, прогулка, банкет до первого танца(до 7ми часов съемки)</li> 
						<li>300 и более кадров</li>
						<li>Цветокоррекция всех фотографий</li> 
						<li>Индивидуально оформленный DVD диск</li>
					</ul>
					<span class="buy-button" v-link="{name: 'contacts'}" @click="closeModal">заказать</span>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
export default {

  name: 'brand-price',
  data () {
    return {

    };
  },
  methods:{
  	closeModal(){
  		this.$dispatch('close-modal',false);
  	}
  }
};
</script>

<style lang="sass">
</style>
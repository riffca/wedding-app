<template>
	<div id="contacts">
		<div class="phone-number">
			<h3>Телефон</h3>
			<p><span>8 911 748 26 27</span></p>
		</div>
		<div class="vk-com">
			<h3>Вконтакте</h3>
			<p><a href="https://vk.com/pliusnina" target="_blank">Ссылка</a></p>
		</div>
		<div class="request">
			<h3>Оставьте заявку</h3>
			<an-customer-add url="request"></an-customer-add>
		</div>
	</div>
</template>

<script>
export default {

  data () {
    return {

    };
  }
};
</script>

<style lang="sass">
#contacts {
	margin:0 auto;
	max-width: 70%;
	.phone-number,
	.vk-com,
	.request {
		margin-bottom: 60px;
		margin-top: 60px;
	}
	.phone-number {
		text-align: center;
		span: {
			
		}
	}
	.vk-com {
		text-align: center;
	}
	.request{
		text-align: center;
	}
}
</style>
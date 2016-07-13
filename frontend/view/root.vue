<template>
		<!--Block-->
		 	<an-brand></an-brand>
		<!--EndBlock-->

		<!--Block-->
		<!--Карусель с услугами-->
		  <router-view></router-view>
		<!--EndBlock-->

		<!--Loading-->
			<div id="loading">Загрузка</div>
		<!--EndBlock-->
</template>

<script>
export default {

  name: 'component_name',

  data () {
    return {

    };
  }
};
</script>

<style lang="sass">

#root {
	position: relative;
    height: 100%;
}

</style>
<template>
	<div v-html="msg">
		
	</div>
</template>

<script>	
	export default {
		data() {
			return {
				msg: 'message'
			}
		},
		mounted() {
			this.msg = "插入了一个脚本：<script>console.log(1)<\/script>"; //解释了标签，但是没有打印
			var script = document.createElement('script');
			script.innerHTML = 'console.log(2)';
			this.$el.parentElement.appendChild(script); //打印了 2
		}
	}
</script>

<style>
</style>
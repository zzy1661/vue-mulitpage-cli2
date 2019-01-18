<template>
	<div>
		<h1>Test</h1>
		<router-link to="" class="mr">to ./</router-link>
		<router-link to="/test/reverse">to reverse</router-link>
		<div class="container">
			<div class="left">
				<router-view name="left"></router-view>
			</div>
			<div class="right">
				<router-view name="right"></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	

</script>

<style>
	.container {
		width: 800px;
		margin: 0 auto;
	}
	
	.right {
		width: 50%;
		float: right;
	}
	
	.left {
		width: 50%;
		float: left;
	}
</style>
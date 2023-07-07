<script setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
	document.body.style.overflow = "hidden";
});
onUnmounted(() => {
	document.body.style.overflow = "scroll";
});
</script>

<template>
	<div id="full-page-nav">
		<div>The Studio</div>
		<div>Join + Support</div>
		<div>Programs</div>
		<div>Updates</div>
		<div>About Us</div>
	</div>
</template>

<style scoped>
/* MIN */
@media only screen and (max-width: 800px) {
	#full-page-nav {
		display: grid;
		position: fixed;
		top: 50px;
		left: 0px;
		height: calc(100vh - 50px);
		width: 100vw;
		border-top: 1px #c9daef solid;
	}
	#full-page-nav > div {
		border-bottom: 1px #c9daef solid;
		background-color: #6494d3;
		color: white;
		font-family: SocialMedium;
		font-size: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	#full-page-nav > div:hover,
	#full-page-nav > div:focus {
		color: #6494d3;
		background-color: white;
	}
}
/* MID + MAX */
@media only screen and (min-width: 801px) {
	#full-page-nav {
		display: none;
	}
}
</style>

<script setup>
import Header from "/src/components/Header.vue";
import Sidebar from "/src/components/Sidebar.vue";
</script>

<template>
	<Header />
	<div id="router-view-wrapper">
		<router-view />
	</div>
	<Sidebar />
</template>

<style>
#router-view-wrapper {
	min-height: 80vh;
}
/* MIN */
@media only screen and (max-width: 800px) {
	#router-view-wrapper {
		margin-left: 0;
	}
}
/* MID */
@media only screen and (min-width: 801px) and (max-width: 1100px) {
	#router-view-wrapper {
		margin-left: 0;
	}
}
/* MAX */
@media only screen and (min-width: 1101px) {
	#router-view-wrapper {
		margin-left: 300px;
	}
}
</style>

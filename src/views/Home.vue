<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";
import { PrismicRichText } from "@prismicio/vue";
const {
	data: document,
	state,
	error,
	refresh,
} = useSinglePrismicDocument("page_home");
console.log(document, state, error, refresh);
</script>
<template>
	<div id="home-wrapper">
		<div v-if="state === `success`" id="home-content">
			<h1><PrismicRichText :field="document.data.headline" /></h1>
			<div id="home-row2">
				<div>
					<img id="home-hero-img" src="src/assets/SVG/vector-riso.svg" />
				</div>
				<div id="home-subheader">
					<h2><PrismicRichText :field="document.data.subheader" /></h2>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
#home-wrapper {
	display: flex;
	justify-content: center;
}
#home-row2 {
	display: grid;
}
/* MIN */
@media only screen and (max-width: 800px) {
	#home-wrapper {
		padding: 15px;
	}
	#home-row2 {
		gap: 20px;
		margin-top: 30px;
	}
	#home-subheader {
		margin-top: 0px;
	}
	#home-hero-img {
		width: 70%;
	}
}
/* MID */
@media only screen and (min-width: 801px) and (max-width: 1100px) {
	#home-wrapper {
		padding: 30px;
	}
	#home-row2 {
		gap: 50px;
		grid-template-columns: 1fr 1fr;
		margin-top: 60px;
	}
	#home-subheader {
		margin-top: 0px;
	}
	#home-hero-img {
		width: 100%;
	}
}
/* MAX */
@media only screen and (min-width: 1101px) {
	#home-wrapper {
		padding: 30px 50px 30px 50px;
	}
	#home-row2 {
		gap: 50px;
		grid-template-columns: 3fr 4fr;
		margin-top: 60px;
	}
	#home-subheader {
		margin-top: 50px;
	}
	#home-hero-img {
		width: 100%;
	}
}
</style>

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
	padding: 30px 50px 30px 50px;
}
/* #home-content {
	max-width: 1000px;
} */
#home-row2 {
	display: grid;
	gap: 50px;
	grid-template-columns: 3fr 4fr;
	margin-top: 60px;
}
#home-hero-img {
	width: 100%;
}
#home-subheader {
	margin-top: 50px;
}
</style>

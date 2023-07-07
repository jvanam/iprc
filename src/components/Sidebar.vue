<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";
import { PrismicRichText } from "@prismicio/vue";
import EmailSignup from "/src/components/EmailSignup.vue";
const {
	data: document,
	state,
	error,
	refresh,
} = useSinglePrismicDocument("global");
</script>

<template>
	<div id="sidebar">
		<div>
			<div v-if="state === `success`">
				<div v-for="item in document.data.sidebar_info">
					<div class="sidebar-title">{{ item.title }}</div>
					<PrismicRichText class="sidebar-content" :field="item.content" />
				</div>
			</div>
		</div>
		<EmailSignup />
	</div>
</template>

<style scoped>
.sidebar-title {
	text-decoration: none;
	font-weight: normal;
	font-size: 20px;
	font-family: "SocialCondensedBold";
	margin-bottom: 10px;
	/* text-transform: uppercase; */
	color: #6a7adf;
}
.sidebar-content {
	text-decoration: none;
	font-weight: normal;
	font-size: 15px;
	font-family: "SocialMonoRegular";
	margin-bottom: 20px;
	line-height: 1.1;
}
/* MIN + MID */
@media only screen and (max-width: 1100px) {
	#sidebar {
		position: relative;
		border-top: 1px solid #6494d3;
		width: 100%;
		padding: 15px;
	}
}
/* MAX */
@media only screen and (min-width: 1101px) {
	#sidebar {
		position: fixed;
		left: 0px;
		top: 70px;
		width: 300px;
		border-right: 1px solid #6494d3;
		height: calc(100vh - 70px);
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
}
</style>

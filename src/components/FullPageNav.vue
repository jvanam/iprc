<template>
	<div id="full-page-nav"></div>
</template>

<style scoped>
/* MIN */
@media only screen and (max-width: 800px) {
	#full-page-nav {
		display: block;
	}
}
/* MID + MAX */
@media only screen and (min-width: 801px) {
	#full-page-nav {
		display: none;
	}
}
</style>

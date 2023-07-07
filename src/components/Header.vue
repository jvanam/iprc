<template>
	<div id="header-spacer"></div>
	<div id="header">
		<router-link to="/"
			><span id="header-logo">
				<img src="../assets/SVG/IPRC-logo-white.svg" />
			</span>
		</router-link>
		<span id="header-nav-desktop">
			<span>The Space</span>
			<span> Join + Support </span>
			<span> Programs </span>
			<span> About Us </span>
		</span>
		<span id="header-nav-mobile">+</span>
	</div>
</template>

<style scoped>
#header-spacer {
	width: 100%;
}
#header {
	background-color: #6494d3;
	width: 100%;
	position: fixed;
	top: 0px;
	left: 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: rgb(255, 255, 255);
}
#header-nav-desktop,
#header-nav-mobile {
	font-family: "SocialMedium";
}
#header-nav-desktop > span {
	margin-left: 30px;
	padding: 13px 15px 13px 15px;
	border-radius: 4px;
	cursor: default;
}
#header-nav-desktop > span:hover {
	background-color: #ffffff;
	color: #6494d3 !important;
}
/* MIN */
@media only screen and (max-width: 800px) {
	#header {
		height: 50px;
		padding: 0px 15px 0px 15px;
	}
	#header-spacer {
		height: 50px;
	}
	#header-logo img {
		height: 25px;
		margin-bottom: -3px;
	}
	#header-nav-mobile {
		display: block;
		font-size: 30px;
	}
	#header-nav-desktop {
		display: none;
	}
}
/* MID + MAX */
@media only screen and (min-width: 801px) {
	#header {
		height: 70px;
		padding: 0px 20px 0px 20px;
	}
	#header-spacer {
		height: 70px;
	}
	#header-logo img {
		height: 30px;
	}
	#header-nav-mobile {
		display: none;
	}
	#header-nav-desktop {
		display: block;
		font-size: 20px;
	}
}
</style>

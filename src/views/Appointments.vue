<script setup>
const appointmentScript = document.createElement("script");
appointmentScript.setAttribute("type", "text/javascript");
appointmentScript.setAttribute(
	"src",
	"https://embed.acuityscheduling.com/js/embed.js"
);
document.head.appendChild(appointmentScript);
</script>

<template>
	<div id="appt-iframe-wrapper">
		<iframe
			id="appt-iframe"
			src="https://app.squarespacescheduling.com/schedule.php?owner=24176334"
			title="Schedule Appointment"
			width="100%"
			height="800"
			frameborder="0"
		></iframe>
	</div>
</template>

<style>
#appt-iframe {
	width: 100%;
	max-height: none;
	overflow: hidden;
}
#appt-iframe-wrapper {
	display: flex;
	justify-content: center;
	width: 100%;
}
/* MIN */
@media only screen and (max-width: 800px) {
	#appt-iframe {
		padding: 15px;
	}
}
/* MID */
@media only screen and (min-width: 801px) and (max-width: 1100px) {
	#appt-iframe {
		padding: 20px;
	}
}
/* MAX */
@media only screen and (min-width: 1101px) {
	#appt-iframe {
		padding: 50px;
		max-width: 900px;
	}
}
</style>

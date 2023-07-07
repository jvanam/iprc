<script setup>
function neonSubscriptionSubmit() {
	if (
		document.getElementById("g-recaptcha-response") &&
		document.getElementById("g-recaptcha-response").value &&
		"" != document.getElementById("g-recaptcha-response").value
	) {
		return true;
	} else {
		if (
			document.getElementById("subscriptionCaptcha").style.display == "none"
		) {
			document.getElementById("subscriptionCaptcha").style.display = "block";
		}
		var bTop = document
			.getElementById("subscriptionSubmitButton")
			.getBoundingClientRect().top;
		var bLeft = document
			.getElementById("subscriptionSubmitButton")
			.getBoundingClientRect().left;
		var bHeight = document.getElementById(
			"subscriptionSubmitButton"
		).clientHeight;
		var bWidth = document.getElementById(
			"subscriptionSubmitButton"
		).clientWidth;
		var cHeight = document.getElementById("subscriptionCaptcha").clientHeight;
		var cWidth = document.getElementById("subscriptionCaptcha").clientWidth;
		var deltaHeight = 7;
		if (bTop - (cHeight + deltaHeight) > 0) {
			document.getElementById("subscriptionCaptcha").style.top =
				bTop - (cHeight + deltaHeight) + "px";
			if (bLeft - (cWidth - bWidth) / 2 > 0) {
				document.getElementById("subscriptionCaptcha").style.left =
					bLeft - (cWidth - bWidth) / 2 + "px";
			} else {
				document.getElementById("subscriptionCaptcha").style.left = "0px";
			}
		} else {
			if (
				bTop + bHeight + cHeight + deltaHeight >
				document.documentElement.clientHeight
			) {
				document.getElementById("subscriptionCaptcha").style.top = "0px";
				if (bLeft - (cWidth - bWidth) / 2 > 0) {
					document.getElementById("subscriptionCaptcha").style.left =
						bLeft - (cWidth - bWidth) / 2 + "px";
				} else {
					document.getElementById("subscriptionCaptcha").style.left = "0px";
				}
			} else {
				document.getElementById("subscriptionCaptcha").style.top =
					bTop + bHeight + deltaHeight + "px";
				if (bLeft - (cWidth - bWidth) / 2 > 0) {
					document.getElementById("subscriptionCaptcha").style.left =
						bLeft - (cWidth - bWidth) / 2 + "px";
				} else {
					document.getElementById("subscriptionCaptcha").style.left = "0px";
				}
			}
		}
		return false;
	}
}
function neonSubscriptionCloseCaptcha() {
	if (document.getElementById("subscriptionCaptcha").style.display != "none") {
		document.getElementById("subscriptionCaptcha").style.display = "none";
	}
}
</script>

<template>
	<div>
		<div class="sidebar-title">Newsletter</div>
		<div class="sidebar-content">
			Subscribe to get updates about what's going on at the IPRC, workshops,
			programs and events via email.
		</div>
		<form
			id="email-signup-form"
			name="pShoppingCartFormBean"
			method="POST"
			action="https://iprc.app.neoncrm.com/np/clients/iprc/submitSubscription.jsp"
		>
			<input type="hidden" name="subscription" value="3" />
			<input type="hidden" name="skipDuplicateRequestCheck" value="1" />
			<table cellspacing="2" cellpadding="2" border="0" width="99%">
				<tbody>
					<tr>
						<td><small>Name:</small></td>
						<td>
							<small
								><input
									class="email-signup-input"
									type="text"
									name="subscriber.name"
									maxlength="50"
									size="25"
							/></small>
						</td>
					</tr>
					<tr>
						<td><small>Email:</small></td>
						<td>
							<input
								class="email-signup-input"
								type="text"
								name="subscriber.email1"
								maxlength="80"
								size="25"
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2" align="left">
							<input
								id="subscriptionSubmitButton"
								name="submitButton"
								onclick="return neonSubscriptionSubmit();"
								type="submit"
								value="Subscribe"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>
</template>

<style>
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
#email-signup-form {
	font-family: "SocialMedium";
}
.email-signup-input {
	border: 1px solid #6a7adf;
	border-radius: 2px;
}
#subscriptionSubmitButton {
	background-color: rgb(255, 255, 255);
	border: 1px solid #6a7adf;
	color: 6a7adf;
	font-family: "SocialMonoRegular";
	width: 90px;
	height: 25px;
	margin-left: 50px;
	margin-top: 10px;
	cursor: pointer;
}
#subscriptionSubmitButton:hover,
#subscriptionSubmitButton:focus {
	background-color: #6a7adf;
	border: 1px solid #6a7adf;
	color: white;
}
</style>

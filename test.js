// state vars
let mobileNavShowing = false;

document.addEventListener("DOMContentLoaded", function () {
	console.log("the dom has loaded!");
	let mobileNavToggle = document.getElementById("toggle-mobile-nav-button");
	console.log(mobileNavToggle);
	mobileNavToggle.addEventListener("click", () => {
		mobileNavShowing = !mobileNavShowing;
		console.log("mobile nav showing: ", mobileNavShowing);
	});
});

// state vars
let mobileNavShowing = false;

document.addEventListener("DOMContentLoaded", function () {
	console.log("the dom has loaded!");
	let mobileNavToggleButton = document.getElementById(
		"toggle-mobile-nav-button"
	);
	let mobileNav = document.getElementById("mobile-nav");
	console.log(mobileNavToggleButton);
	console.log(mobileNav);
	mobileNavToggleButton.addEventListener("click", () => {
		if (mobileNavShowing) {
			mobileNav.style.display = "none";
			mobileNavShowing = false;
		} else {
			mobileNav.style.display = "block";
			mobileNavShowing = true;
		}
		console.log("mobile nav showing: ", mobileNavShowing);
	});
});

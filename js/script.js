const hamburgerButton = document.querySelector("header .hamburger-menu");
const navSection = document.querySelector("header .nav-bar")

hamburgerButton.addEventListener("click", function(){
	navSection.classList.toggle("active");
});

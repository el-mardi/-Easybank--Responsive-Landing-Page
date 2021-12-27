const headerMenu = document.querySelector("#headerMenu");
const hamburgarMenu = document.querySelector("#hamburgarMenu");
const overlay = document.querySelector('#overlayBtn');
const mobileMenu = document.querySelector("#mobileMenu");
const body = document.querySelector("body");


hamburgarMenu.addEventListener('click', function(){

	 // headerMenu.classList.toggle("open");

	if (headerMenu.classList.contains("open")) {
		body.classList.remove("noscroll");
		 headerMenu.classList.remove("open");
		 overlay.classList.add("fad-out");
		 overlay.classList.remove("fad-in");
		 mobileMenu.classList.remove("fad-in");


	} else {
		body.classList.add("noscroll");
		 headerMenu.classList.add("open");
		 overlay.classList.add("fad-in");
		 overlay.classList.remove("fad-out");
		 mobileMenu.classList.add("fad-in");

	}

});
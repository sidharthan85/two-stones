const header = document.querySelector('header .navbar');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 10) {
		header.style.backgroundColor = 'rgb(218, 214, 214)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

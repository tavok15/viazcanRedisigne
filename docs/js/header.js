'use strict';

(async function() {
	var container = document.getElementById('site-header');
	var header = document.querySelector('.viazcan-header');
	if (!container && !header) return;

	try {
		if (container) {
			var response = await fetch('header.html');
			if (!response.ok) throw new Error('No se pudo cargar el header: ' + response.status);

			var documentFragment = new DOMParser().parseFromString(await response.text(), 'text/html');
			header = documentFragment.querySelector('.viazcan-header');
			if (!header) throw new Error('El archivo no contiene el header de Viazcan');
			container.replaceChildren(header);
		}

		var currentPage = location.pathname.split('/').pop() || 'index.html';
		header.querySelectorAll('.navbar-nav .nav-link, .viazcan-header-cart').forEach(function(link) {
			var selected = new URL(link.getAttribute('href'), location.href).pathname.split('/').pop() === currentPage;
			link.classList.toggle('active', selected);
			if (selected) {
				link.setAttribute('aria-current', 'page');
			} else {
				link.removeAttribute('aria-current');
			}
		});
	} catch (error) {
		console.error(error);
	}
})();
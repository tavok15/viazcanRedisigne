'use strict';

(async function() {
	var container = document.getElementById('contacto');
	if (!container) return;

	try {
		var response = await fetch('footer.html');
		if (!response.ok) throw new Error('No se pudo cargar el footer: ' + response.status);

		var template = document.createElement('template');
		template.innerHTML = await response.text();
		var year = template.content.querySelector('[data-footer-year]');
		if (year) year.textContent = new Date().getFullYear();
		container.replaceChildren(template.content);
	} catch (error) {
		console.error(error);
	}
})();
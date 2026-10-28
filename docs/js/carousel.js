'use strict';

(function() {
	var element = document.getElementById('viazcan-hero');
	if (!element) return;

	var slides = Array.from(element.querySelectorAll('.carousel-item'));
	var images = slides.map(function(slide) { return slide.querySelector('img'); });
	if (!images.length) return;

	var readyImages = new WeakSet();
	var pendingImages = new WeakMap();
	var navigationRequest = 0;
	var carousel = new bootstrap.Carousel(element, { ride: true });

	function prepareImage(image) {
		if (!pendingImages.has(image)) {
			pendingImages.set(image, image.decode().then(function() {
				readyImages.add(image);
				return true;
			}).catch(function(error) {
				console.error('No se pudo preparar la imagen del carrusel:', image.src, error);
				return false;
			}));
		}
		return pendingImages.get(image);
	}

	element.addEventListener('slide.bs.carousel', function(event) {
		var image = images[event.to];
		var request = ++navigationRequest;
		if (readyImages.has(image)) return;

		event.preventDefault();
		prepareImage(image).then(function(ready) {
			if (ready && request === navigationRequest) carousel.to(event.to);
		});
	});

	element.addEventListener('slid.bs.carousel', function(event) {
		prepareImage(images[(event.to + 1) % images.length]);
	});

	prepareImage(images[0]).then(function(ready) {
		if (!ready) return;
		var activeIndex = slides.findIndex(function(slide) { return slide.classList.contains('active'); });
		prepareImage(images[(activeIndex + 1) % images.length]);
		if (!element.matches(':hover')) carousel.cycle();
	});
})();
"use strict"
//==============================================================================================================
// Sliders

function initSliders() {
	if (document.querySelector('.explore__slider')) {
		new Swiper('.explore__slider', {
			centeredSlides: true,
			loop: true,
			roundLengths: true,
			observer: true,
			observeParents: true,
			speed: 500,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			navigation: {
				nextEl: '.explore__arrow--next',
				prevEl: '.explore__arrow--prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				961: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}

	if (document.querySelector('.why__slider')) {
		new Swiper('.why__slider', {
			observer: true,
			observeParents: true,
			speed: 500,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			roundLengths: true,
			navigation: {
				nextEl: '.why__arrow--next',
				prevEl: '.why__arrow--prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			breakpoints: {
				481: {
					slidesPerView: 2,
				},
				783: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 38,
				},
				1300: {
					slidesPerView: 3,
					spaceBetween: 92,
				},
			},
		});
	}

	if (document.querySelector('.testimonial__slider')) {
		new Swiper('.testimonial__slider', {
			observer: true,
			observeParents: true,
			speed: 500,
			slidesPerGroup: 1,
			spaceBetween: 15,
			roundLengths: true,
			navigation: {
				nextEl: '.testimonial__arrow--next',
				prevEl: '.testimonial__arrow--prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1.1,
				},
				380: {
					slidesPerView: 1.2,
				},
				481: {
					slidesPerView: 1.5,
				},
				581: {
					slidesPerView: 2.2,
				},
				783: {
					slidesPerView: 2.3,
				},
				961: {
					slidesPerView: 3.5,
					spaceBetween: 20,
				},
				1300: {
					slidesPerView: 3.24,
					spaceBetween: 43,
				},
			},
		});
	}
}

function initSlidersOnVisible() {
	const sliders = document.querySelectorAll('.explore__slider, .why__slider, .testimonial__slider');
	if (!sliders.length) return;

	let swiperLoaded = false;
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting) && !swiperLoaded) {
				swiperLoaded = true;
				observer.disconnect();

				const script = document.createElement('script');
				script.src = 'js/swiper-bundle.min.js';
				script.onload = initSliders;
				document.body.appendChild(script);
			}
		},
		{ rootMargin: '250px' }
	);

	sliders.forEach((slider) => observer.observe(slider));
}

initSlidersOnVisible();
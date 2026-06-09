"use strict"
document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open')
	}
}
// =================================================
const contactsSlider = new Swiper('.contacts__slider', {
	// autoplay: {
	//    delay: 6000
	// },
	observer: true,
	observeParents: true,
	// grabCursor: true,
	speed: 800,
	loop: true,
	// autoHeight: true,
	// parallax: true,
	// loopAdditionalSlides: 3,
	// watchOverFlow: true,
	// slidesPerView: 3,
	loopedSlides: 3,
	spaceBetween: 10,
	// preloadImage: false,
	navigation: {
		nextEl: '.controls-contacts__arrow--next',
		prevEl: '.controls-contacts__arrow--prev'
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,

		},
		681: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		961: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
		1300: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			// slidesPerGroup: 1,
		},
	},
});
// =================================================
const whySlider = new Swiper('.cards__slider', {
	// autoplay: {
	//    delay: 9000
	// },
	observer: true,
	observeParents: true,
	// slidesPerView: 4,
	grabCursor: true,
	speed: 800,
	loop: true,
	autoHeight: true,
	parallax: true,
	// loopAdditionalSlides: 5,
	watchOverFlow: true,
	spaceBetween: 10,
	preloadImage: false,
	// allowTouchMove: false,
	allowTouchMove: true,
	navigation: {
		nextEl: '.controls__arrow--next',
		prevEl: '.controls__arrow--prev'
	},
	breakpoints: {
		600: {
			slidesPerView: 2,
			allowTouchMove: true,
		},
		901: {
			slidesPerView: 3,
			allowTouchMove: true,
		},
		1300: {
			slidesPerView: 4,
			allowTouchMove: false,
		},
	},
});
// =================================================
const partnersSlider = new Swiper('.partners__slider', {
	// autoplay: {
	//    delay: 9000
	// },
	observer: true,
	observeParents: true,
	// slidesPerView: 4,
	grabCursor: true,

	speed: 800,
	// loop: true,
	// autoHeight: true,
	// parallax: true,
	// loopAdditionalSlides: 5,
	watchOverFlow: true,
	spaceBetween: 10,
	preloadImage: false,
	navigation: {
		nextEl: '.controls-partners__arrow--next',
		prevEl: '.controls-partners__arrow--prev'
	},
	breakpoints: {
		650: {
			slidesPerView: 2,
		},
		960: {
			slidesPerView: 3,
		},
		1201: {
			slidesPerView: 4,
		},
	},
});
// =================================================
const buildSlider = new Swiper('.build__slider', {
	// autoplay: {
	//    delay: 9000
	// },
	observer: true,
	observeParents: true,
	// slidesPerView: 4,
	grabCursor: true,

	speed: 800,
	// loop: true,
	// autoHeight: true,
	// parallax: true,
	// loopAdditionalSlides: 5,
	watchOverFlow: true,
	spaceBetween: 10,
	preloadImage: false,
	navigation: {
		nextEl: '.controls-build__arrow--next',
		prevEl: '.controls-build__arrow--prev'
	},
	breakpoints: {
		650: {
			slidesPerView: 2,
		},
		960: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
});


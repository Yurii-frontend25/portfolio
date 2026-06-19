"use strict"
document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open')
	}
}
//=================================================================================================================================
//header-scroll working function
// window.addEventListener('scroll', function () {
// 	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
// });
//end
//=================================================================================================================================
const header = document.querySelector('.header');

if (header) {
	window.addEventListener('scroll', function () {
		// Клас додається, якщо scrollY > 0, і видаляється, якщо scrollY === 0
		header.classList.toggle('scroll', window.scrollY > 0);
	});
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
	// loop: true,
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
			allowTouchMove: true,

		},
		681: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			allowTouchMove: true,
		},
		961: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			allowTouchMove: true,
		},
		1300: {
			slidesPerView: 3,
			// slidesPerGroup: 3,
			// slidesPerGroup: 1,
			allowTouchMove: false,
		},
	},
});
// =================================================
const whySlider = new Swiper('.cards__slider', {
	observer: true,
	observeParents: true,
	grabCursor: true,
	speed: 800,
	watchOverflow: true,
	spaceBetween: 15,
	preloadImages: false,
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
	observer: true,
	observeParents: true,
	grabCursor: true,
	speed: 800,
	// loop: true,
	// autoHeight: true,
	watchOverflow: true,
	spaceBetween: 10,
	preloadImages: false,
	slidesPerView: 1,
	navigation: {
		nextEl: '.controls-partners__arrow--next',
		prevEl: '.controls-partners__arrow--prev'
	},
	breakpoints: {
		650: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		960: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1201: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
// =================================================
const buildSlider = new Swiper('.build__slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	grabCursor: true,
	speed: 800,
	// loop: true,
	autoHeight: true,
	watchOverflow: true,
	spaceBetween: 10,
	preloadImages: false,
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


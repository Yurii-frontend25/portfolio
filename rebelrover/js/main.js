"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};
//===================================================================================================

//===================================================================================================

document.addEventListener('DOMContentLoaded', () => {
	const titles = document.querySelectorAll('.block__title');
	const block = document.querySelector('.block');

	titles.forEach(title => {
		title.addEventListener('click', () => {
			const text = title.nextElementSibling;

			if (block.classList.contains('one')) {
				titles.forEach(otherTitle => {
					if (otherTitle !== title) {
						otherTitle.classList.remove('active');
						const otherText = otherTitle.nextElementSibling;
						closeBlock(otherText);
					}
				});
			}

			title.classList.toggle('active');
			toggleBlock(text);
		});
	});

	function toggleBlock(el) {
		if (el.style.maxHeight) {
			closeBlock(el);
		} else {
			openBlock(el);
		}
	}

	function openBlock(el) {
		el.style.maxHeight = el.scrollHeight + 'px';
	}

	function closeBlock(el) {
		el.style.maxHeight = null;
	}
});
//====================================================================================================
//====================================================================================================
const exploreSlider = new Swiper('.explore__slider', {
	observer: true,
	observeParents: true,
	speed: 800,
	autoHeight: true,
	navigation: {
		nextEl: '.explore__arrow--next',
		prevEl: '.explore__arrow--prev'
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,

		},
		481: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		961: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 21,
		},
		1300: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
	},
});
//====================================================================================================
const whySlider = new Swiper('.why__slider', {
	observer: true,
	observeParents: true,
	speed: 800,
	// watchOverflow: true,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 15,
	navigation: {
		nextEl: '.why__arrow--next',
		prevEl: '.why__arrow--prev'
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		481: {
			slidesPerView: 2,
			spaceBetween: 15,
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
//====================================================================================================
const testimonialSlider = new Swiper('.testimonial__slider', {
	observer: true,
	observeParents: true,
	speed: 800,
	autoHeight: true,
	slidesPerGroup: 1,
	spaceBetween: 15,
	navigation: {
		nextEl: '.testimonial__arrow--next',
		prevEl: '.testimonial__arrow--prev'
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.10,
		},
		481: {
			slidesPerView: 1,
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
			slidesPerView: 3.24,//37
			spaceBetween: 48,
		},
	},
});
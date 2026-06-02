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

// $(function () {
// 	$('.block__title').click(function (event) {
// 		if ($('.block').hasClass('one')) {
// 			$('.block__title').not($(this)).removeClass('active');
// 			$('.block__text').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });
//====================================================================================================
const exploreSlider = new Swiper('.explore__slider', {
	// autoplay: {
	//    delay: 6000
	// },
	observer: true,
	observeParents: true,
	// grabCursor: true,
	speed: 800,
	// loop: true,
	autoHeight: true,
	parallax: true,
	// loopAdditionalSlides: 3,
	// watchOverFlow: true,
	// spaceBetween: 38,
	// preloadImage: false,
	navigation: {
		nextEl: '.explore__arrow--left',
		prevEl: '.explore__arrow--right'
	},
	keyboard: {
		enabled: true,
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
		681: {
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
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
	},
});

const whySlider = new Swiper('.why__slider', {
	// autoplay: {
	//    delay: 6000
	// },
	observer: true,
	observeParents: true,
	// grabCursor: true,
	speed: 800,
	// loop: true,
	autoHeight: true,
	parallax: true,
	// loopAdditionalSlides: 3,
	// watchOverFlow: true,
	// spaceBetween: 87,
	// preloadImage: false,
	navigation: {
		nextEl: '.why__arrow--left',
		prevEl: '.why__arrow--right'
	},
	keyboard: {
		enabled: true,
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
		783: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		// 961: {
		// 	slidesPerView: 3,
		// 	slidesPerGroup: 1,
		// 	spaceBetween: 38,
		// },
		1300: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 92,
		},
	},
});

const testimonialSlider = new Swiper('.testimonial__slider', {
	// autoplay: {
	//    delay: 6000
	// },
	observer: true,
	observeParents: true,
	// grabCursor: true,
	speed: 800,
	// loop: true,
	autoHeight: true,
	parallax: true,
	// loopAdditionalSlides: 3,
	// watchOverFlow: true,
	// spaceBetween: 43,
	// preloadImage: false,
	navigation: {
		nextEl: '.testimonial__arrow--left',
		prevEl: '.testimonial__arrow--right'
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.10,
			slidesPerGroup: 1,
			spaceBetween: 15,

		},
		481: {
			slidesPerView: 1,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		581: {
			slidesPerView: 2.2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		783: {
			slidesPerView: 2.3,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		961: {
			slidesPerView: 3.5,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		1300: {
			slidesPerView: 3.24,//37
			slidesPerGroup: 3,
			spaceBetween: 48,
		},
	},
});
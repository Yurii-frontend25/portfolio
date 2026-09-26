"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};
//===================================================================================================
// Menu dropdown
document.addEventListener("DOMContentLoaded", () => {

	// 2. Нова, залізобетонна логіка для підменю
	const menuButtons = document.querySelectorAll(".menu__button");

	menuButtons.forEach(button => {
		button.addEventListener("click", (e) => {
			if (window.innerWidth <= 991.98) {
				const menuItem = button.closest(".menu__item");
				const subMenu = menuItem.querySelector(".menu__sub-menu");

				if (!subMenu) return;

				const isExpanded = button.getAttribute("aria-expanded") === "true";

				if (!isExpanded) {
					// --- ВІДКРИТТЯ ---
					button.setAttribute("aria-expanded", "true");
					menuItem.classList.add("_sub-menu-open");

					// 1. Тимчасово вмикаємо флекс, щоб виміряти висоту контенту
					subMenu.style.display = "flex";
					subMenu.style.height = "auto";
					const fullHeight = subMenu.offsetHeight; // Виміряли точну висоту в px

					// 2. Скидаємо в 0, щоб браузер побачив старт анімації
					subMenu.style.height = "0px";

					// 3. Через мікро-таймаут запускаємо плавну CSS-анімацію
					setTimeout(() => {
						subMenu.style.height = `${fullHeight}px`;
					}, 10);

				} else {
					// --- ЗАКРИТТЯ ---
					button.setAttribute("aria-expanded", "false");
					menuItem.classList.remove("_sub-menu-open");

					// Зменшуємо висоту до 0
					subMenu.style.height = "0px";

					// Коли CSS-анімація закінчиться, повністю вимикаємо display
					subMenu.addEventListener("transitionend", function handler() {
						if (subMenu.style.height === "0px") {
							subMenu.style.display = "none";
						}
						subMenu.removeEventListener("transitionend", handler); // Очищаємо слухач
					});
				}

				e.stopPropagation();
			}
		});
	});
});
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
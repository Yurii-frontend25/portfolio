"use strict"
//===================================================================================================

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};
document.querySelectorAll('.menu__link').forEach(link => {
	// Якщо адреса посилання збігається з поточною адресою сторінки
	if (link.href === window.location.href) {
		link.classList.add('menu__link--current');
	}
});
//===================================================================================================
// header-scroll
const header = document.querySelector('.header');
function handleHeaderScroll() {
	if (!header) return;
	header.classList.toggle('scroll', window.scrollY > 20);
}
window.addEventListener('scroll', handleHeaderScroll, { passive: true });
handleHeaderScroll();
//===================================================================================================
// Menu dropdown
document.addEventListener("DOMContentLoaded", () => {
	const menuButtons = document.querySelectorAll(".menu__button");

	menuButtons.forEach(button => {
		button.addEventListener("click", (e) => {
			e.stopPropagation();

			const menuItem = button.closest(".menu__item");
			const subMenu = menuItem?.querySelector(".menu__sub-menu");
			if (!subMenu) return;

			const isExpanded = button.getAttribute("aria-expanded") === "true";

			// 1. Для мобилок (бургер-меню до 991.98px) — плавная высота
			if (window.innerWidth <= 991.98) {
				if (!isExpanded) {
					button.setAttribute("aria-expanded", "true");
					menuItem.classList.add("_sub-menu-open");

					subMenu.style.display = "flex";
					subMenu.style.height = "auto";
					const fullHeight = subMenu.offsetHeight;
					subMenu.style.height = "0px";

					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							subMenu.style.height = `${fullHeight}px`;
						});
					});
				} else {
					button.setAttribute("aria-expanded", "false");
					menuItem.classList.remove("_sub-menu-open");
					subMenu.style.height = "0px";

					setTimeout(() => {
						if (button.getAttribute("aria-expanded") === "false") {
							subMenu.style.display = "none";
						}
					}, 300);
				}
			} else {
				// 2. Для больших тачскринов (планшетов > 991.98px) — просто переключаем класс
				subMenu.style.display = "";
				subMenu.style.height = "";

				// Закрываем другие открытые подменю, чтобы не накладывались друг на друга
				document.querySelectorAll(".menu__item._sub-menu-open").forEach(otherItem => {
					if (otherItem !== menuItem) {
						otherItem.classList.remove("_sub-menu-open");
						const otherBtn = otherItem.querySelector(".menu__button");
						if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
					}
				});

				button.setAttribute("aria-expanded", String(!isExpanded));
				menuItem.classList.toggle("_sub-menu-open", !isExpanded);
			}
		});
	});

	// Закрытие подменю при клике в любое пустое место экрана (для планшетов)
	document.addEventListener("click", (e) => {
		if (window.innerWidth > 991.98 && !e.target.closest(".menu__item")) {
			document.querySelectorAll(".menu__item._sub-menu-open").forEach(item => {
				item.classList.remove("_sub-menu-open");
				const btn = item.querySelector(".menu__button");
				if (btn) btn.setAttribute("aria-expanded", "false");
			});
		}
	});
});
//====================================================================================================
function positionSubMenus() {
	const header = document.querySelector('.header');
	const menuItems = document.querySelectorAll('.menu__item');
	if (!header || !menuItems.length) return;

	menuItems.forEach((item) => {
		const subMenu = item.querySelector('.menu__sub-menu');
		if (!subMenu) return;

		if (window.innerWidth < 991.98) {
			subMenu.style.left = '';
			subMenu.style.top = '';
			return;
		}

		subMenu.style.height = '';

		const itemRect = item.getBoundingClientRect();
		const headerRect = header.getBoundingClientRect();

		// Координаты строго относительно окна браузера (так как position: fixed)
		const centerLeft = itemRect.left + itemRect.width / 2;
		const topPos = headerRect.bottom;
		const bridgeHeight = headerRect.bottom - itemRect.bottom;

		subMenu.style.left = `${centerLeft}px`;
		subMenu.style.top = `${topPos}px`;
		subMenu.style.setProperty('--bridge-height', `${Math.max(bridgeHeight, 0)}px`);
	});
}
//====================================================================================================
let resizeTimer;
window.addEventListener('resize', () => {
	// При изменении ширины сбрасываем мобильный класс открытия
	if (window.innerWidth >= 991.98) {
		document.querySelectorAll('.menu__item._sub-menu-open').forEach((item) => {
			item.classList.remove('_sub-menu-open');
		});
	}

	positionSubMenus();
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(positionSubMenus, 350);
});

window.addEventListener('load', positionSubMenus);
document.querySelectorAll('.menu__item').forEach((item) => {
	item.addEventListener('mouseenter', positionSubMenus);
});
//====================================================================================================

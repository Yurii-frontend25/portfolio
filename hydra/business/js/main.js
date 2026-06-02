"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};

//===================================================================================================
/**
 * Dynamic Adaptive
 * Объект-обертка, чтобы не создавать глобальных переменных
 */
window.DynamicAdapt = (function () {

	/**
	 * Основная функция инициализации
	 * @param {'min' | 'max'} type 
	 */
	function init(type = 'max') {
		const CLASS_NAME = '_dynamic_adapt_';
		const ATTR_NAME = 'data-da';

		// Вспомогательные утилиты
		const isNumber = (value) => !isNaN(value) && value !== '' && value !== null;
		const getIndexInParent = (el, parent) => Array.prototype.indexOf.call(parent.children, el);

		// Логика перемещения назад
		const moveBack = (dNode) => {
			const { parent, element, index } = dNode;
			element.classList.remove(CLASS_NAME);
			const targetChild = parent.children[index];

			if (index >= 0 && targetChild) {
				targetChild.before(element);
			} else {
				parent.append(element);
			}
		};

		// Логика перемещения вперед
		const moveTo = (dNode) => {
			const { to, element, order } = dNode;
			dNode.index = getIndexInParent(element, element.parentElement);
			element.classList.add(CLASS_NAME);

			if (order === 'last' || order >= to.children.length) {
				to.append(element);
				return;
			}
			if (order === 'first') {
				to.prepend(element);
				return;
			}
			to.children[order].before(element);
		};

		// Сортировка узлов
		const sortDNodes = (items) => {
			const isMin = type === 'min';
			return [...items].sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.order === b.order) return 0;
					if (a.order === 'first' || b.order === 'last') return isMin ? 1 : -1;
					if (a.order === 'last' || b.order === 'first') return isMin ? -1 : 1;
					return 0;
				}
				return isMin ? a.breakpoint - b.breakpoint : b.breakpoint - a.breakpoint;
			});
		};

		// Сбор всех элементов с атрибутом
		const getDNodes = () => {
			const elements = document.querySelectorAll('[' + ATTR_NAME + ']');
			const result = [];

			for (let i = 0; i < elements.length; i++) {
				const el = elements[i];
				const attr = el.getAttribute(ATTR_NAME);
				if (!attr) continue;

				const parts = attr.split(',').map((val) => val.trim());
				const toSelector = parts[0];
				const breakpoint = parts[1] || '767';
				const order = parts[2] || 'last';

				const to = document.querySelector(toSelector);

				if (to && el.parentElement) {
					result.push({
						parent: el.parentElement,
						element: el,
						to: to,
						breakpoint: breakpoint,
						order: isNumber(order) ? Number(order) : order,
						index: -1,
					});
				}
			}
			return sortDNodes(result);
		};

		const dNodes = getDNodes();

		// Создание уникальных медиа-запросов
		const uniqPoints = [...new Set(dNodes.map(node => node.breakpoint))];

		uniqPoints.forEach(breakpoint => {
			const query = '(' + type + '-width: ' + breakpoint + 'px)';
			const matchMedia = window.matchMedia(query);
			const filteredNodes = dNodes.filter(node => node.breakpoint === breakpoint);

			const handler = () => {
				if (matchMedia.matches) {
					filteredNodes.forEach(moveTo);
				} else {
					// Важно: возвращаем элементы в обратном порядке для корректности индексов
					[...filteredNodes].reverse().forEach(node => {
						if (node.element.classList.contains(CLASS_NAME)) {
							moveBack(node);
						}
					});
				}
			};
			matchMedia.addEventListener('change', handler);
			handler();

			// matchMedia.addListener ? matchMedia.addListener(handler) : matchMedia.addEventListener('change', handler);
			// handler();
		});
	}

	// Публичный метод для запуска
	return {
		run: init
	};
})();

// Запуск:
DynamicAdapt.run('max')
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
//=================================================================================================================================
//header-scroll working function
window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});
//end
//=================================================================================================================================
// Ansmation appearence cards
window.addEventListener("load", () => {
	const animItems = document.querySelectorAll("._anim-items");

	if (animItems.length > 0) {
		const options = {
			root: null, // відстежуємо відносно вікна браузера
			rootMargin: "0px",
			threshold: 0.05 // анімація почнеться, коли 20% блока буде видно на екрані
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const target = entry.target;
					target.classList.add("_active");

					// Якщо є клас _anim-no-hide, припиняємо стежити після першої появи
					if (target.classList.contains("_anim-no-hide")) {
						observer.unobserve(target);
					}
				} else {
					// Якщо класу _anim-no-hide немає, картки будуть ховатися назад при скролі вгору
					if (!entry.target.classList.contains("_anim-no-hide")) {
						entry.target.classList.remove("_active");
					}
				}
			});
		}, options);

		animItems.forEach(item => {
			observer.observe(item);
		});
	}
});
//=================================================================================================================================
const exploreSlider = new Swiper('.trusted__slider', {
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
		nextEl: '.trusted__arrow--left',
		prevEl: '.trusted__arrow--right'
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
		// 481: {
		// 	slidesPerView: 2,
		// 	slidesPerGroup: 1,
		// 	spaceBetween: 15,
		// },
		// 681: {
		// 	slidesPerView: 2,
		// 	slidesPerGroup: 1,
		// 	spaceBetween: 15,
		// },
		// 961: {
		// 	slidesPerView: 3,
		// 	slidesPerGroup: 1,
		// 	spaceBetween: 21,
		// },
		// 1300: {
		// 	slidesPerView: 1,
		// 	slidesPerGroup: 1,
		// 	spaceBetween: 20,
		// },
	},
});

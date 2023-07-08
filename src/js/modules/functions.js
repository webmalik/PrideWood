import $ from "jquery";

import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
import { Fancybox } from "@fancyapps/ui";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@fancyapps/ui/dist/fancybox/fancybox.css";



export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

export function main() {
	$('.product__button').on('click', (e) => {
		let element = e.target
		element.classList.toggle('active')
	})
}

export function bannerSlide() {
	const Banner = new Swiper('.swiper', {
		modules: [Navigation],
		slidesPerView: 1.3,
		loop: true,
		navigation: {
			nextEl: '.banner__next > .banner__button',
			prevEl: '.banner__prev > .banner__button',
		},
		centeredSlides: true,
		spaceBetween: 150,
	})

	Banner.init()
}

export function fancyMain() {
	Fancybox.bind('[data-gallery="gallery"]', {
		toolbar: "auto",
		loop: true,
		animationEffect: "zoom-in-out",
		transitionEffect: "fade",
		buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
		Thumbs: {
			autoStart: true,
			hideOnClose: true,
		},
		touch: {
			vertical: false,
		},
	});
}

export function card() {
	const card_open = $('#open_card')
	const card_close = $('#close_card')
	const card_window = $('.card')
	const card_background = $('.card__background')

	card_close.on('click', function (e) {
		e.preventDefault()
		card_window.css('right', '-41rem')
		card_background.css('opacity', 0)
		setTimeout(function () {
			card_background.css('display', 'none')
		}, 500)
	})

	card_open.on('click', function (e) {
		e.preventDefault()
		card_window.css('right', '0')
		card_background.css('display', 'block')
		setTimeout(function () {
			card_background.css('opacity', 1)
		}, 250)
	})

	card_background.on('click', function (e) {
		e.preventDefault()
		card_window.css('right', '-41rem')
		card_background.css('opacity', 0)
		setTimeout(function () {
			card_background.css('display', 'none')
		}, 500)
	})
}
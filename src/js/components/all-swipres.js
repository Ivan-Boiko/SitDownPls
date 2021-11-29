document.addEventListener('DOMContentLoaded', function(){
  const swiperHero = new Swiper('.hero__swiper', {
    speed: 800,
    loop: true,
		effect: 'fade',
    autoplay:{
      delay: 5000,
    },
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			bulletClass:"swiper-pagination-bullet hero__bulets",
			clickable:true,
			clickableClass:"hero__bullets-click"
		},
  });
  const swiperSpecial = new Swiper('.special__swiper', {
    speed: 800,
    loop: false,
    slidesPerView: "auto",
		slidesPerGroup:3,
		spaceBetween:32,
    navigation: {
      nextEl: '.special__btn-slide--next',
      prevEl: '.special__btn-slide--prew',
      disabledClass : 'btn--disabled',
    },
  });
  const swiperUseful = new Swiper('.useful__swiper', {
    speed: 800,
    loop: false,
    spaceBetween:32,
    slidesPerView: 2,
    navigation: {
      nextEl: '.useful__btn-next',
      prevEl: '.useful__btn-prev',
      disabledClass : 'btn--disabled',
    },
  });

	const swiperCatalog = new Swiper('.catalog__swiper', {
    speed: 800,
    loop: false,
		slidesPerView: 3,
		slidesPerGroup:3,
		spaceBetween:32,
		grid: {
			fill: 'row',
			rows: 3,
		},
    navigation: {
      nextEl: '.catalog__btn--next',
      prevEl: '.catalog__btn--prev',
      disabledClass : 'btn--disabled , catalog__btn--active',
    },
  });
	const swiperCard = new Swiper('.card__swiper', {
    speed: 800,
		loop: true,
		loopedSlides: 4,
		navigation: {
			nextEl: '.card__swiper-thumb-btn--next',
			prevEl: '.card__swiper-thumb-btn--prev',
		},
		thumbs: {
			swiper: swiperThumb,
		},
		controller: {
			control: swiperThumb,
		},

  });
	const swiperThumb = new Swiper('.card__swiper-thumb ', {
    speed: 400,
		direction: 'horizontal',
		freeMode : true,
		spaceBetween:40,
		loop: true,
		loopedSlides: 4,
		slidesPerView: 'auto',
		slideToClickedSlide: true,
		touchRatio: 0.2,
		controller: {
			control: swiperCard,
		},
		navigation: {
			nextEl: '.card__swiper-thumb-btn--next',
			prevEl: '.card__swiper-thumb-btn--prev',
		},
  });

	const swiperSimilar = new Swiper(".similar__swiper",{
		speed: 800,
    loop: false,
		slidesPerView: 4,
		slidesPerGroup:4,
		spaceBetween:32,
    navigation: {
      nextEl: '.similar__btn-slide--next',
      prevEl: '.similar__btn-slide--prew',
      disabledClass : 'btn--disabled',
    },
	})

  const swiperModal = new Swiper('.modal-swiper__swiper', {
    speed: 400,
		loop: true,
		loopedSlides: 4,
		navigation: {
			nextEl: '.modal-swiper__swiper-thumb-btn--next',
			prevEl: '.modal-swiper__swiper-thumb-btn--prev',
		},
		thumbs: {
			swiper: swiperModalThumb,
		},
		controller: {
			control: swiperModalThumb,
		},

  });
	const swiperModalThumb = new Swiper('.modal-swiper__swiper-thumb ', {
    speed: 400,
		direction: 'horizontal',
		freeMode : true,
		spaceBetween:89,
		loop: true,
		loopedSlides: 4,
		slidesPerView: 'auto',
		slideToClickedSlide: true,
		touchRatio: 0.2,
		controller: {
			control: swiperModal,
		},
		navigation: {
			nextEl: '.modal-swiper__swiper-thumb-btn--next',
			prevEl: '.modal-swiper__swiper-thumb-btn--prev',
		},
  });
})

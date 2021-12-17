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
			clickableClass:"hero__bullets-click",
      dynamicBullets:true,
		},
  });
  const swiperSpecial = new Swiper('.special__swiper', {
    speed: 800,
    loop: false,

		slidesPerGroup:3,
		spaceBetween:32,
    navigation: {
      nextEl: '.special__btn-slide--next',
      prevEl: '.special__btn-slide--prew',
      disabledClass : 'btn--disabled',
    },
    breakpoints: {
      1350: {
        slidesPerView: "auto"
      },
      920: {
        slidesPerView: 3
      },
      550: {
        slidesPerView: 2,
        slidesPerGroup:2,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup:1,
      }
    }

  });
  const swiperUseful = new Swiper('.useful__swiper', {
    speed: 800,
    loop: false,
    spaceBetween:32,
    navigation: {
      nextEl: '.useful__btn-next',
      prevEl: '.useful__btn-prev',
      disabledClass : 'btn--disabled',
    },
    breakpoints: {
      1300: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });

	const swiperCatalog = new Swiper('.catalog__swiper', {
    speed: 800,
    loop: false,
		slidesPerView: 3,
		slidesPerGroup: 3,
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
    pagination: {
      el: '.catalog__swiper-pagination',
      bulletElement : "button",
      type: 'bullets',
      bulletActiveClass: "catalog__btn--active",
      bulletClass:'catalog__btn',
      clickable: true,
        renderBullet: function (index, className) {
          return '<button class="catalog__btn catalog__btn--next btn btn--second ' + className + ' ">' + (index + 1) * 1  + '</button>';
        },
    },
    breakpoints: {
      780:{
        slidesPerView: 3,
		    slidesPerGroup: 3,
      },
      320:{
        slidesPerView: 2,
		    slidesPerGroup: 2,
        spaceBetween:16,
      }
    }
  });

	const swiperCard = new Swiper('.card__swiper', {
    speed: 800,
    slidesPerView: 1,
		navigation: {
			nextEl: '.card__swiper-thumb-btn--next',
			prevEl: '.card__swiper-thumb-btn--prev',
		},
		thumbs: {
			swiper:{
        el:'.card__swiper-thumb',
        spaceBetween:45,
        speed: 400,
        breakpoints: {
          1000: {
            slidesPerView: 4,
            direction: 'horizontal',
          },
          550:{
            spaceBetween:20,
            slidesPerView: 4,
            direction: 'vertical',
          },
          320:{
            spaceBetween:50,
            slidesPerView: 2,
            direction: 'horizontal',
          }
        }
      }
		},

  });


	const swiperSimilar = new Swiper(".similar__swiper",{
		speed: 800,
    loop: false,
		spaceBetween:32,
    navigation: {
      nextEl: '.similar__btn-slide--next',
      prevEl: '.similar__btn-slide--prew',
      disabledClass : 'btn--disabled',
    },
    breakpoints: {
      1250:{
        slidesPerView: 4,
        slidesPerGroup:4,
      },
      900:{
        slidesPerView: 3,
        slidesPerGroup:3,
      },
      500:{
        slidesPerView: 2,
        slidesPerGroup:2,
      },
      200:{
        slidesPerView: 1,
        slidesPerGroup:1,
      }
    },
	})

  const swiperModal = new Swiper('.modal-swiper__swiper', {
    speed: 400,
    slidesPerView: "auto",
    spaceBetween:89,
		navigation: {
			nextEl: '.modal-swiper__swiper-thumb-btn--next',
			prevEl: '.modal-swiper__swiper-thumb-btn--prev',
		},

    thumbs: {
			swiper:{
        el:'.modal-swiper__swiper-thumb',
        direction: 'horizontal',
        speed: 400,
          breakpoints : {
          1920: {
            slidesPerView: 4,
            spaceBetween:89,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween:89,
          },
          1000 :{
            slidesPerView: "auto",
          },
          650:{
            spaceBetween:120,
            slidesPerView: 1,
          },
      }
		},
    }
  });
})

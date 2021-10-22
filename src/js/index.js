document.addEventListener('DOMContentLoaded',  function(){

  const swiperHero = new Swiper('.hero__swiper', {
    speed: 800,
    loop: true,
    // autoplay:{
    //   delay: 5000,
    // }
  });
  const swiperSpecial = new Swiper('.special__swiper', {
    speed: 800,
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.special--next',
      prevEl: '.special--prew',
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
  const choicesTown = new Choices('.choices-select-town',{
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header__town-select',
    }
  })
  const choicesCatalog = new Choices('.catalog-select',{
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header__catalog-select',
    }
  })

	const validate =	new JustValidate('.feedback__form', {
		colorWrong: '#ff3300',
		rules: {
			name: {
				required: true,
				minLength:2,
				maxLength:10,

			},
			mail: {
				required: true,
				email: true
			},
		},

		messages: {
			name: {
				required: 'Недопустимый формат',
				minLength: 'My custom message about only minLength rule'
			},
			mail: {
				required: 'Неведопустимый формат',
			}
		}
});

});



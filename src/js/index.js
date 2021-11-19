document.addEventListener('DOMContentLoaded',  function(){


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

	var range = document.querySelector('#range');
	if (range){

		noUiSlider.create(range, {
		start: [2000, 150000],
		connect: true,
		range: {
		'min': [0],
		'max': [210000]
		}
	});
	const inputMin = document.querySelector('#min');
	const inputMax = document.querySelector('#max');
	const inputs = [inputMin, inputMax ];

	range.noUiSlider.on ('update', function (values, handle){
		inputs[handle].value = Math.round(values[handle]);
	})
	const setRange = (i, value) => {
		let arr =[null , null];
		arr[i] = value;
		range.noUiSlider.set(arr);
	}

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRange(index, e.currentTarget.value)
		})
	})
	}

	const targetContainer = document.querySelector('.catalog__modal-container');
	const checkboxCatalog = document.querySelectorAll('.catalog__span-accept');
	const span = document.querySelectorAll('.catalog__modal')
	targetContainer.addEventListener('click' , function(er){
		let item = er.target;

		if(item.closest('.catalog__modal-btn')){
			item.closest('.catalog__modal-btn').parentNode.style.display = "none"
		}
		// checkboxCatalog.forEach((c) =>{
		// 	console.log(c.textContent)
		// })

	})
	checkboxCatalog.forEach((c) => {
		c.addEventListener('click' , function(e){
			const target = e.currentTarget;
			const parentClassCheckBox = target.parentNode.classList;
			const textTarget = target.textContent;
			let colorBg;


			for (let c = 0; c < parentClassCheckBox.length; c++) {
				const element = parentClassCheckBox[c];
				if(element.includes('category')){
					colorBg = `catalog__modal--product`
				}
				if(element.includes('sale')){
					colorBg = `catalog__modal--sale`
				}
				if(element.includes('color')){
					colorBg = `catalog__modal--color`
				}
			}	// в зависимости от родителя меняем цвет окна

			const span = document.querySelectorAll('.catalog__modal')
			span.forEach((e) => {
				const text = e.firstElementChild.textContent;
				if(text == textTarget){
					e.remove()
				}
				// если есть собпадения с тексом, удаляется окно
			})


				if(!target.previousElementSibling.checked){
					targetContainer.insertAdjacentHTML ('beforeend', `
					<div class="catalog__modal `+` ${colorBg}"> <span class="catalog__modal-text">${textTarget}</span><button class ="catalog__modal-btn btn">
							<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.3999 1.40002L8.5999 8.60002" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M8.5999 1.40002L1.3999 8.60002" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
								</svg></button></div>
					`)
					// если не checked , то добавляется новое окно
				}

		})
	})


	var selector = document.querySelector("input[type='tel']");
	var im = new Inputmask("+7(999)999-99-99")
	im.mask(selector);

	const validate =	new JustValidate('.feedback__form', {
		colorWrong: '#ff3300',
		rules: {
			name: {
				required: true,
				strength: {
					custom:'^[a-zA-Zа-яёА-ЯЁ]',
				},
				minLength:4,
				maxLength:15,

			},
			mail: {
				required: true,
				email: true,
			},
			tel: {
					required:true,
					function: (name, value) => {
						const phone = selector.inputmask.unmaskedvalue()
						return Number(phone) && phone.length === 10
					}
			},
		},
		messages: {
			name: {
				required: 'Недопустимый формат',
				strength: 'Недопустимый формат',
				minLength: 'Минимум 4 символа',
			},
			mail: {
				required: 'Неведопустимый формат',
				email : 'Введите корректный адресс электронной почты'
			},
			tel: {
				required: 'Недопустимый формат',
				function: 'Недопустимый формат',
			}
		}
});

function inputValid (){
	const input = document.querySelectorAll('.feedback__input')
	const btn = document.querySelector('.feedback__btn')
	btn.addEventListener('click', function(){
		input.forEach(function(i){
			if(!i.classList.contains('js-validate-error-field')){
				i.classList.add('js-validate-valid-label')
			}
		})
	})
}
inputValid();

function checkboxOn () {
	const checkbox = document.querySelector('.feedback__checkbox');
	const btn = document.querySelector('.feedback__btn');
	btn.setAttribute("disabled", "disabled")
	checkbox.addEventListener('click', function() {
		if (checkbox.checked) {
			btn.removeAttribute("disabled", "disabled");
		}
		else  {
			btn.setAttribute("disabled", "disabled");
		}
	})
};

checkboxOn();

function showMore (){
	const btn = document.querySelector('.premium__btn-more');
	const ulitems = document.querySelectorAll('.premium__items');
  let arrList = Array.from(ulitems);
  let listItems = 8;
    for (let i = listItems; i < arrList.length; i++) {
      const el = arrList[i];
      el.classList.add('premium__items--hidden')
      btn.addEventListener('click', function(){
       el.classList.toggle('premium__items--hidden')
       if(!el.classList.contains('premium__items--hidden')){
				 btn.setAttribute('disabled', 'disabled')
				 setInterval(function(){
					btn.classList.add('premium__btn-more--hidden')
				 }, 500)
       }
      })
    }
}

showMore ();

});



document.addEventListener('DOMContentLoaded',  function(){
  //универсальная функция show more для нескольких страниц
function showMoreMain () {
        const premiumBtn = document.querySelector('.premium__btn-more');
        const premiumItems = document.querySelectorAll('.premium__articles');
        const premiunItemClassHidden = 'premium__articles--hidden';
        const premiunBtnClassHidden = 'premium__btn-more--hidden';
         let amountOfElements = 8;
         if(window.screen.width <= 1350){
          amountOfElements = 6;
         }
      let arrList = Array.from(premiumItems);
      let arrLength = Number(arrList.length)
        for (let i = amountOfElements; i < arrList.length; i++) {
          let bottonNumber = String(arrLength - amountOfElements);
          premiumBtn.textContent = `+ еще ${bottonNumber}`;

          const el = arrList[i];
          el.classList.add(premiunItemClassHidden)

          premiumBtn.addEventListener('click', function(){
           el.classList.toggle(premiunItemClassHidden)
           if(!el.classList.contains(premiunItemClassHidden)){
            premiumBtn.classList.add(premiunBtnClassHidden)
           }
          })

         let indexBtn = document.querySelector('.premium__btn-more')
         if(indexBtn){
          indexBtn.textContent = "Показать больше товаров"
         }

        }
}
showMoreMain()

 let fixBlock = document.querySelectorAll('.fix-block')
//включение и отключение скрола
function disableScroll () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  fixBlock.forEach((e) => {
    e.style.paddingRight = paddingOffset
  })
  document.body.classList.add('disable-scroll')
  document.body.style.paddingRight = paddingOffset
}

function enableScroll () {
  fixBlock.forEach((e) => {
    e.style.paddingRight = 0
  })
  document.body.style.paddingRight = 0
  document.body.classList.remove('disable-scroll')
}



// изменение значения инпута во вкладке "Каталог"
let range = document.querySelector('#range');
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
  range.noUiSlider.on ('update', function (){
    let input = document.querySelector('.catalog__modal-text--money')
    input.value = inputMax.value
    input.parentNode.style.display = "block"
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

//функция создающая всплывающие подсказки во вкладке "Каталог"
function modalCatalog () {
  const targetContainer = document.querySelector('.catalog__modal-container');
  const checkboxCatalog = document.querySelectorAll('.catalog__span-accept');
  if (targetContainer && checkboxCatalog){
      targetContainer.addEventListener('click' , function(er){
        let item = er.target;
        const span = item.previousElementSibling;
        const spanText = span.textContent
        checkboxCatalog.forEach((c) =>{
          let checkboxText = c.previousElementSibling;
          if(c.textContent == spanText){
            checkboxText.checked = false
          }
        })
        if(item.closest('.catalog__modal-btn')){
          item.closest('.catalog__modal-btn').parentNode.style.display = "none"
        }

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
              <div class="catalog__modal `+` ${colorBg}"> <span class="catalog__modal-text">${textTarget}</span>
              <button class ="catalog__modal-btn btn">
              </button>
                </div>
              `)
              // если не checked , то добавляется новое окно
            }
        })
      })
  }
}


modalCatalog ()


//функция добавляющаяя зеленый боред в случает успешного заполнения инпутов во вкладке "Главная"
function inputValid (){
  const input = document.querySelectorAll('.form-site__input')
  const btn = document.querySelector('.form-site__btn')
  if(input && btn){
    btn.addEventListener('click', function(){
      input.forEach(function(i){
        if(!i.classList.contains('js-validate-error-field')){
          i.classList.add('js-validate-valid-label')
        }
      })
    })
  }
}
inputValid();

//Обработка checkbox во вкладке "Главная"
function checkboxOn () {
	const checkbox = document.querySelector('.form-site__checkbox');
	const btn = document.querySelector('.form-site__btn');
  if(checkbox && btn){
    btn.setAttribute("disabled", "disabled")
    checkbox.addEventListener('click', function() {
      if (checkbox.checked) {
        btn.removeAttribute("disabled", "disabled");
      }
      else  {
        btn.setAttribute("disabled", "disabled");
      }
    })
  }
};
checkboxOn();


//Маска для телефона во вкладке "Главная"
var selector = document.querySelector("input[type='tel']");

if(selector){
  var im = new Inputmask("+7(999)999-99-99")
  im.mask(selector);

}


//Валидация во вкладке "Главная"
const form = document.querySelector('.form-site__form')

if (form){
  const validate = new JustValidate('.form-site__form', {
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
          maxLength: 'Максимум 15 символов'
        },
        mail: {
          required: 'Неведопустимый формат',
          email : 'Введите корректный адресс электронной почты'
        },
        tel: {
          required: 'Недопустимый формат',
          function: 'Недопустимый формат',
        }
      },

      submitHandler: function(form){
        let formData = new FormData(form);

        fetch("send.php", {
          method:"POST",
          body: formData
        })
        .then(function (data){
          console.log(data);
          modalForm();
          form.reset();
        })

    }
  });
}

//Модальное окно в случае успешной отправки сообщения из формы вкладке "Главная" и "Каталог"
function  modalForm () {
  const input = document.querySelectorAll('.form-site__input');
  const cardModal = document.querySelector('.card-modal')
  const cardForm = document.querySelector('.card-form')
  const modalForm = document.querySelector('.modal-form')

  if(cardModal){
    cardModal.classList.add('card-modal--active')
    cardForm.classList.add('card-form--hidden')

    input.forEach((e) => {
      e.classList.add('js-validate-valid-label')
    })

    const interval = setInterval(function(){
      modalForm.classList.remove('modal-form--visible')
      cardModal.classList.remove('card-modal--active')
      clearInterval(interval)
      input.forEach((e) => {
        e.classList.remove('js-validate-valid-label')
        enableScroll ()
      })
      }, 3000)


  }
  else {
    modalForm.classList.add('modal-form--visible')

    input.forEach((e) => {
      e.classList.add('js-validate-valid-label')
    })

    let timer = setInterval(function(){
      modalForm.classList.remove('modal-form--visible')
      clearInterval(timer)
      input.forEach((e) => {
      e.classList.remove('js-validate-valid-label')
      enableScroll ()
      })
      }, 3000)

  }

}

//Модальное окно "Купить в один клик" во вкладке "Каталог"
function  modalOpen () {
  const btn = document.querySelector('.card__btn-buy')
  const modal = document.querySelector('.modal-form');
  const cardForm = document.querySelector('.card-form')

  if(btn){
    btn.addEventListener('click' , function (){
      modal.classList.toggle('modal-form--visible');
      cardForm.classList.remove('card-form--hidden');
      disableScroll()
    })
  }
}
modalOpen();

//Закрытие модального окна
function modalClose () {
  let btn = document.querySelector('.btn-close-modal')
  let modal = document.querySelector('.modal-form');
  let overlay = document.querySelector('.modal-form__overlay')
  if(btn){
    btn.addEventListener('click', function(){
      modal.classList.remove('modal-form--visible')
      enableScroll()
    })
  }
  if(overlay){
    overlay.addEventListener('click', (e) => {
      if(e.target === overlay){
        modal.classList.remove('modal-form--visible')
        enableScroll()
      }
    })
  }
}

modalClose()


//Модальное окно свайпера  во вкладке "Каталог"
function modalSwiperOpen() {
  const swiper = document.querySelector('.card__swiper')
  const swiperModal = document.querySelector('.modal-swiper')
  if(swiper){
    swiper.addEventListener('click', function(){
      swiperModal.classList.add('modal-swiper--visible');
      disableScroll()
    })
  }
}

modalSwiperOpen()

//Зкарытие Модального окна свайпера  во вкладке "Каталог"
function modalSwiperClose() {
  const btnClose = document.querySelector('.modal-swiper__btn-close')
  const overlay = document.querySelector('.modal-swiper__overlay')
  const swiperModal = document.querySelector('.modal-swiper')
  if(btnClose || overlay){
    btnClose.addEventListener('click',  function(){
      swiperModal.classList.remove('modal-swiper--visible')
      enableScroll()
    })
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay){
      swiperModal.classList.remove('modal-swiper--visible')
      enableScroll()
    }
  })
}

}

modalSwiperClose()


function showMoreCategory (){

        const categoryBtn = document.querySelector('.catalog__category-btn');
        const categoryItems = document.querySelectorAll('.catalog__category-items');
        const categoryItemClassHidden = 'catalog__category-items--hidden';
        const categoryBtnClassHidden = 'catalog__category-btn--hidden';
        let amountOfElements = 9;
        let arrList = Array.from(categoryItems);
        let arrLength = Number(arrList.length)
        for (let i = amountOfElements; i < arrList.length; i++) {
          let bottonNumber = String(arrLength - amountOfElements);
          categoryBtn.textContent = `+ еще ${bottonNumber}`;

          const el = arrList[i];
          el.classList.add(categoryItemClassHidden)

          categoryBtn.addEventListener('click', function(){
           el.classList.toggle(categoryItemClassHidden)
           if(!el.classList.contains(categoryItemClassHidden)){
            categoryBtn.classList.add(categoryBtnClassHidden)
           }
          })

         let indexBtn = document.querySelector('.premium__btn-more')
         if(indexBtn){
          indexBtn.textContent = "Показать больше товаров"
         }

        }
}

showMoreCategory ()


function showMoreColor (){

  const colorBtn = document.querySelector('.catalog__color-btn');
  const colorItems = document.querySelectorAll('.catalog__color-items');
  const colorItemClassHidden = 'catalog__color-items--hidden';
  const colorBtnClassHidden = 'catalog__color-btn--hidden';
  let amountOfElements = 9;

let arrList = Array.from(colorItems);
let arrLength = Number(arrList.length)
  for (let i = amountOfElements; i < arrList.length; i++) {
    let bottonNumber = String(arrLength - amountOfElements);
    colorBtn.textContent = `+ еще ${bottonNumber}`;

    const el = arrList[i];
    el.classList.add(colorItemClassHidden)

    colorBtn.addEventListener('click', function(){
     el.classList.toggle(colorItemClassHidden)
     if(!el.classList.contains(colorItemClassHidden)){
      colorBtn.classList.add(colorBtnClassHidden)
     }
    })

  }
}
showMoreColor()


function burgerMenu(){
  let btnOpen = document.querySelector('.header__burger-btn')
  let menuList = document.querySelector(".burger-menu")
  let btnClose = document.querySelector('.burger-menu__btn-close')

  btnOpen.addEventListener('click', function () {
    menuList.classList.add('burger-menu--active')
  })
  btnClose.addEventListener('click', function () {
    menuList.classList.remove('burger-menu--active')
  })
}

burgerMenu()
});

function showFilterList() {
      const title = document.querySelectorAll('.catalog__category-title--mobile')
      let list = document.querySelectorAll('.catalog__general-content-container')
      if(title && list){
        title.forEach((e) => {
          e.addEventListener('click' , function (c) {
            let path = c.currentTarget.dataset.path;
            list.forEach((b) => {
              b.classList.remove('catalog__general-content-container--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__general-content-container--active')
          })
        })
      }
}


showFilterList();


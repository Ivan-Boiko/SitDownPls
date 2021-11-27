document.addEventListener('DOMContentLoaded',  function(){

function showMore (){
		const btn = document.querySelector('.premium__btn-more');
		const ulitems = document.querySelectorAll('.premium__articles');
		let arrList = Array.from(ulitems);
		let listItems = 8;
			for (let i = listItems; i < arrList.length; i++) {
				const el = arrList[i];
				el.classList.add('premium__articles--hidden')
				btn.addEventListener('click', function(){
				 el.classList.toggle('premium__articles--hidden')
				 if(!el.classList.contains('premium__articles--hidden')){
					 btn.setAttribute('disabled', 'disabled')
					 setInterval(function(){
						btn.classList.add('premium__btn-more--hidden')
					 }, 500)
				 }
				})
			}
}
showMore ();

function disableScroll () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.classList.add('disable-scroll')
  document.body.style.paddingRight = paddingOffset
}

function enableScroll () {
  document.body.style.paddingRight = '0px'
  document.body.classList.remove('disable-scroll')
}

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

function inputValid (){
	const input = document.querySelectorAll('.form-site__input')
	const btn = document.querySelector('.form-site__btn')
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
	const checkbox = document.querySelector('.form-site__checkbox');
	const btn = document.querySelector('.form-site__btn');
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

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99")
im.mask(selector);

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

function  modalForm (){
  const input = document.querySelectorAll('.form-site__input');
  const cardModal = document.querySelector('.card-modal')
  const cardForm = document.querySelector('.card-form')
  if(cardModal){
    cardModal.classList.add('card-modal--active')
    cardForm.classList.add('card-form--hidden')
    input.forEach((e) => {
      e.classList.remove('js-validate-valid-label')
    })
    const interval = setInterval(function(){
      modal.classList.remove('modal-form__overlay--visible')
      cardModal.classList.remove('card-modal--active')
      clearInterval(interval)
      }, 3000)
      enableScroll ()
  }
  else {
    input.forEach((e) => {
      e.classList.remove('js-validate-valid-label')
      })
      setInterval(function(){
      modal.classList.remove('modal-form__overlay--visible')
      }, 3000)
      enableScroll ()
  }

}

function modalClose (){
  document.querySelector('.btn-close-modal').addEventListener('click', function(){
    document.querySelector('.modal-form__overlay').classList.remove('modal-form__overlay--visible')
    enableScroll ()
  })
}

modalClose()

function  modalOpen (){
  const btn = document.querySelector('.card__btn-buy')
  const overlay = document.querySelector('.modal-form__overlay');
  const cardForm = document.querySelector('.card-form')
  if(btn){
    btn.addEventListener('click' , function (){
      overlay.classList.toggle('modal-form__overlay--visible');
      cardForm.classList.remove('card-form--hidden');
      disableScroll()
    })
  }
}
modalOpen();
});



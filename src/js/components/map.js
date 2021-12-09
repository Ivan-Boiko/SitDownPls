if(document.querySelector('#map')){
  let form = document.querySelector('.contacts__form')


  // фукнция которая активирует выпадающее меню
   function openList() {
   let form = document.querySelector('.contacts__form')
   let input = document.querySelector('.contacts__input')
   let addressList = document.querySelector('.adress-list')
   let btnOpen = document.querySelector('.contacts__btn')
   let btnClose = document.querySelector('.adress-list__btn-close')
   form.addEventListener('submit', function(even){
    even.preventDefault()
   })
   btnOpen.addEventListener('click' , function(){
    addressList.classList.toggle('adress-list--active')
   })
    input.addEventListener('click', function(e){
      addressList.classList.add('adress-list--active')
    })
    btnClose.addEventListener('click', function(){
      addressList.classList.remove('adress-list--active')
      input.value = ''
    })

};



let input =  document.querySelector('#suggest')

// нахождение совпадения у списков выпадающего меню с тем что ввел пользователь
input.addEventListener('input' ,function(e){
  let val = e.target.value.trim();
  let btnItems = document.querySelectorAll(".adress-list__button")

  if(val != '') {
    btnItems.forEach(function(elem) {
      if(elem.textContent.search(val) == -1) {
        elem.classList.add('adress-list__items--hide');
        elem.innerHTML = elem.textContent;
      }
      else {
        elem.classList.remove('adress-list__items--hide')
        let str = elem.textContent;
        elem.innerHTML = obj.func(str, elem.textContent.search(val), val.length);
      }
    })
  }

  else {
    elasticItems.forEach(function(elem) {
      elem.classList.remove('adress-list__items--hide')
      elem.innerHTML = elem.textContent
    })
  };

})


let obj = {
  func : function (string, pos,len){

     return string.slice(0, pos) + '<span class = "adress-list__color-letter">' +  string.slice(pos, pos + len) + '</span>' + string.slice(pos + len);
   }
 }


function init() {
  let center = [55.75682095508686,37.62241529106783];
  let coordinates1 = [55.763281891551586,37.65434430718113];
  let coordinates2 = [55.751334536744665,37.64250461450141];
  let myMap = new ymaps.Map("map", {
    center: center,
    zoom: 14,
    controls:[],
  });
  let placemark1 = new ymaps.Placemark(coordinates1, {
    balloonContent: `
    <div class = "balloon">
        <div class = "balloon__container">
          <div class = "main">
            <h2 class = "main__title title-reset">SitDownPls на Солянке</h2>
            <div class = "main__address">м. Китай-город, ул. Солянка, д.24</div>
            <a href="tel:+74958854547" aria-label="Связаться с нами по телефону" class="main__tel tel">
              <svg
                class="main__svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3425 14.0983C17.215 14.0983 16.1242 13.915 15.1067 13.585C14.7858 13.475 14.4283 13.5575 14.1808 13.805L12.7417 15.6108C10.1475 14.3733 7.71833 12.0358 6.42583 9.35L8.21333 7.82833C8.46083 7.57167 8.53417 7.21417 8.43333 6.89333C8.09417 5.87583 7.92 4.785 7.92 3.6575C7.92 3.1625 7.5075 2.75 7.0125 2.75H3.84083C3.34583 2.75 2.75 2.97 2.75 3.6575C2.75 12.1733 9.83583 19.25 18.3425 19.25C18.9933 19.25 19.25 18.6725 19.25 18.1683V15.0058C19.25 14.5108 18.8375 14.0983 18.3425 14.0983Z"/>
              </svg>
              +7 (495) 885-45-47
            </a>
          </div>
          <div class = "time-jobs">
            <div class = "time-jobs__title">Часы работы<span class ="time-jobs__time">: с 10:00 до 21:00</span></div>
        </div>
        <div class = "what-this">
            <div class = "what-this__title">Что здесь:<span class ="what-this__text"> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span></div>
          </div>
    </div>
    `
  }, {
    iconLayout:'default#image',
    iconImageHref: 'img/elephant.svg',
    iconImageSize : [32, 22],
    iconImageOffset : [-30, -5],
    hideIconOnBalloonOpen:false,
  })
  let placemark2 = new ymaps.Placemark(coordinates2, {
    balloonContent: `
    <div class = "balloon">
        <div class = "balloon__container">
          <div class = "main">
            <h2 class = "main__title title-reset">SitDownPls на Петровке</h2>
            <div class = "main__address">м. Китай-город, ул. Солянка, д.24</div>
            <a href="tel:+74958854547" aria-label="Связаться с нами по телефону" class="main__tel tel">
              <svg
                class="main__svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3425 14.0983C17.215 14.0983 16.1242 13.915 15.1067 13.585C14.7858 13.475 14.4283 13.5575 14.1808 13.805L12.7417 15.6108C10.1475 14.3733 7.71833 12.0358 6.42583 9.35L8.21333 7.82833C8.46083 7.57167 8.53417 7.21417 8.43333 6.89333C8.09417 5.87583 7.92 4.785 7.92 3.6575C7.92 3.1625 7.5075 2.75 7.0125 2.75H3.84083C3.34583 2.75 2.75 2.97 2.75 3.6575C2.75 12.1733 9.83583 19.25 18.3425 19.25C18.9933 19.25 19.25 18.6725 19.25 18.1683V15.0058C19.25 14.5108 18.8375 14.0983 18.3425 14.0983Z"/>
              </svg>
              +7 (495) 885-45-47
            </a>
          </div>
          <div class = "time-jobs">
            <div class = "time-jobs__title">Часы работы<span class ="time-jobs__time">: с 10:00 до 21:00</span></div>
        </div>
        <div class = "what-this">
            <div class = "what-this__title">Что здесь:<span class ="what-this__text"> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span></div>
          </div>
    </div>
    `
  },{
    iconLayout:'default#image',
    iconImageHref: 'img/elephant.svg',
    iconImageSize : [32, 22],
    iconImageOffset : [-15, -15],
    hideIconOnBalloonOpen:false,
  })

  myMap.geoObjects.add(placemark1)
  myMap.geoObjects.add(placemark2)

  openList()

  //открытие баллунов
  function openBaloon (){
    let buttonItems = document.querySelectorAll('.adress-list__button')
    let addresslist = document.querySelector('.adress-list')
    buttonItems.forEach((e) => {

        e.addEventListener('click' , function(ec){
          let event = ec.currentTarget
          let color =  document.querySelectorAll('.adress-list__color-letter')
          color.forEach((e) => {
            e.style.color = 'white'
          })

          if(event.textContent.includes('Солянке')){
            placemark1.balloon.open()
            addresslist.classList.remove('adress-list--active')
            form.reset()
          }

          if(event.textContent.includes('Петровке')){
            placemark2.balloon.open()
            addresslist.classList.remove('adress-list--active')
            form.reset()
          }

        })
      })
  }

  openBaloon()
}

ymaps.ready(init);


}

document.addEventListener('DOMContentLoaded',  function(){

  const swiper = new Swiper('.hero__swiper', {
    speed: 800,
    loop: true,
    autoplay:{
      delay: 5000,
    }
  });

  const swiperUseful = new Swiper('.useful__swiper', {
    speed: 800,
    loop: false,
    spaceBetween:32,
    slidesPerView: 2,
    navigation: {
      nextEl: '.useful__btn-next',
      prevEl: '.useful__btn-prev',
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
});



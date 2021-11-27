document.addEventListener('DOMContentLoaded', function(){
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
})

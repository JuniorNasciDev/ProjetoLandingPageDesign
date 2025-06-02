const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  initialSlide:1,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});












const servicos = document.querySelectorAll('services__list__item__btn')
function abreTexto(botao){
  if(document.querySelector(`#${botao.id} ~ .services__list__item__text`).classList.contains('Abriu')){
    document.querySelector(`#${botao.id} ~ .services__list__item__text`).classList.remove('Abriu')
    document.querySelector(`#${botao.id} ~ .services__list__item__text`).style.animation ='fadeOut 0.1s linear forwards';
  }else{
    document.querySelector(`#${botao.id} ~ .services__list__item__text`).style.animation ='fadeIN 0.1s linear forwards';
    document.querySelector(`#${botao.id} ~ .services__list__item__text`).classList.add('Abriu')
    
  }
  

}
document.querySelector('.menu__btn').addEventListener('click', ()=>{
  const header= document.querySelector('.header')
  const headerMenu= document.querySelector('.header__menu')
  // if(classList.add('header--desplegado')){
  //   header.classList.add('header--desplegado')
  // }else{
  //   header.classList.add('header--desplegado')
  // }
  header.classList.toggle('header--desplegado')
  headerMenu.classList.toggle('header__menu--opacity')
})


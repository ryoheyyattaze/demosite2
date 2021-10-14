'use strict'; {

  function TextAnimation(el) {
    el = document.querySelector(el);
    const str = el.innerHTML;
    strArry = str.trim().split('');
  
    const result = strArry.reduce((acc, cur) => {
      return `${acc}<span class="char">${cur}</span>`;
    }, "");
    el.innerHTML = result;
  }
  
  TextAnimation('.main__text');
  
  //ハンバーガーメニュー
  const btn = document.querySelector('.header__btn');
  const menues = document.querySelectorAll('.mobile_menu__li');
  const mobileMenu = document.querySelector('.mobile_menu');
  function menuOpen() {
    btn.classList.toggle('inview');
    menues.forEach(menu => {
      menu.classList.toggle('inview');
    });
    const spans = document.querySelectorAll('.span');
    spans.forEach(span => {
      span.classList.toggle('inview');
    });
    mobileMenu.classList.toggle('inview');
  }
  
  btn.addEventListener('click', () => {
    menuOpen();
  });
  menues.forEach(menu => {
    menu.addEventListener('click', () => {
      menuOpen();
    });
  });
}


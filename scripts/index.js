var e=document.querySelector(".main-nav"),a=document.querySelector(".main-header__toggle-nav"),s=document.querySelector(".main-header__wrapper"),n=document.querySelector(".main-header__logo");e.classList.remove("main-nav--nojs");a.classList.remove("main-header__toggle-nav--nojs");s.classList.remove("main-header__wrapper--nojs");n.classList.remove("main-header__logo--nojs");e.classList.remove("main-nav--open");e.classList.add("main-nav--closed");a.classList.remove("main-header__toggle-nav--open");a.classList.add("main-header__toggle-nav--close");a.addEventListener("click",()=>{e.classList.contains("main-nav--open")?(e.classList.remove("main-nav--open"),e.classList.add("main-nav--closed"),a.classList.remove("main-header__toggle-nav--open"),a.classList.add("main-header__toggle-nav--close")):(e.classList.add("main-nav--open"),e.classList.remove("main-nav--closed"),a.classList.add("main-header__toggle-nav--open"),a.classList.remove("main-header__toggle-nav--close"))});
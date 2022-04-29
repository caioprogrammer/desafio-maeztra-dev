function swiperDesktop() {
    new Swiper(".banner .mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    })
}

function swiperMobile() {
    new Swiper(".products .mySwiper", {
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
      breakpoints: {
        320: {
          slidesPerView: 1.125,
        },
        590: {
          slidesPerView: 2.125,
        },
        976: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
        1248: {
          slidesPerView: 5,
        }
      }
    })
    
    new Swiper(".features-maeztra .mySwiper", {
      breakpoints: {
        320: {
          slidesPerView: 1.125,
        },
        642: {
          slidesPerView: 2,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      }
    })
    new Swiper(".brands .mySwiper", {
      slidesPerView: 1.125,
      autoplay: {
        delay: 8000,
      }
    })
}


const modal = document.querySelector('.modal-wrapper')
    
modal.querySelector('.close').onclick = () => {
  modal.classList.remove('show')
  document.querySelector('body').style.overflowY = 'scroll';

  // function setCookie(key, value, expiry) {
  //   var expires = new Date();
  //   expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
  //   document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  // }
  
  // function getCookie(key) {
  //   var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  //   return keyValue ? keyValue[2] : null;
  // }

  //  if(getCookie("jaexibiupopup") === null){
  //   modal.classList.add('show')
  //   setCookie('jaexibiupopup', true, 1);
  // }
}
    
window.onload = () => {
  modal.classList.add('show')
  document.querySelector('body').style.overflow = 'hidden';
}


function menu() {
  const menu = document.querySelector('.menu-mobile')
  menu.onclick = () => {
    document.querySelector('.header__nav-bar').classList.add('show')
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('.header__nav-bar').classList.add('animate-pop')
    document.querySelector('.header__nav-bar').classList.add('back')
  }

  const close = document.querySelector('.menu-close')
  close.onclick = () => {
    document.querySelector('.header__nav-bar').classList.remove('show')
    document.querySelector('.header__nav-bar').classList.remove('animate-pop')
    document.querySelector('.header__nav-bar').classList.add('back')
    document.querySelector('body').style.overflow = 'auto'
  }
}


swiperDesktop()
swiperMobile()
menu()



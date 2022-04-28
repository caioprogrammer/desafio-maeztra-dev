

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
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        590: {
          slidesPerView: 2,
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
          slidesPerView: 1,
        },
        642: {
          slidesPerView: 3,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      }
    })
    new Swiper(".partners .mySwiper", {
      slidesPerView: 1,
    })
}


const modal = document.querySelector('.modal-wrapper')
    
modal.querySelector('.close').onclick = () => {
  modal.classList.remove('show')
  document.querySelector('body').style.overflow = 'scroll'
}
    
// window.onload = () => {
//   modal.classList.add('show')
//   document.querySelector('body').style.overflow = 'hidden'
// }


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

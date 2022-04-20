// slick slider
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,

    prevArrow: `<div class="slider__btn-left">
    <button type='button' class='slick-prev pull-left'>
    <i class="fa-solid fa-chevron-left"></i>
    </button>
    </div>`,
    nextArrow: `<div class="slider__btn-right">
    <button type='button' class='slick-next pull-right'>
    <i class="fa-solid fa-chevron-right"></i>
    </button>
    </div>`,
});


  
// heart-noHaert

var likes = document.querySelectorAll('.recipes__product-heat')
likes.forEach(like => {
    like.onclick = function() {
        console.log('like');
        like.classList.toggle('heart-active');
    }
})

// menu mobile

var menu = document.querySelector('.header__list-menu')
var menuItem = document.querySelector('.header__list--info')

menu.onclick = function(e) {
    console.log('lew lew')
    menuItem.classList.toggle('menu-active');         
}
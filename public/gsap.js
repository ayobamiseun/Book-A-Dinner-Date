
var swiper = new Swiper('.swiper-container2', {
  speed: 1200,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
// If we need pagination
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
runCallbacksOnInit: true,
on: {
init: function () {
  zoomImage(this.$el);
  moveDownText(this.$el);
},
slideNextTransitionStart: function () {
  zoomImage(this.$el);
  moveDownText(this.$el);
},
slidePrevTransitionStart: function () {
  zoomImage(this.$el);
  moveDownText(this.$el);
} 
}
});
function zoomImage(sliderDOM) {
const slideActive = sliderDOM.find('.swiper-slide-active, .swiper-slide-duplicate-active');
const imageSlide = slideActive.find('.slide-inner--image'); 

const otherImages = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');
const notActiveImage = otherImages.find('.slide-inner--image');  

gsap.to(notActiveImage, .3, {x: 0, y: 0, opacity: 0, skewX: 0});

gsap.set(imageSlide, {x: 100, y: 50, opacity: 0, skewX: 30});
gsap.to(imageSlide, {duration: 0, x: 300, y: 0, opacity: 1});
}

function moveDownText(sliderDOM) {
const slideActive = sliderDOM.find('.swiper-slide-active');
const slideCaption = slideActive.find('.slide-inner--info');

const oldActive = sliderDOM.find('.swiper-slide-prev, .swiper-slide-prev');
const oldCaption = oldActive.find('.slide-inner--info');

// out
gsap.to(oldCaption, .3, {
ease: Power2.easeOut,
startAt: {
  autoAlpha: 1 },

autoAlpha: 0 });


// in
gsap.set(slideCaption, { autoAlpha: 0 });
gsap.to(slideCaption, 3, {
ease: Power4.easeOut,
startAt: {
  autoAlpha: 0,
  y: "-150%" },

autoAlpha: 1,
y: "4%",
display: "block" });

}

'use strict';
$(function() {

    // setInterval(function(){
    //     $('#slider .slides').animate({'margin-left': '-=720px'},1000);
    // }, 3000);


    var width=720;
    var animationSpeed=1000;
    var pause=3000;
    var currentSlide=1;

    var $slider = $('#slider');  //slider idliye ulaştık slider içine attık
    var $slideContainer = $slider.find('.slides'); //slider divi altındaki slides classlıya erişti
    var $slides = $slideContainer.find('.slide');

    var interval;
    function startSlider(){
        interval = setInterval(function() {
            $slideContainer.animate ({'margin-left':'-='+width}, animationSpeed, function(){
                currentSlide++; 
                if (currentSlide === $slides.length){
                    currentSlide = 1 ; //slide uzunluğuna kadar gittikten sonra tekrar başa döndü 
                    $slideContainer.css('margin-left', 0);
                }
        });
     }, pause);
}
function stopSlider(){
    clearInterval(interval);
}
$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider); //slider üstüne geldiğimizde durur, ayrıldığımızda tekrar çalışır
// startSlider();
});

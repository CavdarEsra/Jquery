$(function() {


var img = $(".img-card");
var imgWidth = img.width();
var imgHeight = img.height();
console.log("width:" + imgWidth);
console.log("height:" + imgHeight);

img.hover(
    function(){
        // current_h = $(this, 'img')[0].height;
        // current_w = $(this, 'img')[0].width;
        $(this).animate({width: (imgWidth * 1.7), height: (imgHeight * 1)}, 300);
    },
    function(){
        $(this).animate({width: imgWidth + 'px', height: imgHeight + 'px'}, 300);
    }
);
});
var wh=$(window).height();
$(window).scroll(function(){
var s=wh-$(window).scrollTop();
if(s<652){
console.log(s);
    $(".navbar-default").css('background',"#fff");
}else{
     $(".navbar-default").css('background',"none");
}
});


$(function(){
    $(".more").hover(function(){
        $(this).next().stop().slideDown(500);

},function(){
        $(".icon_top>li").hover(function(){},function(){
            $(".icon_bot").stop().slideUp(500);
        })
})
})



$(function(){
    var n=0;
    function  run(){
        n++;
        n=(n==6)?0:n;               /*---if(n==6){n=6}如果n=6是true，那么n=0,否则n=n---*/
        $(".banner img").eq(n).fadeIn(2000).siblings("img").fadeOut(1000);
        $(".banner ul li").eq(n).css({"background":"#666"}).siblings("li").css({"background":"#fff"});
    }
    var timer=setInterval(run,2000);
    $(".banner ul li").mouseenter(function(){        /*--鼠标移入---*/
        clearInterval(timer);
        var n=$(this).index();
        $(".banner img").eq(n).fadeIn(2000).siblings("img").fadeOut(1000);
        $(this).css({"background":"#666"}).siblings("li").css({"background":"#fff"});
    }).mouseleave(function(){                         /*--鼠标移出---*/
        timer=setInterval(run,2000);
    })
})


$(function () {
    $(".jianjie").hover(function () {
        $(".jianjie span").stop().slideDown(1000);
    },function () {
        $(".jianjie span").stop().slideUp(1000);
    })
})
$(function () {
    $(".jiameng").hover(function () {
        $(".jiameng span").stop().slideDown(1000);
    },function () {
        $(".jiameng span").stop().slideUp(1000);
    })
})
$(function () {
    $(".shouquan").hover(function () {
        $(".shouquan span").stop().slideDown(1000);
    },function () {
        $(".shouquan span").stop().slideUp(1000);
    })
})
$(function () {
    $(".jishu").hover(function () {
        $(".jishu span").stop().slideDown(1000);
    },function () {
        $(".jishu span").stop().slideUp(1000);
    })
})
$(function () {
    $(".img-text").hover(function () {
        $(this).find("a").show().animate({"opacity":0.9},1000);
    }, function () {
        $(this).find("a").show().animate({"opacity":0},800);
    })
})
$(function(){
    $(".C-nav p").hover(function(){
        $(".C-nav ul").stop().slideDown(1000);
    },function(){})
    $(".C-nav").hover(function(){},function(){
        $(".C-nav ul").stop().slideUp(500);
    })
})
$(function(){

    $('.slide .icon li').not('.up,.down').mouseenter(function(){
        $('.slide .info').addClass('hover');
        $('.slide .info li').hide();
        $('.slide .info li.'+$(this).attr('class')).show();//.slide .info li.qq
    });
    $('.slide').mouseleave(function(){
        $('.slide .info').removeClass('hover');
    });

    $('#btn').click(function(){
        $('.slide').toggle();
        if($(this).hasClass('index_cy')){
            $(this).removeClass('index_cy');
            $(this).addClass('index_cy2');
        }else{
            $(this).removeClass('index_cy2');
            $(this).addClass('index_cy');
        }

    });

});
 function chengeSheng(){
    var sheng=new Array();
    sheng[0]=['沧州','石家庄','承德'];
    sheng[1]=['德州','济南','淄博'];
    sheng[2]=['大同','太原','长治','临汾'];
    var shengType=document.getElementById("sheng").selectedIndex-1;
    document.getElementById("city").options.length=0;
    for(i=0;i<sheng[shengType].length;i++){
        var newoption=new Option(sheng[shengType][i],sheng[shengType][i]);
        document.getElementById("city").options.add(newoption);
    }

}
$(function(){
    $(".top1 img").hover(function(){
        $(".top1 p").stop().animate({"top":"185px"},1000);
    },function(){
        $(".top1 p").stop().animate({"top":"230px"},500);
    })
})
$(function(){
    $(".top2 img").hover(function(){
        $(".top2 p").stop().animate({"top":"185px"},1000);
    },function(){
        $(".top2 p").stop().animate({"top":"230px"},500);
    })
})
$(function(){
    $(".top3 img").hover(function(){
        $(".top3 p").stop().animate({"top":"185px"},1000);
    },function(){
        $(".top3 p").stop().animate({"top":"230px"},500);
    })
})
$(function(){
    $(".top4 img").hover(function(){
        $(".top4 p").stop().animate({"top":"185px"},1000);
    },function(){
        $(".top4 p").stop().animate({"top":"230px"},500);
    })
})
$(function(){
    $(".top5 img").hover(function(){
        $(".top5 p").stop().animate({"top":"185px"},1000);
    },function(){
        $(".top5 p").stop().animate({"top":"230px"},500);
    })
})
$(function(){
    $(".top6 img").hover(function(){
        $(".top6 p").stop().animate({"top":"185px"},1000);
    },function(){
        $(".top6 p").stop().animate({"top":"230px"},500);
    })
})







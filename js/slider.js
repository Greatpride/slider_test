$(function(){
    $(".show-area").mouseenter(function(){
        $(".button-right,.button-left").css({opacity:0.5});
    });
    $('.show-area').mouseleave(function(){
        $(".button-right,.button-left").css({opacity:0});
    })

    var i=0;
    var imgWidth = $(".show-area ul li").width();
    var clone = $(".show-area ul li").first().clone(true);
    /*cope第一张照片并且添加到最后以达到无缝衔接的效果*/
    $(".show-area ul").append(clone);

    var size = $(".show-area ul li").length;

    for(var j=0;j<size-1;j++){
        $(".indicator").append("<div></div>");
    }

    $('.indicator div').eq(i).addClass("onclick");

    $(".button-left").click(function(){
        toLeft();
    });
    $(".button-right").click(function(){
        toRight();
    });

    $(".indicator div").hover(function(){
        i = $(this).index();
        clearInterval(timer);
        $(".show-area ul").stop().animate({left:-i * imgWidth});
        $(this).addClass("onclick").siblings().removeClass("onclick");
    },function(){
        timer = setInterval(function(){
            toRight();
        },2000);
    });

    $(".button-left,.button-right").mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer = setInterval(function(){
            toRight();
        },2000);
    });

    var timer = setInterval(function(){
        toRight();
    },2000);

    function toLeft(){
        i--;
        if(i==-1){
            $(".show-area ul").css({left:-(size - 1)*imgWidth})
            i = size-2;
        }
        $(".show-area ul").animate({left:-i*imgWidth},1000);
        $(".indicator div").eq(i).addClass("onclick").sibings().removeClass("onclick");
    }

    function toRight() {
        i++;
        if(i==size){
            $(".show-area ul").css({left:0});
            i=1;
        }

        $(".show-area ul").stop().animate({left: -i * imgWidth},1000);

        $('.show-area ul').stop().animate({left: -i * imgWidth},1000);

        if(i == size-1){
            $(".indicator div").eq(0).addClass("onclick").siblings().removeClass("onclick");
        }else{
            $(".indicator div").eq(i).addClass("onclick").siblings().removeClass("onclick");
        }
    }
})


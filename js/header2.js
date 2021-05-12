$(function(){
    (function($){
        var timer;
        function newsTop(){
            $(".top-wrap-content-ani").animate({
                "margin-top":-30
            },1000,function(){
                $(".top-wrap-content-ani").children(":first").appendTo($(".top-wrap-content-ani"));
                $(".top-wrap-content-ani").css("margin-top","0px");
            })
            timer=setTimeout(newsTop,4000);
        }
        timer=setTimeout(newsTop,4000);
        $(".top-wrap-content-ani a").on({
            "mouseenter":function(){
                clearTimeout(timer);
            },
            "mouseleave":function(){
                timer=setTimeout(newsTop,4000);
            }
        })
    })(jQuery);
   
// *************top-new滚动*************

(function($){
    var arr=["呵护秀发","修护精华","面膜精选","漫威丝芙兰独家系列"];
    var x=0;
    var timer;
    $(".search-info-box").on("focus",function(){
        clearTimeout(timer);
        $(this).prop("placeholder","");
    })
    $(".search-info-box").on("blur",function(){
            timer=setTimeout(searchPlaceholder,4000);
    })
    function searchPlaceholder(){
        x++;
        x%=4;
        $(".search-info-box").prop("placeholder",arr[x]);
        timer=setTimeout(searchPlaceholder,4000);
    }
    timer=setTimeout(searchPlaceholder,4000);

})(jQuery);


// ******搜索框信息更新**********
(function($){
    $(".shopping-car").mouseenter(function(e){
        $(this).css({
            "height":"40px",
            borderBottom:"none"
        })
        $(".shopping-car-info").css({
            display:"block"
        })
    })
    $(".shopping-car").mouseleave(function(e){
        if(e.currentTarget.className=="shopping-car"&& e.relatedTarget.className!="shopping-car-info clearfix"){
            $(this).css({
                "height":"35px",
                borderBottom:"1px solid #ddd"
            })
            $(".shopping-car-info").css({
                display:"none"
            })
        }
    })
    $(".shopping-car-info").mouseleave(function(e){
        if(e.currentTarget.className=="shopping-car-info clearfix" && e.relatedTarget.className!="shopping-car"){
            $(".shopping-car").css({
                "height":"35px",
                borderBottom:"1px solid #ddd"
            })
            $(".shopping-car-info").css({
                display:"none"
            })
        }
   })

  
})(jQuery);
(function(){
    $(".nav-all-product").mouseenter(function(){
        $(".navigation-info-content-menu").css("display","block");
    })
    $(".nav-all-product").mouseleave(function(e){
        if(!$(e.relatedTarget).parents(".navigation-info-content-menu").get(0)){
            $(".navigation-info-content-menu").css("display","none");
        }
        
    })
    $(".navigation-info-content-menu").mouseleave(function(e){
        if(!$(e.relatedTarget).parents(".anvigation-info-content-hover-wrap").get(0)){
            $(this).css("display","none");
        }
    })
   })(jQuery);
   (function($){
    $(".navigation-info-content-menu-list li").on({
        mouseenter:function(e){
            $(".anvigation-info-content-hover-wrap").css("display","block");
            $(".anvigation-info-content-hover").css("display","none").eq($(this).index(".navigation-info-content-menu-list li")).css("display","block");
            $(this).addClass("active-style").siblings().removeClass("active-style");
            
        },
        mouseleave:function(e){
            // console.log(!$(e.relatedTarget).parents(".anvigation-info-content-hover-wrap").get(0));

            if(!$(e.relatedTarget).parents(".anvigation-info-content-hover-wrap").get(0)){
                 $(".anvigation-info-content-hover-wrap").css("display","none");
                $(".anvigation-info-content-hover").css("display","none");
                $(".navigation-info-content-menu-list li").removeClass("active-style");
            //    $(".navigation-info-content-menu").css("display","none");
            }
        }
    })
    $(".anvigation-info-content-hover").on({
        mouseleave:function(e){
            // console.log( $(e.relatedTarget).parents(".navigation-info-content-menu-list").get(0))
            if(!$(e.relatedTarget).parents(".navigation-info-content-menu-list").get(0)||$(e.relatedTarget).parents(".navigation-info-content-menu-list").get(0).className!="navigation-info-content-menu-list"){
                $(".anvigation-info-content-hover-wrap").css("display","none");
                $(this).css("display","none");    
                $(".navigation-info-content-menu-list li").removeClass("active-style");
                $(".navigation-info-content-menu").css("display","none");
            }
        }
    })

})(jQuery);
});
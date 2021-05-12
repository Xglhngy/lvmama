$(function(){
    (function($){
        if(document.cookie){
            var reg=/key=(.+)/;
            var str=document.cookie.match(reg)[1];
            var str1="<span style='cursor:pointer'>"+JSON.parse(str).name+"</span>"
            $(".login").html(str1);
            $(".free-register").css("display","none");
            $(".back-login").css("display","block");
            $(".phone-verification").css("display","none");
            $(".shopping-car-title").html("购物车空空的哦~,去看看心仪的商品吧~");
            $(".back-login").click(function(){
                document.cookie="key=;expirse=1";
                $(".login").html("<a href='login.html'>请登录</a>");
                $(".free-register").css("display","block");
                $(".back-login").css("display","none");
                $(".phone-verification").css("display","block");
                $(".shopping-car-title").html("<p>购物车内暂时没有商品，登录后将显示您之前加入的商品 </p>"+
                "<div class='shopping-car-login'><a href='login.html'>登录</a>");
            })
        }
    })(jQuery);
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
    // 购物袋移入移出；

    (function ($) {
        var x = 0;
        var timer;
        var flag=true;
        $(".navigation-sowing-map-progress li").eq(x).css({
            backgroundColor:"rgba(255,255,255)"
        })
        $(".navigation-sowing-map-content li:first").css("display", "block");
        function sowingMap() {
            if (flag) {
                flag = false;
                $(".navigation-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255,.5)"
                })
                $(".navigation-sowing-map-content li").eq(x).fadeOut(500,function(){
                    // console.log("aa")
                });
                x++;
                if (x > 4) {
                    x = 0;
                } 
                $(".navigation-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255)"
                })
                $(".navigation-sowing-map-content li").eq(x).fadeIn(500, function () {
                   
                    flag = true;
                    timer = setTimeout(sowingMap, 5000); 
                    // console.log("bb")

                })
                  $(".navigation-sowing-map-wrap").css({
                    backgroundColor: $(".navigation-sowing-map-content li").eq(x).data("color")
                })
            }
        }
        function prev() {
            if (flag) {
                flag = false;
                $(".navigation-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255,.5)"
                })
                $(".navigation-sowing-map-content li").eq(x).fadeOut(500);
                x--;
                if (x < 0) {
                    x = 4;
                }
                $(".navigation-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255)"
                })
                $(".navigation-sowing-map-content li").eq(x).fadeIn(500, function () {
                    flag = true;
                    timer = setTimeout(sowingMap, 5000);
                })
                $(".navigation-sowing-map-wrap").css({
                    backgroundColor: $(".navigation-sowing-map-content li").eq(x).data("color")
                })
                
            }
        }

        $(".navigation-sowing-map-wrap .prev").click(function(){
            clearTimeout(timer);
            prev();
        })
        $(".navigation-sowing-map-wrap .next").click(function(){
            clearTimeout(timer);
            sowingMap();
        });
        timer=setTimeout(sowingMap, 5000);

        $(".navigation-sowing-map-progress li").click(function(){
            if (x != $(this).index()) {
                if (flag) {
                    flag = false;
                    clearTimeout(timer);
                    $(".navigation-sowing-map-content li").eq(x).fadeOut(300);
                    x = $(this).index();
                    $(this).css("backgroundColor", "rgba(255,255,255)").siblings().css("background-color", "rgba(255,255,255,.5)")
                    $(".navigation-sowing-map-content li").eq($(this).index()).fadeIn(200, function () {
                        timer = setTimeout(sowingMap, 5000);
                        flag = true;
                    })
                }
            }
        })
    })(jQuery);

    // navigation-轮播图
    (function($){
        $(".all-brands-detail-left-word span").click(function(){
            // console.log($(".scroll-floor").eq(0).position().top)
            // console.log($(".scroll-floor").eq($(this).index(".all-brands-detail-left-word span")).position().top)
            $(".all-brands-detail-right").stop().animate({
                scrollTop:$(".scroll-floor").eq($(this).index(".all-brands-detail-left-word span")).position().top
            },500)
        })
    })(jQuery);
    // (function($){
    //     $(".all-brands-detail-left-word span").click(function(){
    //         $(window).scroll(function(){
    //             return false;
    //         })
    //     })
    // })(jQuery);

    // 全部品牌中的楼层滚动
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
            }
        }
    })

})(jQuery);
    //二级菜单

    (function ($) {
        var x = 0;
        var timer;
        var flag=true;
        $(".all-brands-sowing-map-progress li").eq(x).css({
            backgroundColor:"rgba(255,255,255)"
        })
        $(".all-brands-sowing-map img:first").css("display", "block");
        function sowingMap() {
            if (flag) {
                flag = false;
                $(".all-brands-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255,.5)"
                })
                $(".all-brands-sowing-map img").eq(x).fadeOut(500,function(){
                   
                });
                x++;
                if (x > 1) {
                    x = 0;
                } 
                $(".all-brands-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255)"
                })
                $(".all-brands-sowing-map img").eq(x).fadeIn(500, function () {
                   
                    flag = true;
                    timer = setTimeout(sowingMap, 3000);

                })
                 
            }
        }
        function prev() {
            if (flag) {
                flag = false;
                $(".all-brands-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255,.5)"
                })
                $(".all-brands-sowing-map img").eq(x).fadeOut(500);
                x--;
                if (x < 0) {
                    x = 1;
                }
                $(".all-brands-sowing-map-progress li").eq(x).css({
                    backgroundColor: "rgba(255,255,255)"
                })
                $(".all-brands-sowing-map img").eq(x).fadeIn(500, function () {
                    flag = true;
                    timer = setTimeout(sowingMap, 3000);
                })
               
                
            }
        }

        $(".all-brands-sowing-map .prev").click(function(){
            clearTimeout(timer);
            prev();
        })
        $(".all-brands-sowing-map .next").click(function(){
            clearTimeout(timer);
            sowingMap();
        });
        timer=setTimeout(sowingMap, 3000);

        $(".all-brands-sowing-map-progress li").click(function(){
            if (x != $(this).index()) {
                if (flag) {
                    flag = false;
                    clearTimeout(timer);
                    $(".all-brands-sowing-map img").eq(x).fadeOut(300);
                    x = $(this).index();
                    $(this).css("backgroundColor", "rgba(255,255,255)").siblings().css("background-color", "rgba(255,255,255,.5)")
                    $(".all-brands-sowing-map img").eq($(this).index()).fadeIn(200, function () {
                        timer = setTimeout(sowingMap, 3000);
                        flag = true;
                    })
                }
            }
        })
    })(jQuery);

    // 全部品牌轮播图

    (function($){
        $(".tab-hot-brands").click(function(){
            $(".tab-hot-brands").removeClass("weight");
            $(this).addClass("weight");
            $(".tab-hot-brands-content").removeClass("active").eq($(this).index(".tab-hot-brands")).addClass("active");
        })
    })(jQuery);
    // 全部品牌tab切换

    (function($){
        $(".ani").hover(function(){
            $(this).stop().animate({
                "right":"15px"
            },500,"linear")
       
        },function(){
            $(this).stop().animate({
                "right":5
            },300,"linear")
        });

        $(".ani1").hover(function(){
            $(this).stop().animate({
                "right":"10px"
            },300)
            
        },function(){
            $(this).stop().animate({
                "right":0
            },300)
        })
    })(jQuery);
    // 为页面所有图片绑定动画
    (function($){
         var flag=false;
         var x=0;
         var timer;
         var arr=["呵护秀发","修护精华","面膜精选","漫威丝芙兰独家系列"];
         function setPlaceHolder(){
            x++;
            x%=4;
            $(".fixed-top-search-box").prop("placeholder",arr[x]);
            timer=setTimeout(setPlaceHolder,4000);
         }
        $(window).scroll(function(){
            var wt=$(window).height()/2;
            var height=$(".category").eq(0).offset().top-wt;
            if($(document).scrollTop()>=height){
                $(".fixed-left").css("display","block");
            }else{
                $(".fixed-left").css("display","none");
            }

            if($(document).scrollTop()>=700&&(flag==false)){
                flag=true;
                $(".fixed-right").css("display","block");
                $(".fixed-top").stop().animate({
                    "top":0
                },500,function(){
                   timer=setTimeout(setPlaceHolder,2000);
                    $(".fixed-top-search-box").focus(function(){
                         clearTimeout(timer);
                        $(this).prop("placeholder",""); 
                    })
                    $(".fixed-top-search-box").blur(function(){
                        timer=setTimeout(setPlaceHolder,2000);
                    })
                });
            }else if($(document).scrollTop()<700&&flag){
                flag=false;
                
                $(".fixed-right").css("display","none");
                $(".fixed-top").stop().animate({
                    "top":"-65px"
                },500,function(){
                    clearTimeout(timer);
                    $(".fixed-top-search-box").prop("placeholder","请输入您要搜索的关键词");
                });
            }
            // 搜索框出现
            $.each($(".category"),function(index){
                var ht=$(this).height()-wt;
                if($(this).offset().top<$(window).scrollTop()+wt && $(this).offset().top>$(window).scrollTop()-ht){
                   $(".fixed-left-list li").eq(index).addClass("color").siblings().removeClass("color");
                }
                if($(document).scrollTop()>=6886){
                    $(".fixed-left-list li").removeClass("color");
                }
            })
        })
        $(".fixed-left-list li").click(function(){
            var ht=$(".category").eq($(this).index()).offset().top;
            $("html,body").stop().animate({
                scrollTop:ht-80
            },500);
        })
    })(jQuery);

    // 楼层滚动/搜索框出现
    (function($){
        $(".fixed-right-list-five,.fixed-right-list-five div").click(function(){
            $("html,body").animate({
                scrollTop:"0"
            })
        })
    })(jQuery);

    // 返回顶部
    (function($){
        $(".search-info-box").keyup(function(e){
           
            if(e.which==13){
                location.href="search-page.html?val="+this.value;
                
            }
        })
        $(".module-search-submit").click(function(){
            if($(".search-info-box").val()){
                location.href="search-page.html?val="+this.value;
            }
        })
        
        $(".fixed-top-search-box").keyup(function(e){
           
            if(e.which==13){
                location.href="search-page.html?val="+this.value;
                
            }
        })
        $(".fixed-top-search-btn").click(function(){
            if($(".fixed-top-search-box").val()){
                location.href="search-page.html?val="+this.value;
            }
        })
    })(jQuery);


    // 搜索框
})

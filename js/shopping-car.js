$(function(){
    (function($){
        var str=localStorage.getItem("message");
        var arr=JSON.parse(str);
        var html=""
        for(var i=0;i<arr.length;i++){
            var arr2=JSON.parse(arr[i].data);
            html+= '<ul class="module-checkoutTable-content clearfix" data-id='+arr2[0].Id+'>'
                        +'<li class="goods-img">'
                            +'<input type="checkbox" class="toggle-alone">'
                           +'<a href="###"><img src="images/'+arr2[0].img+'" alt=""></a>'
                        +'</li>'
                        +'<li class="goods-brand">'
                            +'<span>'+arr2[0].brand+'</span>'
                            +'<div><a href="###">'+arr2[0].desc1+'</a></div>'
                            +'<span class="goods-brand-standard">规格：套装</span>'
                        +'</li>'
                        +'<li class="goods-price">'+arr2[0].price+'</li>'
                        +'<li class="goods-computed clearfix">'
                            +'<span class="sub add-color">-</span>'
                            +'<span class="sum" data-num="'+arr[i].count+'">'+arr[i].count+'</span>'
                            +'<span class="add">+</span>'
                        +'</li>'
                        +'<li class="goods-all-price" data-price='+(arr2[0].price*arr[i].count)+'>'+(arr2[0].price*arr[i].count)+'</li>'
                        +'<li class="goods-delete">'
                            +'<i class="recycle-bin"></i>'
                        +'</li>'
                    +'</ul>'
        }  
        $(".module-checkoutTable-content-wrap").html(html);
   
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
(function($){
    var x=0
    $(".module-control-right").click(function(){
        x++;
        if(x>1){
            x=1
        }
        if(x!=0){
            $(".module-control-left").removeClass("add-bg-color");
        }
        if(x==1){
            $(".module-control-right").addClass("add-bg-color");
        }
        $(".guess-you-like-info-content-wrap").stop().animate({
            "margin-left":-x*1190+"px"
        },500);
    })
    $(".module-control-left").click(function(){
        x--;
        if(x<0){
            x=0
        }
        if(x==0){
            $(".module-control-left").addClass("add-bg-color");
        }
        if(x!=1){
            $(".module-control-right").removeClass("add-bg-color");
        }
        $(".guess-you-like-info-content-wrap").stop().animate({
            "margin-left":-x*1190+"px"
        },500);
    })
})(jQuery);
(function($){

    $(".all-choose").change(function(){
        if(this.checked){
            $(".toggle-alone").prop("checked","checked");
            $(".all-choose").not($(this)).prop("checked","checked");
        }else{
            $(".toggle-alone").removeProp("checked");
            $(".all-choose").not($(this)).removeProp("checked");
        }
        if($(".toggle-alone").get(0)){
            change();
        }
    })

    $(".toggle-alone").change(function(){
        console.log("change") 
       change();
    })
    
    $(".add").click(function(e){
        $(".toggle-alone").eq($(this).index(".add")).prop("checked","checked");
        e.preventDefault();
        var x;
        x=$(this).prev().data("num");
        x++;
        $(this).siblings(".sub").removeClass("add-color");
        $(this).prev().data("num",x);
        $(this).prev().text(x);
        $(this).parent().next().text(($(this).parent().next().data("price"))*x);
        change();
    }) 
       $(".sub").click(function(e){
           e.preventDefault();
        var x;
        x=$(this).next().data("num");
        x--;
        if(x<1){
            x=1
            $(this).addClass("add-color");
        }
        $(this).next().data("num",x);
        $(this).next().text(x);
        $(this).parent().next().text(($(this).parent().next().data("price"))*x);
        change();
    }) 
    function change(){
        var flag=true;
        var x=0;
        var num=0;
        var node;
        $.each($(".toggle-alone"),function(){
            var a=0;
            if(!this.checked){
                flag=false;
            }else{
                a=$(this).parent().siblings(".goods-computed").children(".sum").data("num");
                node=$(this).parent().siblings(".goods-all-price").data("price");
                num+=a*node;
                x+=a;
            }
        })
            $(".choose-sum").text(x);
            $(".choose-price-sum").text("￥"+num+".00");
        if(flag){
            $(".all-choose").prop("checked","checked");
        }else{
            $(".all-choose").removeProp("checked");
        }
    }
    $(".recycle-bin").click(function(){
        var str=localStorage.getItem("message");
            console.log(str);
            var arr=JSON.parse(str);
        var id=$(this).parents(".module-checkoutTable-content").data("id");
        for(var i=0;i<arr.length;i++){
            var arr2=JSON.parse(arr[i].data);
            console.log(arr2[0]["Id"])
            if(arr2[0]["Id"]==id){
                arr.splice(i,1);
            }
        }
        localStorage.setItem("message",JSON.stringify(arr));
        $(this).parents(".module-checkoutTable-content").remove();

        change();
    })
    $(".all-delete").click(function () {
        var str = localStorage.getItem("message");
        var arr = JSON.parse(str);
        $.each($(".toggle-alone"), function () {
            if (this.checked) {
                var id = $(this).parents(".module-checkoutTable-content").data("id");
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = JSON.parse(arr[i].data);
                    console.log(arr2[0]["Id"])
                    if (arr2[0]["Id"] == id) {
                        arr.splice(i, 1);
                    }
                }
                $(this).parents(".module-checkoutTable-content").remove();
            }
        })
        localStorage.setItem("message",JSON.stringify(arr));
        change();
        if(!$(".toggle-alone").get(0)){
            $(".all-choose").removeProp("checked");
        }
    })
    
        $("html,body").bind("selectstart", function () { return false; });
   
    })(jQuery);
    (function($){
        var x=$(".checkoutSubmit-info-content-static").offset().top;
        console.log(window);
        $(window).scroll(function(){
            if($(document).scrollTop()+$(window).height()>=x+60){
                $(".checkoutSubmit-info-content-static-fixed").css({
                    position:"absolute"
                })
            }else{
                $(".checkoutSubmit-info-content-static-fixed").css({
                    position:"fixed"
                })
            }
        })
    })(jQuery);
})
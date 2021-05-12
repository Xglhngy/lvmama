$(function(){
    (function($){
        $(".english1 li").eq(0).css({"color":"white","background-color":"black"})//第一个默认显示
        $(window).scroll(function(){		
            var st=$(document).scrollTop();//获取文档的scrollTop()
            var H=$(window).height();//获取窗口高度
            H/=8;
            $(".espai1a").each(function(i,val){
                var ot=$(".espai1a").eq(i).offset().top;//获取每一楼层的offset().top
                var res=$(".espai1a").eq(i).height();//获取每一楼层的高度
                    if (ot<=st+H&&ot+res>=st+H){
                        $(".scrol1 li").css({"color":"black","background-color":"white"}).eq(i).css({"color":"white","background":"black"});//其他的是原来的颜色,当前的是改变的颜色
                        $(".scrol2 li").css({"color":"black","background-color":"white"}).eq(i).css({"color":"white","background":"black"});//其他的是原来的颜色,当前的是改变的颜色
                    }
            })
            var st1=$(document).scrollTop();
            $(".a").each(function(i,val){
            var ot1=$(".a").eq(i).offset().top;
                var res1=$(".a").eq(i).height();
                if(ot1<=st1){
                    $(".hidden1").css("display","block")
                }else{
                    $(".hidden1").css("display","none")
                }
                
            })
            if(st1>=850){
                $(".fixedright").css("display","block")
            }else{
                $(".fixedright").css("display","none")

            }
        })
    
    })(jQuery);
    (function($){
        $(".scrol2 li").click(function(){
 
            console.log($(this).text(),$(this).index());
            $(this).data("css","reset").siblings(".scrol2 li").removeData("css");
            
            var dd=$(".espai1a").eq($(this).index(".scrol2 li")).offset().top-61;
            //文档流的高度
            $("html,body").stop().animate({scrollTop:dd},500);//$必须是html和body
            
           
        })
        $(".scrol1 li").click(function(){
            // console.log(this);
          
            $(this).css({"color":"white","background-color":"black"})
            var dd=$(".espai1a").eq($(this).index()).offset().top;
            //文档流的高度
            // console.log(dd);
            $("html,body").stop().animate({scrollTop:dd},500);//$必须是html和body
        })
        $(".scrol2 li").hover(function(){
           
            if(!$(this).data("css")){
            
          
                $(this).css({"color":"white","background-color":"black"})
            }
        },function(){
            // console.log($(this).data("css"));
            if(!$(this).data("css")){
                 $(this).css({"color":"black","background-color":"white"})
            }
        })
        $(".scrol1 li").on({
            "mouseover":function(){
                $(this).css({"color":"white","background-color":"black"})
            },
            "mouseout":function(){    
                $(this).css({"color":"black","background-color":"white"})
            }
        }) 
        $(".sprite-five").on("click",function(){
            $("html,body").animate({
                scrollTop:0
            },500)
        })
    })(jQuery);
})


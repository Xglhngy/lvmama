$(function(){
    (function($){
        
        $(".branav li:eq(1)").hover(function(){
            $(this).addClass("dujia").children().css("color","white");
            $(this).prev().removeClass("dujia");
            console.log(this)
        },function(){
            $(this).removeClass("dujia").children().css("color","black");
            $(this).prev().addClass("dujia")
        })
        $(".nav-left li:eq(1)").hover(function(){
            $(this).addClass("pinpai").children().css("color","white");
            $(this).prev().removeClass("pinpai");
        },function(){
            $(this).removeClass("pinpai").children().css("color","black");
            $(this).prev().addClass("pinpai");
        })
        
        $(".nav-left li:eq(0)").hover(function(e){
             $("#smallbrand").css("display","block");
            
        },function(e){
           if(!$(e.relatedTarget).parents("#smallbrand").get(0)){
            $("#smallbrand").css("display","none");
         }
        })
           $("#smallbrand").mouseleave(function(e){
                if(!$(e.relatedTarget).parents(".nav-left").get(0)){
                    $("#smallbrand").css("display","none");
                }
           })
        
        $(window).scroll(function(){
             var st=$(this).scrollTop();//获取滚动条的高度
        //    console.log($(this).scrollTop());
            // var ot=$("#fisico1").offset().top;
        //     var canzh=$(".center").eq(0).offset().top;
        //    console.log($(".center").eq(0).offset().top);
            if(st>=380){
                // console.log( $("#fisico1").offset().top-$(".center").eq(0).offset().top)
                $("#fisico1").css({"position":"fixed","top":"440px","left":"0"});

            }else{
                $("#fisico1").css({
                    position:"absolute",
                    left:0,
                    top:"780px"
                }); 
            }
            if(st>=200){
                $("#fisico2").css({"position":"fixed","top":"615px","left":"128px"});
            }else{
                $("#fisico2").css({
                    position:"absolute",
                    left:"128px",
                    top:"708px"
                })
            }
            if(st>=966){
                $("#fisico3").css({"position":"fixed","top":"50px","right":"0"});
            }else{
                $("#fisico3").css({
                    position:"absolute",
                    right:"0",
                    top:"880px"
                })
            }
            if(st>=1100){
                $("#branding").css("display","block");
            }else{
                $("#branding").css("display","none");
            }
         })

         
          
    })(jQuery);
   
})
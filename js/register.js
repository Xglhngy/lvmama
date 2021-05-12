$(function(){
    (function($){
        var flag=false;
        $(".toggle").click(function(){
            $(".register-info-box").eq($(this).index(".toggle")).addClass("hide").siblings(".register-info-box").removeClass("hide");
            $("input").val("");
            $(".phone-agree").css({
                "background-color":"#9d9d9d"
            });
            $(".email-agree").css({
                "background-color":"#9d9d9d"
            });
            $(".err").css({
                "display":"none",
                "background-position":"-20px -18px"
            })
            $(".mail").data("flag","");
            $(".paw-email").data("flag","");
            $(".confirm-paw-email").data("flag","");
            $(".name").data("flag","");
            $(".paw-phone").data("flag","");
            $(".confirm-paw-phone").data("flag","");
            flag=false;
        })
        
        $(".phone-box input").keyup(function(){
            if($(".name").val()&&$(".paw-phone").val()&&$(".confirm-paw-phone").val()){
                flag=true;
                $(".phone-agree").css({
                    "background-color":"#e00"
                });
            }
        })
        $(".email-box input").keyup(function(){
            if($(".mail").val()&&$(".paw-email").val()&&$(".confirm-paw-email").val()){
                flag=true;
                $(".email-agree").css({
                    "background-color":"#e00"
                });
            }
        })
    
        $(".phone-agree").click(function(){
          
            if($(".name").data("flag")&&$(".paw-phone").data("flag")&&$(".confirm-paw-phone").data("flag")){
                $.ajax({
                    url:"../php/register.php",
                    type:"post",
                    data:{"name":$(".name").val(),"paw":$(".confirm-paw-phone").val()},
                    success:function(data){
                        console.log(data);
                        if(data=="注册成功"){
                            $(".worning-wrap").fadeIn(500);
                            setTimeout(function(){
                                location.href="login.html";
                            },2000)
                        }else{

                        }
                    }
                })
            }
        })
        $(".email-agree").click(function(){
            if($(".mail").data("flag")&&$(".paw-email").data("flag")&&$(".confirm-paw-email").data("flag")){
                $.ajax({
                    url:"../php/register.php",
                    type:"post",
                    data:{"name":$(".mail").val(),"paw":$(".confirm-paw-email").val()},
                    success:function(data){
                        console.log(data);
                        if(data=="注册成功"){
                            $(".worning").text("注册成功，正在调转至登录页面...");
                            $(".worning-wrap").fadeIn(500);
                            setTimeout(function(){
                                location.href="login.html";
                            },2000)
                        }else{
                            $(".worning").text("该账号已存在");
                            $(".worning-wrap").fadeIn(500);
                        }
                    }
                })
            }
        })
        $(".err").mousedown(function(){
            if($(this).css("background-position")=="-20px -18px"){
                $(this).prev().val("");
                $(this).css({
                    "display":"none",
                    "background-position":"-20px -18px"
                })
            }
            
        })
        var reg=/(^1+[3-9]+\d{9})|(^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$)/;
        $(".name,.paw-phone,.confirm-paw-phone,.mail,.paw-email,.confirm-paw-email").focus(function(){
            $(this).next().css({
                "display":"block",
                "background-position":"-20px -18px"
            })
        })
        $(".confirm-paw-phone,.confirm-paw-email").blur(function(){
            if($(this).val()!=$(this).parent().prev().children("input").val()&&$(this).val()){
                $(this).next().css({
                    "display":"block",
                    "background-positionY":"-36px"
                })
            }else if($(this).val()==""){
                $(this).next().css({
                    "display":"none",
                    "background-position":"-20px -18px"
                })
            }else{
                $(this).next().css({
                    "display":"block",
                    "background-position":"-20px 0px"
                })
                $(this).data("flag","true");
            }
        })
        $(".name,.paw-phone,.mail,.paw-email").blur(function(){
            var str=$(this).val();
            
            if(!reg.test(str)&&$(this).val()){
                $(this).next().css({
                    "display":"block",
                    "background-positionY":"-36px"
                })
            }else if($(this).val()==""){
                $(this).next().css({
                    "display":"none",
                    "background-position":"-20px -18px"
                })
            }else{
                $(this).next().css({
                    "display":"block",
                    "background-position":"-20px 0px"
                })
                $(this).data("flag","true");
            }
        })
    })(jQuery);
})
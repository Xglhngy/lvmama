//常见问题单行滚动js效果。。。。。。。。。。。。。。。。。。。。。。。。。。
setInterval(function(){
    $(".con-t").animate({"margin-top":-30},400,function(){
        $(".con-t li:first-child").appendTo(".con-t").parent().css("margin-top",0);
    })
},2000)

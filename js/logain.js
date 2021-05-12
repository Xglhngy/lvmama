
$("#user").on("focus", function () {
        $(".first .img").html("");
        if ($(".first .img").html() == "") {
            $("<img>").attr("src", "images/cha.jpg").appendTo(".first .img");
        }
        $(".prompt span").html("")
        $(".prompt img").css("display", "none")
        $(".first").css("borderBottom", "1px solid #aaa")
    })
    .on("blur", function () {
        $(".first img").css("display", "none")
    })
$("#pwd").on("focus", function () {
        $(".second .img").html("");
        if ($(".second .img").html() == "") {
            $("<img>").attr("src", "images/cha.jpg").appendTo(".second .img");
        }
        $(".prompt span").html("")
        $(".prompt img").css("display", "none")
        $(".second").css("borderBottom", "1px solid #aaa")
    })
    .on("blur", function () {
        $(".second img").css("display", "none")
    })
$(".first .img").on("click", function () {
    $("input:text").val("")
})
$(".second .img").on("click", function () {
    // console.log(2);
    $("input:password").val("")
})
window.onkeyup = function () {
    if ($("input:text").val() != "" && $("input:password").val() != "") {
        $(".btn").css("background", "black");
        $(".btn").hover(function () {
            $(".btn").css("background", "red")
        }, function () {
            $(".btn").css("background", "black");
        })
        $(".btn").on("click", function () {
            var reg = /(^1+[3-9]+\d{9})|(^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$)/;
            if ($("input:password").val().length > 16) {
                $(".prompt span").html("密码不能大于16位")
                $(".second img").attr("src", "images/prompt1.jpg")
                $(".second img").css("display", "block")
                $(".prompt img").css("display", "block")
                $(".second").css("borderBottom", "1px solid red")
            } else if ($("input:password").val().length < 6) {
                $(".prompt span").html("密码不少于6位")
                $(".second img").attr("src", "images/prompt1.jpg")
                $(".second img").css("display", "block")
                $(".prompt img").css("display", "block")
                $(".second").css("borderBottom", "1px solid red")
            } else if (!reg.test($("input:text").val())) {
                $(".prompt span").html("请填写邮箱或者手机号")
                $(".first img").attr("src", "images/prompt1.jpg")
                $(".first img").css("display", "block")
                $(".prompt img").css('display', "block")
                $(".first").css("borderBottom", "1px solid red")
            }
            else if (($(".prompt span").val() == "") && $("input:text").val() != "" && $("input:password").val() != "") {
                var user = $("input:text").val();
                var pwd = $("input:password").val();
                $.ajax({
                    url: "php/login.php",
                    type: "post",
                    data: {"user":user,"pwd":pwd},
                    success: function (data) {
                        // console.log(data);
                        if(data=="通过"){
                            document.cookie='key={"name":'+user+',"password":'+pwd+'}';
                            location.href="index.html";
                        }else{
                            location.href="register.html";
                        }
                    }
                })
            }
        })

    }

}
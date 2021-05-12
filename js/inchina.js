
function setauto() {
    for (var i = 0; i < 8; i++) {
        setInterval(function () {
            if (i == 7) {
                $(".tip").eq(i).children().eq(4).animate({
                    "opacity": "1"
                }, 1000);
                setTimeout(function () {
                    $(".tip").eq(i).children().eq(1).animate({
                        "opacity": "1"
                    }, 600);
                    $(".tip").eq(i).children().eq(2).animate({
                        "opacity": "1"
                    }, 1000);
                }, 600);
                setTimeout(function () {
                    $(".tip").eq(i).children().eq(0).animate({
                        "opacity": "1"
                    }, 1000);
                    $(".tip").eq(i).children().eq(3).animate({
                        "opacity": "1"
                    }, 600);
                }, 400);
                $(".tip").eq(i).siblings().css("display", "none");
                $(".tip").eq(i).css("display", "block");
                $(".year li").children().eq(0).css("display", "none");
                $(".year li").children().eq(1).css("display", "block");
            } else {
                $(".tip").eq(i).css("display", "block");
                $(".tip").eq(i).siblings().css("display", "none");
                $(".year li").eq(i).children().eq(0).css("display", "none");
                $(".year li").eq(i).children().eq(1).css("display", "block");
            }
        }, 800);
    }
}
window.onload=function(){
    setauto();
}
$(".year li").each(function (index) {
    var x = index;
    $(".year li").eq(x).on("mouseenter", function () {
        if (x == 7) {
            $(".tip").eq(x).children().eq(4).animate({
                "opacity": "1"
            }, 1000);
            setTimeout(function () {
                $(".tip").eq(x).children().eq(1).animate({
                    "opacity": "1"
                }, 600);
                $(".tip").eq(x).children().eq(2).animate({
                    "opacity": "1"
                }, 1000);
            }, 600);
            setTimeout(function () {
                $(".tip").eq(x).children().eq(0).animate({
                    "opacity": "1"
                }, 1000);
                $(".tip").eq(x).children().eq(3).animate({
                    "opacity": "1"
                }, 600);
            }, 400);
            $(".tip").eq(x).siblings().css("display", "none");
            $(".tip").eq(x).css("display", "block");
        } else {
            $(".tip").eq(x).css("display", "block");
            $(".tip").eq(x).siblings().css("display", "none");
        }
        $(this).children().eq(0).css("display", "none");
        $(this).children().eq(1).css("display", "block");
    }).on("mouseleave", function () {
        $(this).children().eq(1).css("display", "none");
        $(this).children().eq(0).css("display", "block");
    })
})
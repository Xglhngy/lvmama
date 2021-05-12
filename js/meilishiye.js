    
    function posit(){
        var box = $(".box img");
        var x = box.width();
        for (var i = 0; i < 18; i++) {
            if (i < 9) {
                box.eq(i).css({
                    "left": +i * x + "px",
                    "top": "0"
                });
            } else {
                box.eq(i).css({
                    "left": +(i - 9) * x + "px",
                    "top": x + "px"
                });
            }
        }
    }
    posit();
    window.onresize=function(){
        posit();
    }
    var ani = function () {
        var box = $(".box img");
        var x = box.width();
        $(".content").animate({
            "opacity": "0"
        }, 500);
        $(".top").animate({
            "opacity": "0"
        }, 500);
        setTimeout(function () {
            box.eq(0).animate({
                "left": x * 2 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(1).animate({
                "left": x * 4 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(2).animate({
                "left": x * 6 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(3).animate({
                "left": x * 8 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(4).animate({
                "left": x + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(5).animate({
                "left": "0",
                "top": x + 'px'
            }, 1500);
            box.eq(6).animate({
                "left": x * 3 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(7).animate({
                "left": x * 7 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(8).animate({
                "left": x * 5 + 'px',
                "top": x + 'px'
            }, 1500);
            box.eq(9).animate({
                "left": x * 6 + 'px',
                "top": "0"
            }, 1500);
            box.eq(10).animate({
                "left": x * 2 + 'px',
                "top": "0"
            }, 1500);
            box.eq(11).animate({
                "left": x * 8 + 'px',
                "top": "0"
            }, 1500);
            box.eq(12).animate({
                "left": x * 7 + 'px',
                "top": "0"
            }, 1500);
            box.eq(13).animate({
                "left": x + 'px',
                "top": "0"
            }, 1500);
            box.eq(14).animate({
                "left": x * 5 + 'px',
                "top": "0"
            }, 1500);
            box.eq(15).animate({
                "left": x * 3 + 'px',
                "top": "0"
            }, 1500);
            box.eq(16).animate({
                "left": x * 4 + 'px',
                "top": "0"
            }, 1500);
            box.eq(17).animate({
                "left": '0',
                "top": "0"
            }, 1500);
        }, 300);
    }
    var jqueryobj = $(".nav li");
    $.each("jqueryobj", function (index, val) {
        var y = index;

        jqueryobj.eq(y).on("click", function () {
            var w = $(window).width();
            if (w > 1440) {
                ani();
                setTimeout(function () {
                    $(".wrap").animate({
                        "top": "-40%"
                    }, 1700);
                }, 300);
                setTimeout(function () {
                    $(".wrap").animate({
                        "top": "-90%"
                    }, 1400);
                }, 2500);
            } else {
                ani();
                setTimeout(function () {
                    $(".wrap").animate({
                        "top": "-30%"
                    }, 1700);
                }, 300);
                setTimeout(function () {
                    $(".wrap").animate({
                        "top": "-90%"
                    }, 2000);
                }, 2500);
            }
            setTimeout(function () {
                $(".page").animate({
                    "opacity": "1",
                    "top": "0%"
                }, 1700)
            }, 2500);
            setTimeout(function () {
                $(".page").eq(y).css("display", "block");
            }, 1000)
        })
    })
    var navobj = $(".page-nav li");

    $.each(navobj, function (index, val) {
        var w = index;
        $(".page-nav li").eq(w).on("click", function () {
            $(".page").eq($(this).data("index")).css("display", "block")
            $(".page").eq($(this).data("index")).animate({
                "opacity": "1"
            }, 1000)
            $(".page").eq($(this).data("index")).siblings(".page").css("display", "none")
            $(".page").eq($(this).data("index")).siblings(".page").animate({
                "opacity": "0"
            }, 1000)
        })
    })
    var boximg = $(".box img");
    $.each(boximg, function (index, val) {
        var z = index;
        $(".box img").eq(z).hover(function () {
            $(".big_pics img").eq(z).css("display", "block");
            $(".big_pics img").eq(z).siblings().css("display", "none")
            $(".small_pics img").eq(z).css("display", "block");
            $(".small_pics img").eq(z).siblings().css({
                "display": "none",
                "width": "280px",
                "height": "399px",
                "margin-left": "16px",
                "margin-top": "25px"
            });
            $(".small_pics img").eq(z).animate({
                "width": "314px",
                "height": "448px",
                "margin-left": "0",
                "margin-top": "0"
            }, 300)
        })
    })
var ani = function () {
    var box = $(".box img");
    var x = box.width();
    $(".content").animate({
        "opacity":"0"
    }, 2000);
    $(".top").animate({"opacity":"0"},2000);
    box.eq(0).animate({
       "left": x * 2 + 'px',
       "top": x + 'px'
    },2000);
    box.eq(1).animate({
        "left": x * 3 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(2).animate({
        "left": x * 4 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(3).animate({
        "left": x * 5 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(4).animate({
        "left": -x * 3 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(5).animate({
        "left": -x * 5 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(6).animate({
        "left": -x * 3 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(7).animate({
        "left":0,
        "top": x + 'px'
    },2000);
    box.eq(8).animate({
        "left": -x * 3 + 'px',
        "top": x + 'px'
    },2000);
    box.eq(9).animate({
        "left": x * 6 + 'px',
        "top": -x + 'px'
    },2000);
    box.eq(9).animate({
        "left": x * 6 + 'px',
        "top": -x + 'px'
    },2000);
}
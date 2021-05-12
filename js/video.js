$(function(){
(function($){
    var video = document.getElementById("video");
    var playorstopbtn = document.getElementById("playorstop");
    playorstopbtn.onclick = function () {
        video.style.width = "1190px";
        video.style.height = "650px";
        this.style.display = "none";
        video.style.margin = "0 auto";
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    // 上面是视频的图片
    $(".right").on("click", function () {
        
       
        $(".video-banner-h").stop().animate({
            "marginLeft": -3 * 352,
        },function(){
            for (var i = 0; i < 3; i++) {
            $(".video-banner-h").append($(".video-banner-h").children("li").eq(0))
        }
        $(".video-banner-h").css("marginLeft", 0)
        }) 
        
    })
    $(".left").on("click", function () {
        for (var i = 0; i < 3; i++) {
                $(".video-banner-h").prepend($(".video-banner-h li:last-child"))
            }
            $(".video-banner-h").css("marginLeft", -3 * 352)
        $(".video-banner-h").stop().animate({
            "marginLeft": 0,
        }, function () {
            

            
        })

    })
})(jQuery)

})
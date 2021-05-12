// 品牌选择
(function(){
    $('.select_more_first').click(function(){
    $(this).css("display","none");//加号隐藏
    $('.search_brands_none').css("display","block");//搜索框显示
    $('.selected_Brands_hide').css("display","block");//已选品牌显示
    $('.clear_all_hide').css("display","none");	//清空隐藏				
    $('.conf_hide').css("display","block");//确定取消显示
    var brandsLi=$(".brands_li");

    brandsLi.each(function(index){
      var z=index;
      var flag=true;
      brandsLi.eq(z).click(function(){
        console.log(flag)
        if(flag){
          flag=false;
          $(".select_on").eq(z).css("display","block");
          $(".cover").eq(z).css("display","none");
          $(".brands_li").eq(z).hover(function(){
            $(".cover").eq(z).css({"display":"none"});
          })	
          $("<span>").attr({"class":"brand_select","data-index":z}).html($(".cover").eq(z).html()).insertAfter(".chose");
        }else{
          flag=true;
          $(".select_on").eq(z).css("display","none");
          $(".cover").eq(z).css("display","none");
          $(".brand_select").each(function(index,val){
            if($(".brand_select").eq(index).attr("data-index")==z){
              $(".brand_select").eq(index).html("");
              $(".brand_select").eq(index).removeClass("brand_select");
            }
          })
          $(".brands_li").eq(z).hover(function(){
            $(".cover").eq(z).css({"display":"block","background":" rgba(0,0,0,.8)"});
          },function(){
            $(".cover").eq(z).css({"display":"none"});
          })							
        }
        if($('.selected_Brands_hide span').hasClass("brand_select")){
          $(".clear_all_hide").css({"display":"block"});
        }else{
          $(".clear_all_hide").css({"display":"none"});
        }
        $(".clear_all_hide").click(function(){
          flag=true;
          $(".brand_select").each(function(index,val){
            $(".brand_select").eq(index).html("");
            $(".brand_select").eq(index).removeClass("brand_select");
            $(".clear_all_hide").css({"display":"none"});
            $(".brands_li").each(function(z,val){
              $(".select_on").eq(z).css("display","none");
              $(".cover").eq(z).css("display","none");
              $(".brands_li").eq(z).hover(function(){
                $(".cover").eq(z).css({"display":"block","background":" rgba(0,0,0,.8)"});
              },function(){
                $(".cover").eq(z).css({"display":"none"});
              })	
            })
                      
          })
        })
      })   
    })
  })
  $('.mycancel').click(function(){
    $('.conf_hide').css("display","none");
    $('.select_more_first').css("display","block");
    $('.search_brands_none').css("display","none");
    $('.selected_Brands_hide').css("display","none");
    // $('.clear_all_hide').css("display","none");	

  })
})();
// 分类选择
(function(){
  $('.hasMore')
  .on("mouseover",function(){
    $(".filter_item_line").removeClass("filter_item_line").addClass("filter_item_line_change");})
  .on("mouseout",function(){
    $(".filter_item_line_change").removeClass("filter_item_line_change").addClass("filter_item_line");})
  
    $('.fold_menu')
  .on("mouseover",function(){
    $(".filter_item_line").removeClass("filter_item_line").addClass("filter_item_line_change");})
  .on("mouseout",function(){
    $(".filter_item_line_change").removeClass("filter_item_line_change").addClass("filter_item_line");})


  $(".hasMore").click(function(){
    $(this).css("display","none");
    $(".fold_menu").css("display","block")
    $(".filter_item_change").css("display","block");
    $(".filter_item_line_change").removeClass("filter_item_line_change");
    $(".filter_item_change_line").addClass("filter_item_line");
  })
  $(".fold_menu").click(function(){
    $(this).css("display","none");
    $(".hasMore").css("display","block")
    $(".filter_item_change").css("display","none");
    $(".filter_item_line_change").removeClass("filter_item_line_change");
    $(".line_hasMore").addClass("filter_item_line");
  })

  $(".select_more").each(function(index,val){
    $(this).click(function(){
      $(this).css("display","none").eq(index).siblings().css("display","block");
      $(".conf_cancel_cont_hide").eq(index).css("display","block");

      var ifLi=$(".if_li");
    
      ifLi.each(function(index){
        var z=index;
        var flag=true;
        ifLi.eq(z).click(function(){
          console.log(flag)
          if(flag){
            flag=false;
            console.log(ifLi.eq(z).find("a"));
            ifLi.eq(z).find("a").addClass("if_li_item");
            
          }else{
            flag=true;
            ifLi.eq(z).find("a").removeClass("if_li_item");						
          }
          
        })
        
      })

    })
  })
  $(".cancel").each(function(index,val){
    $(this).click(function(){
      $(".conf_cancel_cont_hide").eq(index).css("display","none")
      $(".select_more").eq(index).css("display","block");
    })
  })
})();
// 隐藏的产品分类标题栏
(function(){
  $(".sort-way").eq(0).addClass("sort-way-bg");
  $(".sort-way-arrow").eq(0).addClass("change-arrow");
  var m=0;
  $(".sort-way").click(function(){
    
    $(".sort-way").eq(m).removeClass("sort-way-bg");
    $(".sort-way-arrow").eq(m).removeClass("change-arrow");
    $(".sort-way").eq(m).find(".sort-way-triangle").removeClass("change-triangle-up");
    
    m=$(this).index();
    $(".sort-way").eq(m).addClass("sort-way-bg");
    $(".sort-way-arrow").eq(m).addClass("change-arrow");
    $(".sort-way").eq(m).find(".sort-way-triangle").addClass("change-triangle-up");
    
  })
})();


// 侧边栏显示与隐藏
(function(){
  $(".fixedTop-info-content li").each(function(index,val){
    $(this).on("mouseenter",function(){
      $(".toolbar_text").eq(index).css("display","block");
    })
    .on("mouseleave",function(){
      $(".toolbar_text").eq(index).css("display","none");
    })
      
      
  })

  $(window).scroll(function(){
    
    var wt=$(window).height();
    wt/=2;
    if($(document).scrollTop()>=wt){
      $("#FixedRight").css("display","block");
    }else{
      $("#FixedRight").css("display","none");
    }
  })
  $(window).scroll(function(){
    var wt=$(".sort-product").offset().top;
    if($(document).scrollTop()>=wt){
      $("#sort-product").addClass("sort-active");
    }else{
      $("#sort-product").removeClass("sort-active");
    }
  })
  $(window).resize(function(){
    if($(window).width()<=1190){
      $("#FixedRight").css("right",0);
    }else{
      $("#FixedRight").css("right","270px");
    }
  })
})();

// 产品边框、立即购买
(function(){
  $(".cate_prod li").each(function(index,val){
    $(this)
    .on("mouseover",function(){
      $(this).css("border","1px solid black");
      $(".p_buy").eq(index).css("display","block");

      $(".p_buy").click(function(){
      	$(".popup_cont").css("display","block");
      })

  })
    .on("mouseout",function(){
      $(this).css("border","1px solid white");
      $(".p_buy").eq(index).css("display","none");})
  })
})();
// 购买弹框
(function(){
  $(".buy_now_button").on("mouseover",function(){
    $(this).css("background","red");
    $(this).click(function(){
      window.location.href="";
    })
  })
  .on("mouseout",function(){
    $(this).css("background","#000");
  })
  // $(".add")
  // $(".minus")
  $(".close_popup i").click(function(){
    $(".popup_cont").css("display","none");
  })
})();

// 分页
(function(){
    layui.use('laypage', function(){
    var laypage = layui.laypage;
    //执行一个laypage实例
    laypage.render({
        elem: 'paging'
        ,count: 50
        ,layout: ['prev', 'page', 'next', 'refresh', 'skip']
        ,jump: function(obj){
          console.log(obj)
        }
      });
  });
})();


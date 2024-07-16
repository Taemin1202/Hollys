$(function(){
    $(".main > li , .sub_bg").hover(function(){
        $(".sub").stop().show();
        $(".sub_bg").stop().slideDown("fast");
    }, function(){
        $(".sub").stop().hide();
        $(".sub_bg").stop().slideUp("fast");
    })/* 메뉴 호버 */

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false,
        adaptiveHeight:true,
        fade:true
    })

    $(".close").click(function(){
        $(".popup").hide();
    })
})/* jQ ends */
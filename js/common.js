$(function(){
    $("html,.pop-wen,.works-pic").niceScroll({cursorborder:"",cursorcolor:"rgba(0,0,0,0.30)",boxzoom:false});
})
function pop(obj){
    $(".cover").show();
    $(".pop").show();
}
function close_pop(){
    $(".cover").hide();
    $(".pop").hide();
    $(".works-pop").hide();
}
function works_pop(obj){
    var title = $(obj).find("i").text();
    $(".works-title span").text(title);
    $(".cover").show();
    $(".works-pop").show();
}

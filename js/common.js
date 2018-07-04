$(function(){
    $(".pop-wen").niceScroll({cursorborder:"",cursorcolor:"rgba(0,0,0,0.30)",boxzoom:false});
    $("html").niceScroll({cursorborder:"",cursorcolor:"rgba(0,0,0,0.30)",boxzoom:false});
})
function pop(obj){
    $(".cover").show();
    $(".pop").show();
}
function close_pop(){
    $(".cover").hide();
    $(".pop").hide();
}

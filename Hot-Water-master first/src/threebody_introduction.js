let star_div=document.getElementsByClassName("stars");
let button_div=document.getElementsByClassName("threebody_buttons");
for(let q=0;q<star_div.length;q++){
    let stars=star_div[q].getElementsByClassName("star");
    for(let i=0;i<stars.length;i++){
        stars[i].onmouseover=function(ev){
            ev.preventDefault();
            for(let j=0;j<=i;j++){
                stars[j].src="../pictures/image/star2.png";
            }
            for(j=stars.length-1;j>i;j--){
                stars[j].src="../pictures/image/star.png";
            }
            star_div[q].onmouseleave=function(){
                for(j=0;j<stars.length;j++){
                    stars[j].src="../pictures/image/star.png";
                }
            }
            stars[i].onclick=function(){
                for(let j=0;j<=i;j++){
                    stars[j].src="../pictures/image/star2.png";
                }
                for(j=stars.length-1;j>i;j--){
                    stars[j].src="../pictures/image/star.png";
                }
                star_div[q].onmouseleave=null;
                for(j=0;j<stars.length;j++){
                    stars[j].onmouseover=null;
                }
            }
        }  
    }
}
for(let q=0;q<button_div.length;q++){
    let buttons=button_div[q].getElementsByClassName("threebody_button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].onclick=function(){
            if( buttons[i].style.backgroundColor!="rgba(146, 136, 136, 0.77)"){
                buttons[i].style.backgroundColor="rgba(146, 136, 136, 0.767)";
             }
            else{
                buttons[i].style.backgroundColor="";
            }
        }
    }
}
$(document).ready(function() {
    $("#little-prince").click(function() {
      $("html, body").animate({
        scrollTop: $("#littleprince_main").offset().top }, {duration: 500,easing: "swing"});
      return false;
    });
    $("#white-black").click(function() {
      $("html, body").animate({
        scrollTop: $("#baiyexing_main").offset().top }, {duration: 500,easing: "swing"});
      return false;
    });
    $("#three-body").click(function() {
      $("html, body").animate({
        scrollTop: $("#threeintro_main").offset().top }, {duration: 500,easing: "swing"});
      return false;
    });
    $("#street").click(function() {
    $("html, body").animate({
        scrollTop: $("#street_main").offset().top }, {duration: 500,easing: "swing"});
    return false;
    });
    $("#journey-west").click(function() {
    $("html, body").animate({
        scrollTop: $("#wukong_main").offset().top }, {duration: 500,easing: "swing"});
    return false;
    });
  });
  
  $(document).ready(function(){
    $(".slide1").click(function() {
    $("html, body").animate({
    scrollTop: $("#littleprince_main").offset().top }, {duration: 500,easing: "swing"});
    $("#four").css({display:"none"});
    $("#books_intro").css({display:"block"});
    $("#leaves").css({height:"78rem"});
      return false;
    });
    $(".slide2").click(function() {
      $("html, body").animate({
        scrollTop: $("#baiyexing_main").offset().top }, {duration: 500,easing: "swing"});
        $("#four").css({display:"none"});
        $("#books_intro").css({display:"block"});
        $("#leaves").css({height:"78rem"});
      return false;
    });
    $(".slide3").click(function() {
      $("html, body").animate({
        scrollTop: $("#threeintro_main").offset().top }, {duration: 500,easing: "swing"});
        $("#four").css({display:"none"});
        $("#books_intro").css({display:"block"});
        $("#leaves").css({height:"78rem"});
      return false;
    });
    $(".slide4").click(function() {
    $("html, body").animate({
        scrollTop: $("#street_main").offset().top }, {duration: 500,easing: "swing"});
        $("#four").css({display:"none"});
        $("#books_intro").css({display:"block"});
        $("#leaves").css({height:"78rem"});
    return false;
    });
    $(".slide5").click(function() {
    $("html, body").animate({
        scrollTop: $("#wukong_main").offset().top }, {duration: 500,easing: "swing"});
        $("#four").css({display:"none"});
        $("#books_intro").css({display:"block"});
        $("#leaves").css({height:"78rem"});
    return false;
    });
  });

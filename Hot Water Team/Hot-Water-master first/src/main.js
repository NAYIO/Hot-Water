var pics = document.getElementsByClassName("banner-slide")
var lis = document.getElementsByClassName("dot")
var li_progress = document.getElementsByClassName('progress')
var pre = document.getElementById('pre')
var next = document.getElementById('next')
var index = 0
var all = document.getElementById('maina')
var proClock 
var opNum 
var width
var pro = document.getElementById('pg')
var rate = document.documentElement.scrollHeight/document.documentElement.scrollWidth
var h = document.documentElement.scrollHeight



changeImg = function(){
    
    for(let i=0;i<window.pics.length;i++){
        window.pics[i].style.display = "none";
        window.pics[i].style.opacity = 1;
        window.lis[i].id = "do";
        window.li_progress[i].id = "none"
        window.li_progress[i].style.width = 0;
    }
    window.index++
    if (window.index===window.pics.length){
        window.index = 0
    }    
    window.li_progress[window.index].id = "changeColor2"
    window.width = 0.1
    window.opNum = 100
    window.pics[window.index].style.display = "block"
    cancelAnimationFrame(window.proClock)
    window.proClock = requestAnimationFrame(function fn(){
        if (window.width<2.59) {
            window.width += 0.020
            window.li_progress[window.index].style.width = width + 'rem'
            if (window.width>1.8) {
                window.pics[window.index].style.opacity = window.opNum/100
                window.opNum-=1.5
            }
            window.proClock = requestAnimationFrame(fn)
        }else{
            cancelAnimationFrame(window.proClock)
            window.changeImg()
        }
    })
}


dotFocus = function(){
    cancelAnimationFrame(window.proClock)
    for(let i=0;i<window.pics.length;i++){
        window.pics[i].style.display = "none";
        window.pics[i].style.opacity = 1;
        window.lis[i].id = "do";
        window.li_progress[i].id = "none"
    }
    window.index = this.getAttribute('index')
    window.lis[window.index].id = "changeColor";
    window.li_progress[window.index].id = "changeColor"
    window.pics[window.index].style.display = "block"
    window.pics[window.index].style.opacity = '1'
}


imgOut = function(){
   window.changeImg()

}



pre.onclick = function(){
    cancelAnimationFrame(window.proClock)
    for(let i=0;i<window.pics.length;i++){
        window.pics[i].style.display = "none";
        window.pics[i].style.opacity = 1;
        window.lis[i].id = "do";
        window.li_progress[i].id = "none"
    }
    if(window.index===0){
        window.index = window.pics.length-1;
    }
    else{
        window.index = window.index - 1;
    }
    window.pics[window.index].style.display = "block"
    window.lis[window.index].id = "changeColor";
    window.li_progress[window.index].id = "changeColor"
    // window.imgClock = setInterval(window.changeImg,6000)
}
next.onclick = function(){
    cancelAnimationFrame(window.proClock)
    for(let i=0;i<window.pics.length;i++){
        window.pics[i].style.display = "none";
        window.pics[i].style.opacity = 1;
        window.lis[i].id = "do";
        window.li_progress[i].id = "none"
    }
    if(window.index===window.pics.length-1){
        window.index = 0;
    }
    else{
        window.index = Number(window.index)+1;
    }
    window.pics[window.index].style.display = "block"
    window.lis[window.index].id = "changeColor";
    window.li_progress[window.index].id = "changeColor"
}


window.onscroll = function(){
    let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight; // 页面总高度
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight; // 浏览器视口高度
    let scrollAvail = pageHeight - windowHeight; // 可滚动的高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    window.pro.value = (scrollTop/scrollAvail)*100
}
window.onload = function(){
    for(let i=0;i<window.pics.length;i++){
    window.pics[i].style.display = "none";
    window.pics[i].style.opacity = 1;
    window.pics[i].onmouseover = window.dotFocus
    window.li_progress[i].onmouseover = window.imgFocus
    // window.pics[i].onmouseout = window.imgOut
    window.lis[i].id = "do";
    window.lis[i].onmouseover = window.dotFocus
    }
    window.all.onmouseout = window.imgOut
    window.lis[index].id = "changeColor"
    window.li_progress[index].id = "changeColor"
    window.pics[index].style.display = "block"
    window.changeImg()
}


!
function() {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }
    function e(n) {
        return document.getElementsByTagName(n)
    }
    function t() {
        var t = e("script"),
        o = t.length,
        i = t[o - 1];
        return {
            l: o,
            z: n(i, "zIndex", -2),
            o: n(i, "opacity", 1),
            c: n(i, "color", "227,130,41"),
            n: n(i, "count", 80)
        }
    }
    function o() {
        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function i() {
        r.clearRect(0, 0, a, c);
        var n, e, t, o, m, l;
        s.forEach(function(i, x) {
            for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],
            null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
        }),
        x(i)
    }
    var a, c, u, m = document.createElement("canvas"),
    d = t(),
    l = "c_n" + d.l,
    r = m.getContext("2d"),
    x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(n) {
        window.setTimeout(n, 1e3 / 45)
    },
    w = Math.random,
    y = {
        x: null,
        y: null,
        max: 2e4
    };
    m.id = l,
    m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
    e("body")[0].appendChild(m),
    o(),
    window.onresize = o,
    window.onmousemove = function(n) {
        n = n || window.event,
        y.x = n.clientX,
        y.y = n.clientY
    },
    window.onmouseout = function() {
        y.x = null,
        y.y = null
    };
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a,
        g = w() * c,
        v = 2 * w() - 1,
        p = 2 * w() - 1;
        s.push({
            x: h,
            y: g,
            xa: v,
            ya: p,
            max: 6e3
        })
    }
    u = s.concat([y]),
    setTimeout(function() {
        i()
    },
    100)
} ();

//导航栏跳转定位
$(document).ready(function() {
    $(".homepage").click(function() {
      $("html, body").animate({
        scrollTop: $(".first-page").offset().top }, {duration: 500,easing: "swing"});
        $(".homepage").css("border-bottom","0.05rem solid rgb(236, 185, 91)");
        $(".book-share").css("border-bottom","0");
        $(".old-book-trade").css("border-bottom","0");
        $("#four").css({display:"block"});
        $("#books_intro").css({display:"none"});
        $("#leaves").css({height:"40rem"});
      return false;
    });
    $(".book-share").click(function() {
      $("html, body").animate({
        scrollTop: $(".share-with-you").offset().top }, {duration: 500,easing: "swing"});
        $(".book-share").css("border-bottom","0.05rem solid rgb(236, 185, 91)");
        $(".homepage").css("border-bottom","0");
        $(".old-book-trade").css("border-bottom","0");
      return false;
    });
    $(".old-book-trade").click(function() {
      $("html, body").animate({
        scrollTop: $(".trade-this").offset().top }, {duration: 500,easing: "swing"});
        $(".old-book-trade").css("border-bottom","0.05rem solid rgb(236, 185, 91)");
        $(".book-share").css("border-bottom","0");
        $(".homepage").css("border-bottom","0");
      return false;
    });
  });
  $(function() {
    $(window).scroll(function() {
      var scrollTop = $(document).scrollTop();
      if (scrollTop <=300) {
        $(".homepage").css("border-bottom","0.05rem solid rgb(236, 185, 91)");
        $(".book-share").css("border-bottom","0");
        $(".old-book-trade").css("border-bottom","0");
        }else {
          if(300<scrollTop&&scrollTop<=2000){
            $(".detail").animate({top:'3rem'},'slow'); 
            $(".book-share").css("border-bottom","0.05rem solid rgb(236, 185, 91)");
            $(".homepage").css("border-bottom","0");
            $(".old-book-trade").css("border-bottom","0");
          }
          else{
            $(".old-book-trade").css("border-bottom","0.05rem solid rgb(236, 185, 91)");
            $(".book-share").css("border-bottom","0");
            $(".homepage").css("border-bottom","0");
          }
        } 
      });
    });
//轮播图跳转定位
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
//返回效果
  $(document).ready(function() {
  $(".goback").click(function(){
    $("#four").css({display:"block"});
    $("#books_intro").css({display:"none"});
    $("#leaves").css({height:"40rem"});
    $("html, body").animate({
        scrollTop: $(".first-page").offset().top }, {duration: 0,easing: "swing"});
  });
  })
$(document).ready(function(){
    $(".qq").click(function(){
        $(".frame").css("display","block");
        $(".frame-background").css("display","block");
        $('#frame-img').attr("src","../pictures/image/erweima1.png");
        $("#four").css("display","none");
    });
    $(".wechat").click(function(){
        $(".frame").css("display","block");
        $(".frame-background").css("display","block");
        $('#frame-img').attr("src","../pictures/image/erweima2.png");
        $("#four").css("display","none");
    });
    $(".weibo").click(function(){
        $(".frame").css("display","block");
        $(".frame-background").css("display","block");
        $('#frame-img').attr("src","../pictures/image/erweima3.png");
        $("#four").css("display","none");
    });
    $("#frame-close").click(function(){
        $(".frame").css("display","none");
        $("#four").css("display","block");
        $(".frame-background").css("display","none");
    });
    $("#frame-close").mouseover(function(){
        $("#frame-close").attr("src","../pictures/image/close1.png");
        $("#frame-close").css("transform","rotate(180deg)");
        $("#frame-close").css("transition","0.3s");
        console.log('a');
    });
    $("#frame-close").mouseleave(function(){
        $("#frame-close").attr("src","../pictures/image/close .png");
        $("#frame-close").css("transform","rotate(-180deg)");
        console.log('b');
    });

})

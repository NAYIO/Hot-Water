let stars=document.getElementsByClassName("star");
let star_div=document.getElementById("stars");
let button_div=document.getElementById("buttons");
let buttons=button_div.getElementsByTagName("span");
let main=document.getElementById("main");
let background_pic=document.getElementById("background_pic");
background_pic.style.height=main.offsetHeight+200+'px';

for(let i=0;i<stars.length;i++){
    stars[i].onmouseover=function(ev){
        ev.preventDefault();
        for(let j=0;j<=i;j++){
            stars[j].src="images/star2.png";
        }
        for(j=stars.length-1;j>i;j--){
            stars[j].src="images/star.png";
        }
        star_div.onmouseleave=function(){
            for(j=0;j<stars.length;j++){
                stars[j].src="images/star.png";
            }
        }
        stars[i].onclick=function(){
            for(let j=0;j<=i;j++){
                stars[j].src="images/star2.png";
            }
            for(j=stars.length-1;j>i;j--){
                stars[j].src="images/star.png";
            }
            star_div.onmouseleave=null;
            for(j=0;j<stars.length;j++){
                stars[j].onmouseover=null;
            }
        }
    }
    
}
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

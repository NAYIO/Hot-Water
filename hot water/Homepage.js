var index = 0
var img =document.getElementsByName("img")
var Ul = document.getElementById("list");
var AllLi = Ul.getElementsByTagName("li");
var roll = setInterval(changePage,5000);
var count 
var Timer

function initPage(){
    for(let i=0;i<img.length;i++){
		img[i].style.display = "none";
    }
    
}

function changePage(){
        index++
        if (index===img.length) {
            index = 0
            img[img.length-1].style.display = "none"
            img[img.length-1].style.opacity = 1
            AllLi[img.length-1].style.background = "#aaa"
            AllLi[img.length-1].style.color = "#000000"
            img[index].style.display = "block"
            AllLi[index].style.background = "red"
            AllLi[index].style.color = "whitesmoke"
            clearInterval(Timer)
            count = 100
            Timer = setInterval(function(){
            if (count>=50) {
                img[index].style.opacity = count/100
                count--
                return 0
                }
            },150)
            return 0
        }
        if (index===0) {
            AllLi[img.length-1].style.background = "#aaa"
            AllLi[img.length-1].style.color = "#000000"
            img[img.length-1].style.display = "none"
            img[img.length-1].style.opacity = 1
            img[index].style.display = "block"
            AllLi[index].style.background = "red"
            AllLi[index].style.color = "whitesmoke"
            clearInterval(Timer)
            count = 100
            Timer = setInterval(function(){
            if (count>=50) {
                img[index].style.opacity = count/100
                count--
                return 0
                }
            },150)
            return 0
        }
        AllLi[index-1].style.background = "#aaa"
        AllLi[index-1].style.color = "#000000"
        img[index-1].style.display = "none"
        img[index-1].style.opacity = 1
        img[index].style.display = "block"
        AllLi[index].style.background = "red"
        AllLi[index].style.color = "whitesmoke"
        clearInterval(Timer)
        count = 100
        Timer = setInterval(function(){
            if (count>=50) {
                img[index].style.opacity = count/100
                count--
                return 0
            }
        },150)
        
}

function btNumchange(s){
    clearInterval(roll)
    clearInterval(Timer)
    img[index].style.display = "none"
    img[index].style.opacity = 1
    AllLi[index].style.background = "#aaa"
    AllLi[index].style.color = "#000000"
    index = Number(s)
    img[index].style.display = "block"
    AllLi[index].style.background = "red"
    AllLi[index].style.color = "whitesmoke"
    // roll = setInterval(changePage,2000); 
}

function outBtchange(){
    roll = setInterval(changePage,2000); 
    // Timer = setInterval(opacityChange,20);
}

function leftarrowChange(){
    clearInterval(roll)
    img[index].style.display = "none"
    AllLi[index].style.background = "#aaa"
    AllLi[index].style.color = "#000000"
    if (index===0) {
        img[img.length-1].style.display = "block"
        AllLi[img.length-1].style.background = "red"
        AllLi[img.length-1].style.color = "whitesmoke" 
        index=img.length-1
        outBtchange()
        return 0
    }
    img[index-1].style.display = "block"
    AllLi[index-1].style.background = "red"
    AllLi[index-1].style.color = "whitesmoke" 
    index=index-1
    outBtchange() 
}

function rightarrowChange(){
    clearInterval(roll)
    img[index].style.display = "none"
    AllLi[index].style.background = "#aaa"
    AllLi[index].style.color = "#000000"
    if (index===img.length-1) {
        img[0].style.display = "block"
        AllLi[0].style.background = "red"
        AllLi[0].style.color = "whitesmoke" 
        index=0
        outBtchange()
        return 0
    }
    img[index+1].style.display = "block"
    AllLi[index+1].style.background = "red"
    AllLi[index+1].style.color = "whitesmoke" 
    index=index+1
    outBtchange() 
}

// function opacityChange(){
//     if(count >= 20 ){
//       img[index].style.opacity=count/100;
//       count--;
//       return 0
//     }
//     clearInterval(Timer)
// }



window.onload = function(){
    initPage()
    changePage()
}
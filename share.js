var share = document.getElementsByClassName('share');
var idImage = document.getElementsByClassName('id-image');
var mainContent = document.getElementsByClassName('main-content');
var commentSum = document.getElementsByClassName('comment-sum');
var comContainer = document.getElementsByClassName('comments-container');
var word = document.getElementById('open-comment');
let judge=1;
for(let i=0;i<share.length;i++){
    share[i].onclick = function(){
        if(judge==1){
            share[i].style.width = 1120+'px';
            share[i].style.height = "auto";
            share[i].style.position = "absolute";
            share[i].style.top = 110+'px';
            share[i].style.left = 120+'px';
            share[i].style.zIndex = 1005;
            share[i].style.borderRadius = 0;
            mainContent[0].style.height = 1200+"px";
            commentSum[0].style.display = "flex";
            judge = 0;
        }
        else{
            share[i].style.width = 350+'px';
            share[i].style.height = 500+'px';
            share[i].style.position = "relative";
            share[i].style.top = 130+'px';
            share[i].style.left = 70+'px';
            share[i].style.zIndex = 1;
            share[i].style.borderRadius = 5+'%';
            mainContent[0].style.height = 800+"px";
            commentSum[0].style.display = "none";
            comContainer[0].style.display = "none";
            word.innerHTML = "打开评论";
            judge = 1; 
        }
    }
}
function changeColor(obj){
    if(obj.style.backgroundColor == "white"){
        obj.style.backgroundColor = "skyblue";
    }
    else{
        obj.style.backgroundColor = "white";
    }
}
function changeColorSpeOne(obj){
    var disagree = document.getElementsByClassName('disagree');
    if(obj.style.backgroundColor == "white" && disagree[0].style.backgroundColor == "white"){
        obj.style.backgroundColor = "skyblue";
        obj.innerHTML = "已赞同";
    }
    else if(obj.style.backgroundColor == "skyblue" && disagree[0].style.backgroundColor == "white"){
        obj.style.backgroundColor = "white";
        obj.innerHTML = "赞同";
    }
    else{
        disagree[0].style.backgroundColor = "white";
    }
}
function changeColorSpeTwo(obj){
    var agree = document.getElementsByClassName('agree');
    if(obj.style.backgroundColor == "white" && agree[0].style.backgroundColor == "white"){
        obj.style.backgroundColor = "skyblue";
    }
    else if(obj.style.backgroundColor == "skyblue" && agree[0].style.backgroundColor == "white"){
        obj.style.backgroundColor = "white";
    }
    else{
        agree[0].style.backgroundColor = "white";
        agree[0].innerHTML = "赞同";
    }
}
let judgement = 1;
function openCom(obj){
    
    
    if(judgement == 1){
        word.innerHTML = "收起评论";
        comContainer[0].style.display = "block";
        mainContent[0].style.height = 1800+"px";
        judgement = 0;
    }
    else{
        if(comContainer[0].style.display == "block"){
            word.innerHTML = "打开评论";
            comContainer[0].style.display = "none";
            mainContent[0].style.height = 1200+"px";
        }
        else{
            word.innerHTML = "收起评论";
            comContainer[0].style.display = "block";
            mainContent[0].style.height = 1800+"px";
        }
    }
    
    
}
var agreeChange = document.getElementsByClassName('agree-icon');
var agreeIcon = document.getElementsByClassName('agree-icon-image');
let srcValue = agreeIcon[0].src; 
var agreeNum = document.getElementsByClassName('agree-num');
for(let i=0;i<agreeChange.length;i++){
    agreeChange[i].onclick = function(){
        if(agreeIcon[i].src == srcValue){
            agreeIcon[i].src = "images/agree-icon-change.png";
            agreeNum[i].innerHTML = Number(agreeNum[i].innerHTML)+1;
        }
        else{
            agreeIcon[i].src = "images/agree-icon.png";
            agreeNum[i].innerHTML = Number(agreeNum[i].innerHTML)-1;
        }
    }
}

var introduction = document.getElementsByClassName('intro');
for(let i=0;i<introduction.length;i++){
    introduction[i].onclick = function(){
        if(introduction[i].offsetHeight == 200){
            introduction[i].style.position = "absolute";
            introduction[i].style.left = 200 + "px";
            introduction[i].style.top = 110 + "px";
            introduction[i].style.height = 700 + "px";
            introduction[i].style.zIndex = 1005;
        }
        else{
            introduction[i].style.position = "relative";
            introduction[i].style.left = 200 + "px";
            introduction[i].style.top = 120 + "px";
            introduction[i].style.height = 200 + "px";
            introduction[i].style.zIndex = 1;
        }
    }
}
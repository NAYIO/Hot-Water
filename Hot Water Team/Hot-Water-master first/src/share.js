var share = document.getElementsByClassName('share');
var idImage = document.getElementsByClassName('id-image');
var mainContent = document.getElementsByClassName('main-content');
var commentSum = document.getElementsByClassName('comment-sum');
var comContainer = document.getElementsByClassName('comments-container');
var word = document.getElementById('open-comment');
var shadowList = document.getElementsByClassName('shadow');
let judge=1;
for(let i=0;i<share.length;i++){
    share[i].onclick = function(){
        if(judge==1){
            share[i].style.width = 11.2+'rem';
            share[i].style.height = "auto";
            share[i].style.position = "absolute";
            share[i].style.top = 1.1+'rem';
            share[i].style.left = 0.66+'rem';
            share[i].style.zIndex = 15;
            share[i].style.borderRadius = 0;
            mainContent[0].style.height = 12+"rem";
            commentSum[0].style.display = "flex";
            judge = 0;
        }
        else{
           share[i].style = 0;
            mainContent[0].style.height = 8+"rem";
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
        obj.innerHTML = "赞同&#9650;";
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
        agree[0].innerHTML = "赞同&#9650";
    }
}
let judgement = 1;
function openCom(obj){
    
    
    if(judgement == 1){
        word.innerHTML = "收起评论";
        comContainer[0].style.display = "block";
        mainContent[0].style.height = 18+"rem";
        judgement = 0;
    }
    else{
        if(comContainer[0].style.display == "block"){
            word.innerHTML = "打开评论";
            comContainer[0].style.display = "none";
            mainContent[0].style.height = 12+"rem";
        }
        else{
            word.innerHTML = "收起评论";
            comContainer[0].style.display = "block";
            mainContent[0].style.height = 18+"rem";
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
            agreeIcon[i].src = "../pictures/images/agree-icon-change.png";
            agreeNum[i].innerHTML = Number(agreeNum[i].innerHTML)+1;
        }
        else{
            agreeIcon[i].src = "../pictures/images/agree-icon.png";
            agreeNum[i].innerHTML = Number(agreeNum[i].innerHTML)-1;
        }
    }
}

var introduction = document.getElementsByClassName('intro');
let first=1;
for(let i=0;i<introduction.length;i++){
    introduction[i].onclick = function(){
        if(first===1){
            introduction[i].style.position = "absolute";
            introduction[i].style.left = 2 + "rem";
            introduction[i].style.top = 1.1 + "rem";
            introduction[i].style.height = 7 + "rem";
            introduction[i].style.zIndex = 13;
            first=0;
        }
        else{
           introduction[i].style = 0;
           first=1;
        }
    }
}
function shadowTrans (i){
    
    window.shadowList[i].style.opacity = 0;
}

function shadowOn (i){
    window.shadowList[i].style.opacity = 1;
}
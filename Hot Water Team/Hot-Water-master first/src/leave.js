const NUMBER_OF_LEAVES = 40;
function init(){
    var container = document.getElementById('leaves');
    var count=0;
    for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
        container.appendChild(createALeaf());
    }
    var a=setInterval(function(){
        for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
        container.appendChild(createALeaf());
        }
        count++;
        if(count===6){
            clearInterval(a);
        }
    },5000);
}

function randomInteger(low, high){
    return Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high){
    return low + Math.random() * (high - low);
}

function pixelValue(value){
    return value + '%';
}

function durationValue(value){
    return value + 's';
}

function createALeaf(){
    //放叶子的容器
    var leafDiv = document.createElement('div');
    leafDiv.className="leafDiv";
    leafDiv.style.left = randomInteger(0,100)+'vw';
    //alert(leafDiv.style.left);
    leafDiv.style.webkitAnimationName = 'fade, drop';
    var fadeAndDropDuration = durationValue(randomFloat(10, 22));
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration+ ', ' + durationValue(randomFloat(30, 60));
    var leafDelay = durationValue(randomFloat(0, 5));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
    //叶子
    var image = document.createElement('img');
    image.src = '../pictures/leave-loading/leave2.png';
    image.style.left = randomInteger(0,100)+'vw';
    var spinAnimationName = 'clockwiseSpin';
    image.style.webkitAnimationName = spinAnimationName;
    var spinDuration = durationValue(randomFloat(4, 8));
    image.style.webkitAnimationDuration = spinDuration;
    //把叶子放到容器里
    leafDiv.appendChild(image);
    return leafDiv;
}
window.addEventListener('load', init, false);
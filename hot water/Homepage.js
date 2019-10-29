function initPage(){
    var index = 0
    var Img =document.getElementsByName("img")
    var Ul = document.getElementById("list");
    var AllLi = Ul.getElementsByTagName("li");
    for(let i=0;i<img.length;i++){
		img[i].style.display = "none";
    }
    img[index].style.display = "block";	
    AllLi[index].style.background = "red"
    AllLi[index].style.color = "whitesmoke"
    function changePage(){
        if (index===img.length) {
            index = 0
            img[img.length-1].style.display = "none"
            AllLi[img.length-1].style.background = "#aaa"
            AllLi[img.length-1].style.color = "#000000"
            img[index].style.display = "block"
            AllLi[index].style.background = "red"
            AllLi[index].style.color = "whitesmoke"
            index++
            return 0
        }
        if (index===0) {
            AllLi[img.length-1].style.background = "#aaa"
            AllLi[img.length-1].style.color = "#000000"
            img[img.length-1].style.display = "none"
            img[index].style.display = "block"
            AllLi[index].style.background = "red"
            AllLi[index].style.color = "whitesmoke"
            index++
            return 0
        }
        AllLi[index-1].style.background = "#aaa"
        AllLi[index-1].style.color = "#000000"
        img[index-1].style.display = "none"
        img[index].style.display = "block"
        AllLi[index].style.background = "red"
        AllLi[index].style.color = "whitesmoke"
        index++
    }
    setInterval(changePage,2000);
}


window.onload = initPage
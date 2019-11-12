let trade_div=document.getElementsByClassName("trade_div");
let showdetail=document.getElementsByClassName("showdetail");
let button=document.getElementsByClassName("button");
let leave = document.getElementById('leaves');
for (let i=0;i<button.length;i++){
    button[i].onclick=function(){
        if(button[i].style.background===''){
            button[i].style.background='rgba(170, 163, 163, 0.86)';
        }
        else{
            button[i].style.background='';
        }
    }
}
for(let i=0;i<trade_div.length;i++){
    showdetail[i].onclick=function(){
        let buttons=trade_div[i].getElementsByClassName("buttons");
        let cover_info=trade_div[i].getElementsByClassName("cover_info");
        let cover=trade_div[i].getElementsByClassName("cover");
        let account=trade_div[i].getElementsByClassName("account");
        let account_div=trade_div[i].getElementsByClassName("account_div");
        let reason=trade_div[i].getElementsByClassName("reason");
        let info=trade_div[i].getElementsByClassName("info");
        if(reason[0].style.display===''){
            for(let j=0;j<trade_div.length;j++){
                trade_div[j].style.display="none";
            }
            showdetail[i].innerHTML='返回上个界面';
            leave.style.height=35+"rem";
            account_div[0].style.borderTop=account_div[0].style.marginTop=account_div[0].style.paddingTop='0';
            account[0].style.top='0';
            trade_div[i].style.flexBasis=100+'%';
            trade_div[i].style.display='block';
            reason[0].style.display='block';
            buttons[0].style.display='block';
            cover_info[0].style.flexDirection='row'; 
            info[0].className='info2';
            cover[0].className='cover2';
        }
        else{
            for(let j=0;j<trade_div.length;j++){
                trade_div[j].style.display="block";
            }
            showdetail[i].innerHTML='查看详情...';
            let info2=trade_div[i].getElementsByClassName("info2");
            let cover2=trade_div[i].getElementsByClassName("cover2");
            account_div[0].style=account[0].style=trade_div[i].style=reason[0].style=buttons[0].style=cover_info[0].style='';
            info2[0].className='info';
            cover2[0].className='cover';
        }
    }
}
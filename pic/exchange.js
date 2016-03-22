/**
 * Created by Á¢²© on 2016/3/15.
 */
    //ÐÂ½¨Ò»¸öÊý×é,À´´æ·ÅsrcÊôÐÔµÄÈ¡Öµ
     var  Imgs=new Array("01.gif","02.gif","03.gif","04.gif",
                       "05.gif","06.gif","07.gif","08.gif","09.gif");
    //Ò»¸ö±êÇ©¼¯ºÏ,À´´æ·Åimg¶ÔÏó
     var nodeImgs=document.getElementsByTagName("img");
    //È¡µÃ´æ·ÅÍ¼Æ¬µÄdivµÄ¼¯ºÏ
    var Divs=document.getElementsByClassName('all');
    //ÉèÖÃÒ»¸öÊý×é,ÓÃÀ´´æ·ÅËæ»úÈ¡µÃµÄImgsÊý×éµÄÏÂ±êÖµ
    var randomNums=new Array(0);
    while (randomNums.length<9){
        radNum=getRandom();
        if(!hasSame(radNum)){
            randomNums.push(radNum);
        }
    }
    //ÉèÖÃimg±êÇ©µÄsrcÊôÐÔÖµ¡ª¡ª¡ª¡ªÀ´×ÔÓÚµØÖ·Êý×éË÷Òýµ½µÄËæ»úÖµ
    for(var i=0;i<Imgs.length;i++) {
        //È¡µÃËæ»úµÄË÷ÒýÖµ
        nodeImgs[i].src = Imgs[randomNums[i]];
    }
    randomNums.length=0;    //Çå³ýÊý×é,·ÀÖ¹ä¯ÀÀÆ÷±¼À£

    //Ê×ÏÈÈ¡µÃº¬¿Õ°×Í¼Æ¬µÄdiv
    function getEmpty(){
        for(var i=0;i<nodeImgs.length;i++){
            if(/09/.test(nodeImgs[i].src)){
                return nodeImgs[i].parentNode;
            }
        }
    }
    //ÏÈÉèÖÃÏòÉÏÒÆ¶¯µÄº¯ÊýmoveUp()
    function moveUp(){
        if(getStyle(getEmpty(),'top')!='0px'){
            var a=getStyle(getEmpty(),'top');
            var b=getStyle(getEmpty(),'left');
            getEmpty().style.top=(parseInt(a)-137)+'px';
            getEmpty().style.left=b;
            getAim(((parseInt(a)-137)+'px'),b).style.top=a;
            getAim(((parseInt(a)-137)+'px'),b).style.left=b;
        }else{
           alert('Can not Up');
        }
    }
    //ÉèÖÃÏòÏÂÒÆ¶¯µÄº¯ÊýmoveDown()
    function moveDown(){
        if(getStyle(getEmpty(),'top')!=="274px"){
            var a=getStyle(getEmpty(),'top');
            var b=getStyle(getEmpty(),'left');
            getEmpty().style.top=(parseInt(a)+137)+'px';
            getEmpty().style.left=parseInt(b)+'px';
            getAim((parseInt(a)+137)+'px',b).style.top=a;
            getAim((parseInt(a)+137)+'px',b).style.left=b;
        }else{
            alert("Can not Down");
        }
    }
    //ÉèÖÃÏò×óÒÆ¶¯µÄº¯ÊýmoveLeft()
    function moveLeft(){
        if(getStyle(getEmpty(),'left')!="0px"){
            var a=getStyle(getEmpty(),"top");
            var b=getStyle(getEmpty(),"left");
            getEmpty().style.top=a;
            getEmpty().style.left=(parseInt(b)-137)+"px";
            getAim(a,(parseInt(b)-137)+"px").style.top=a;
            getAim(a,(parseInt(b)-137)+"px").style.left=b;
        }else{
            alert("Can not left");
        }
    }
    //ÉèÖÃÏòÓÒÒÆ¶¯µÄº¯ÊýmoveRight()
    function moveRight(){
        if(getStyle(getEmpty(),'left')!="274px"){
            var a=getStyle(getEmpty(),"top");
            var b=getStyle(getEmpty(),"left");
            getEmpty().style.left=(parseInt(b)+137)+"px";
            getEmpty().style.top=a;
            getAim(a,(parseInt(b)+137)+"px").style.top=a;
            getAim(a,(parseInt(b)+137)+"px").style.left=b;
        }else{
            alert("Can not right");
        }
    }




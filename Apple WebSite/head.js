//头部导航效果
window.onload=function(){
    var oDiv=document.getElementById('div1');
    var aLi=getByClass(oDiv, 'miaov_box_head')[0].getElementsByTagName('li');
    var oBtn=getByClass(oDiv,'miaov_box_foot')[0].getElementsByTagName('a');
    var oSpan=getByClass(oDiv,'miaov_box_foot')[0].getElementsByTagName('span')[0];
    var i=0;
    var oPos=[];
    var timer=null;
     //布局转换
     for(i=0;i<aLi.length;i++)
        {
            aLi[i].index=i;
            oPos[i]=aLi[i].offsetLeft;
        }
        for(i=0;i<aLi.length;i++)
        {
            aLi[i].style.position='absolute';
            aLi[i].style.left=oPos[i]+'px';
        }
        //第二个按钮
    oBtn[1].onclick=function()
    {
        var i=1;
        clearInterval(timer);
       miaovStartMove(aLi[0],{left:-600},MIAOV_MOVE_TYPE.FLEX);
       timer=setInterval(function(){
             miaovStartMove(aLi[i],{left:-600},MIAOV_MOVE_TYPE.FLEX);
             i++;
             if(i>=aLi.length/2)
             {
                clearInterval(timer);
                doNext();
             }
       },100)
        function  doNext()
       {
        timer=setInterval(function(){
               miaovStartMove(aLi[i],{left: oPos[i-aLi.length/2]},MIAOV_MOVE_TYPE.FLEX);
               i++;
               if(i>=aLi.length)
               {
                clearInterval(timer);
               }
        },100)
      }
      oBtn[0].className='';
      oBtn[1].className='show';
     //移动小图标
       miaovStartMove(oSpan,{left: oBtn[1].offsetLeft+oBtn[1].offsetWidth/2},MIAOV_MOVE_TYPE.BUFFER);
    }
    //第一个按钮
    oBtn[0].onclick=function()
    {
         var i=aLi.length-1;
        clearInterval(timer);
       miaovStartMove(aLi[i],{left:990},MIAOV_MOVE_TYPE.FLEX);
       timer=setInterval(function(){
             miaovStartMove(aLi[i],{left:990},MIAOV_MOVE_TYPE.FLEX);
             i--;
             if(i<aLi.length/2)
             {
                clearInterval(timer);
                doNext();
             }
       },100)
        function  doNext()
       {
        timer=setInterval(function(){
               miaovStartMove(aLi[i],{left: oPos[i]},MIAOV_MOVE_TYPE.FLEX);
               i--;
               if(i<0)
               {
                clearInterval(timer);
               }
        },100)
      }
      oBtn[1].className='';
      oBtn[0].className='show';
       miaovStartMove(oSpan,{left: oBtn[0].offsetLeft+20},MIAOV_MOVE_TYPE.BUFFER);
    }
    //百叶窗的内容
     var oUl=document.getElementById('ul1');
    toShow(oUl);//传参数
    function toShow(obj)
    {
         var oDiv=obj.getElementsByTagName('div');
         var iNow=0;
         var timer=null;
         var bool=true;
         setInterval(function(){
            toChange();//开一个定时器，每4秒换
         },2000)
         function toChange()
         {
            timer=setInterval(function(){//这个定时器，每个div一个一个走

                if(iNow==oDiv.length)
                {
                    clearInterval(timer);
                    iNow=0;
                    bool=!bool;
                }
                else if(bool)
                {
                     startMove(oDiv[iNow],{top:0});
                     iNow++;
                }
                else
                {
                     startMove(oDiv[iNow],{top:-30});
                     iNow++;
                }

            },100)
         }

    } 
//放大缩小展示图片
           var oUl=document.getElementById('ul2');
           var oLi=oUl.getElementsByTagName('li');
           var i=0;
           var index=2;
           for(i=0;i<oLi.length;i++)
           {
              oLi[i].style.left=oLi[i].offsetLeft+'px';
              oLi[i].style.top=oLi[i].offsetTop+'px';
           }
           for(i=0;i<oLi.length;i++)
           {
               oLi[i].style.backgroundImage='url('+(i+1)+'.jpg)';
           }
           for(i=0;i<oLi.length;i++)
           {
                oLi[i].style.position='absolute';
                oLi[i].style.margin='0';//这里是oLi[i]
           }
           for(i=0;i<oLi.length;i++)
           {
                oLi[i].onmouseover=function()
                {
                    this.style.zIndex=index++;
                    startMove(this,{width:200,height:200,marginLeft:-50,marginTop:-50});
                }
                 oLi[i].onmouseout=function()
                {
                    this.style.zIndex=index++;
                    startMove(this,{width:100,height:100,marginLeft:0,marginTop:0});
                }

           }

           //尾部图片上下滚动
             var div1=document.getElementById('fot3');
            var ul=div1.getElementsByTagName('ul')[0];
            var li=ul.getElementsByTagName('li');
           // var aa=div1.getElementsByTagName('a');
            ul.innerHTML+=ul.innerHTML;//需要设置单独的div层
            ul.style.height=li[0].offsetHeigh*li.length;
            var speed=10;
            setInterval(function()
            {
                 ul.style.top=ul.offsetTop-speed+'px';
                 if(ul.offsetTop<-ul.offsetHeight/2)
                 {
                    ul.style.top='0px';
                 }
                 else if(ul.offsetTop>0)
                 {
                    ul.style.top=-ul.offsetHeight/2;
                 }
            },100)
           



  }

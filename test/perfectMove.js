function  getStyle(obj,attr)//用此种方法获取样式中的属性
{
     if(obj.currentStyle)
     {
        return obj.currentStyle[attr];
     }
     else
     {
        return getComputedStyle(obj,false)[attr];
     }
}
function startMove(obj,json,fn)
{
        clearInterval(obj.timer);
       obj.timer=setInterval(function ()
       {
        for(var attr in json)
        {
                      var iCur=0;
                     if(attr=='opacity')
                     {
                          iCur=parseInt(parseFloat(getStyle(obj, attr))*100);//这里加parseInt是避免div的数值不稳定，在波动
                    }
                    else
                    {
                          iCur=parseInt(getStyle(obj, attr));
                    }
                    var iSpeed=(json[attr]-iCur)/8;
                     iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
                    if(iCur==json[attr])
                    {
                            clearInterval(obj.timer);
                            if(fn){fn();}
                   }
                   else
                   {
                        if(attr=='opacity')
                         {
                            obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
                            obj.style.opacity=(iCur+iSpeed)/100;
                        }
                        else
                        {
                             obj.style[attr]=iCur+iSpeed+'px';
                        }
                  }
        }
      }, 30)
        
}
function  ajax(url,fnn,fai)
{
    //1:创建ajax对象
    var oAjax=null;
    if(window.XMLHttpRequest)
    {
            oAjax=new XMLHttpRequest();
    }
    else
    {
            oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2:链接服务器open(方法，URL，是否异步)
    oAjax.open('GET',url,true);
    //3:发送请求
    oAjax.send();
    //4:接受返回
    oAjax.onreadystatechange=function()
    {
             if(oAjax.readyState==4)
             {
                if(oAjax.status==200)
                {
                   fnn(oAjax.responseText);
                }
                else
                {
                    if(fai)//失败的话就返回该函数
                    {
                        fai();
                    }
                }
             }
    };
}
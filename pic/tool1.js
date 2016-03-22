/**
 * Created by 立博 on 2016/3/18.
 */

//取随机数的函数
function getRandom(){
    return Math.floor(Math.random()*9);
}
//判断随机数是否在数组中存在
function hasSame(item){
    for(var i=0;i<randomNums.length;i++){
        if(item==randomNums[i]){
            return true;
        }
    }
    return false;
}
//取得所需要与空白交换的div
function getAim(top,left){
    for(var i=0;i<Divs.length;i++){
        if(getStyle(Divs[i],'top')==top&&getStyle(Divs[i],'left')==left){
            console.log(Divs[1]);
            return Divs[i];
        }
    }
}
//获取外部样式表的样式
function getStyle(element,attr){
    //return this.elements[i].style[attr];    //注意：这种方法无法获取到外部文件中的样式
    if(typeof window.getComputedStyle!=="undefined"){//针对w3c
        return window.getComputedStyle(element,null)[attr];
    }else if(typeof element.currentStyle!=="undefined"){//针对ie
        return element.currentStyle[attr];
    }
}


/**
 * Created by ���� on 2016/3/18.
 */

//ȡ������ĺ���
function getRandom(){
    return Math.floor(Math.random()*9);
}
//�ж�������Ƿ��������д���
function hasSame(item){
    for(var i=0;i<randomNums.length;i++){
        if(item==randomNums[i]){
            return true;
        }
    }
    return false;
}
//ȡ������Ҫ��հ׽�����div
function getAim(top,left){
    for(var i=0;i<Divs.length;i++){
        if(getStyle(Divs[i],'top')==top&&getStyle(Divs[i],'left')==left){
            console.log(Divs[1]);
            return Divs[i];
        }
    }
}
//��ȡ�ⲿ��ʽ�����ʽ
function getStyle(element,attr){
    //return this.elements[i].style[attr];    //ע�⣺���ַ����޷���ȡ���ⲿ�ļ��е���ʽ
    if(typeof window.getComputedStyle!=="undefined"){//���w3c
        return window.getComputedStyle(element,null)[attr];
    }else if(typeof element.currentStyle!=="undefined"){//���ie
        return element.currentStyle[attr];
    }
}


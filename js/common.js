// 获取节点
function getid(id){

    return document.getElementById(id);
}

//获取随机数
function ranNum(count){
    var ranStr = "ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz0123456789"
    var tempNum = "";
    var resRanNum = "";
    for(var i = 0; i < count; i++){
        tempNum = parseInt(Math.random() * ranStr.length)
        console.log(tempNum);
        resRanNum += ranStr[tempNum];
    }
    return resRanNum;
}

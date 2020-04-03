/*
 * 函数杂烩（尺眼通3加强版专用函数）。
 */ 
function getImgResNameByPicTag(picTag:number):string
{
    var tmpResName;
    if(picTag < 10) {
        tmpResName = "img_00" + picTag;
    }
    else if(picTag < 100) {
        tmpResName = "img_0" + picTag;
    }
    else {
        tmpResName = "img_" + picTag;
    }
    
    return tmpResName;
}

function getHTTPSImgURLByPicTag(picTag:number):string {
    var ret:string , strTag:string;

    ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getImgCrossDomain.php?tag=";

    if(picTag < 10) {
        strTag = "00" + picTag;
    }
    else if(picTag < 100) {
        strTag = "0" + picTag;
    }
    else {
        strTag = "" + picTag;
    }

    ret += strTag;

    return ret;
}

function getImgResNameByFileName(fileName: string):string {
    return fileName.substr(0,7);
}

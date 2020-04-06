var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
 * /src/components/finders/Eyelen/CEyelen4HTTPSResUrlFinder.ts
 * 使用本寻找器可通过文件名、编号等获取远程资源URL。
*/
var CEyelen4HTTPSResUrlFinder = (function () {
    function CEyelen4HTTPSResUrlFinder() {
    }
    CEyelen4HTTPSResUrlFinder.prototype.setInp = function (inp) {
        //inp eg: 88 , "4" , "pic002.json" , "img_001.gif" , "img_001_gif"
        this.m_inpStr = inp;
    };
    CEyelen4HTTPSResUrlFinder.prototype.getResult = function () {
        //返回得到的资源URL。
        var ret;
        var strTmpTag;
        var temp;
        if (this.m_inpStr.indexOf(".gif") >= 0 || this.m_inpStr.indexOf("_gif") >= 0 || this.m_inpStr.indexOf("img") >= 0) {
            temp = parseInt(this.m_inpStr.substr(4, 3));
            strTmpTag = "";
            if (temp < 10) {
                strTmpTag = "00" + temp.toString();
            }
            else if (temp < 100) {
                strTmpTag = "0" + temp.toString();
            }
            else {
                strTmpTag = "" + temp.toString();
            }
            //			ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getImgCrossDomain.php?tag=";
            ret = "https://www.gdeint.cn/HTTPSExports/wechat/Eyelen/Eyelen4_Wechat/pics/Eyelen/getImgCrossDomain.php?tag=";
            ret += strTmpTag;
        }
        else {
            if (this.m_inpStr.indexOf(".json") >= 0) {
                temp = parseInt(this.m_inpStr.substr(3, 3));
            }
            else {
                temp = parseInt(this.m_inpStr);
            }
            strTmpTag = "";
            if (temp < 10) {
                strTmpTag = "00" + temp.toString();
            }
            else if (temp < 100) {
                strTmpTag = "0" + temp.toString();
            }
            else {
                strTmpTag = "" + temp.toString();
            }
            //			ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getPicCrossDomain.php?tag=";
            ret = "https://www.gdeint.cn/HTTPSExports/wechat/Eyelen/Eyelen4_Wechat/pics/Eyelen/getPicCrossDomain.php?tag=";
            ret += strTmpTag;
        }
        return ret;
    };
    return CEyelen4HTTPSResUrlFinder;
}());
__reflect(CEyelen4HTTPSResUrlFinder.prototype, "CEyelen4HTTPSResUrlFinder", ["IEyelen4ResNameFinder", "IFinder"]);
//# sourceMappingURL=CEyelen4HTTPSResUrlFinder.js.map
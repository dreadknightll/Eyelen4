var CEyelen4HTTPSResUrlFinder = (function () {
    function CEyelen4HTTPSResUrlFinder() {
    }
    CEyelen4HTTPSResUrlFinder.prototype.setInp = function (inp) {
        this.m_inpStr = inp;
    };
    CEyelen4HTTPSResUrlFinder.prototype.getResult = function () {
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
            ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getImgCrossDomain.php?tag=";
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
            ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getPicCrossDomain.php?tag=";
            ret += strTmpTag;
        }
        return ret;
    };
    return CEyelen4HTTPSResUrlFinder;
}());
//# sourceMappingURL=CEyelen4HTTPSResUrlFinder.js.map
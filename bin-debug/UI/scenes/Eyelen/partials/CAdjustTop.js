var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var gdeint;
(function (gdeint) {
    var CAdjustTopDlg = (function (_super) {
        __extends(CAdjustTopDlg, _super);
        function CAdjustTopDlg() {
            return _super.call(this) || this;
        }
        CAdjustTopDlg.prototype.childrenCreated = function () {
            console.log("Children created in CAdjustTop!");
        };
        return CAdjustTopDlg;
    }(eui.Component));
    gdeint.CAdjustTopDlg = CAdjustTopDlg;
    __reflect(CAdjustTopDlg.prototype, "gdeint.CAdjustTopDlg");
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CAdjustTop.js.map
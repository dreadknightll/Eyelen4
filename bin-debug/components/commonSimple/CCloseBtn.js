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
/**
 *
 * @author
 *
 */
var eyelen4;
(function (eyelen4) {
    var CCloseBtn = (function (_super) {
        __extends(CCloseBtn, _super);
        function CCloseBtn() {
            return _super.call(this) || this;
        }
        return CCloseBtn;
    }(eui.Button));
    eyelen4.CCloseBtn = CCloseBtn;
    __reflect(CCloseBtn.prototype, "eyelen4.CCloseBtn");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CCloseBtn.js.map
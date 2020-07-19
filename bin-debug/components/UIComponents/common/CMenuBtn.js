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
    var CMenuBtn = (function (_super) {
        __extends(CMenuBtn, _super);
        function CMenuBtn() {
            return _super.call(this) || this;
        }
        return CMenuBtn;
    }(eui.Button));
    gdeint.CMenuBtn = CMenuBtn;
    __reflect(CMenuBtn.prototype, "gdeint.CMenuBtn");
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CMenuBtn.js.map
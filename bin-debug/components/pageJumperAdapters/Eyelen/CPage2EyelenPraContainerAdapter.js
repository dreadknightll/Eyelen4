/*
 * /src/components/pageJumperAdapters/Eyelen/CPage2EyelenPraContainerAdapter.ts
 *
 * 用途：Container转Page。
 
        使用步骤：
        1、设定 m_adaptee.
        2、绑定PageJumper。
        3、利用PageJumer切换页面时，show或hide会触发。
*/
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
var CPage2EyelenPraContainerAdapter = (function (_super) {
    __extends(CPage2EyelenPraContainerAdapter, _super);
    function CPage2EyelenPraContainerAdapter() {
        return _super.call(this) || this;
    }
    CPage2EyelenPraContainerAdapter.prototype.show = function () {
        _super.prototype.show.call(this);
        this.m_adaptee.show();
    };
    CPage2EyelenPraContainerAdapter.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.m_adaptee.hide();
    };
    return CPage2EyelenPraContainerAdapter;
}(gdeint.CPage));
__reflect(CPage2EyelenPraContainerAdapter.prototype, "CPage2EyelenPraContainerAdapter");
;

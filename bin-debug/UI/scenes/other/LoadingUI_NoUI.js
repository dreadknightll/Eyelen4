/***********************************************************
* /src/UI/scenes/other/loadingUI_NoUI.ts
* 无界面资源加载界面。
*
************************************************************/
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
var LoadingUI_NoUI = (function (_super) {
    __extends(LoadingUI_NoUI, _super);
    function LoadingUI_NoUI() {
        return _super.call(this) || this;
    }
    LoadingUI_NoUI.prototype.onProgress = function (current, total) {
    };
    return LoadingUI_NoUI;
}(egret.Sprite));
__reflect(LoadingUI_NoUI.prototype, "LoadingUI_NoUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI_NoUI.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//此类用于实现切换页面时启用/禁止开始练习按钮等操作。
var CWelcomePage_Eyelen4 = (function () {
    function CWelcomePage_Eyelen4() {
        this.m_commonPage = new gdeint.CPage();
    }
    CWelcomePage_Eyelen4.prototype.show = function () {
        this.m_commonPage.show();
        this.m_scene.visible = true;
    };
    CWelcomePage_Eyelen4.prototype.hide = function () {
        this.m_commonPage.hide();
        this.m_scene.visible = false;
    };
    CWelcomePage_Eyelen4.prototype.isVisible = function () {
        return this.m_scene.visible;
    };
    CWelcomePage_Eyelen4.prototype.showOnFront = function () {
        this.m_commonPage.showOnFront();
        this.show();
        this.onShownOnFront();
    };
    CWelcomePage_Eyelen4.prototype.onShownOnFront = function () {
        this.m_commonPage.onShownOnFront();
        this.m_scene.switch2StartBtn();
    };
    return CWelcomePage_Eyelen4;
}());
__reflect(CWelcomePage_Eyelen4.prototype, "CWelcomePage_Eyelen4", ["gdeint.IPage", "gdeint.IHidable"]);
//# sourceMappingURL=CWelcomePage_Eyelen4.js.map
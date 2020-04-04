/****************************************************
 * /src/UI/scenes/CWelcomePage_Eyelen4.ts
 * 
 * 用于实现切换页面时启用/禁止开始练习按钮等操作。
 *
 ****************************************************/

class CWelcomePage_Eyelen4 implements gdeint.IPage {

    private m_commonPage:gdeint.CPage;
    public m_scene:eyelen4.CWelcomeScene_Eyelen4;
    private shutdownClock:gdeint.CShutdownClock;

    public constructor() {
        this.m_commonPage = new gdeint.CPage();
    }

	public show():void {
        this.m_commonPage.show();
        this.m_scene.visible = true;
	}

    /*
    *   离开此页面或其它隐藏操作时触发。
    */
	public hide():void {
        this.m_commonPage.hide();
        this.m_scene.visible = false;
	}

    public isVisible():boolean {
        return this.m_scene.visible;
    }

    /*
    *   切换到此页面时触发。
    */
	public showOnFront():void {
        this.m_commonPage.showOnFront();
        this.show();
		this.onShownOnFront();
	}

    public onShownOnFront():void {
        this.m_commonPage.onShownOnFront();
        this.m_scene.switch2StartBtn();
    }
}
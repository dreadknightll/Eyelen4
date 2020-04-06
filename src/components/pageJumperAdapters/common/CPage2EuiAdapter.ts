/**********************************************************
 * /src/components/pageJumperAdapters/common/CPage2EuiAdapter.ts
 * eui界面转CPage的adapter。
 * 使用方法：把要转的eui界面设置到m_adaptee。
 * 
 **********************************************************/

class CPage2EuiAdapter extends gdeint.CPage {
    public m_adaptee:eui.Component;

    public constructor() {
        super();
    }

    //显式调用较少。
    public show():void {
        super.show();
        this.m_adaptee.visible = true;
	}

    //切换到本页时触发。为某一界面编写专用Page类时可重载。
	public showOnFront():void {
        super.showOnFront();
        this.m_adaptee.visible = true;
    }

    //离开本页时也会触发。为某一界面编写专用Page类时可重载。
	public hide():void {
        super.hide();
        this.m_adaptee.visible = false;
	}

};
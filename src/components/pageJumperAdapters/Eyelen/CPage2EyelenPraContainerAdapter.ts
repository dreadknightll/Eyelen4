/*
 * /src/components/pageJumperAdapters/Eyelen/CPage2EyelenPraContainerAdapter.ts
 * 
 * 用途：Container转Page。
 
        使用步骤：
        1、设定 m_adaptee.
        2、绑定PageJumper。
        3、利用PageJumer切换页面时，show或hide会触发。
*/

class CPage2EyelenPraContainerAdapter extends gdeint.CPage {

        public m_adaptee:IEyelenPraContainer;

        public constructor() {
                super();
        }

        public show():void {
                super.show();
                this.m_adaptee.show();
        }

        public hide():void {
                super.hide();
                this.m_adaptee.hide();
	}

};
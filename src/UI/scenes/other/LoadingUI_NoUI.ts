/***********************************************************
* /src/UI/scenes/other/loadingUI_NoUI.ts
* 无界面资源加载界面。
*
************************************************************/

class LoadingUI_NoUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
    }

    public onProgress(current: number, total: number): void {
    }
}

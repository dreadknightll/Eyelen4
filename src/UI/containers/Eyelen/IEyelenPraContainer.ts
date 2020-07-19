/**
 * /src/UI/containers/Eyelen/IEyelenPraContainer.ts
 */
interface IEyelenPraContainer extends IUIContainer{
    setPraScene(ps:IEyelenPraScene):void; // 绑定的Scene需实现IEyelenPraScene接口。
    setCaliDlg(caliDlg:ICaliDlg):void;
    setRenderFilter(rf:IEyelen3ERenderFilter):void;

    setCaRat(cr:number):void;
    getCaRat():number;
    _getPraScene():IEyelenPraScene;
    _getCaliDlg():ICaliDlg;
    _getRenderFilter(): IEyelen3ERenderFilter;

    sendMsgToScene(msgType:string , msgObj:any):any; //多用于插件往场景投递消息。返回一个retObj。

    showCaliDlg(listener:(dlgResult:boolean)=>void):void;
    showPraMenu():void;

    startNewPra():void;
    _quitPra():void;
    setQuitHandler(func:Function);
}

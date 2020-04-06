/**
 * /src/UI/containers/common/IUIContainer.ts
 */
interface IUIContainer extends INotiParent,gdeint.IHidable {
    //本接口未固定Scene的数据类型。

    setResLoader(r:IResFetcher):any;
    setAlertDlg(ad:IAlertDlgPlugin):void;
    setConfirmDlg(cd:IConfirmDlgPlugin):void;
    setPreloaderUI(pUI:IPreloaderUI):void;

    getDlgLayer():IDiv;

    _getResLoader():IResFetcher;
    _getConfirmDlg():IConfirmDlgPlugin;
    _getAlertDlg():IAlertDlgPlugin;
    _getPreloaderUI():IPreloaderUI;

    saveVisibleStates():void;
    getVisibleStates():Array<boolean>;

    showAlert(content: string , listener: Function):void;
    showConfirm(content:string , listener:Function):void;

    setCaRat(cr:number):void;
    getCaRat():number;
}

/**
 * /src/components/presenters/common/IPresenterWithThumb.ts
 * 带缩略图的presenter。
 */
interface IPresenterWithThumb {
    setITM(itm:gdeint.ImgThumbModelV2):void;

    /*
        inp：输入内容到presenter。
        fill：把内容显示到屏幕上。
        get：获取已在或要在屏幕上显示的内容。
    */

    inpImgSelPt(pt:gdeint.CPoint): void;
    inpThSelPt(thSelPt: gdeint.CPoint): void;

    inpImgSelWidth(w:number): void;
    inpImgSelHeight(h:number): void;

    getImgRect(): gdeint.CRect; // 获取输出的图片区域。
    getThumbRect(): gdeint.CRect; // 获取输出的缩略图区域。

}

/**
 * /src/components/presenters/common/IPraPresenter.ts
 * 练习场景presenter。
 */
interface IPraPresenter extends IBindableWithPM {
//fill：把内容显示到屏幕。get：获取正在屏幕显示的内容。 
    fillScore(s:number): void; // Let PM to calculate and fill in via this func.
    getScore(): number; // Get the score value shown on the screen.

    fillProgress(p:number): void; // 把当前进度显示到屏幕上。
    getProgress(): number; // Get the progress value shown on the screen.

    setWinWidth(ww: number): void;
    setWinHeight(wh: number): void;
}

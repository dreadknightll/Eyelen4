// TypeScript file
interface IEyelen4WinModel extends ITMBWinModel {
    setTopHeight1(h:number):void;
    getTopHeight1():number;
    setTopHeight2(h:number):void;
    getTopHeight2():number;
    showTop():void;
    hideTop():void;
	getMidVisibleY():number;
	getMidVisibleHeight():number;

    setBottomHeight(h:number):void;
}
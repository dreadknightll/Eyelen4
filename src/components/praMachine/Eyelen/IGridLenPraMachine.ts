/**
 * /src/components/praMachine/Eyelen/IGridLenPraMachine.ts
 * 格子长度练习机器。
 */
interface IGridLenPraMachine extends ILenPraMachine {
    setGridDispWidth(gWidth:number):void; //一个格子的宽度。
    getLenChecker():IGridLenChecker;
    inpGridCnt(gc:number); // inp后直接提交，无需调用submit。
}

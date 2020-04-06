/*
 * /src/components/praMachine/Eyelen/ILenPraMachine.ts
 * 长度练习机器。
*/
interface ILenPraMachine extends IPraMachine {
    setLenArr(lenArr: Array<CLen>): void;
    nextLen():void;
    getCurLen():CLen;
    getLastLenRank():number;

}
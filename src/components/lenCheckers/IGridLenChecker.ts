/*
 * /src/components/lenCheckers/IGridLenChecker.ts
*/
interface IGridLenChecker extends ILenChecker {
    setGridDispWidth(gw:number):void;
    getCorreGridCnt():number;
    setInputGridCnt(igcnt:number):void;
}
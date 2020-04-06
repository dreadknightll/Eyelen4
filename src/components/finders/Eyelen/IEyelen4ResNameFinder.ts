/*
 * /src/components/finders/Eyelen/IEyelen4ResNameFinder.ts
 * 输入和结果均为字符串的寻找器。
 */
interface IEyelen4ResNameFinder extends IFinder {
	setInp(inp:string):void;
	getResult():string;
}
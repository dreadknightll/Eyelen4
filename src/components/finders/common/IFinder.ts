/*
 * /src/components/finders/common/IFinder.ts
 * 寻找器接口。根据输入寻找需要的结果。
*/
interface IFinder {
	setInp(inp:any);
	getResult():any;
}
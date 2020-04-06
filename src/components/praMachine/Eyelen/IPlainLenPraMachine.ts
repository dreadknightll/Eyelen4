/**
 * /src/components/praMachine/Eyelen/IPlainLenPraMachine.ts
 * 普通长度练习机器。
 */
interface IPlainLenPraMachine extends ILenPraMachine {
    getLenChecker():ILenChecker;
    inpLen(len:number); // 无需submit。
}

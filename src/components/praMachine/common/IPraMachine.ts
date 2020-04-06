/**
 * /src/components/praMachine/common/IPraMachine.ts
 * 练习机器。
 */
interface IPraMachine {
    startPra():void; // 开始练习。
    rePra():void; // 重新开始一轮新练习。
    clearPra(): void; // 重置练习。

    getCurScore(): number; // 获取当前得分。
    getCurElemTag(): number; // 当前元素的下标。调用next后增加。
    getCmplProgress(): number; // 当前练习完成进度。inp后增加，不受next影响。注意与上一方法的区别。
}

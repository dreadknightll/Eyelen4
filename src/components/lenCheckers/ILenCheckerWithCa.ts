/*
 * /src/components/lenCheckers/ILenCheckerWithCa.ts
*/
interface ILenCheckerWithCa extends ILenChecker // With ca makes comparison more accurate.
{
    setRenderFilter(rf:IEyelen3ERenderFilter);
};

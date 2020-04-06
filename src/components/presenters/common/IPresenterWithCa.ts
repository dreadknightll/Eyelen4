/**
 * /src/components/presenters/common/IPresenterWithCa.ts
 * 带校准的presenter。
 */
interface IPresenterWithCa {
    setRenderFilter(rf:gdeint.IRenderFilterWithCa): void;
    getRenderFilter():gdeint.IRenderFilterWithCa;
    setCaRat(caRat:number): void;
}
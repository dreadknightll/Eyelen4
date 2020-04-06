/**
 * /src/scenes/IScene.ts
 */
interface IScene extends gdeint.IHidable,INotiParent,IContainerPlugin {
    disableScene():void;
    enableScene():void;
    getDlgLayer():IDiv;
}

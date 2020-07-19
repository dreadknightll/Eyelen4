/**
 * /src/scenes/IScene.ts
 */
interface IScene extends gdeint.IHidable,INotiParent,IContainerPlugin,IWithMsgHandling {
    disableScene():void;
    enableScene():void;
    getDlgLayer():IDiv;
}

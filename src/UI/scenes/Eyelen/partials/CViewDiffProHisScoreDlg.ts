namespace eyelen4 {
	export class CViewDiffProHisScoreDlg extends eui.Component {
		public constructor() {
			super();
		}

		private scoreLabel:eui.Label;
		private closeBtn:eui.Button;

		public childrenCreated():void {
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtn , this);
		}

		public show() {
			console.log("ScoreJSONObjSize():"+CGlobals.g2_tmpScoresJSONObj.size);
			this.scoreLabel.text = "";
			var i;
			for(i=0;i<CGlobals.g2_tmpScoresJSONObj.Scores.length;++i) {
				this.scoreLabel.text += (CGlobals.g2_tmpScoresJSONObj.Scores[i].Score+"分 于"+CGlobals.g2_tmpScoresJSONObj.Scores[i].PraDateTime+"\n\n");
			}
			this.visible = true;
		}

		public onCloseBtn():void {
			this.visible = false;
		}
	}

}

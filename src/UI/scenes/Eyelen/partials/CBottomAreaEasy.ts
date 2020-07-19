/*
 * /src/UI/scenes/Eyelen/partials/CBottomAreaEasy.ts
 * 简单难度底部区域。
*/
namespace eyelen4 {
	export class CBottomAreaEasy extends eui.Component {
		public constructor() {
			super();
		}

		public caliBtn:eui.Button;
		public menuBtn:gdeint.CMenuBtn;
		public menuGroup:eui.Group;
		public lenInputer:CLenInputerEasy; // 长度输入控件。

		private m2_cc:boolean = false;
		private m_trueWidth:number = 480;
		private m_trueHeight:number = 210;

		public childrenCreated() :void {
			this.m2_cc = true;
			this.rearrange();
		}

		public setTrueWidth(tw:number) {
			this.m_trueWidth = tw;
			if(this.width < this.m_trueWidth) {
				this.width = this.m_trueWidth;
			}
			if(this.m2_cc) {
				this.rearrange();
			}
		}

		public setTrueHeight(th:number) {
			this.m_trueHeight = th;
			if(this.height < this.m_trueHeight) {
				this.height = this.m_trueHeight;
			}
			if(this.m2_cc) {
				this.rearrange();
			}
		}

		private rearrange() {
			this.lenInputer.setWidth(this.m_trueWidth - this.lenInputer.x -10);
			this.lenInputer.scaleY = 1.2;

			this.menuGroup.y = this.m_trueHeight * 0.6;
	//		adjust the size of the buttons
			var scale:number;
			scale = 0.32 * this.m_trueHeight/this.caliBtn.height;
			this.menuGroup.scaleY = scale;
			this.menuGroup.scaleX = scale;
		}
	}
}

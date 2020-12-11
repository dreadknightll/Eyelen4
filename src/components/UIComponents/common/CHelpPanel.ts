module eyelen4 {
	export class CHelpPanel extends eui.Component {
		public constructor() {
			super();
		}

		private contentLabel:eui.Label;
		public closeBtn:eui.Button;

		public childrenCreated() {

			if(S_BUILD_FOR == S_NATIVE_ANDROID) {
				this.contentLabel.text = this.s_PriText_Android;
			}
			else if(S_BUILD_FOR == S_NATIVE_IOS) {
				this.contentLabel.text = this.s_PriText_iOS;
			}
			else {
				this.contentLabel.text = this.s_PriText_Other;
			}
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtnTap , this);

		}

		private s_PriText_Android = "\n\
一、适宜用户：\n\
	本产品适合8-60岁身体、精神均健康者使用。\n\
	少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
	老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
	本产品旨在提升能力，不宜作竞赛用途。\n\
\n\
二、系统权限说明（Android）：\n\
　　需要使用修改当前设置权限让内容正确显示（修改分辨率、语言、字体等）。\n\
　　若app安装在外置存储卡，可能需要存储访问权限进行app内数据读写。若app安装在内部存储，则无需存储访问权限，禁止即可。\n\
　　白鹭SDK会获取已安装包名列表作统计用，在部分设备会申请读取已安装应用列表权限。允许该权限一般不会损害用户利益，禁止该权限也不会影响app正常运行。\n\
　　不需要其它权限，如：完全的互联网访问、读取本机识别码、通讯录访问、读取位置信息等。如有申请，禁止即可。\n\
　　建议在权限管理中禁用除修改当前设置、存储访问外的所有权限。\n\
　　本app不会向用户索取私人信息。\n\
(更新于2020-12-14)\n\
				";

		private s_PriText_iOS = "\n\
				一、适宜用户：\n\
					本产品适合8-60岁身体、精神均健康者使用。\n\
					少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
					老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
					本产品旨在提升能力，不宜作竞赛用途。\n\
				\n\
				二、系统权限说明（iOS）：\n\
			    不需要使用相册、相机、位置信息等权限。如有申请，禁止即可。\n\
			    建议在权限管理中禁用所有权限。\n\
			    本app不会向用户索取私人信息。\n\
				\n\
				(更新于2020-02-25)\n\
				";

		private s_PriText_Other = "\n\
				适宜用户：\n\
					本产品适合8-60岁身体、精神均健康者使用。\n\
					少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
					老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
					本产品旨在提升能力，不宜作竞赛用途。\n\
				\n\
				(更新于2020-10-04)\n\
				";

		private onCloseBtnTap(e:egret.TouchEvent):void {
			this.visible = false;
		}
	}
}
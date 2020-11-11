window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","eyelen4.CCloseBtn":"resource/skins/components/common/closeBtnSkin.exml","gdeint.CShutdownClock":"resource/skins/components/common/shutdownClockSkin.exml","gdeint.CAlertPanel_v2":"resource/skins/components/common/alertPanelSkin_v2.exml","gdeint.CConfirmPanel":"resource/skins/components/common/confirmPanelSkin.exml","eyelen4.CCaliDlg":"resource/skins/components/common/caliDlgSkin.exml","eyelen4.CPreloaderUI":"resource/skins/components/common/preloaderUISkin.exml","eyelen4.CMainMenu":"resource/skins/scenes/Eyelen/mainMenuSceneSkin.exml","eyelen4.CViewDiffProHisScoreDlg":"resource/skins/scenes/Eyelen/partials/viewDiffProHisScoreDlgSkin.exml","eyelen4.CCmpLenDlg":"resource/skins/components/eyelen/cmpLenDlgSkin.exml","eyelen4.CGridCmpLenDlg":"resource/skins/components/eyelen/gridCmpLenDlgSkin.exml","eyelen4.CFinalScoreDlg":"resource/skins/components/common/finalScoreDlgSkin.exml","eyelen4.CLenInputerDifficult":"resource/skins/components/eyelen/lenInputerDifficultSkin.exml","eyelen4.CLenInputerEasy":"resource/skins/components/eyelen/lenInputerEasySkin.exml","eyelen4.CPraOKBtn":"resource/skins/components/eyelen/praOKBtnSkin.exml","eyelen4.CThumbUI":"resource/skins/components/common/thumbUISkin.exml","eyelen4.CProgressView":"resource/skins/components/common/progressViewSkin.exml","eyelen4.CProProgressView":"resource/skins/components/common/proProgressViewSkin.exml","eyelen4.CScoreView":"resource/skins/components/common/scoreViewSkin.exml","eyelen4.CBalloonTip":"resource/skins/components/common/balloonTipSkin.exml","eyelen4.CTopArea_Eyelen":"resource/skins/scenes/Eyelen/partials/topAreaSkin.exml","eyelen4.CProTopArea_Eyelen":"resource/skins/scenes/Eyelen/partials/proTopAreaSkin.exml","eyelen4.CMidAreaEasy":"resource/skins/scenes/Eyelen/partials/midAreaSkin.exml","eyelen4.CMidAreaDifficult":"resource/skins/scenes/Eyelen/partials/midAreaSkin.exml","eyelen4.CBottomAreaEasy":"resource/skins/scenes/Eyelen/partials/bottomAreaEasySkin.exml","eyelen4.CBottomAreaDifficult":"resource/skins/scenes/Eyelen/partials/bottomAreaDifficultSkin.exml","eyelen4.CPraDifficultScene":"resource/skins/scenes/Eyelen/praDifficultScene.exml","eyelen4.CPraDiffProScene":"resource/skins/scenes/Eyelen/praDiffProScene.exml","eyelen4.CPraEasyScene":"resource/skins/scenes/Eyelen/praEasyScene.exml","eyelen4.CWelcomeScene_Eyelen4":"resource/skins/scenes/Eyelen/welcomeSceneEyelen4.exml","eyelen4.CCopyrightPanel_V2":"resource/skins/components/common/copyrightPanelSkin_V2.exml","eyelen4.CCpyTextPanel":"resource/skins/components/common/cpyTextPanelSkin.exml","eyelen4.CUserProPanel":"resource/skins/components/common/userProPanelSkin.exml","eyelen4.CPrivacyPolicyPanel":"resource/skins/components/common/privacyPolicyPanelSkin.exml","eyelen4.CHorverCheckPanel":"resource/skins/components/common/horverCheckPanelSkin.exml","eyelen4.CHelpPanel":"resource/skins/components/common/helpPanelSkin.exml","gdeint.CShutdownScr":"resource/skins/components/common/shutdownScrSkin.exml","gdeint.CMenuBtn":"resource/skins/components/common/menuBtn.exml","gdeint.CPraMenu":"resource/skins/scenes/Eyelen/partials/praMenuSkin.exml","gdeint.CViewTermsMenu":"resource/skins/scenes/Eyelen/partials/viewTermsMenuSkin.exml","gdeint.CSndConfMenu":"resource/skins/scenes/Eyelen/partials/sndConfMenuSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/alertPanelSkin_v2.exml'] = window.alertPanelSkin_v2 = (function (_super) {
	__extends(alertPanelSkin_v2, _super);
	function alertPanelSkin_v2() {
		_super.call(this);
		this.skinParts = ["bgGrp","content","closeBtn"];
		
		this.height = 190;
		this.width = 300;
		this.elementsContent = [this.bgGrp_i(),this.content_i(),this.closeBtn_i()];
	}
	var _proto = alertPanelSkin_v2.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Rect();
		this.bgGrp = t;
		t.fillColor = 0xaaaaFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.bold = true;
		t.height = 80;
		t.multiline = true;
		t.size = 24;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 256;
		t.x = 22;
		t.y = 36;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 100;
		t.y = 130;
		return t;
	};
	return alertPanelSkin_v2;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/balloonTipSkin.exml'] = window.balloonTipSkin = (function (_super) {
	__extends(balloonTipSkin, _super);
	function balloonTipSkin() {
		_super.call(this);
		this.skinParts = ["content","arrow","closeBtn"];
		
		this.height = 400;
		this.width = 350;
		this.elementsContent = [this._Image1_i(),this.content_i(),this.arrow_i(),this.closeBtn_i()];
	}
	var _proto = balloonTipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tipBalloon_png";
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.bold = true;
		t.height = 151;
		t.multiline = true;
		t.size = 28;
		t.text = "标签";
		t.textColor = 0xFFFFFF;
		t.width = 297;
		t.x = 23;
		t.y = 94;
		return t;
	};
	_proto.arrow_i = function () {
		var t = new eui.Image();
		this.arrow = t;
		t.height = 47;
		t.source = "arrow_png";
		t.width = 84;
		t.x = 134;
		t.y = 345;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "看完了，关闭";
		t.x = 113;
		t.y = 277;
		return t;
	};
	return balloonTipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/caliDlgSkin.exml'] = window.caliDlgSkin = (function (_super) {
	__extends(caliDlgSkin, _super);
	function caliDlgSkin() {
		_super.call(this);
		this.skinParts = ["OKBtn","cancelBtn","caliSquareBg","caliSquare","caliImg","caliSquareCover","chCaliImgBtn","minusBtn","plusBtn","undoBtn","redoBtn","caliRateField","lockCB","closeBtn"];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.OKBtn_i(),this.cancelBtn_i(),this._Label1_i(),this._Label2_i(),this.caliSquareBg_i(),this.caliSquare_i(),this.caliImg_i(),this.caliSquareCover_i(),this.chCaliImgBtn_i(),this._Label3_i(),this.minusBtn_i(),this.plusBtn_i(),this.undoBtn_i(),this.redoBtn_i(),this._Label4_i(),this.caliRateField_i(),this.lockCB_i(),this._Label5_i(),this.closeBtn_i()];
	}
	var _proto = caliDlgSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x00FF00;
		t.height = 600;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.OKBtn_i = function () {
		var t = new eui.Button();
		this.OKBtn = t;
		t.height = 50;
		t.label = "确定";
		t.width = 100;
		t.x = 100;
		t.y = 519;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.height = 50;
		t.label = "取消";
		t.width = 100;
		t.x = 205;
		t.y = 519;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 54;
		t.text = "横竖校准";
		t.textColor = 0x000000;
		t.x = 93;
		t.y = 47;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 103;
		t.size = 24;
		t.text = "　　请输入校准系数，或仔细调整宽度，确保以下图形精确显示为正方形（横竖偏差3%以下）：";
		t.textColor = 0x000000;
		t.width = 320;
		t.x = 42;
		t.y = 115;
		return t;
	};
	_proto.caliSquareBg_i = function () {
		var t = new eui.Rect();
		this.caliSquareBg = t;
		t.fillColor = 0xAAAAAA;
		t.height = 150;
		t.width = 270;
		t.x = 70;
		t.y = 220;
		return t;
	};
	_proto.caliSquare_i = function () {
		var t = new eui.Rect();
		this.caliSquare = t;
		t.fillColor = 0x339955;
		t.height = 150;
		t.width = 150;
		t.x = 70;
		t.y = 220;
		return t;
	};
	_proto.caliImg_i = function () {
		var t = new eui.Image();
		this.caliImg = t;
		t.height = 150;
		t.source = "square1_png";
		t.width = 150;
		t.x = 70;
		t.y = 220;
		return t;
	};
	_proto.caliSquareCover_i = function () {
		var t = new eui.Rect();
		this.caliSquareCover = t;
		t.alpha = 0;
		t.fillColor = 0xAAAAAA;
		t.height = 150;
		t.width = 270;
		t.x = 70;
		t.y = 217;
		return t;
	};
	_proto.chCaliImgBtn_i = function () {
		var t = new eui.Image();
		this.chCaliImgBtn = t;
		t.height = 30;
		t.source = "refreshBtn_png";
		t.width = 30;
		t.x = 20;
		t.y = 262;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.height = 40;
		t.size = 16;
		t.text = "换校准图";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 65;
		t.x = 3;
		t.y = 291;
		return t;
	};
	_proto.minusBtn_i = function () {
		var t = new eui.Button();
		this.minusBtn = t;
		t.height = 40;
		t.label = "-";
		t.width = 60;
		t.x = 75;
		t.y = 419;
		return t;
	};
	_proto.plusBtn_i = function () {
		var t = new eui.Button();
		this.plusBtn = t;
		t.height = 40;
		t.label = "+";
		t.width = 60;
		t.x = 140;
		t.y = 419;
		return t;
	};
	_proto.undoBtn_i = function () {
		var t = new eui.Button();
		this.undoBtn = t;
		t.height = 40;
		t.label = "撤销";
		t.width = 60;
		t.x = 75;
		t.y = 459;
		return t;
	};
	_proto.redoBtn_i = function () {
		var t = new eui.Button();
		this.redoBtn = t;
		t.height = 40;
		t.label = "重做";
		t.width = 60;
		t.x = 140;
		t.y = 459;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 29;
		t.size = 24;
		t.text = "校准系数：";
		t.textColor = 0x000000;
		t.width = 127;
		t.x = 90;
		t.y = 389;
		return t;
	};
	_proto.caliRateField_i = function () {
		var t = new eui.TextInput();
		this.caliRateField = t;
		t.text = "1.00";
		t.width = 99;
		t.x = 208;
		t.y = 381;
		return t;
	};
	_proto.lockCB_i = function () {
		var t = new eui.CheckBox();
		this.lockCB = t;
		t.width = 153;
		t.x = 219;
		t.y = 438;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 49;
		t.size = 20;
		t.text = "锁定宽度和系数";
		t.textColor = 0x000000;
		t.width = 89;
		t.x = 247;
		t.y = 429;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eyelen4.CCloseBtn();
		this.closeBtn = t;
		t.label = "X";
		t.x = 356;
		t.y = 2;
		return t;
	};
	return caliDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/closeBtnSkin.exml'] = window.closeBtnSkin = (function (_super) {
	__extends(closeBtnSkin, _super);
	function closeBtnSkin() {
		_super.call(this);
		this.skinParts = ["theImg"];
		
		this.height = 50;
		this.width = 40;
		this.elementsContent = [this.theImg_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = closeBtnSkin.prototype;

	_proto.theImg_i = function () {
		var t = new eui.Image();
		this.theImg = t;
		t.height = 50;
		t.source = "closeBtn_png";
		t.width = 40;
		t.x = 3;
		t.y = 1;
		return t;
	};
	return closeBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/yesBtnSkin.exml'] = window.yesBtnSkin = (function (_super) {
	__extends(yesBtnSkin, _super);
	function yesBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 220;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = yesBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "yesBtn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.source = "yesBtnDown_png";
		t.percentWidth = 100;
		return t;
	};
	return yesBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/noBtnSkin.exml'] = window.noBtnSkin = (function (_super) {
	__extends(noBtnSkin, _super);
	function noBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 220;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = noBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "noBtn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.source = "noBtnDown_png";
		t.percentWidth = 100;
		return t;
	};
	return noBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/confirmPanelSkin.exml'] = window.confirmPanelSkin = (function (_super) {
	__extends(confirmPanelSkin, _super);
	function confirmPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgGrp","content","yesBtn","noBtn"];
		
		this.height = 280;
		this.width = 400;
		this.elementsContent = [this.bgGrp_i(),this.content_i(),this.yesBtn_i(),this.noBtn_i()];
	}
	var _proto = confirmPanelSkin.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Group();
		this.bgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.bold = true;
		t.height = 115;
		t.multiline = true;
		t.size = 24;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 350;
		t.x = 22;
		t.y = 46;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new eui.Button();
		this.yesBtn = t;
		t.height = 55;
		t.label = "是";
		t.skinName = "yesBtnSkin";
		t.width = 150;
		t.x = 47;
		t.y = 203;
		return t;
	};
	_proto.noBtn_i = function () {
		var t = new eui.Button();
		this.noBtn = t;
		t.height = 55;
		t.label = "否";
		t.skinName = "noBtnSkin";
		t.width = 150;
		t.x = 201;
		t.y = 203;
		return t;
	};
	return confirmPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/copyrightPanelSkin_V2.exml'] = window.copyrightPanelSkin_v2 = (function (_super) {
	__extends(copyrightPanelSkin_v2, _super);
	function copyrightPanelSkin_v2() {
		_super.call(this);
		this.skinParts = ["title","content","contentScroller","closeBtn","arrowUp","arrowDown"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.title_i(),this.contentScroller_i(),this.closeBtn_i(),this._Image2_i(),this._Image3_i(),this.arrowUp_i(),this.arrowDown_i()];
	}
	var _proto = copyrightPanelSkin_v2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "noticeBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.text = "著作权声明";
		t.textColor = 0xFF0000;
		t.x = 123.5;
		t.y = 80;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.height = 420;
		t.width = 320;
		t.x = 42;
		t.y = 141;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.content_i()];
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.height = 800;
		t.width = 315;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 151;
		t.y = 566;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "rippleCircle_png";
		t.width = 50;
		t.x = 85;
		t.y = 567;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "rippleCircle_png";
		t.width = 50;
		t.x = 265;
		t.y = 567;
		return t;
	};
	_proto.arrowUp_i = function () {
		var t = new eui.Image();
		this.arrowUp = t;
		t.height = 40;
		t.skewX = 180;
		t.source = "arrow_png";
		t.width = 40;
		t.x = 90;
		t.y = 611;
		return t;
	};
	_proto.arrowDown_i = function () {
		var t = new eui.Image();
		this.arrowDown = t;
		t.height = 40;
		t.source = "arrow_png";
		t.width = 40;
		t.x = 270;
		t.y = 571;
		return t;
	};
	return copyrightPanelSkin_v2;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/cpyTextPanelSkin.exml'] = window.cpyTextPanelSkin = (function (_super) {
	__extends(cpyTextPanelSkin, _super);
	function cpyTextPanelSkin() {
		_super.call(this);
		this.skinParts = ["rectOuter","rectInner","txtArea","resetTextBtn","closeBtn"];
		
		this.height = 500;
		this.width = 350;
		this.elementsContent = [this.rectOuter_i(),this.rectInner_i(),this._Label1_i(),this.txtArea_i(),this.resetTextBtn_i(),this.closeBtn_i()];
	}
	var _proto = cpyTextPanelSkin.prototype;

	_proto.rectOuter_i = function () {
		var t = new eui.Rect();
		this.rectOuter = t;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.rectInner_i = function () {
		var t = new eui.Rect();
		this.rectInner = t;
		t.fillColor = 0x999999;
		t.percentHeight = 97;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 95;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "框里的内容可供复制：";
		t.textColor = 0x000000;
		t.x = 25;
		t.y = 22;
		return t;
	};
	_proto.txtArea_i = function () {
		var t = new eui.EditableText();
		this.txtArea = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xcccccc;
		t.height = 352;
		t.multiline = true;
		t.size = 15;
		t.textColor = 0x000000;
		t.width = 306;
		t.x = 22;
		t.y = 64;
		return t;
	};
	_proto.resetTextBtn_i = function () {
		var t = new eui.Button();
		this.resetTextBtn = t;
		t.label = "重置内容";
		t.x = 75;
		t.y = 427;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 173;
		t.y = 427;
		return t;
	};
	return cpyTextPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/replayButtonSkin.exml'] = window.replayButtonSkin = (function (_super) {
	__extends(replayButtonSkin, _super);
	function replayButtonSkin() {
		_super.call(this);
		this.skinParts = ["theImg"];
		
		this.height = 120;
		this.width = 160;
		this.elementsContent = [this.theImg_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("theImg","source","replay_button_down_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = replayButtonSkin.prototype;

	_proto.theImg_i = function () {
		var t = new eui.Image();
		this.theImg = t;
		t.percentHeight = 100;
		t.source = "replay_button_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return replayButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/finalScoreDlgSkin.exml'] = window.finalScoreDlgSkin = (function (_super) {
	__extends(finalScoreDlgSkin, _super);
	function finalScoreDlgSkin() {
		_super.call(this);
		this.skinParts = ["bgGrp","replayBtn","score","stars"];
		
		this.height = 480;
		this.width = 360;
		this.elementsContent = [this.bgGrp_i(),this.replayBtn_i(),this._Label1_i(),this.score_i(),this.stars_i(),this._Label2_i()];
	}
	var _proto = finalScoreDlgSkin.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Group();
		this.bgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.skinName = "resource/skins/components/common/replayButtonSkin.exml";
		t.x = 100;
		t.y = 314;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = +36;
		t.text = "最后得分：";
		t.textColor = 0x000000;
		t.x = 68;
		t.y = 196;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.size = +36;
		t.text = "200";
		t.textColor = 0x000000;
		t.x = 229;
		t.y = 196;
		return t;
	};
	_proto.stars_i = function () {
		var t = new eui.Group();
		this.stars = t;
		t.height = 55;
		t.width = 200;
		t.x = 82;
		t.y = 244;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = +64;
		t.text = "练习结束";
		t.textColor = 0x000000;
		t.x = 52;
		t.y = 92;
		return t;
	};
	return finalScoreDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/helpPanelSkin.exml'] = window.helpPanelSkin = (function (_super) {
	__extends(helpPanelSkin, _super);
	function helpPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","contentLabel"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.closeBtn_i(),this._Label1_i(),this._Scroller1_i(),this._Rect2_i()];
	}
	var _proto = helpPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xa5a5a5;
		t.height = 640;
		t.width = 400;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 149;
		t.y = 545;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 32;
		t.text = "使用指引";
		t.textColor = 0x000000;
		t.width = 134;
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 419;
		t.x = 17;
		t.y = 96;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 339;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.width = 336;
		t.x = 27.5;
		t.y = 83;
		return t;
	};
	return helpPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/horverCheckPanelSkin.exml'] = window.horverCheckPanelSkin = (function (_super) {
	__extends(horverCheckPanelSkin, _super);
	function horverCheckPanelSkin() {
		_super.call(this);
		this.skinParts = ["outterRect","innerRect","caliSquare","closeBtn"];
		
		this.height = 500;
		this.width = 440;
		this.elementsContent = [this.outterRect_i(),this.innerRect_i(),this._Label1_i(),this._Label2_i(),this.caliSquare_i(),this._Label3_i(),this.closeBtn_i()];
	}
	var _proto = horverCheckPanelSkin.prototype;

	_proto.outterRect_i = function () {
		var t = new eui.Rect();
		this.outterRect = t;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.innerRect_i = function () {
		var t = new eui.Rect();
		this.innerRect = t;
		t.fillColor = 0xaaaaaa;
		t.percentHeight = 96;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 96;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 56;
		t.size = 24;
		t.text = "注意：练习前，请检查您的设备是否合适。方法如下：";
		t.textColor = 0xFF0000;
		t.width = 408;
		t.x = 16;
		t.y = 52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 197;
		t.size = 24;
		t.text = "　　仔细测量右图的正方形是否宽等于高。如有出现3%以上的偏差，则需要校准。初步估计超过80%的知名品牌设备均无需校准。";
		t.textColor = 0x000000;
		t.width = 190;
		t.x = 16;
		t.y = 108;
		return t;
	};
	_proto.caliSquare_i = function () {
		var t = new eui.Image();
		this.caliSquare = t;
		t.height = 160;
		t.source = "square1_png";
		t.width = 160;
		t.x = 234;
		t.y = 126.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 75;
		t.size = 24;
		t.text = "　　如有偏差，请校准(开始练习后进行)。每台设备通常只需检查一次。";
		t.textColor = 0x000000;
		t.width = 398;
		t.x = 19;
		t.y = 317;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 170;
		t.y = 410;
		return t;
	};
	return horverCheckPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/menuBtn.exml'] = window.menuBtn = (function (_super) {
	__extends(menuBtn, _super);
	function menuBtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 60;
		this.elementsContent = [this._Rect1_i(),this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x66aaff)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = menuBtn.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x7799FF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 98;
		t.source = "menu_png";
		t.percentWidth = 98;
		t.x = 1;
		t.y = 1;
		return t;
	};
	return menuBtn;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/preloaderUISkin.exml'] = window.preloaderUISkin = (function (_super) {
	__extends(preloaderUISkin, _super);
	function preloaderUISkin() {
		_super.call(this);
		this.skinParts = ["bg","cmplPropor","readyLabel"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.bg_i(),this._Label1_i(),this._Label2_i(),this.cmplPropor_i(),this.readyLabel_i()];
	}
	var _proto = preloaderUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xaaaaee;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "加载中……";
		t.textColor = 0x000000;
		t.x = 96;
		t.y = 58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "已完成：";
		t.textColor = 0x000000;
		t.x = 92;
		t.y = 111;
		return t;
	};
	_proto.cmplPropor_i = function () {
		var t = new eui.Label();
		this.cmplPropor = t;
		t.text = "0.0%";
		t.textColor = 0x000000;
		t.x = 209;
		t.y = 113;
		return t;
	};
	_proto.readyLabel_i = function () {
		var t = new eui.Label();
		this.readyLabel = t;
		t.size = 50;
		t.text = "就绪";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 141;
		t.y = 187;
		return t;
	};
	return preloaderUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/privacyPolicyPanelSkin.exml'] = window.privacyPanelSkin_V2 = (function (_super) {
	__extends(privacyPanelSkin_V2, _super);
	function privacyPanelSkin_V2() {
		_super.call(this);
		this.skinParts = ["cpyBtn","closeBtn","contentLabel","cpyTextPanel"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.cpyBtn_i(),this.closeBtn_i(),this._Label1_i(),this._Rect2_i(),this._Scroller1_i(),this.cpyTextPanel_i()];
	}
	var _proto = privacyPanelSkin_V2.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xa5a5a5;
		t.height = 640;
		t.width = 400;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.cpyBtn_i = function () {
		var t = new eui.Button();
		this.cpyBtn = t;
		t.label = "复制";
		t.x = 90;
		t.y = 545;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 210;
		t.y = 545;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 32;
		t.text = "隐私政策";
		t.textColor = 0x000000;
		t.width = 134;
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.width = 336;
		t.x = 27.5;
		t.y = 83;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 419;
		t.x = 17;
		t.y = 96;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3200;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 339;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.cpyTextPanel_i = function () {
		var t = new eyelen4.CCpyTextPanel();
		this.cpyTextPanel = t;
		t.height = 500;
		t.visible = false;
		t.width = 350;
		t.x = 25;
		t.y = 63;
		return t;
	};
	return privacyPanelSkin_V2;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/progressViewSkin.exml'] = window.progressViewSkin = (function (_super) {
	__extends(progressViewSkin, _super);
	function progressViewSkin() {
		_super.call(this);
		this.skinParts = ["progressCells"];
		
		this.height = 75;
		this.width = 250;
		this.elementsContent = [this._Label1_i(),this.progressCells_i()];
	}
	var _proto = progressViewSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 66;
		t.text = "进度";
		t.textColor = 0x000000;
		t.width = 42;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.progressCells_i = function () {
		var t = new eui.Group();
		this.progressCells = t;
		t.height = 18;
		t.width = 200;
		t.x = 30;
		t.y = 25;
		return t;
	};
	return progressViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/proProgressViewSkin.exml'] = window.proProgressViewSkin = (function (_super) {
	__extends(proProgressViewSkin, _super);
	function proProgressViewSkin() {
		_super.call(this);
		this.skinParts = ["progressCells"];
		
		this.height = 75;
		this.width = 250;
		this.elementsContent = [this._Label1_i(),this.progressCells_i()];
	}
	var _proto = proProgressViewSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 66;
		t.text = "进度";
		t.textColor = 0x000000;
		t.width = 42;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.progressCells_i = function () {
		var t = new eui.Group();
		this.progressCells = t;
		t.height = 18;
		t.width = 200;
		t.x = 30;
		t.y = 25;
		return t;
	};
	return proProgressViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/scoreViewSkin.exml'] = window.scoreViewSkin = (function (_super) {
	__extends(scoreViewSkin, _super);
	function scoreViewSkin() {
		_super.call(this);
		this.skinParts = ["scoreTxt","scoreFlags"];
		
		this.height = 75;
		this.width = 250;
		this.elementsContent = [this._Label1_i(),this.scoreTxt_i(),this.scoreFlags_i()];
	}
	var _proto = scoreViewSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 66;
		t.text = "成绩";
		t.textColor = 0x000000;
		t.width = 42;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.scoreTxt_i = function () {
		var t = new eui.Label();
		this.scoreTxt = t;
		t.height = 60;
		t.text = "0";
		t.textColor = 0x000000;
		t.width = 80;
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.scoreFlags_i = function () {
		var t = new eui.Group();
		this.scoreFlags = t;
		t.height = 72;
		t.width = 150;
		t.x = 76;
		t.y = 2;
		return t;
	};
	return scoreViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/shutdownClockSkin.exml'] = window.shutdownClock = (function (_super) {
	__extends(shutdownClock, _super);
	function shutdownClock() {
		_super.call(this);
		this.skinParts = ["timeLabel","labelDisplay"];
		
		this.height = 300;
		this.width = 360;
		this.elementsContent = [this._Image1_i(),this.timeLabel_i(),this.labelDisplay_i()];
	}
	var _proto = shutdownClock.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 180;
		t.anchorOffsetY = 190;
		t.percentHeight = 100;
		t.source = "clock_shutdown_png";
		t.percentWidth = 100;
		t.x = 180;
		t.y = 190;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.percentHeight = 30;
		t.left = "5%";
		t.size = 94;
		t.text = "00:00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = "55%";
		t.percentWidth = 90;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return shutdownClock;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/shutdownScrSkin.exml'] = window.shutdownScrSkin = (function (_super) {
	__extends(shutdownScrSkin, _super);
	function shutdownScrSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
	}
	var _proto = shutdownScrSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 56;
		t.text = "    您的使用时间过长。\n    为了您的健康，程序已自动中止。\n    请退出app。";
		t.textColor = 0x000000;
		t.verticalCenter = -150;
		t.width = 402;
		return t;
	};
	return shutdownScrSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/thumbUISkin.exml'] = window.thumbUI = (function (_super) {
	__extends(thumbUI, _super);
	function thumbUI() {
		_super.call(this);
		this.skinParts = ["imgThumb","randomGraphThumbGrp","thumb","thumbSel","thumbQuestioner","midLayerGrp","thumbCover"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.thumb_i(),this.thumbSel_i(),this.midLayerGrp_i(),this.thumbCover_i()];
	}
	var _proto = thumbUI.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 120;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgThumb_i(),this.randomGraphThumbGrp_i()];
		return t;
	};
	_proto.imgThumb_i = function () {
		var t = new eui.Image();
		this.imgThumb = t;
		t.height = 120;
		t.source = "noImg_gif";
		t.visible = true;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.randomGraphThumbGrp_i = function () {
		var t = new eui.Group();
		this.randomGraphThumbGrp = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumbSel_i = function () {
		var t = new eui.Image();
		this.thumbSel = t;
		t.height = 100;
		t.source = "thumb_sel_png";
		t.visible = true;
		t.width = 120;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.midLayerGrp_i = function () {
		var t = new eui.Group();
		this.midLayerGrp = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.thumbQuestioner_i()];
		return t;
	};
	_proto.thumbQuestioner_i = function () {
		var t = new eui.Label();
		this.thumbQuestioner = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xff0000;
		t.text = "?";
		t.textColor = 0xFFFF00;
		t.x = 28;
		t.y = 80;
		return t;
	};
	_proto.thumbCover_i = function () {
		var t = new eui.Rect();
		this.thumbCover = t;
		t.alpha = 0.0;
		t.height = 120;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return thumbUI;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/userProPanelSkin.exml'] = window.userProPanelSkin = (function (_super) {
	__extends(userProPanelSkin, _super);
	function userProPanelSkin() {
		_super.call(this);
		this.skinParts = ["resetTextBtn","closeBtn","contentLabel"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.resetTextBtn_i(),this.closeBtn_i(),this._Label1_i(),this._Rect2_i(),this.contentLabel_i()];
	}
	var _proto = userProPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x999999;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.resetTextBtn_i = function () {
		var t = new eui.Button();
		this.resetTextBtn = t;
		t.label = "重置内容";
		t.x = 90;
		t.y = 545;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 210;
		t.y = 545;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 32;
		t.text = "用户协议";
		t.textColor = 0x000000;
		t.width = 134;
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.width = 336;
		t.x = 27.5;
		t.y = 83;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.EditableText();
		this.contentLabel = t;
		t.background = true;
		t.backgroundColor = 0xbbbbbb;
		t.height = 419;
		t.multiline = true;
		t.size = 22;
		t.text = "fefefsfdd";
		t.textColor = 0x000000;
		t.width = 339;
		t.x = 27;
		t.y = 101;
		return t;
	};
	return userProPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/eyelen/cmpLenNextBtnSkin.exml'] = window.cmpLenNextBtnSkin = (function (_super) {
	__extends(cmpLenNextBtnSkin, _super);
	function cmpLenNextBtnSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay"];
		
		this.height = 90;
		this.width = 80;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","next_button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","")
				])
		];
	}
	var _proto = cmpLenNextBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "next_button_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 10;
		t.left = 10;
		t.right = 10;
		t.top = 10;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	return cmpLenNextBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/eyelen/cmpLenDlgSkin.exml'] = window.cmpLenDlgSkin = (function (_super) {
	__extends(cmpLenDlgSkin, _super);
	function cmpLenDlgSkin() {
		_super.call(this);
		this.skinParts = ["bg","nextBtn","scoreValue","correLenIcon","correLen","userLenIcon","userLen","scoreFlags"];
		
		this.height = 350;
		this.width = 400;
		this.elementsContent = [this.bg_i(),this.nextBtn_i(),this.scoreValue_i(),this.correLenIcon_i(),this.correLen_i(),this.userLenIcon_i(),this.userLen_i(),this.scoreFlags_i()];
	}
	var _proto = cmpLenDlgSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 280;
		t.source = "cmpLenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.height = 90;
		t.label = "下一长度";
		t.skinName = "resource/skins/components/eyelen/cmpLenNextBtnSkin.exml";
		t.width = 80;
		t.x = 169;
		t.y = 240;
		return t;
	};
	_proto.scoreValue_i = function () {
		var t = new eui.Label();
		this.scoreValue = t;
		t.size = 45;
		t.text = "+30";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 90;
		t.x = 155;
		t.y = 20;
		return t;
	};
	_proto.correLenIcon_i = function () {
		var t = new eui.Image();
		this.correLenIcon = t;
		t.height = 50;
		t.source = "questioner_png";
		t.width = 50;
		t.x = 20;
		t.y = 135;
		return t;
	};
	_proto.correLen_i = function () {
		var t = new eui.Group();
		this.correLen = t;
		t.height = 40;
		t.width = 200;
		t.x = 75;
		t.y = 139;
		return t;
	};
	_proto.userLenIcon_i = function () {
		var t = new eui.Image();
		this.userLenIcon = t;
		t.height = 50;
		t.source = "ruler_head_png";
		t.width = 50;
		t.x = 20;
		t.y = 190;
		return t;
	};
	_proto.userLen_i = function () {
		var t = new eui.Group();
		this.userLen = t;
		t.height = 40;
		t.width = 200;
		t.x = 75;
		t.y = 195;
		return t;
	};
	_proto.scoreFlags_i = function () {
		var t = new eui.Group();
		this.scoreFlags = t;
		t.height = 37;
		t.width = 99;
		t.x = 150;
		t.y = 70;
		return t;
	};
	return cmpLenDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/eyelen/gridCmpLenDlgSkin.exml'] = window.gridCmpLenDlgSkin = (function (_super) {
	__extends(gridCmpLenDlgSkin, _super);
	function gridCmpLenDlgSkin() {
		_super.call(this);
		this.skinParts = ["bg","nextBtn","scoreValue","correLenIcon","correLenRect","userLenIcon","userLenGrp","scoreFlags"];
		
		this.height = 350;
		this.width = 400;
		this.elementsContent = [this.bg_i(),this.nextBtn_i(),this.scoreValue_i(),this.correLenIcon_i(),this.correLenRect_i(),this.userLenIcon_i(),this.userLenGrp_i(),this.scoreFlags_i()];
	}
	var _proto = gridCmpLenDlgSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 80;
		t.source = "cmpLenBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.height = 90;
		t.label = "下一长度";
		t.skinName = "resource/skins/components/eyelen/cmpLenNextBtnSkin.exml";
		t.width = 80;
		t.x = 169;
		t.y = 240;
		return t;
	};
	_proto.scoreValue_i = function () {
		var t = new eui.Label();
		this.scoreValue = t;
		t.size = 45;
		t.text = "+30";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 90;
		t.x = 155;
		t.y = 20;
		return t;
	};
	_proto.correLenIcon_i = function () {
		var t = new eui.Image();
		this.correLenIcon = t;
		t.height = 50;
		t.source = "questioner_png";
		t.width = 50;
		t.x = 20;
		t.y = 135;
		return t;
	};
	_proto.correLenRect_i = function () {
		var t = new eui.Rect();
		this.correLenRect = t;
		t.fillColor = 0x55CCAA;
		t.height = 40;
		t.width = 200;
		t.x = 75;
		t.y = 139;
		return t;
	};
	_proto.userLenIcon_i = function () {
		var t = new eui.Image();
		this.userLenIcon = t;
		t.height = 50;
		t.source = "ruler_head_png";
		t.width = 50;
		t.x = 20;
		t.y = 190;
		return t;
	};
	_proto.userLenGrp_i = function () {
		var t = new eui.Group();
		this.userLenGrp = t;
		t.height = 40;
		t.width = 200;
		t.x = 75;
		t.y = 195;
		return t;
	};
	_proto.scoreFlags_i = function () {
		var t = new eui.Group();
		this.scoreFlags = t;
		t.height = 37;
		t.width = 99;
		t.x = 150;
		t.y = 70;
		return t;
	};
	return gridCmpLenDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/eyelen/lenInputerDifficultSkin.exml'] = window.lenInputerDifficultSkin = (function (_super) {
	__extends(lenInputerDifficultSkin, _super);
	function lenInputerDifficultSkin() {
		_super.call(this);
		this.skinParts = ["bg","okBtn","ruler_head","ruler_body","drager"];
		
		this.height = 170;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.okBtn_i(),this.ruler_head_i(),this.ruler_body_i(),this.drager_i()];
	}
	var _proto = lenInputerDifficultSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0x77BBFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eyelen4.CPraOKBtn();
		this.okBtn = t;
		t.height = 50;
		t.label = "按钮";
		t.width = 120;
		t.x = 350;
		t.y = 110;
		return t;
	};
	_proto.ruler_head_i = function () {
		var t = new eui.Image();
		this.ruler_head = t;
		t.height = 110;
		t.source = "ruler_head_png";
		t.width = 110;
		t.x = 2;
		t.y = 5;
		return t;
	};
	_proto.ruler_body_i = function () {
		var t = new eui.Group();
		this.ruler_body = t;
		t.height = 60;
		t.width = 110;
		t.x = 112;
		t.y = 30;
		return t;
	};
	_proto.drager_i = function () {
		var t = new eui.Group();
		this.drager = t;
		t.height = 80;
		t.width = 60;
		t.x = 112;
		t.y = 22;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "ruler_drager_png";
		t.width = 60;
		return t;
	};
	return lenInputerDifficultSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/eyelen/praOKBtnSkin.exml'] = window.praOKBtnSkin = (function (_super) {
	__extends(praOKBtnSkin, _super);
	function praOKBtnSkin() {
		_super.call(this);
		this.skinParts = ["theImg"];
		
		this.height = 80;
		this.width = 200;
		this.elementsContent = [this.theImg_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("theImg","source","ok_button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("theImg","source","ok_button_disabled_png")
				])
		];
	}
	var _proto = praOKBtnSkin.prototype;

	_proto.theImg_i = function () {
		var t = new eui.Image();
		this.theImg = t;
		t.percentHeight = 100;
		t.source = "ok_button_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return praOKBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/eyelen/lenInputerEasySkin.exml'] = window.lenInputerEasySkin = (function (_super) {
	__extends(lenInputerEasySkin, _super);
	function lenInputerEasySkin() {
		_super.call(this);
		this.skinParts = ["okBtn","ruler_head","ruler_body_cells","ruler_body_rect","ruler_body_grp"];
		
		this.height = 170;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.okBtn_i(),this.ruler_head_i(),this.ruler_body_grp_i()];
	}
	var _proto = lenInputerEasySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x77BBFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 50;
		t.label = "按钮";
		t.skinName = "resource/skins/components/eyelen/praOKBtnSkin.exml";
		t.width = 120;
		t.x = 350;
		t.y = 110;
		return t;
	};
	_proto.ruler_head_i = function () {
		var t = new eui.Image();
		this.ruler_head = t;
		t.height = 110;
		t.source = "ruler_head_png";
		t.width = 110;
		t.x = 2;
		t.y = 5;
		return t;
	};
	_proto.ruler_body_grp_i = function () {
		var t = new eui.Group();
		this.ruler_body_grp = t;
		t.x = 112;
		t.y = 30;
		t.elementsContent = [this.ruler_body_cells_i(),this.ruler_body_rect_i()];
		return t;
	};
	_proto.ruler_body_cells_i = function () {
		var t = new eui.Group();
		this.ruler_body_cells = t;
		return t;
	};
	_proto.ruler_body_rect_i = function () {
		var t = new eui.Rect();
		this.ruler_body_rect = t;
		t.fillColor = 0x888888;
		t.height = 60;
		t.width = 200;
		return t;
	};
	return lenInputerEasySkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/mainMenuSceneSkin.exml'] = window.mainMenuSceneSkin = (function (_super) {
	__extends(mainMenuSceneSkin, _super);
	function mainMenuSceneSkin() {
		_super.call(this);
		this.skinParts = ["startEasyBtn1","startEasyBtn2","startDifficultBtn1","startDifficultBtn2","startDiffProBtn","viewDiffProHisScoreBtn","aao","viewDiffProHisScoreDlg","diffProHelpBtn","alertDlg","menuGrp"];
		
		this.height = 744;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.menuGrp_i()];
	}
	var _proto = mainMenuSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x88DD99;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto.menuGrp_i = function () {
		var t = new eui.Group();
		this.menuGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 665;
		t.width = 359;
		t.x = 21;
		t.y = 36;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this.startEasyBtn1_i(),this.startEasyBtn2_i(),this._Label1_i(),this._Button1_i(),this.startDifficultBtn1_i(),this.startDifficultBtn2_i(),this.startDiffProBtn_i(),this.viewDiffProHisScoreBtn_i(),this._Label2_i(),this.aao_i(),this._Label3_i(),this.viewDiffProHisScoreDlg_i(),this.diffProHelpBtn_i(),this.alertDlg_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x9e9df2;
		t.height = 96;
		t.width = 220;
		t.x = 124;
		t.y = 482;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xdba097;
		t.height = 171;
		t.width = 220;
		t.x = 123;
		t.y = 303;
		return t;
	};
	_proto.startEasyBtn1_i = function () {
		var t = new eui.Label();
		this.startEasyBtn1 = t;
		t.size = 48;
		t.text = "简单";
		t.textColor = 0x000000;
		t.x = 16.5;
		t.y = 108;
		return t;
	};
	_proto.startEasyBtn2_i = function () {
		var t = new eui.Button();
		this.startEasyBtn2 = t;
		t.label = "进入";
		t.x = 187;
		t.y = 105;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 56;
		t.text = "中等";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 61;
		t.y = 328;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "未开放";
		t.visible = false;
		t.x = 86;
		t.y = 331;
		return t;
	};
	_proto.startDifficultBtn1_i = function () {
		var t = new eui.Label();
		this.startDifficultBtn1 = t;
		t.size = 48;
		t.text = "困难";
		t.textColor = 0x000000;
		t.x = 16.5;
		t.y = 408;
		return t;
	};
	_proto.startDifficultBtn2_i = function () {
		var t = new eui.Button();
		this.startDifficultBtn2 = t;
		t.anchorOffsetX = 0;
		t.label = "进入";
		t.width = 100;
		t.x = 239;
		t.y = 506;
		return t;
	};
	_proto.startDiffProBtn_i = function () {
		var t = new eui.Button();
		this.startDiffProBtn = t;
		t.anchorOffsetX = 0;
		t.label = "进入";
		t.width = 100;
		t.x = 239;
		t.y = 336;
		return t;
	};
	_proto.viewDiffProHisScoreBtn_i = function () {
		var t = new eui.Button();
		this.viewDiffProHisScoreBtn = t;
		t.label = "练习日志";
		t.x = 239;
		t.y = 399;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "专业模式\n（开放中）";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 126.5;
		t.y = 348.5;
		return t;
	};
	_proto.aao_i = function () {
		var t = new eui.Label();
		this.aao = t;
		t.size = 24;
		t.text = "（仅限安卓app版）";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 131.5;
		t.y = 412;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "传统模式";
		t.textColor = 0x000000;
		t.x = 133.5;
		t.y = 519;
		return t;
	};
	_proto.viewDiffProHisScoreDlg_i = function () {
		var t = new eyelen4.CViewDiffProHisScoreDlg();
		this.viewDiffProHisScoreDlg = t;
		t.visible = false;
		return t;
	};
	_proto.diffProHelpBtn_i = function () {
		var t = new eui.Image();
		this.diffProHelpBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.5;
		t.source = "helpQuestioner_png";
		t.width = 32.5;
		t.x = 166.25;
		t.y = 401.25;
		return t;
	};
	_proto.alertDlg_i = function () {
		var t = new gdeint.CAlertPanel_v2();
		this.alertDlg = t;
		t.x = 20;
		t.y = 100;
		return t;
	};
	return mainMenuSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/bottomAreaDifficultSkin.exml'] = window.bottomAreaDifficultSkin = (function (_super) {
	__extends(bottomAreaDifficultSkin, _super);
	function bottomAreaDifficultSkin() {
		_super.call(this);
		this.skinParts = ["lenInputer","caliBtn","menuBtn","menuGroup"];
		
		this.height = 210;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.lenInputer_i(),this.menuGroup_i()];
	}
	var _proto = bottomAreaDifficultSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x77BBFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.lenInputer_i = function () {
		var t = new eyelen4.CLenInputerDifficult();
		this.lenInputer = t;
		t.height = 20;
		t.width = 20;
		t.x = 5;
		t.y = 23;
		return t;
	};
	_proto.menuGroup_i = function () {
		var t = new eui.Group();
		this.menuGroup = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 10;
		t.y = 150;
		t.elementsContent = [this.caliBtn_i(),this.menuBtn_i()];
		return t;
	};
	_proto.caliBtn_i = function () {
		var t = new eui.Button();
		this.caliBtn = t;
		t.label = "横竖校准";
		t.visible = false;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.menuBtn_i = function () {
		var t = new gdeint.CMenuBtn();
		this.menuBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.width = 51;
		t.x = 10;
		t.y = -8;
		return t;
	};
	return bottomAreaDifficultSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/bottomAreaEasySkin.exml'] = window.bottomAreaEasySkin = (function (_super) {
	__extends(bottomAreaEasySkin, _super);
	function bottomAreaEasySkin() {
		_super.call(this);
		this.skinParts = ["lenInputer","caliBtn","menuBtn","menuGroup"];
		
		this.height = 210;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.lenInputer_i(),this.menuGroup_i()];
	}
	var _proto = bottomAreaEasySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x77BBFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.lenInputer_i = function () {
		var t = new eyelen4.CLenInputerEasy();
		this.lenInputer = t;
		t.height = 20;
		t.width = 20;
		t.x = 5;
		t.y = 23;
		return t;
	};
	_proto.menuGroup_i = function () {
		var t = new eui.Group();
		this.menuGroup = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 10;
		t.y = 150;
		t.elementsContent = [this.caliBtn_i(),this.menuBtn_i()];
		return t;
	};
	_proto.caliBtn_i = function () {
		var t = new eui.Button();
		this.caliBtn = t;
		t.label = "横竖校准";
		t.visible = false;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.menuBtn_i = function () {
		var t = new gdeint.CMenuBtn();
		this.menuBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.width = 51;
		t.x = 10;
		t.y = -8;
		return t;
	};
	return bottomAreaEasySkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/midAreaSkin.exml'] = window.midAreaSkin = (function (_super) {
	__extends(midAreaSkin, _super);
	function midAreaSkin() {
		_super.call(this);
		this.skinParts = ["midBgGrp","randomGraph","imgFromFile","imgGrp","midCanvasGrp","midContentGroup"];
		
		this.height = 1100;
		this.width = 640;
		this.elementsContent = [this.midBgGrp_i(),this.midContentGroup_i()];
	}
	var _proto = midAreaSkin.prototype;

	_proto.midBgGrp_i = function () {
		var t = new eui.Group();
		this.midBgGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.midContentGroup_i = function () {
		var t = new eui.Group();
		this.midContentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgGrp_i(),this.midCanvasGrp_i()];
		return t;
	};
	_proto.imgGrp_i = function () {
		var t = new eui.Group();
		this.imgGrp = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.randomGraph_i(),this.imgFromFile_i()];
		return t;
	};
	_proto.randomGraph_i = function () {
		var t = new eui.Group();
		this.randomGraph = t;
		t.height = 720;
		t.visible = false;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgFromFile_i = function () {
		var t = new eui.Image();
		this.imgFromFile = t;
		t.fillMode = "scale";
		t.height = 300;
		t.source = "noImg_gif";
		t.visible = true;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.midCanvasGrp_i = function () {
		var t = new eui.Group();
		this.midCanvasGrp = t;
		return t;
	};
	return midAreaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/praMenuSkin.exml'] = window.praMenuSkin = (function (_super) {
	__extends(praMenuSkin, _super);
	function praMenuSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","caliBtn","sndConfBtn","helpBtn","viewTermsBtn","quitPraBtn","sndConfMenu","helpPanel","viewTermsMenu"];
		
		this.height = 650;
		this.width = 350;
		this.elementsContent = [this._Rect1_i(),this.closeBtn_i(),this.caliBtn_i(),this.sndConfBtn_i(),this.helpBtn_i(),this.viewTermsBtn_i(),this.quitPraBtn_i(),this.sndConfMenu_i(),this.helpPanel_i(),this.viewTermsMenu_i()];
	}
	var _proto = praMenuSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x7788FF;
		t.percentHeight = 100;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.5;
		t.label = "X";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 29;
		t.x = 288;
		t.y = 8;
		return t;
	};
	_proto.caliBtn_i = function () {
		var t = new eui.Button();
		this.caliBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "横竖校准";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 75;
		t.y = 120;
		return t;
	};
	_proto.sndConfBtn_i = function () {
		var t = new eui.Button();
		this.sndConfBtn = t;
		t.anchorOffsetX = 0;
		t.height = 50;
		t.label = "声音设置";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 75;
		t.y = 220;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.anchorOffsetX = 0;
		t.height = 50;
		t.label = "使用指引";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 75;
		t.y = 320;
		return t;
	};
	_proto.viewTermsBtn_i = function () {
		var t = new eui.Button();
		this.viewTermsBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "查看条款";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 75;
		t.y = 420;
		return t;
	};
	_proto.quitPraBtn_i = function () {
		var t = new eui.Button();
		this.quitPraBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "退出练习";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 75;
		t.y = 520;
		return t;
	};
	_proto.sndConfMenu_i = function () {
		var t = new gdeint.CSndConfMenu();
		this.sndConfMenu = t;
		t.visible = false;
		t.x = 25;
		t.y = 120;
		return t;
	};
	_proto.helpPanel_i = function () {
		var t = new eyelen4.CHelpPanel();
		this.helpPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = -25;
		t.y = -50;
		return t;
	};
	_proto.viewTermsMenu_i = function () {
		var t = new gdeint.CViewTermsMenu();
		this.viewTermsMenu = t;
		t.visible = false;
		t.x = 25;
		t.y = 120;
		return t;
	};
	return praMenuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/proTopAreaSkin.exml'] = window.topAreaSkin = (function (_super) {
	__extends(topAreaSkin, _super);
	function topAreaSkin() {
		_super.call(this);
		this.skinParts = ["bgBackGrp","topScreen","bgFrontGrp","thumbUI","progressView","scoreView","switchBtnBgGrp","switchBtn"];
		
		this.height = 180;
		this.width = 480;
		this.elementsContent = [this.bgBackGrp_i(),this.topScreen_i(),this.bgFrontGrp_i(),this.thumbUI_i(),this.progressView_i(),this.scoreView_i(),this.switchBtnBgGrp_i(),this.switchBtn_i()];
	}
	var _proto = topAreaSkin.prototype;

	_proto.bgBackGrp_i = function () {
		var t = new eui.Group();
		this.bgBackGrp = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topScreen_i = function () {
		var t = new eui.Image();
		this.topScreen = t;
		t.percentHeight = 100;
		t.source = "top_screen_open_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bgFrontGrp_i = function () {
		var t = new eui.Group();
		this.bgFrontGrp = t;
		t.height = 10;
		t.width = 10;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.thumbUI_i = function () {
		var t = new eyelen4.CThumbUI();
		this.thumbUI = t;
		t.height = 120;
		t.width = 150;
		t.x = 36;
		t.y = 18;
		return t;
	};
	_proto.progressView_i = function () {
		var t = new eyelen4.CProProgressView();
		this.progressView = t;
		t.x = 207;
		t.y = 1;
		return t;
	};
	_proto.scoreView_i = function () {
		var t = new eyelen4.CScoreView();
		this.scoreView = t;
		t.x = 207;
		t.y = 79;
		return t;
	};
	_proto.switchBtnBgGrp_i = function () {
		var t = new eui.Group();
		this.switchBtnBgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.switchBtn_i = function () {
		var t = new eui.Image();
		this.switchBtn = t;
		t.height = 30;
		t.source = "top_screen_button_up_png";
		t.width = 60;
		t.x = 209;
		t.y = 154;
		return t;
	};
	return topAreaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/sndConfMenuSkin.exml'] = window.sndConfMenu = (function (_super) {
	__extends(sndConfMenu, _super);
	function sndConfMenu() {
		_super.call(this);
		this.skinParts = ["sndOnSwitch","OKBtn","cancelBtn"];
		
		this.height = 350;
		this.width = 300;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this.sndOnSwitch_i(),this.OKBtn_i(),this.cancelBtn_i()];
	}
	var _proto = sndConfMenu.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x7788FF;
		t.percentHeight = 100;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "声音开启";
		t.x = 45;
		t.y = 67.5;
		return t;
	};
	_proto.sndOnSwitch_i = function () {
		var t = new eui.ToggleButton();
		this.sndOnSwitch = t;
		t.skinName = "skins.ToggleSwitchSkin";
		t.x = 182.5;
		t.y = 69;
		return t;
	};
	_proto.OKBtn_i = function () {
		var t = new eui.Button();
		this.OKBtn = t;
		t.label = "确定";
		t.x = 48;
		t.y = 268;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.anchorOffsetX = 0;
		t.label = "取消";
		t.x = 150;
		t.y = 268;
		return t;
	};
	return sndConfMenu;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/topAreaSkin.exml'] = window.topAreaSkin = (function (_super) {
	__extends(topAreaSkin, _super);
	function topAreaSkin() {
		_super.call(this);
		this.skinParts = ["bgBackGrp","topScreen","bgFrontGrp","thumbUI","progressView","scoreView","switchBtnBgGrp","switchBtn"];
		
		this.height = 180;
		this.width = 480;
		this.elementsContent = [this.bgBackGrp_i(),this.topScreen_i(),this.bgFrontGrp_i(),this.thumbUI_i(),this.progressView_i(),this.scoreView_i(),this.switchBtnBgGrp_i(),this.switchBtn_i()];
	}
	var _proto = topAreaSkin.prototype;

	_proto.bgBackGrp_i = function () {
		var t = new eui.Group();
		this.bgBackGrp = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topScreen_i = function () {
		var t = new eui.Image();
		this.topScreen = t;
		t.percentHeight = 100;
		t.source = "top_screen_open_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bgFrontGrp_i = function () {
		var t = new eui.Group();
		this.bgFrontGrp = t;
		t.height = 10;
		t.width = 10;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.thumbUI_i = function () {
		var t = new eyelen4.CThumbUI();
		this.thumbUI = t;
		t.height = 120;
		t.width = 150;
		t.x = 36;
		t.y = 18;
		return t;
	};
	_proto.progressView_i = function () {
		var t = new eyelen4.CProgressView();
		this.progressView = t;
		t.x = 207;
		t.y = 1;
		return t;
	};
	_proto.scoreView_i = function () {
		var t = new eyelen4.CScoreView();
		this.scoreView = t;
		t.x = 207;
		t.y = 79;
		return t;
	};
	_proto.switchBtnBgGrp_i = function () {
		var t = new eui.Group();
		this.switchBtnBgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.switchBtn_i = function () {
		var t = new eui.Image();
		this.switchBtn = t;
		t.height = 30;
		t.source = "top_screen_button_up_png";
		t.width = 60;
		t.x = 209;
		t.y = 154;
		return t;
	};
	return topAreaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/viewDiffProHisScoreDlgSkin.exml'] = window.viewDiffProHisScoreDlgSkin = (function (_super) {
	__extends(viewDiffProHisScoreDlgSkin, _super);
	function viewDiffProHisScoreDlgSkin() {
		_super.call(this);
		this.skinParts = ["scoreLabel","closeBtn"];
		
		this.height = 400;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this._Scroller1_i(),this.closeBtn_i()];
	}
	var _proto = viewDiffProHisScoreDlgSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xc8fc67;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 419;
		t.x = 10;
		t.y = 30;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.scoreLabel_i()];
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3200;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 270;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.5;
		t.label = "X";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 29;
		t.x = 305;
		t.y = 8;
		return t;
	};
	return viewDiffProHisScoreDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/partials/viewTermsMenuSkin.exml'] = window.viewTermsMenu = (function (_super) {
	__extends(viewTermsMenu, _super);
	function viewTermsMenu() {
		_super.call(this);
		this.skinParts = ["closeBtn","viewUserProBtn","viewPriPoliBtn","userProPanel","priPoliPanel"];
		
		this.height = 350;
		this.width = 300;
		this.elementsContent = [this._Rect1_i(),this.closeBtn_i(),this.viewUserProBtn_i(),this.viewPriPoliBtn_i(),this.userProPanel_i(),this.priPoliPanel_i()];
	}
	var _proto = viewTermsMenu.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x7788FF;
		t.percentHeight = 100;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.5;
		t.label = "X";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 29;
		t.x = 238;
		t.y = 8;
		return t;
	};
	_proto.viewUserProBtn_i = function () {
		var t = new eui.Button();
		this.viewUserProBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "用户协议";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 50;
		t.y = 100;
		return t;
	};
	_proto.viewPriPoliBtn_i = function () {
		var t = new eui.Button();
		this.viewPriPoliBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "隐私政策";
		t.scaleX = 2;
		t.scaleY = 2;
		t.width = 100;
		t.x = 50;
		t.y = 200;
		return t;
	};
	_proto.userProPanel_i = function () {
		var t = new eyelen4.CUserProPanel();
		this.userProPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = -50;
		t.y = -200;
		return t;
	};
	_proto.priPoliPanel_i = function () {
		var t = new eyelen4.CPrivacyPolicyPanel();
		this.priPoliPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = -50;
		t.y = -200;
		return t;
	};
	return viewTermsMenu;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/praDifficultScene.exml'] = window.praDifficultSceneSkin = (function (_super) {
	__extends(praDifficultSceneSkin, _super);
	function praDifficultSceneSkin() {
		_super.call(this);
		this.skinParts = ["midArea","midAreaGroup","topSpaceGrp","bgUnderTopGrp","topArea","topAreaGroup","bottomArea","bottomAreaGroup","shutdownClock","finalScoreDlg"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.midAreaGroup_i(),this.topSpaceGrp_i(),this.topAreaGroup_i(),this.bottomAreaGroup_i(),this.shutdownClock_i(),this.finalScoreDlg_i()];
	}
	var _proto = praDifficultSceneSkin.prototype;

	_proto.midAreaGroup_i = function () {
		var t = new eui.Group();
		this.midAreaGroup = t;
		t.x = 0;
		t.y = 300;
		t.elementsContent = [this.midArea_i()];
		return t;
	};
	_proto.midArea_i = function () {
		var t = new eyelen4.CMidAreaDifficult();
		this.midArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topSpaceGrp_i = function () {
		var t = new eui.Group();
		this.topSpaceGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topAreaGroup_i = function () {
		var t = new eui.Group();
		this.topAreaGroup = t;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.bgUnderTopGrp_i(),this.topArea_i()];
		return t;
	};
	_proto.bgUnderTopGrp_i = function () {
		var t = new eui.Group();
		this.bgUnderTopGrp = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topArea_i = function () {
		var t = new eyelen4.CTopArea_Eyelen();
		this.topArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomAreaGroup_i = function () {
		var t = new eui.Group();
		this.bottomAreaGroup = t;
		t.x = 0;
		t.y = 400;
		t.elementsContent = [this.bottomArea_i()];
		return t;
	};
	_proto.bottomArea_i = function () {
		var t = new eyelen4.CBottomAreaDifficult();
		this.bottomArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shutdownClock_i = function () {
		var t = new gdeint.CShutdownClock();
		this.shutdownClock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.width = 146;
		t.x = 18;
		t.y = 240;
		return t;
	};
	_proto.finalScoreDlg_i = function () {
		var t = new eyelen4.CFinalScoreDlg();
		this.finalScoreDlg = t;
		t.visible = false;
		t.x = 60;
		t.y = 140;
		return t;
	};
	return praDifficultSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/praDiffProScene.exml'] = window.praDiffProSceneSkin = (function (_super) {
	__extends(praDiffProSceneSkin, _super);
	function praDiffProSceneSkin() {
		_super.call(this);
		this.skinParts = ["midArea","midAreaGroup","topSpaceGrp","bgUnderTopGrp","topArea","topAreaGroup","bottomArea","bottomAreaGroup","shutdownClock","finalScoreDlg"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.midAreaGroup_i(),this.topSpaceGrp_i(),this.topAreaGroup_i(),this.bottomAreaGroup_i(),this.shutdownClock_i(),this.finalScoreDlg_i()];
	}
	var _proto = praDiffProSceneSkin.prototype;

	_proto.midAreaGroup_i = function () {
		var t = new eui.Group();
		this.midAreaGroup = t;
		t.x = 0;
		t.y = 300;
		t.elementsContent = [this.midArea_i()];
		return t;
	};
	_proto.midArea_i = function () {
		var t = new eyelen4.CMidAreaDifficult();
		this.midArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topSpaceGrp_i = function () {
		var t = new eui.Group();
		this.topSpaceGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topAreaGroup_i = function () {
		var t = new eui.Group();
		this.topAreaGroup = t;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.bgUnderTopGrp_i(),this.topArea_i()];
		return t;
	};
	_proto.bgUnderTopGrp_i = function () {
		var t = new eui.Group();
		this.bgUnderTopGrp = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topArea_i = function () {
		var t = new eyelen4.CProTopArea_Eyelen();
		this.topArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomAreaGroup_i = function () {
		var t = new eui.Group();
		this.bottomAreaGroup = t;
		t.x = 0;
		t.y = 400;
		t.elementsContent = [this.bottomArea_i()];
		return t;
	};
	_proto.bottomArea_i = function () {
		var t = new eyelen4.CBottomAreaDifficult();
		this.bottomArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shutdownClock_i = function () {
		var t = new gdeint.CShutdownClock();
		this.shutdownClock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.width = 146;
		t.x = 18;
		t.y = 240;
		return t;
	};
	_proto.finalScoreDlg_i = function () {
		var t = new eyelen4.CFinalScoreDlg();
		this.finalScoreDlg = t;
		t.visible = false;
		t.x = 60;
		t.y = 140;
		return t;
	};
	return praDiffProSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/praEasyScene.exml'] = window.praEasySceneSkin = (function (_super) {
	__extends(praEasySceneSkin, _super);
	function praEasySceneSkin() {
		_super.call(this);
		this.skinParts = ["midArea","midAreaGroup","topSpaceGrp","bgUnderTopGrp","topArea","topAreaGroup","bottomArea","bottomAreaGroup","shutdownClock","finalScoreDlg"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.midAreaGroup_i(),this.topSpaceGrp_i(),this.topAreaGroup_i(),this.bottomAreaGroup_i(),this.shutdownClock_i(),this.finalScoreDlg_i()];
	}
	var _proto = praEasySceneSkin.prototype;

	_proto.midAreaGroup_i = function () {
		var t = new eui.Group();
		this.midAreaGroup = t;
		t.x = 0;
		t.y = 300;
		t.elementsContent = [this.midArea_i()];
		return t;
	};
	_proto.midArea_i = function () {
		var t = new eyelen4.CMidAreaEasy();
		this.midArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topSpaceGrp_i = function () {
		var t = new eui.Group();
		this.topSpaceGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topAreaGroup_i = function () {
		var t = new eui.Group();
		this.topAreaGroup = t;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.bgUnderTopGrp_i(),this.topArea_i()];
		return t;
	};
	_proto.bgUnderTopGrp_i = function () {
		var t = new eui.Group();
		this.bgUnderTopGrp = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topArea_i = function () {
		var t = new eyelen4.CTopArea_Eyelen();
		this.topArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomAreaGroup_i = function () {
		var t = new eui.Group();
		this.bottomAreaGroup = t;
		t.x = 0;
		t.y = 400;
		t.elementsContent = [this.bottomArea_i()];
		return t;
	};
	_proto.bottomArea_i = function () {
		var t = new eyelen4.CBottomAreaEasy();
		this.bottomArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shutdownClock_i = function () {
		var t = new gdeint.CShutdownClock();
		this.shutdownClock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.width = 146;
		t.x = 18;
		t.y = 240;
		return t;
	};
	_proto.finalScoreDlg_i = function () {
		var t = new eyelen4.CFinalScoreDlg();
		this.finalScoreDlg = t;
		t.visible = false;
		t.x = 60;
		t.y = 111;
		return t;
	};
	return praEasySceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyelen/welcomeSceneEyelen4.exml'] = window.welcomeSceneSkin = (function (_super) {
	__extends(welcomeSceneSkin, _super);
	function welcomeSceneSkin() {
		_super.call(this);
		this.skinParts = ["shutdownClock","userProRead","userProLabel","priPoliRead","priPoliLabel","horverChecked","horverLabel","startBtn","showCRBtn","helpBtn","crPanel","userProPanel","helpPanel","priPoliPanel","horverCheckPanel"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.shutdownClock_i(),this._Group6_i(),this.showCRBtn_i(),this._Image2_i(),this.helpBtn_i(),this.crPanel_i(),this.userProPanel_i(),this.helpPanel_i(),this.priPoliPanel_i(),this.horverCheckPanel_i()];
	}
	var _proto = welcomeSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.width = 359;
		t.x = 59.5;
		t.y = 84.5;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.source = "eyelen4_icon_180_png";
		t.width = 95;
		t.x = 8;
		t.y = 6.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "宜英尺眼通4——\n长度目测训练";
		t.textColor = 0x000000;
		t.x = 109;
		t.y = 25.5;
		return t;
	};
	_proto.shutdownClock_i = function () {
		var t = new gdeint.CShutdownClock();
		this.shutdownClock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.width = 69;
		t.x = 363.37;
		t.y = 15.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 383;
		t.width = 460;
		t.x = 9.37;
		t.y = 280;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.33;
		t.width = 452.67;
		t.x = 5;
		t.y = 5;
		t.elementsContent = [this._Rect2_i(),this.userProRead_i(),this.userProLabel_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x86c93a;
		t.height = 45;
		t.width = 450;
		return t;
	};
	_proto.userProRead_i = function () {
		var t = new eui.CheckBox();
		this.userProRead = t;
		t.touchEnabled = true;
		t.x = 58;
		t.y = 10;
		return t;
	};
	_proto.userProLabel_i = function () {
		var t = new eui.Label();
		this.userProLabel = t;
		t.size = 20;
		t.text = "我已阅读并同意《用户协议》";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 11;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "1";
		t.x = 12;
		t.y = 6;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 448;
		t.x = 5;
		t.y = 55;
		t.elementsContent = [this._Rect3_i(),this.priPoliRead_i(),this.priPoliLabel_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.fillColor = 0xd1c3a3;
		t.height = 45;
		t.width = 450;
		return t;
	};
	_proto.priPoliRead_i = function () {
		var t = new eui.CheckBox();
		this.priPoliRead = t;
		t.touchEnabled = true;
		t.x = 58;
		t.y = 10;
		return t;
	};
	_proto.priPoliLabel_i = function () {
		var t = new eui.Label();
		this.priPoliLabel = t;
		t.size = 20;
		t.text = "我已阅读并同意《隐私政策》";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 11;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "2";
		t.x = 12;
		t.y = 6;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 449;
		t.x = 5;
		t.y = 105;
		t.elementsContent = [this._Rect4_i(),this.horverChecked_i(),this.horverLabel_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x575793;
		t.height = 60;
		t.width = 450;
		return t;
	};
	_proto.horverChecked_i = function () {
		var t = new eui.CheckBox();
		this.horverChecked = t;
		t.label = "";
		t.touchEnabled = true;
		t.x = 58;
		t.y = 18;
		return t;
	};
	_proto.horverLabel_i = function () {
		var t = new eui.Label();
		this.horverLabel = t;
		t.size = 20;
		t.text = "我已认真进行横竖检验并仔细阅读相\n关说明";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 11;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "3";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 448;
		t.x = 5;
		t.y = 170;
		t.elementsContent = [this._Rect5_i(),this.startBtn_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0xefd5d5;
		t.height = 60;
		t.width = 450;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.enabled = false;
		t.label = "开始使用";
		t.touchEnabled = true;
		t.x = 176.33;
		t.y = 6;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "4 GO！";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.showCRBtn_i = function () {
		var t = new eui.Image();
		this.showCRBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "copyright_png";
		t.width = 60;
		t.x = 277;
		t.y = 720;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "eint_logo_png";
		t.width = 112;
		t.x = 339;
		t.y = 720;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.label = "指引";
		t.touchEnabled = true;
		t.x = 32;
		t.y = 725;
		return t;
	};
	_proto.crPanel_i = function () {
		var t = new eyelen4.CCopyrightPanel_V2();
		this.crPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.userProPanel_i = function () {
		var t = new eyelen4.CUserProPanel();
		this.userProPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.helpPanel_i = function () {
		var t = new eyelen4.CHelpPanel();
		this.helpPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.priPoliPanel_i = function () {
		var t = new eyelen4.CPrivacyPolicyPanel();
		this.priPoliPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.horverCheckPanel_i = function () {
		var t = new eyelen4.CHorverCheckPanel();
		this.horverCheckPanel = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 100;
		return t;
	};
	return welcomeSceneSkin;
})(eui.Skin);
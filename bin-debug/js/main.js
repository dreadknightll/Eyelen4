

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/UI/containers/common/CUIContainer.ts");
__webpack_require__("./src/UI/containers/Eyelen/CEyelenPraContainer.ts");
__webpack_require__("./src/UI/containers/Eyelen/CEyelenProPraContainer.ts");
__webpack_require__("./src/UI/containers/Eyelen/IEyelenPraContainer.ts");
__webpack_require__("./src/UI/containers/common/CDispObj.ts");
__webpack_require__("./src/UI/containers/common/CDiv.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CAdjustTopDlg.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CPraMenu.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CSndConfMenu.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CViewTermsMenu.ts");
__webpack_require__("./src/components/UIComponents/common/CMenuBtn.ts");
__webpack_require__("./src/components/UIComponents/common/CRandomGraph.ts");
__webpack_require__("./src/components/UIComponents/common/CShutDownClock.ts");
__webpack_require__("./src/components/UIComponents/common/CShutdownScr.ts");
__webpack_require__("./src/components/notifications/CAlertPanel_v2.ts");
__webpack_require__("./src/components/notifications/CConfirmPanel.ts");
__webpack_require__("./src/UI/containers/common/IContainerPlugin.ts");
__webpack_require__("./src/UI/containers/common/IDispObj.ts");
__webpack_require__("./src/UI/containers/common/IDiv.ts");
__webpack_require__("./src/UI/containers/common/withEgret/CDispObj2EgretDOAdapter.ts");
__webpack_require__("./src/UI/containers/common/withEgret/CDiv2EgretDispOCAdapter.ts");
__webpack_require__("./src/UI/containers/common/withEgret/IDispObjWithEgret.ts");
__webpack_require__("./src/UI/containers/common/withEgret/IDivWithEgret.ts");
__webpack_require__("./src/UI/scenes/CMainMenu.ts");
__webpack_require__("./src/UI/scenes/CWelcomePage_Eyelen4.ts");
__webpack_require__("./src/UI/scenes/CWelcomeScene_Eyelen4.ts");
__webpack_require__("./src/UI/scenes/Eyelen/CCommonEyelenPraScene.ts");
__webpack_require__("./src/UI/scenes/Eyelen/CPraDiffProScene.ts");
__webpack_require__("./src/UI/scenes/Eyelen/CPraDifficultScene.ts");
__webpack_require__("./src/UI/scenes/Eyelen/CPraEasyScene.ts");
__webpack_require__("./src/UI/scenes/Eyelen/IEyelenPraScene.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CBottomAreaDifficult.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CBottomAreaEasy.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CMidAreaDifficult.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CMidAreaEasy.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CMidAreaEvent_Eyelen.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CProTopArea_Eyelen.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CTopAreaEvent_Eyelen.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CTopArea_Eyelen.ts");
__webpack_require__("./src/UI/scenes/Eyelen/partials/CViewDiffProHisScoreDlg.ts");
__webpack_require__("./src/UI/scenes/common/IScene.ts");
__webpack_require__("./src/UI/scenes/common/IUIContainer.ts");
__webpack_require__("./src/UI/scenes/common/IWithMsgHandling.ts");
__webpack_require__("./src/UI/scenes/other/LoadingUI_Eint_V3.ts");
__webpack_require__("./src/UI/scenes/other/LoadingUI_NoUI.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CCmpLenDlg.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CGridCmpLenDlg.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CLenInputerBase.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CLenInputerDifficult.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CLenInputerEasy.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CPraOKBtn.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CPrivacyPolicyPanel.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CRulerEasyBodyCell.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CTopSpace_Eyelen.ts");
__webpack_require__("./src/components/UIComponents/Eyelen/CUserProPanel.ts");
__webpack_require__("./src/components/UIComponents/common/CCopyrightPanel_V2.ts");
__webpack_require__("./src/components/UIComponents/common/CCpyTextPanel.ts");
__webpack_require__("./src/components/UIComponents/common/CFinalScoreDlg.ts");
__webpack_require__("./src/components/UIComponents/common/CFinalScoreDlgEvent.ts");
__webpack_require__("./src/components/UIComponents/common/CHelpPanel.ts");
__webpack_require__("./src/components/UIComponents/common/CHorverCheckPanel.ts");
__webpack_require__("./src/components/UIComponents/common/CProProgressView.ts");
__webpack_require__("./src/components/UIComponents/common/CProgressView.ts");
__webpack_require__("./src/components/UIComponents/common/CScoreFlagRect.ts");
__webpack_require__("./src/components/UIComponents/common/CScoreView.ts");
__webpack_require__("./src/components/UIComponents/common/CThumbUI.ts");
__webpack_require__("./src/components/UIComponents/common/CThumbUIEvent.ts");
__webpack_require__("./src/components/UIComponents/common/IScoreFlagRect.ts");
__webpack_require__("./src/components/calibrate/Basic_CaliPresenter.ts");
__webpack_require__("./src/components/calibrate/CCaliCloseBtn.ts");
__webpack_require__("./src/components/calibrate/CCaliDlg.ts");
__webpack_require__("./src/components/calibrate/CCaliPresenterAdapter.ts");
__webpack_require__("./src/components/calibrate/ICaliDlg.ts");
__webpack_require__("./src/components/calibrate/ICaliDlgPlugin.ts");
__webpack_require__("./src/components/calibrate/ICaliPresenter.ts");
__webpack_require__("./src/components/commonSimple/CCloseBtn.ts");
__webpack_require__("./src/components/finders/Eyelen/CEyelen4HTTPSResUrlFinder.ts");
__webpack_require__("./src/components/finders/Eyelen/CEyelen4ResNameFinder.ts");
__webpack_require__("./src/components/finders/Eyelen/IEyelen4ResNameFinder.ts");
__webpack_require__("./src/components/finders/common/IFinder.ts");
__webpack_require__("./src/components/lenCheckers/CLenCheckerDifficult.ts");
__webpack_require__("./src/components/lenCheckers/CLenCheckerEasy.ts");
__webpack_require__("./src/components/lenCheckers/IGridLenChecker.ts");
__webpack_require__("./src/components/lenCheckers/ILenChecker.ts");
__webpack_require__("./src/components/lenCheckers/ILenCheckerDifficult.ts");
__webpack_require__("./src/components/lenCheckers/ILenCheckerEasy.ts");
__webpack_require__("./src/components/lenCheckers/ILenCheckerWithCa.ts");
__webpack_require__("./src/components/lenCheckers/IPlainLenChecker.ts");
__webpack_require__("./src/components/notifications/CAlertPanelEvent.ts");
__webpack_require__("./src/components/notifications/CBalloonTip.ts");
__webpack_require__("./src/components/notifications/CBalloonTipEvent.ts");
__webpack_require__("./src/components/notifications/CConfirmPanelEvent.ts");
__webpack_require__("./src/components/notifications/IAlertDlg.ts");
__webpack_require__("./src/components/notifications/IAlertDlgPlugin.ts");
__webpack_require__("./src/components/notifications/IConfirmDlg.ts");
__webpack_require__("./src/components/notifications/IConfirmDlgPlugin.ts");
__webpack_require__("./src/components/notifications/INotiParent.ts");
__webpack_require__("./src/components/notifications/INotification.ts");
__webpack_require__("./src/components/pageJumperAdapters/Eyelen/CPage2EyelenPraContainerAdapter.ts");
__webpack_require__("./src/components/pageJumperAdapters/common/CPage2EuiAdapter.ts");
__webpack_require__("./src/components/praMachine/Eyelen/CEyelen3EPraMachineDifficult.ts");
__webpack_require__("./src/components/praMachine/Eyelen/CEyelen3EPraMachineEasy.ts");
__webpack_require__("./src/components/praMachine/Eyelen/IGridLenPraMachine.ts");
__webpack_require__("./src/components/praMachine/Eyelen/ILenPraMachine.ts");
__webpack_require__("./src/components/praMachine/Eyelen/IPlainLenPraMachine.ts");
__webpack_require__("./src/components/praMachine/common/IBindableWithPM.ts");
__webpack_require__("./src/components/praMachine/common/IPraMachine.ts");
__webpack_require__("./src/components/preloaders/CNoUIPreloaderUI.ts");
__webpack_require__("./src/components/preloaders/CPreloader.ts");
__webpack_require__("./src/components/preloaders/CPreloaderUI.ts");
__webpack_require__("./src/components/preloaders/IPreloader.ts");
__webpack_require__("./src/components/preloaders/IPreloaderUI.ts");
__webpack_require__("./src/components/presenters/Eyelen/CEyelen4PraDifficultPresenter.ts");
__webpack_require__("./src/components/presenters/Eyelen/CEyelen4PraEasyPresenter.ts");
__webpack_require__("./src/components/presenters/Eyelen/IEyelen4PraDifficultPresenter.ts");
__webpack_require__("./src/components/presenters/Eyelen/IEyelen4PraEasyPresenter.ts");
__webpack_require__("./src/components/presenters/common/IPraPresenter.ts");
__webpack_require__("./src/components/presenters/common/IPresenterWithCa.ts");
__webpack_require__("./src/components/presenters/common/IPresenterWithThumb.ts");
__webpack_require__("./src/components/renderFilters/Eyelen/CEyelen3ERenderFilter.ts");
__webpack_require__("./src/components/renderFilters/Eyelen/CNoChangeRenderFilterLen.ts");
__webpack_require__("./src/components/renderFilters/Eyelen/IEyelen3ERenderFilter.ts");
__webpack_require__("./src/components/resFetchers/IResFetcher.ts");
__webpack_require__("./src/components/resFetchers/withEgret/CEgretDefaultResLoader.ts");
__webpack_require__("./src/components/resFetchers/withEgret/CNetResLoaderWithEgret.ts");
__webpack_require__("./src/components/resFetchers/withEgret/IResWithEgret.ts");
__webpack_require__("./src/components/winModels/Eyelen/CEyelen4WinModel.ts");
__webpack_require__("./src/components/winModels/Eyelen/IEyelen4WinModel.ts");
__webpack_require__("./src/components/winModels/common/ITMBWinModel.ts");
__webpack_require__("./src/components/winModels/common/IWinModel.ts");
__webpack_require__("./src/inc/funcs/common/funcs_eint2.ts");
__webpack_require__("./src/inc/funcs/eyelen/funcs_Eyelen3E.ts");
__webpack_require__("./src/inc/funcs/eyelen/funcs_Eyelen3E_2.ts");
__webpack_require__("./src/inc/structs/common/withEgret/CHTTPSResStru.ts");
__webpack_require__("./src/inc/structs/eyelen/CLen.ts");
__webpack_require__("./src/inc/structs/eyelen/CLenPtsRects.ts");
// /src/Main.ts
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2020-present, 梁力.
//  All rights reserved.
//
//////////////////////////////////////////////////////////////////////////////////////
// 宜英（eint或gdeint）是本作者设立的个人品牌。
// 本程序采用北京白鹭公司的白鹭引擎为核心。
// 本程序调用了libGdeint库。libGdeint是本作者开发的共享库，供多套软件调用，命名空间主要是gdeint。
//////////////////////////////////////////////////////////////////////////////////////
/**************************************************
 *
 * Main类为程序入口类。
 *
**************************************************/
var CGlobals = /** @class */ (function () {
    function CGlobals() {
    }
    //需要将全局变量封装到类里，否则发布到一些平台（例如新版的AndroidNative）后会被解析成window.g_???，从而引起错误。
    CGlobals.S_WEB = 1;
    CGlobals.S_NATIVE_ANDROID = 2;
    CGlobals.S_NATIVE_IOS = 3;
    CGlobals.S_NATIVE_WP = 4;
    CGlobals.S_WECHAT = 5; // 发布成微信小游戏。另须移除项目里的resoure/pics目录。否则体积太大。
    CGlobals.S_BUILD_FOR = CGlobals.S_NATIVE_ANDROID;
    //Android、iOS的无图模式尚未通过调试，只能使用图片模式！！
    CGlobals.S_NO_IMG_MODE = false; // 无图模式开关。开启后练习材料不显示图片而是显示简单图形，以节省资源。通常用于微信版。无图模式下Pic从本地读取，且不使用img。
    CGlobals.g_isSndOn = true; // 声音是否开启。
    CGlobals.s_defaultTopSpaceHeight = 0; // 顶部空白条的高度。默认：0，iOS：0或25。横竖校准等调试时可考虑增加到300。
    CGlobals.g_topSpaceHeight = CGlobals.s_defaultTopSpaceHeight;
    CGlobals.g_scale = 1; // 有些元素需要根据实际分辨率确定大小、位置等信息，因此需要保存此变量。好处：舞台分辨率提高了也无重新设计exml等界面。
    CGlobals.g_resCache = {}; // 用于缓存远程获取的数据。目前主要用在微信版。
    //画面采用分层设计。不同类型的元素应显示在不同的图层上，以维持合理的前后顺序。
    CGlobals.g_sceneLayer = new egret.DisplayObjectContainer(); // 场景图层。
    CGlobals.g_dlgLayerContainer = new egret.DisplayObjectContainer(); // 对话框图层。
    CGlobals.g_notiLayerContainer = new egret.DisplayObjectContainer(); // 提示图层。
    CGlobals.g_level = 0; // 当前练习的难度。0：未知。1：简单。2：中等。3：困难。
    CGlobals.g2_tmpWaitingForRetFromNative = false;
    return CGlobals;
}());
window["CGlobals"] = CGlobals;
__reflect(CGlobals.prototype,"CGlobals",[]); 
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        //程序开始运行时会自动执行此构造函数。
        //但由于此时页面元素尚未准备好，页面元素相关的操作须转到createChildren里进行。
        var _this = _super.call(this) || this;
        // 初始化一些全局变量：
        CGlobals.g_scenePos = new gdeint.CPoint();
        CGlobals.g_pageJumper = new gdeint.CPageJumper();
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        CGlobals.g_shutdownTimer = new egret.Timer(1000, 0); // 这里用无限次。实际时间在listener里控制。
        CGlobals.g_shutdownTimer.addEventListener(egret.TimerEvent.TIMER, this.autoShutdown, this);
        //获取舞台宽度和高度：
        CGlobals.g_winWidth = this.stage.stageWidth;
        CGlobals.g_winHeight = this.stage.stageHeight;
        //计算适配屏幕应采用的图形缩放比例和起始显示坐标。新版白鹭引擎下可考虑去掉：
        var scaleX = CGlobals.g_winWidth / 480; // 界面设计使用尺寸：480*800。
        var scaleY = CGlobals.g_winHeight / 800;
        if (scaleX < scaleY) {
            CGlobals.g_scale = scaleX;
            CGlobals.g_scenePos.m_x = 0;
            CGlobals.g_scenePos.m_y = (CGlobals.g_winHeight - 800 * CGlobals.g_scale) / 2; //宽占满，高居中。
        }
        else {
            CGlobals.g_scale = scaleY;
            CGlobals.g_scenePos.m_x = (CGlobals.g_winWidth - 480 * CGlobals.g_scale) / 2; //宽居中，高占满。
            CGlobals.g_scenePos.m_y = 0;
        }
        //把三个核心自定义图层添加到舞台：
        this.addChild(CGlobals.g_sceneLayer);
        this.addChild(CGlobals.g_dlgLayerContainer);
        this.addChild(CGlobals.g_notiLayerContainer);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runProgram().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runProgram = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView1, loadingView2, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 14, , 15]);
                        loadingView1 = new LoadingUI_NoUI();
                        this.stage.addChild(loadingView1);
                        loadingView1.visible = true;
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        if (!(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT)) return [3 /*break*/, 5];
                        if (!CGlobals.S_NO_IMG_MODE) return [3 /*break*/, 3];
                        return [4 /*yield*/, RES.loadConfig("resource/picRes_NoImg.res.json", "resource/")];
                    case 2:
                        _a.sent();
                        CGlobals.g_resLoader = new CEgretDefaultResLoader();
                        return [3 /*break*/, 4];
                    case 3:
                        CGlobals.g_resLoader = new CNetResLoaderWithEgret();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!CGlobals.S_NO_IMG_MODE) return [3 /*break*/, 7];
                        return [4 /*yield*/, RES.loadConfig("resource/picRes_NoImg.res.json", "resource/")];
                    case 6:
                        _a.sent();
                        CGlobals.g_resLoader = new CEgretDefaultResLoader();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, RES.loadConfig("resource/picRes_WebGL.res.json", "resource/")];
                    case 8:
                        _a.sent();
                        CGlobals.g_resLoader = new CEgretDefaultResLoader();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, this.loadTheme()];
                    case 10:
                        _a.sent(); // Theme里定义了exml皮肤和typescript类的对应关系。
                        return [4 /*yield*/, RES.loadGroup("logo", 0, loadingView1)];
                    case 11:
                        _a.sent(); //logo资源组有宜英logo等资源。
                        loadingView1.visible = false;
                        this.stage.removeChild(loadingView1);
                        loadingView2 = new LoadingUI_Eint_V3();
                        loadingView2.setWinSize(CGlobals.g_winWidth, CGlobals.g_winHeight);
                        loadingView2.create();
                        this.stage.addChild(loadingView2);
                        loadingView2.visible = true;
                        return [4 /*yield*/, RES.loadGroup("eint", 0, loadingView2)];
                    case 12:
                        _a.sent(); //eint资源组有宜英通用的图片音乐等资源。
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView2)];
                    case 13:
                        _a.sent(); //preload资源组为系统默认资源组。未人工分类的资源都在这里。资源较多。
                        //            await loadingView2.touch2C(); //资源加载完以后“触摸屏幕继续”。使用Promise控制。
                        this.stage.removeChild(loadingView2); //加载界面用完必须尽快移除。否则安卓Native下很可能会黑屏。
                        return [3 /*break*/, 15];
                    case 14:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createScene = function () {
        CGlobals.g_welcomeScene = new eyelen4.CWelcomeScene_Eyelen4();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_welcomeScene);
        CGlobals.g_welcomeScene.scaleX = CGlobals.g_scale;
        CGlobals.g_welcomeScene.scaleY = CGlobals.g_scale; //scaleX、scaleY保持相等，确保横竖检验功能正常。
        CGlobals.g_welcomeScene.x = CGlobals.g_scenePos.m_x;
        CGlobals.g_welcomeScene.y = CGlobals.g_scenePos.m_y;
        CGlobals.g_shutdownScr = new gdeint.CShutdownScr();
        CGlobals.g_mainMenu = new eyelen4.CMainMenu();
        CGlobals.g_mainMenu.setTrueWidth(this.stage.stageWidth);
        CGlobals.g_mainMenu.setTrueHeight(this.stage.stageHeight);
        CGlobals.g_mainMenu.visible = false;
        CGlobals.g_mainMenu.width = this.stage.stageWidth;
        CGlobals.g_mainMenu.height = this.stage.stageHeight;
        CGlobals.g_sceneLayer.addChild(CGlobals.g_mainMenu);
        CGlobals.g_praEasyScene = new eyelen4.CPraEasyScene();
        CGlobals.g_praDifficultScene = new eyelen4.CPraDifficultScene();
        CGlobals.g_praDiffProScene = new eyelen4.CPraDiffProScene();
        if (CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praEasyScene.m_NoImgMode = true;
            CGlobals.g_praDifficultScene.m_NoImgMode = true;
            CGlobals.g_praDiffProScene.m_NoImgMode = true;
        }
        CGlobals.g_dlgLayerContainer.addChild(CGlobals.g_praEasyScene.getDlgLayer().toEgretDispObjContainer());
        CGlobals.g_notiLayerContainer.addChild(CGlobals.g_praEasyScene.getNotiLayer().toEgretDispObjContainer());
        CGlobals.g_dlgLayerContainer.addChild(CGlobals.g_praDifficultScene.getDlgLayer().toEgretDispObjContainer());
        CGlobals.g_notiLayerContainer.addChild(CGlobals.g_praDifficultScene.getNotiLayer().toEgretDispObjContainer());
        CGlobals.g_dlgLayerContainer.addChild(CGlobals.g_praDiffProScene.getDlgLayer().toEgretDispObjContainer());
        CGlobals.g_notiLayerContainer.addChild(CGlobals.g_praDiffProScene.getNotiLayer().toEgretDispObjContainer());
        CGlobals.g_praEasyContainer = new CEyelenPraContainer();
        if (CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praEasyContainer.m_NoImgMode = true;
        }
        CGlobals.g_praEasyContainer.setResLoader(CGlobals.g_resLoader); // 显示容器里包含一个资源加载器，随时加载资源。
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if (!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praEasyContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        else {
        }
        CGlobals.g_praEasyContainer.setPraScene(CGlobals.g_praEasyScene);
        var cad = new gdeint.CAlertPanel_v2();
        cad.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale); // 把主场景的位置和尺寸告诉警告框插件，让其可以自行计算警告框的位置和尺寸。
        CGlobals.g_praEasyContainer.setAlertDlg(cad); // 提示框的创建在Container类以外，这样可以灵活改用各种风格的提示框。
        var cp = new gdeint.CConfirmPanel();
        cp.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praEasyContainer.setConfirmDlg(cp);
        var pui = new eyelen4.CPreloaderUI();
        pui.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pui.hide();
        CGlobals.g_sceneLayer.addChild(pui);
        CGlobals.g_praEasyContainer.setPreloaderUI(pui);
        var cd = new eyelen4.CCaliDlg();
        cd.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        cd.hide();
        CGlobals.g_praEasyContainer.setCaliDlg(cd);
        var pm = new gdeint.CPraMenu();
        pm.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pm.hide();
        CGlobals.g_praEasyContainer.setPraMenu(pm);
        CGlobals.g_praDifficultContainer = new CEyelenPraContainer();
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT && CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praDifficultContainer.m_NoImgMode = true;
        }
        CGlobals.g_praDifficultContainer.setResLoader(CGlobals.g_resLoader);
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if (!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praDifficultContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        CGlobals.g_praDifficultContainer.setPraScene(CGlobals.g_praDifficultScene);
        var cad2 = new gdeint.CAlertPanel_v2();
        cad2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDifficultContainer.setAlertDlg(cad2);
        var cp2 = new gdeint.CConfirmPanel();
        cp2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDifficultContainer.setConfirmDlg(cp2);
        var pui2 = new eyelen4.CPreloaderUI();
        pui2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pui2.hide();
        CGlobals.g_sceneLayer.addChild(pui2);
        CGlobals.g_praDifficultContainer.setPreloaderUI(pui2);
        var cd2 = new eyelen4.CCaliDlg();
        cd2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        cd2.hide();
        CGlobals.g_praDifficultContainer.setCaliDlg(cd2);
        var pm2 = new gdeint.CPraMenu();
        pm2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pm2.hide();
        CGlobals.g_praDifficultContainer.setPraMenu(pm2);
        CGlobals.g_praDiffProContainer = new CEyelenProPraContainer();
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT && CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praDiffProContainer.m_NoImgMode = true;
        }
        CGlobals.g_praDiffProContainer.setResLoader(CGlobals.g_resLoader);
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if (!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praDiffProContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        CGlobals.g_praDiffProContainer.setPraScene(CGlobals.g_praDiffProScene);
        var cad2 = new gdeint.CAlertPanel_v2();
        cad2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDiffProContainer.setAlertDlg(cad2);
        var cp2 = new gdeint.CConfirmPanel();
        cp2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDiffProContainer.setConfirmDlg(cp2);
        var pui3 = new eyelen4.CPreloaderUI();
        pui3.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pui3.hide();
        CGlobals.g_sceneLayer.addChild(pui3);
        CGlobals.g_praDiffProContainer.setPreloaderUI(pui3);
        var cd2 = new eyelen4.CCaliDlg();
        cd2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        cd2.hide();
        CGlobals.g_praDiffProContainer.setCaliDlg(cd2);
        var pm2 = new gdeint.CPraMenu();
        pm2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pm2.hide();
        CGlobals.g_praDiffProContainer.setPraMenu(pm2);
        // 一个Page对应一个Scene。
        // 根据需处理事件的差异，部分页面要专门定义Page子类，Container页面有可能需要定义各自的Adapter转成Page，其余页面使用统一的Adapter由eui.Component转Page即可。
        var welcomePage = new CWelcomePage_Eyelen4();
        welcomePage.m_scene = CGlobals.g_welcomeScene;
        var mainMenuSceneAdapter = new CPage2EuiAdapter();
        mainMenuSceneAdapter.m_adaptee = CGlobals.g_mainMenu;
        var praEasyContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praEasyContainerAdapter.m_adaptee = CGlobals.g_praEasyContainer;
        var praDifficultContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDifficultContainerAdapter.m_adaptee = CGlobals.g_praDifficultContainer;
        var praDiffProContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDiffProContainerAdapter.m_adaptee = CGlobals.g_praDiffProContainer;
        var shutdownPageAdapter = new CPage2EuiAdapter();
        shutdownPageAdapter.m_adaptee = CGlobals.g_shutdownScr;
        // 把以上场景添加到页面跳转器，方便跳转。
        CGlobals.g_pageJumper.setPage("WelcomeScene", welcomePage);
        CGlobals.g_pageJumper.setPage("MainMenu", mainMenuSceneAdapter);
        CGlobals.g_pageJumper.setPage("PraEasyScene", praEasyContainerAdapter);
        CGlobals.g_pageJumper.setPage("PraDifficultScene", praDifficultContainerAdapter);
        CGlobals.g_pageJumper.setPage("PraDiffProScene", praDiffProContainerAdapter);
        CGlobals.g_pageJumper.setPage("ShutdownScr", shutdownPageAdapter);
        CGlobals.g_shutdownScr.visible = false;
        CGlobals.g_shutdownScr.width = this.stage.stageWidth;
        CGlobals.g_shutdownScr.height = this.stage.stageHeight;
        CGlobals.g_sceneLayer.addChild(CGlobals.g_shutdownScr);
        //        g_sceneLayer.addChild(CGlobals.g_console);
        CGlobals.g_praEasyScene.setWinWidth(CGlobals.g_winWidth);
        CGlobals.g_praEasyScene.setWinHeight(CGlobals.g_winHeight);
        CGlobals.g_praEasyScene.hide();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_praEasyScene);
        CGlobals.g_praDifficultScene.setWinWidth(CGlobals.g_winWidth);
        CGlobals.g_praDifficultScene.setWinHeight(CGlobals.g_winHeight);
        CGlobals.g_praDifficultScene.hide();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_praDifficultScene); // 把场景添加到场景显示层。
        CGlobals.g_praDiffProScene.setWinWidth(CGlobals.g_winWidth);
        CGlobals.g_praDiffProScene.setWinHeight(CGlobals.g_winHeight);
        CGlobals.g_praDiffProScene.hide();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_praDiffProScene); // 把场景添加到场景显示层。
        egret.ExternalInterface.addCallback("ret_fetchIsSndOn", function (msg) {
            console.log("ret_fetchIsSndOn,msg:" + msg);
            if ("1" == msg) {
                CGlobals.g_isSndOn = true;
            }
            else if ("0" == msg) {
                CGlobals.g_isSndOn = false;
            }
            //else do not change g_isSndOn.
        });
        egret.ExternalInterface.addCallback("ret_fetchDiffProHisScore", function (msg) {
            console.log("ret_fetchDiffProHisScore:" + msg);
            CGlobals.g2_tmpScoresJSONObj = JSON.parse(msg);
            console.log("g2_tmpScoresJSONObj set!");
            console.log("Size is " + CGlobals.g2_tmpScoresJSONObj.Scores.length);
        });
        egret.ExternalInterface.addCallback("ret_fetchRetryLens", function (msg) {
            CGlobals.g2_tmpRetryLensJSONStr = msg;
            console.log("RetryLens sent to ts:" + CGlobals.g2_tmpRetryLensJSONStr);
            CGlobals.g2_tmpWaitingForRetFromNative = false;
        });
        egret.ExternalInterface.addCallback("ret_fetchTopSpaceHeight", function (msg) {
            var tmpTopSpaceHeight = parseInt(msg);
            if (!isNaN(tmpTopSpaceHeight)) {
                CGlobals.g_topSpaceHeight = tmpTopSpaceHeight;
            }
            CGlobals.g_praEasyScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            CGlobals.g_praDiffProScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            CGlobals.g_praDifficultScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            if (CGlobals.g_praEasyScene.m_created) {
                CGlobals.g_praEasyScene.refreshScene();
            }
            if (CGlobals.g_praDiffProScene.m_created) {
                CGlobals.g_praDiffProScene.refreshScene();
            }
            if (CGlobals.g_praDifficultScene.m_created) {
                CGlobals.g_praDifficultScene.refreshScene();
            }
        });
    };
    Main.prototype.autoShutdown = function () {
        if (CGlobals.g_shutdownTimer.currentCount >= 1200) //1200秒，即20分钟。
         {
            CGlobals.g_pageJumper.gotoPage("ShutdownScr", null);
        }
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/UI/containers/Eyelen/CEyelenPraContainer.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/UI/containers/eyelen/CEyelenPraContainer.ts
* 尺眼通使用的显示容器。派生于CUIContainer。
* 注：不能与egret耦合，否则无法单元测试！
*
************************************************************/
var CEyelenPraContainer = /** @class */ (function (_super) {
    __extends(CEyelenPraContainer, _super);
    function CEyelenPraContainer() {
        var _this = _super.call(this) || this;
        _this.m_NoImgMode = false;
        _this.m_visibilityTempScene = false;
        _this.m_resNameFinder = new CEyelen4ResNameFinder();
        _this.m_renderFilter = new CEyelen3ERenderFilter();
        _this.m_renderFilter.setCaRat(1);
        return _this;
        //        this.m_praMenu = new gdeint.CPraMenu();
        //        this.m_praMenu._setParentContainer(this);
    }
    CEyelenPraContainer.prototype.setResNameFinder = function (rnf) {
        this.m_resNameFinder = rnf;
    };
    CEyelenPraContainer.prototype.getResNameFinder = function () {
        return this.m_resNameFinder;
    };
    CEyelenPraContainer.prototype.disableForNoti = function () {
        this._getPraScene().disableForNoti();
    };
    CEyelenPraContainer.prototype.resumeAfterNoti = function () {
        this._getPraScene().resumeAfterNoti();
    };
    CEyelenPraContainer.prototype.applyFunc = function (func, argArr) {
        if (null != func) {
            func.apply(this._getPraScene(), argArr);
        }
    };
    CEyelenPraContainer.prototype.setPraScene = function (s) {
        this.m_praScene = s;
        this.m_praScene._setParentContainer(this);
    };
    CEyelenPraContainer.prototype.setCaliDlg = function (d) {
        this.m_caliDlg = d;
        this.m_caliDlg._setParentContainer(this);
    };
    CEyelenPraContainer.prototype.setPraMenu = function (m) {
        this.m_praMenu = m;
        this.m_praMenu._setParentContainer(this);
    };
    CEyelenPraContainer.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CEyelenPraContainer.prototype.setPreloaderUI = function (pui) {
        this.m_preloaderUI = pui;
        this.m_preloaderUI._setParentContainer(this);
    };
    CEyelenPraContainer.prototype.setCaRat = function (cr) {
        this.m_renderFilter.setCaRat(cr);
    };
    CEyelenPraContainer.prototype.getCaRat = function () {
        return this.m_renderFilter._getCaRat();
    };
    CEyelenPraContainer.prototype.getDlgLayer = function () {
        return this._getPraScene().getDlgLayer();
    };
    CEyelenPraContainer.prototype.getNotiLayer = function () {
        return this._getPraScene().getNotiLayer();
    };
    CEyelenPraContainer.prototype._getPraScene = function () {
        return this.m_praScene;
    };
    CEyelenPraContainer.prototype._getCaliDlg = function () {
        return this.m_caliDlg;
    };
    CEyelenPraContainer.prototype._getPraMenu = function () {
        return this.m_praMenu;
    };
    CEyelenPraContainer.prototype._getRenderFilter = function () {
        return this.m_renderFilter;
    };
    CEyelenPraContainer.prototype._getPreloaderUI = function () {
        return this.m_preloaderUI;
    };
    CEyelenPraContainer.prototype.show = function () {
        if (this.m_visibilityTempScene) {
            this.m_praScene.show();
        }
        var parr = this.getAllPluginsThis();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (this.m_visibilityTempArrThis && this.m_visibilityTempArrThis[i]) {
                parr[i].show();
            }
        }
    };
    CEyelenPraContainer.prototype.hide = function () {
        this.m_praScene.hide();
        this.saveVisibleStates();
        var parr = this.getAllPluginsThis();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (null != parr[i]) {
                parr[i].hide();
            }
        }
    };
    CEyelenPraContainer.prototype.isVisible = function () {
        return true;
    };
    CEyelenPraContainer.prototype.showCaliDlg = function (listener) {
        var caliDlg = this._getCaliDlg();
        caliDlg._setCloseListener(listener);
        caliDlg.show();
    };
    CEyelenPraContainer.prototype.showPraMenu = function () {
        console.log("OK1!");
        var praMenu = this._getPraMenu();
        console.log("praMenu got!");
        praMenu.show();
    };
    /*
        开始一轮新的练习。
    */
    CEyelenPraContainer.prototype.startNewPra = function () {
        this._getPraScene().hide();
        //显示资源预加载界面并加载练习所需资源：
        var preloaderUI = this._getPreloaderUI();
        preloaderUI.show();
        preloaderUI.setCompleteListener(this.onPicXMLLoadComplete, this);
        var picXMLTask = new gdeint.CPreloadTask(); //创建任务对象。
        var resListPicXML = new Array();
        this.m_seledPicTagArr = gdeint.randomNums_ts(18, 4); //从18张图片材料中随机选4张进行练习。
        var i;
        for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
            resListPicXML[i] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
            resListPicXML[i].m_resName = this.m_resNameFinder.getResult();
            resListPicXML[i].m_givenSize = 500;
        }
        picXMLTask.m_resList = resListPicXML;
        if (this.m_NoImgMode) {
            picXMLTask.m_proportion = 101;
        }
        else {
            picXMLTask.m_proportion = 30;
        }
        picXMLTask.m_taskName = "picXMLs";
        preloaderUI.addTask(picXMLTask);
        preloaderUI.setNoTaskLeft(true); // 表示需加载的资源已全部添加到列表。
        preloaderUI.startPreload();
    };
    /*
     * 练习所需资源加载完成时触发。
     */
    CEyelenPraContainer.prototype.onPicXMLLoadComplete = function ( /*evt: CPIPreloaderEvent*/) {
        var tmpLens = new Array();
        var curTag;
        for (curTag = 0; curTag < this.m_seledPicTagArr.length; ++curTag) {
            var strResName;
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[curTag].toString());
            strResName = this.m_resNameFinder.getResult();
            var picJsn;
            picJsn = this.m_resLoader.getRes(strResName);
            console.log(picJsn);
            var len = picJsn.pics.pic.lens.len.length;
            var i;
            for (i = 0; i < len; ++i) {
                var tmpLen = new CLen();
                tmpLen.m_className = "CLen";
                tmpLen.m_x = parseFloat(picJsn.pics.pic.lens.len[i].x);
                tmpLen.m_y = parseFloat(picJsn.pics.pic.lens.len[i].y);
                tmpLen.m_length = parseFloat(picJsn.pics.pic.lens.len[i].length);
                var tmpHorStr;
                tmpHorStr = picJsn.pics.pic.lens.len[i].hor;
                if ("1" == tmpHorStr) {
                    tmpLen.m_isHor = true;
                }
                else {
                    tmpLen.m_isHor = false;
                }
                tmpLen.m_imgPath = picJsn.pics.pic.imgPath;
                this.m_resNameFinder.setInp(tmpLen.m_imgPath);
                tmpLen.m2_imgResName = this.m_resNameFinder.getResult();
                tmpLens.push(tmpLen);
            }
        }
        if (this.m_NoImgMode) {
            //使用随机图时，需避免长度显示在图外。
            var tmpLens2;
            tmpLens2 = new Array();
            var i;
            for (i = 0; i < tmpLens.length; ++i) {
                var fixedLen;
                fixedLen = tmpLens[i];
                if (fixedLen.m_isHor) {
                    while (fixedLen.m_x + fixedLen.m_length > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while (fixedLen.m_y > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                else {
                    while (fixedLen.m_x > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while (fixedLen.m_y + fixedLen.m_length > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                tmpLens2.push(fixedLen);
            }
            this.m_praScene.setLenArr(tmpLens2);
        }
        else {
            this.m_praScene.setLenArr(tmpLens);
        }
        if (this.m_NoImgMode) {
            this.onPicImgLoadComplete();
        }
        else {
            var preloaderUI = this.m_praScene._getParentContainer()._getPreloaderUI();
            preloaderUI.setNoTaskLeft(false);
            preloaderUI.setCompleteListener(this.onPicImgLoadComplete, this);
            var picImgTask = new gdeint.CPreloadTask();
            var resListPicImg = new Array();
            var i;
            for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
                var tmpImgFileName = "", tmpImgResName = "";
                resListPicImg[i] = new gdeint.ResStruct();
                var resName;
                this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
                resName = this.m_resNameFinder.getResult();
                var picJsn = this.m_resLoader.getRes(resName);
                tmpImgFileName = picJsn.pics.pic.imgPath;
                this.m_resNameFinder.setInp(tmpImgFileName);
                tmpImgResName = this.m_resNameFinder.getResult();
                resListPicImg[i].m_resName = tmpImgResName;
                resListPicImg[i].m_givenSize = 500;
            }
            picImgTask.m_resList = resListPicImg;
            picImgTask.m_proportion = 72;
            picImgTask.m_taskName = "picImgs";
            preloaderUI.addTask(picImgTask);
            preloaderUI.setNoTaskLeft(true);
            preloaderUI.startPreload();
        }
    };
    CEyelenPraContainer.prototype.onPicImgLoadComplete = function ( /*evt: CPIPreloaderEvent*/) {
        this.m_preloaderUI.setNextActListener(this.startRunPra, this); //this.startRunPra will be called when scrTouched or * seconds collapse.
    };
    CEyelenPraContainer.prototype.startRunPra = function () {
        this.m_preloaderUI.clearProgress();
        this._getPreloaderUI().hide();
        this.m_praScene.startNewPra();
        this._getPraScene().show();
    };
    CEyelenPraContainer.prototype.sendMsgToScene = function (msgType, msgObj) {
        var retObj = null;
        return this.m_praScene.sendMsg(msgType, msgObj);
    };
    CEyelenPraContainer.prototype._quitPra = function () {
    };
    CEyelenPraContainer.prototype.setQuitHandler = function (func) {
    };
    /*
        父类该方法不符合要求，需要覆盖。
    */
    CEyelenPraContainer.prototype.getAllPluginsThis = function () {
        var ret = new Array();
        ret[0] = (this._getAlertDlg());
        ret[1] = this._getConfirmDlg();
        ret[2] = this.m_caliDlg;
        ret[4] = this.m_praMenu;
        ret[3] = this.m_preloaderUI;
        return ret;
    };
    /*
        父类该方法不符合要求，需要覆盖。
    */
    CEyelenPraContainer.prototype.saveVisibleStates = function () {
        this.m_visibilityTempArrThis = new Array();
        this.m_visibilityTempScene = this.m_praScene.isVisible();
        var plugins = this.getAllPluginsThis();
        var i;
        for (i = 0; i < plugins.length; ++i) {
            if (null != plugins[i]) {
                this.m_visibilityTempArrThis[i] = plugins[i].isVisible();
            }
        }
    };
    CEyelenPraContainer.prototype.getVisibleStates = function () {
        return this.m_visibilityTempArrThis;
    };
    return CEyelenPraContainer;
}(CUIContainer));
window["CEyelenPraContainer"] = CEyelenPraContainer;
__reflect(CEyelenPraContainer.prototype,"CEyelenPraContainer",["IEyelenPraContainer","INotiParent"]); 


/***/ }),

/***/ "./src/UI/containers/Eyelen/CEyelenProPraContainer.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/UI/containers/eyelen/CEyelenProPraContainer.ts
* 尺眼通使用的显示容器。派生于CUIContainer。
* 注：不能与egret耦合，否则无法单元测试！
*
************************************************************/
var CEyelenProPraContainer = /** @class */ (function (_super) {
    __extends(CEyelenProPraContainer, _super);
    function CEyelenProPraContainer() {
        var _this = _super.call(this) || this;
        _this.m_NoImgMode = false;
        _this.m_visibilityTempScene = false;
        _this.m_resNameFinder = new CEyelen4ResNameFinder();
        _this.m_renderFilter = new CEyelen3ERenderFilter();
        _this.m_renderFilter.setCaRat(1);
        return _this;
        //        this.m_praMenu = new gdeint.CPraMenu();
        //        this.m_praMenu._setParentContainer(this);
    }
    CEyelenProPraContainer.prototype.setResNameFinder = function (rnf) {
        this.m_resNameFinder = rnf;
    };
    CEyelenProPraContainer.prototype.getResNameFinder = function () {
        return this.m_resNameFinder;
    };
    CEyelenProPraContainer.prototype.disableForNoti = function () {
        this._getPraScene().disableForNoti();
    };
    CEyelenProPraContainer.prototype.resumeAfterNoti = function () {
        this._getPraScene().resumeAfterNoti();
    };
    CEyelenProPraContainer.prototype.applyFunc = function (func, argArr) {
        if (null != func) {
            func.apply(this._getPraScene(), argArr);
        }
    };
    CEyelenProPraContainer.prototype.setPraScene = function (s) {
        this.m_praScene = s;
        this.m_praScene._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setCaliDlg = function (d) {
        this.m_caliDlg = d;
        this.m_caliDlg._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setPraMenu = function (m) {
        this.m_praMenu = m;
        this.m_praMenu._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CEyelenProPraContainer.prototype.setPreloaderUI = function (pui) {
        this.m_preloaderUI = pui;
        this.m_preloaderUI._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setCaRat = function (cr) {
        this.m_renderFilter.setCaRat(cr);
    };
    CEyelenProPraContainer.prototype.getCaRat = function () {
        return this.m_renderFilter._getCaRat();
    };
    CEyelenProPraContainer.prototype.getDlgLayer = function () {
        return this._getPraScene().getDlgLayer();
    };
    CEyelenProPraContainer.prototype.getNotiLayer = function () {
        return this._getPraScene().getNotiLayer();
    };
    CEyelenProPraContainer.prototype._getPraScene = function () {
        return this.m_praScene;
    };
    CEyelenProPraContainer.prototype._getCaliDlg = function () {
        return this.m_caliDlg;
    };
    CEyelenProPraContainer.prototype._getPraMenu = function () {
        return this.m_praMenu;
    };
    CEyelenProPraContainer.prototype._getRenderFilter = function () {
        return this.m_renderFilter;
    };
    CEyelenProPraContainer.prototype._getPreloaderUI = function () {
        return this.m_preloaderUI;
    };
    CEyelenProPraContainer.prototype.show = function () {
        if (this.m_visibilityTempScene) {
            this.m_praScene.show();
        }
        var parr = this.getAllPluginsThis();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (this.m_visibilityTempArrThis && this.m_visibilityTempArrThis[i]) {
                parr[i].show();
            }
        }
    };
    CEyelenProPraContainer.prototype.hide = function () {
        this.m_praScene.hide();
        this.saveVisibleStates();
        var parr = this.getAllPluginsThis();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (null != parr[i]) {
                parr[i].hide();
            }
        }
    };
    CEyelenProPraContainer.prototype.isVisible = function () {
        return true;
    };
    CEyelenProPraContainer.prototype.showCaliDlg = function (listener) {
        var caliDlg = this._getCaliDlg();
        caliDlg._setCloseListener(listener);
        caliDlg.show();
    };
    CEyelenProPraContainer.prototype.showPraMenu = function () {
        console.log("OK1!");
        var praMenu = this._getPraMenu();
        console.log("praMenu got!");
        praMenu.show();
    };
    CEyelenProPraContainer.prototype.fn2_fetchRetryLens = function (nextAct) {
        egret.ExternalInterface.call("fetchRetryLens", "");
        this.m2_fetchRetryLensNextAct = nextAct;
        var nextStepTimer = new egret.Timer(200, 1);
        nextStepTimer.addEventListener(egret.TimerEvent.TIMER, this.fetchRetryLens_step2, this);
        nextStepTimer.start();
    };
    CEyelenProPraContainer.prototype.fetchRetryLens_step2 = function () {
        this.m_retryLensArr = new Array();
        // 无错误长度或错误长度不足时，前三个长度使用以下默认长度：
        var len1 = new CLen();
        len1.m_className = "CLen";
        len1.m_x = 10;
        len1.m_y = 20;
        len1.m_isHor = true;
        len1.m_length = 300;
        len1.m_imgPath = "img_001.gif";
        len1.m2_imgResName = "img_001_gif";
        var len2 = new CLen();
        len2.m_className = "CLen";
        len2.m_x = 110;
        len2.m_y = 220;
        len2.m_isHor = false;
        len2.m_length = 240;
        len2.m_imgPath = "img_002.png";
        len2.m2_imgResName = "img_002_png";
        var len3 = new CLen();
        len3.m_className = "CLen";
        len3.m_x = 40;
        len3.m_y = 300;
        len3.m_isHor = true;
        len3.m_length = 80;
        len3.m_imgPath = "img_003.gif";
        len3.m2_imgResName = "img_003_gif";
        CGlobals.g2_tmpWaitingForRetFromNative = true;
        /* 返回结果调整后示例：
            {
                "RetryLens":
                [
                    {
                        "m_className":"CLen","m_x":10,"m_y":20,"m_isHor":true,"m_length":300,"m_imgPath":"img_001.gif","m2_imgResName":"img_001_gif"
                    },
                    {
                        "m_className":"CLen","m_x":110,"m_y":220,"m_isHor":false,"m_length":240,"m_imgPath":"img_002.png","m2_imgResName":"img_002_png"
                    }
                ]
            }
        */
        console.log("OK2");
        console.log("Parsing:" + CGlobals.g2_tmpRetryLensJSONStr);
        var lenArrObj = JSON.parse(CGlobals.g2_tmpRetryLensJSONStr);
        console.log("OK2.5");
        var tmpLen1Obj, tmpLen2Obj;
        if (lenArrObj.RetryLens.length > 0) {
            tmpLen1Obj = lenArrObj.RetryLens[0];
            console.log("OK3");
            len1.m_className = tmpLen1Obj.m_className;
            len1.m_x = tmpLen1Obj.m_x;
            len1.m_y = tmpLen1Obj.m_y;
            len1.m_isHor = tmpLen1Obj.m_isHor;
            len1.m_length = tmpLen1Obj.m_length;
            len1.m_imgPath = tmpLen1Obj.m_imgPath;
            len1.m2_imgResName = tmpLen1Obj.m2_imgResName;
            len3.m_className = tmpLen1Obj.m_className;
            len3.m_x = tmpLen1Obj.m_x;
            len3.m_y = tmpLen1Obj.m_y;
            len3.m_isHor = tmpLen1Obj.m_isHor;
            len3.m_length = tmpLen1Obj.m_length;
            len3.m_imgPath = tmpLen1Obj.m_imgPath;
            len3.m2_imgResName = tmpLen1Obj.m2_imgResName;
        }
        console.log("OK4");
        if (lenArrObj.RetryLens.length > 1) {
            tmpLen2Obj = lenArrObj.RetryLens[1];
            len2.m_className = tmpLen2Obj.m_className;
            len2.m_x = tmpLen2Obj.m_x;
            len2.m_y = tmpLen2Obj.m_y;
            len2.m_isHor = tmpLen2Obj.m_isHor;
            len2.m_length = tmpLen2Obj.m_length;
            len2.m_imgPath = tmpLen2Obj.m_imgPath;
            len2.m2_imgResName = tmpLen2Obj.m2_imgResName;
        }
        this.m_retryLensArr.push(len1);
        this.m_retryLensArr.push(len2);
        this.m_retryLensArr.push(len3);
        console.log("OK5");
        this.m2_fetchRetryLensNextAct.apply(this);
    };
    /*
        开始一轮新的练习。
    */
    CEyelenProPraContainer.prototype.startNewPra = function () {
        console.log("OK0");
        this.fn2_fetchRetryLens(this.startNewPra_step2);
    };
    CEyelenProPraContainer.prototype.startNewPra_step2 = function () {
        console.log("Successfully jumped to startNewPra_step2!");
        this._getPraScene().hide();
        //显示资源预加载界面并加载练习所需资源：
        var preloaderUI = this._getPreloaderUI();
        preloaderUI.show();
        preloaderUI.setCompleteListener(this.onPicJSONLoadComplete, this);
        var picJSONTask = new gdeint.CPreloadTask(); //创建任务对象。
        var resListPicJSON = new Array();
        console.log("OK0.3");
        var j;
        for (j = 0; j < this.m_retryLensArr.length; ++j) {
            resListPicJSON[j] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_retryLensArr[j].m2_imgResName);
            resListPicJSON[j].m_resName = this.m_resNameFinder.getResult();
            resListPicJSON[j].m_givenSize = 500;
        }
        this.m_seledPicTagArr = gdeint.randomNums_ts(18, 4); //从18张图片材料中随机选4张进行练习。
        var i;
        for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
            resListPicJSON[i + 3] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
            resListPicJSON[i + 3].m_resName = this.m_resNameFinder.getResult();
            resListPicJSON[i + 3].m_givenSize = 500;
        }
        picJSONTask.m_resList = resListPicJSON;
        if (this.m_NoImgMode) {
            picJSONTask.m_proportion = 101;
        }
        else {
            picJSONTask.m_proportion = 30;
        }
        picJSONTask.m_taskName = "picXMLs";
        preloaderUI.addTask(picJSONTask);
        preloaderUI.setNoTaskLeft(true); // 表示需加载的资源已全部添加到列表。
        preloaderUI.startPreload();
    };
    /*
     * 练习所需资源加载完成时触发。
     */
    CEyelenProPraContainer.prototype.onPicJSONLoadComplete = function ( /*evt: CPIPreloaderEvent*/) {
        var tmpLens = new Array();
        var curTag;
        for (curTag = 0; curTag < 3; ++curTag) {
            //                console.log("JSON str:"+this.m_retryLensArr[curTag].toJSONStr());
            //                tmpLens.push(CLen.fromJsonStr(this.m_retryLensArr[i].toJSONStr()));
            tmpLens.push(this.m_retryLensArr[curTag]);
        }
        for (curTag = 0; curTag < this.m_seledPicTagArr.length; ++curTag) {
            var strResName;
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[curTag].toString());
            strResName = this.m_resNameFinder.getResult();
            var picJsn;
            picJsn = this.m_resLoader.getRes(strResName);
            console.log(picJsn);
            var len = picJsn.pics.pic.lens.len.length;
            var i;
            for (i = 0; i < len; ++i) {
                var tmpLen = new CLen();
                tmpLen.m_className = "CLen";
                tmpLen.m_x = parseFloat(picJsn.pics.pic.lens.len[i].x);
                tmpLen.m_y = parseFloat(picJsn.pics.pic.lens.len[i].y);
                tmpLen.m_length = parseFloat(picJsn.pics.pic.lens.len[i].length);
                var tmpHorStr;
                tmpHorStr = picJsn.pics.pic.lens.len[i].hor;
                if ("1" == tmpHorStr) {
                    tmpLen.m_isHor = true;
                }
                else {
                    tmpLen.m_isHor = false;
                }
                tmpLen.m_imgPath = picJsn.pics.pic.imgPath;
                this.m_resNameFinder.setInp(tmpLen.m_imgPath);
                tmpLen.m2_imgResName = this.m_resNameFinder.getResult();
                tmpLens.push(tmpLen);
            }
        }
        if (this.m_NoImgMode) {
            //使用随机图时，需避免长度显示在图外。
            var tmpLens2;
            tmpLens2 = new Array();
            var i;
            for (i = 0; i < tmpLens.length; ++i) {
                var fixedLen;
                fixedLen = tmpLens[i];
                if (fixedLen.m_isHor) {
                    while (fixedLen.m_x + fixedLen.m_length > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while (fixedLen.m_y > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                else {
                    while (fixedLen.m_x > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while (fixedLen.m_y + fixedLen.m_length > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                tmpLens2.push(fixedLen);
            }
            this.m_praScene.setLenArr(tmpLens2);
        }
        else {
            this.m_praScene.setLenArr(tmpLens);
        }
        if (this.m_NoImgMode) {
            this.onPicImgLoadComplete();
        }
        else {
            var preloaderUI = this.m_praScene._getParentContainer()._getPreloaderUI();
            preloaderUI.setNoTaskLeft(false);
            preloaderUI.setCompleteListener(this.onPicImgLoadComplete, this);
            var picImgTask = new gdeint.CPreloadTask();
            var resListPicImg = new Array();
            var i;
            for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
                var tmpImgFileName = "", tmpImgResName = "";
                resListPicImg[i] = new gdeint.ResStruct();
                var resName;
                this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
                resName = this.m_resNameFinder.getResult();
                var picJsn = this.m_resLoader.getRes(resName);
                tmpImgFileName = picJsn.pics.pic.imgPath;
                this.m_resNameFinder.setInp(tmpImgFileName);
                tmpImgResName = this.m_resNameFinder.getResult();
                resListPicImg[i].m_resName = tmpImgResName;
                resListPicImg[i].m_givenSize = 500;
            }
            picImgTask.m_resList = resListPicImg;
            picImgTask.m_proportion = 72;
            picImgTask.m_taskName = "picImgs";
            preloaderUI.addTask(picImgTask);
            preloaderUI.setNoTaskLeft(true);
            preloaderUI.startPreload();
        }
    };
    CEyelenProPraContainer.prototype.onPicImgLoadComplete = function ( /*evt: CPIPreloaderEvent*/) {
        this.m_preloaderUI.setNextActListener(this.startRunPra, this); //this.startRunPra will be called when scrTouched or * seconds collapse.
    };
    CEyelenProPraContainer.prototype.startRunPra = function () {
        this.m_preloaderUI.clearProgress();
        this._getPreloaderUI().hide();
        console.log("OK1");
        this.m_praScene.startNewPra();
        this._getPraScene().show();
    };
    CEyelenProPraContainer.prototype.sendMsgToScene = function (msgType, msgObj) {
        var retObj = null;
        return this.m_praScene.sendMsg(msgType, msgObj);
    };
    CEyelenProPraContainer.prototype._quitPra = function () {
    };
    CEyelenProPraContainer.prototype.setQuitHandler = function (func) {
    };
    /*
        父类该方法不符合要求，需要覆盖。
    */
    CEyelenProPraContainer.prototype.getAllPluginsThis = function () {
        var ret = new Array();
        ret[0] = (this._getAlertDlg());
        ret[1] = this._getConfirmDlg();
        ret[2] = this.m_caliDlg;
        ret[4] = this.m_praMenu;
        ret[3] = this.m_preloaderUI;
        return ret;
    };
    /*
        父类该方法不符合要求，需要覆盖。
    */
    CEyelenProPraContainer.prototype.saveVisibleStates = function () {
        this.m_visibilityTempArrThis = new Array();
        this.m_visibilityTempScene = this.m_praScene.isVisible();
        var plugins = this.getAllPluginsThis();
        var i;
        for (i = 0; i < plugins.length; ++i) {
            if (null != plugins[i]) {
                this.m_visibilityTempArrThis[i] = plugins[i].isVisible();
            }
        }
    };
    CEyelenProPraContainer.prototype.getVisibleStates = function () {
        return this.m_visibilityTempArrThis;
    };
    return CEyelenProPraContainer;
}(CUIContainer));
window["CEyelenProPraContainer"] = CEyelenProPraContainer;
__reflect(CEyelenProPraContainer.prototype,"CEyelenProPraContainer",["IEyelenPraContainer","INotiParent"]); 


/***/ }),

/***/ "./src/UI/containers/Eyelen/IEyelenPraContainer.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/containers/common/CDispObj.ts":
/***/ (function(module, exports) {

var CDispObj = /** @class */ (function () {
    function CDispObj() {
        this.m_visible = true;
    }
    CDispObj.prototype.show = function () {
        this.m_visible = true;
    };
    CDispObj.prototype.hide = function () {
        this.m_visible = false;
    };
    CDispObj.prototype.visible = function () {
        return this.m_visible;
    };
    return CDispObj;
}());
window["CDispObj"] = CDispObj;
__reflect(CDispObj.prototype,"CDispObj",["IDispObj"]); 
;


/***/ }),

/***/ "./src/UI/containers/common/CDiv.ts":
/***/ (function(module, exports) {

var CDiv = /** @class */ (function () {
    function CDiv() {
    }
    CDiv.prototype.show = function () {
    };
    CDiv.prototype.hide = function () {
    };
    CDiv.prototype.addChild = function (IDispObj) {
    };
    return CDiv;
}());
window["CDiv"] = CDiv;
__reflect(CDiv.prototype,"CDiv",["IDiv"]); 


/***/ }),

/***/ "./src/UI/containers/common/CUIContainer.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/UI/containers/common/CUIContainer.ts
* 本类实现了显示容器。用于管理练习场景以及提示框、功能对话框等插件的显示。
* 使用容器显示比起不使用能让测试更充分，代码重用更方便。
* 不转移到 libGdeint。因为本类要编写派生类才适合使用。
*
************************************************************/
var CUIContainer = /** @class */ (function () {
    function CUIContainer() {
    }
    CUIContainer.prototype.setResLoader = function (r) {
        this.m_resLoader = r;
    };
    CUIContainer.prototype.setAlertDlg = function (ad) {
        this.m_alertDlg = ad;
        this.m_alertDlg._setParentContainer(this);
        this.m_alertDlg.setParent(this);
    };
    CUIContainer.prototype.setConfirmDlg = function (d) {
        this.m_confirmDlg = d;
        this.m_confirmDlg._setParentContainer(this);
        this.m_confirmDlg.setParent(this);
    };
    CUIContainer.prototype.setPreloaderUI = function (pui) {
        this.m_preloaderUI = pui;
        this.m_preloaderUI._setParentContainer(this);
    };
    CUIContainer.prototype._getResLoader = function () {
        return this.m_resLoader;
    };
    CUIContainer.prototype._getAlertDlg = function () {
        return this.m_alertDlg;
    };
    CUIContainer.prototype._getConfirmDlg = function () {
        return this.m_confirmDlg;
    };
    CUIContainer.prototype._getPreloaderUI = function () {
        return this.m_preloaderUI;
    };
    /*
        以数组形式返回已注入容器的插件（不包括练习场景）。
    */
    CUIContainer.prototype.getAllPlugins = function () {
        var ret = new Array();
        ret[0] = this.m_alertDlg;
        ret[1] = this.m_confirmDlg;
        ret[2] = this.m_preloaderUI;
        return ret;
    };
    /*
        把容器元素visible状态入栈以便还原。
    */
    CUIContainer.prototype.saveVisibleStates = function () {
        this.m_visibilityTempArr = new Array();
        var plugins = this.getAllPlugins();
        var i;
        for (i = 0; i < plugins.length; ++i) {
            this.m_visibilityTempArr[i] = plugins[i].isVisible();
        }
    };
    /*
        获取保存在栈顶的visible状态。
    */
    CUIContainer.prototype.getVisibleStates = function () {
        return this.m_visibilityTempArr;
    };
    /*
        获取功能对话框显示层。本类此方法返回null，功能实现在子类进行。
    */
    CUIContainer.prototype.getDlgLayer = function () {
        return null;
    };
    CUIContainer.prototype.getNotiLayer = function () {
        return null;
    };
    /*
        显示各种提示框时需要调用以下方法把其它元素锁定和变暗。
        功能实现在子类进行。
    */
    CUIContainer.prototype.disableForNoti = function () {
    };
    /*
        提示框关闭后需要调用以下方法恢复其它元素的状态。
    */
    CUIContainer.prototype.resumeAfterNoti = function () {
    };
    CUIContainer.prototype.showAlert = function (content, listener) {
        var visibleStates = this.getVisibleStates();
        var alertDlg = this._getAlertDlg();
        if (null != listener) {
            alertDlg.setCloseListener(listener);
        }
        alertDlg.setContent(content);
        alertDlg.showDlg();
    };
    CUIContainer.prototype.showConfirm = function (content, listener) {
        var pc = this._getConfirmDlg();
        pc.setCloseListener(listener);
        pc._setContent(content);
        this._getConfirmDlg().showDlg();
    };
    /*
        设置容器的横竖校准系数。横竖校准后把系数填入容器即可，无需在场景和提示框等多处重复填入。
    */
    CUIContainer.prototype.setCaRat = function (cr) {
    };
    CUIContainer.prototype.getCaRat = function () {
        return 1;
    };
    CUIContainer.prototype.isVisible = function () {
        return true;
    };
    /*
        显示容器。
    */
    CUIContainer.prototype.show = function () {
        var parr = this.getAllPlugins();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (this.m_visibilityTempArr && this.m_visibilityTempArr[i]) {
                parr[i].show();
            }
            else {
                parr[i].hide();
            }
        }
    };
    /*
        隐藏容器。
    */
    CUIContainer.prototype.hide = function () {
        this.saveVisibleStates();
        var parr = this.getAllPlugins();
        var i;
        for (i = 0; i < parr.length; ++i) {
            parr[i].hide();
        }
    };
    /*
        让容器执行命令。
    */
    CUIContainer.prototype.applyFunc = function (func, argArr) {
    };
    return CUIContainer;
}());
window["CUIContainer"] = CUIContainer;
__reflect(CUIContainer.prototype,"CUIContainer",["IUIContainer"]); 


/***/ }),

/***/ "./src/UI/containers/common/IContainerPlugin.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/containers/common/IDispObj.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/containers/common/IDiv.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/containers/common/withEgret/CDispObj2EgretDOAdapter.ts":
/***/ (function(module, exports) {

var CDispObj2EgretDOAdapter = /** @class */ (function (_super) {
    __extends(CDispObj2EgretDOAdapter, _super);
    function CDispObj2EgretDOAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CDispObj2EgretDOAdapter.from = function (o) {
        var ret = new CDispObj2EgretDOAdapter();
        ret.m_adaptee = o;
        return ret;
    };
    return CDispObj2EgretDOAdapter;
}(CDispObj));
window["CDispObj2EgretDOAdapter"] = CDispObj2EgretDOAdapter;
__reflect(CDispObj2EgretDOAdapter.prototype,"CDispObj2EgretDOAdapter",[]); 
;


/***/ }),

/***/ "./src/UI/containers/common/withEgret/CDiv2EgretDispOCAdapter.ts":
/***/ (function(module, exports) {

var CDiv2EgretDispOCAdapter = /** @class */ (function () {
    function CDiv2EgretDispOCAdapter() {
    }
    CDiv2EgretDispOCAdapter.from = function (edoc) {
        var ret = new CDiv2EgretDispOCAdapter();
        ret.m_adaptee = edoc;
        return ret;
    };
    CDiv2EgretDispOCAdapter.prototype.addChild = function (c) {
        this.m_adaptee.addChild(c.m_adaptee);
    };
    CDiv2EgretDispOCAdapter.prototype.show = function () {
        this.m_adaptee.visible = true;
    };
    CDiv2EgretDispOCAdapter.prototype.hide = function () {
        this.m_adaptee.visible = false;
    };
    CDiv2EgretDispOCAdapter.prototype.toEgretDispObjContainer = function () {
        return this.m_adaptee;
    };
    return CDiv2EgretDispOCAdapter;
}());
window["CDiv2EgretDispOCAdapter"] = CDiv2EgretDispOCAdapter;
__reflect(CDiv2EgretDispOCAdapter.prototype,"CDiv2EgretDispOCAdapter",["IDivWithEgret"]); 


/***/ }),

/***/ "./src/UI/containers/common/withEgret/IDispObjWithEgret.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/containers/common/withEgret/IDivWithEgret.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/scenes/CMainMenu.ts":
/***/ (function(module, exports) {

/**************************************************
 * /src/UI/scenes/CMainMenu.ts
 *
 * 主菜单画面。
 *
**************************************************/
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CMainMenu = /** @class */ (function (_super) {
        __extends(CMainMenu, _super);
        function CMainMenu() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 480;
            _this.m_trueHeight = 744;
            _this.m2_cc = false;
            _this.m_startTimer = new egret.Timer(5000, 1); // 5秒内不选择则自动进入困难练习。
            return _this;
            //                        this.m_startTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.startDifficult,this);
        }
        CMainMenu.prototype.childrenCreated = function () {
            if (CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_ANDROID) {
                this.aao.visible = false;
                this.startDiffProBtn.visible = true;
                this.diffProHelpBtn.visible = true;
                this.viewDiffProHisScoreBtn.visible = true;
            }
            else {
                this.aao.visible = true;
                this.startDiffProBtn.visible = false;
                this.diffProHelpBtn.visible = false;
                this.viewDiffProHisScoreBtn.visible = false;
            }
            //                        this.startEasyBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startEasy,this);
            this.startEasyBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startEasy, this);
            //                        this.startDifficultBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startDifficult,this);
            this.startDifficultBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startDifficult, this);
            this.startDiffProBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startDiffPro, this);
            this.viewDiffProHisScoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewDiffProHisScoreBtn, this);
            //                        this.printMisRecBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onPrintMisRecBtn , this);
            this.diffProHelpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDiffProHelpBtn, this);
            this.m2_cc = true;
            this.rearrangeUI();
        };
        //定义了一些函数使内容居中。
        CMainMenu.prototype.setTrueWidth = function (w) {
            this.m_trueWidth = w;
            if (this.m2_cc) {
                this.rearrangeUI();
            }
        };
        CMainMenu.prototype.setTrueHeight = function (h) {
            this.m_trueHeight = h;
            if (this.m2_cc) {
                this.rearrangeUI();
            }
        };
        CMainMenu.prototype.rearrangeUI = function () {
            var scale, scale1, scale2;
            var leftGap = 0;
            scale1 = this.m_trueWidth / 400;
            scale2 = this.m_trueHeight / 744;
            if (scale1 < scale2) {
                scale = scale1;
                leftGap = 0;
            }
            else {
                scale = scale2;
                leftGap = (this.m_trueWidth / scale - 400) / 2;
            }
            this.menuGrp.left = 50.0 / 400 * this.m_trueWidth + leftGap;
            this.menuGrp.scaleX = scale;
            this.menuGrp.scaleY = scale;
        };
        CMainMenu.prototype.run = function () {
            this.m_startTimer.start();
            CGlobals.g_shutdownTimer.start();
        };
        /*
        * 开始简单练习。
        */
        CMainMenu.prototype.startEasy = function () {
            CGlobals.g_level = 1;
            CGlobals.g_praEasyContainer.startNewPra(); // 切换画面前先启动练习。
            //        先显示翻页动画 （未完成）
            CGlobals.g_praEasyContainer.saveVisibleStates();
            CGlobals.g_pageJumper.gotoPage("PraEasyScene", null); // 使用页面跳转器换页。非常方便。
            this.m_startTimer.stop();
        };
        CMainMenu.prototype.startNormal = function () {
            //目前没有中等难度。
            CGlobals.g_level = 2;
        };
        /*
        * 开始困难传统模式练习。
        */
        CMainMenu.prototype.startDifficult = function () {
            CGlobals.g_level = 3;
            CGlobals.g_praDifficultContainer.startNewPra();
            //        先显示翻页动画 （未完成）
            CGlobals.g_praDifficultContainer.saveVisibleStates();
            CGlobals.g_pageJumper.gotoPage("PraDifficultScene", null);
            this.m_startTimer.stop();
        };
        /*
        * 开始困难专业模式练习。
        */
        CMainMenu.prototype.startDiffPro = function () {
            CGlobals.g_level = 2; // 循序渐进练习顺序是简单、困难（专业）、困难（传统）。
            CGlobals.g_praDiffProContainer.startNewPra();
            //        先显示翻页动画 （未完成）
            CGlobals.g_praDiffProContainer.saveVisibleStates();
            CGlobals.g_pageJumper.gotoPage("PraDiffProScene", null);
            this.m_startTimer.stop();
        };
        CMainMenu.prototype.onViewDiffProHisScoreBtn = function () {
            egret.ExternalInterface.call("fetchDiffProHisScore", "");
            this.viewDiffProHisScoreDlg.show();
        };
        CMainMenu.prototype.onDiffProHelpBtn = function () {
            console.log("Showing diffProHelp!");
            this.alertDlg.setContent("专业模式：对错题有针对性，大幅度提高训练效果。");
            this.alertDlg.showDlg();
            //                        this.alertDlg.show();
        };
        CMainMenu.prototype.onPrintMisRecBtn = function () {
            egret.ExternalInterface.call("printMisRec", "");
        };
        /*
        * 回到欢迎屏幕。
        */
        CMainMenu.prototype.goBack = function () {
        };
        return CMainMenu;
    }(eui.Panel));
    eyelen4.CMainMenu = CMainMenu;
    __reflect(CMainMenu.prototype,"eyelen4.CMainMenu",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/CWelcomePage_Eyelen4.ts":
/***/ (function(module, exports) {

/****************************************************
 * /src/UI/scenes/CWelcomePage_Eyelen4.ts
 *
 * 用于实现切换页面时启用/禁止开始练习按钮等操作。
 *
 ****************************************************/
var CWelcomePage_Eyelen4 = /** @class */ (function () {
    function CWelcomePage_Eyelen4() {
        this.m_commonPage = new gdeint.CPage();
    }
    CWelcomePage_Eyelen4.prototype.show = function () {
        this.m_commonPage.show();
        this.m_scene.visible = true;
    };
    /*
    *   离开此页面或其它隐藏操作时触发。
    */
    CWelcomePage_Eyelen4.prototype.hide = function () {
        this.m_commonPage.hide();
        this.m_scene.visible = false;
    };
    CWelcomePage_Eyelen4.prototype.isVisible = function () {
        return this.m_scene.visible;
    };
    /*
    *   切换到此页面时触发。
    */
    CWelcomePage_Eyelen4.prototype.showOnFront = function () {
        this.m_commonPage.showOnFront();
        this.show();
        this.onShownOnFront();
    };
    CWelcomePage_Eyelen4.prototype.onShownOnFront = function () {
        this.m_commonPage.onShownOnFront();
        this.m_scene.switch2StartBtn();
    };
    return CWelcomePage_Eyelen4;
}());
window["CWelcomePage_Eyelen4"] = CWelcomePage_Eyelen4;
__reflect(CWelcomePage_Eyelen4.prototype,"CWelcomePage_Eyelen4",["gdeint.IPage"]); 


/***/ }),

/***/ "./src/UI/scenes/CWelcomeScene_Eyelen4.ts":
/***/ (function(module, exports) {

/****************************************************
 * /src/UI/scenes/CWelcomeScene_Eyelen4.ts
 *
 * 欢迎场景界面。
 *
 ****************************************************/
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CWelcomeScene_Eyelen4 = /** @class */ (function (_super) {
        __extends(CWelcomeScene_Eyelen4, _super);
        function CWelcomeScene_Eyelen4() {
            var _this = _super.call(this) || this;
            _this.m_cc = false; //Children created boolean.
            _this.m_cc = false;
            return _this;
        }
        CWelcomeScene_Eyelen4.prototype.switch2StartBtn = function () {
            //旧版本留下的方法。暂未使用。
            if (this.m_cc) {
                this.startBtn.visible = true;
            }
        };
        CWelcomeScene_Eyelen4.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(18);
            this.shutdownClock.setTimer(CGlobals.g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
            //填写超链接文本流：
            //1、用户协议：
            this.userProLabel.text = "";
            this.userProLabel.textFlow = new Array({
                text: "我已阅读并同意", style: {}
            }, {
                text: "《用户协议》", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: " ", style: {} /*必须留有空格，否则发布 Native 版会出现显示问题。*/
            });
            this.userProLabel.touchEnabled = true;
            this.userProLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.userProPanel.visible = true;
            }, this);
            //2、隐私政策：
            this.priPoliLabel.text = "";
            this.priPoliLabel.textFlow = new Array({
                text: "我已阅读并同意", style: {}
            }, {
                text: "《隐私政策》", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: " ", style: {}
            });
            this.priPoliLabel.touchEnabled = true;
            this.priPoliLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.priPoliPanel.visible = true;
            }, this);
            //3、横竖校准：
            this.horverLabel.textFlow = new Array({
                text: "我已认真进行", style: {}
            }, {
                text: "横竖检验", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: "并仔细阅读相\n关说明", style: {}
            });
            this.horverLabel.touchEnabled = true;
            this.horverLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.horverCheckPanel.visible = true;
            }, this);
            this.showCRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowCR, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartPra, this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
            this.userProRead.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.priPoliRead.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.horverChecked.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            if (CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_ANDROID) {
                egret.ExternalInterface.call("fetchTopSpaceHeight", "");
            }
            this.m_cc = true;
        };
        CWelcomeScene_Eyelen4.prototype.onReadyCBCheck = function () {
            if (this.userProRead.selected && this.priPoliRead.selected && this.horverChecked.selected) {
                //当且仅当三个复选框都选上开始练习按钮才会启用。
                this.startBtn.enabled = true;
            }
            else {
                this.startBtn.enabled = false;
            }
        };
        CWelcomeScene_Eyelen4.prototype.onShowCR = function () {
            // 显示著作权声明：
            this.crPanel.visible = true;
        };
        CWelcomeScene_Eyelen4.prototype.onHelp = function () {
            // 显示指引：
            this.helpPanel.visible = true;
        };
        CWelcomeScene_Eyelen4.prototype.onStartPra = function (evt) {
            //        先显示翻页动画 （未完成）
            this.startBtn.visible = false;
            CGlobals.g_pageJumper.gotoPage("MainMenu", null);
            CGlobals.g_mainMenu.run();
        };
        CWelcomeScene_Eyelen4.prototype.onClockTap = function () {
            CGlobals.g_praEasyContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        return CWelcomeScene_Eyelen4;
    }(eui.Component));
    eyelen4.CWelcomeScene_Eyelen4 = CWelcomeScene_Eyelen4;
    __reflect(CWelcomeScene_Eyelen4.prototype,"eyelen4.CWelcomeScene_Eyelen4",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/CCommonEyelenPraScene.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/UI/scenes/Eyelen/CCommonEyelenPraScene.ts
 * 通用练习场景。简单难度练习场景和困难难度练习场景都从本类派生。
 *
 */
var CCommonEyelenPraScene = /** @class */ (function (_super) {
    __extends(CCommonEyelenPraScene, _super);
    function CCommonEyelenPraScene() {
        var _this = _super.call(this) || this;
        _this.m_NoImgMode = false;
        _this.m_created = false; //场景是否已完成初始创建。
        _this.m_scrMask = new egret.Rectangle();
        _this.m_dlgLayer = new egret.DisplayObjectContainer();
        _this.m_notiLayer = new egret.DisplayObjectContainer();
        _this.m_notiLayerBg = new egret.Shape();
        _this.recoverNotiLayerBg();
        _this.m_notiLayer.visible = false;
        _this.m_notiLayer.addChild(_this.m_notiLayerBg);
        return _this;
    }
    /*
     * 正常情况下很多函数应当调用子类的同名函数。若本类的本函数被调用，则表明子类实现有误。
     */
    /*
     * 开始一轮新的练习。
     */
    CCommonEyelenPraScene.prototype.startNewPra = function () {
        window.alert("startNewPra run terribly!");
    };
    CCommonEyelenPraScene.prototype.setWinWidth = function (w) {
        this.m_winWidth = w;
    };
    CCommonEyelenPraScene.prototype.setWinHeight = function (h) {
        this.m_winHeight = h;
    };
    /*
     * 第一轮练习资源加载完成后创建场景。
     */
    CCommonEyelenPraScene.prototype.createScene = function () {
        this.m_scrMask.x = 0;
        this.m_scrMask.y = 0;
        this.m_scrMask.width = this.m_winWidth;
        this.m_scrMask.height = this.m_winHeight;
        this.mask = this.m_scrMask;
        this.m_created = true;
    };
    CCommonEyelenPraScene.prototype.getPM = function () {
        return null;
    };
    CCommonEyelenPraScene.prototype.setLenArr = function (la) {
        window.alert("Len arr set terribly!!Length:" + la.length);
    };
    CCommonEyelenPraScene.prototype.getCurPicTag = function () {
        return -1;
    };
    CCommonEyelenPraScene.prototype.show = function () {
        this.visible = true;
    };
    CCommonEyelenPraScene.prototype.hide = function () {
        this.visible = false;
    };
    CCommonEyelenPraScene.prototype.isVisible = function () {
        return this.visible;
    };
    CCommonEyelenPraScene.prototype.disableScene = function () {
        this.m_notiLayer.visible = true;
        this.enabled = false;
    };
    CCommonEyelenPraScene.prototype.enableScene = function () {
        this.m_notiLayer.visible = false;
        this.enabled = true;
    };
    CCommonEyelenPraScene.prototype._setParentContainer = function (c) {
        this.m_parentContainer = c;
    };
    CCommonEyelenPraScene.prototype._getParentContainer = function () {
        return this.m_parentContainer;
    };
    CCommonEyelenPraScene.prototype.disableForNoti = function () {
        this.disableScene();
    };
    CCommonEyelenPraScene.prototype.resumeAfterNoti = function () {
        this.enableScene();
    };
    CCommonEyelenPraScene.prototype.applyFunc = function (func, argArr) {
        window.alert("applying func!");
    };
    CCommonEyelenPraScene.prototype.getDlgLayer = function () {
        return CDiv2EgretDispOCAdapter.from(this.m_dlgLayer);
    };
    CCommonEyelenPraScene.prototype.getNotiLayer = function () {
        return CDiv2EgretDispOCAdapter.from(this.m_notiLayer);
    };
    CCommonEyelenPraScene.prototype.getParentContainer = function () {
        window.alert("Error! Illegal way to get parent container!!");
        return null;
    };
    CCommonEyelenPraScene.prototype.brightenNotiLayerBgRect = function (r) {
        // 让背景变得更灰，只让指定区域亮着。显示某些特殊提示时需调用。
        this.m_notiLayerBg.graphics.clear();
        this.m_notiLayerBg.graphics.beginFill(0xaaaaaa, 0.6);
        this.m_notiLayerBg.graphics.drawRect(0, 0, CGlobals.g_winWidth, r.m_top);
        this.m_notiLayerBg.graphics.drawRect(0, r.m_top, r.m_left, r.m_height);
        this.m_notiLayerBg.graphics.drawRect(r.m_left + r.m_width, r.m_top, CGlobals.g_winWidth - (r.m_left + r.m_width), r.m_height);
        this.m_notiLayerBg.graphics.drawRect(0, r.m_top + r.m_height, CGlobals.g_winWidth, CGlobals.g_winHeight - (r.m_top + r.m_height));
        this.m_notiLayerBg.graphics.endFill();
    };
    CCommonEyelenPraScene.prototype.recoverNotiLayerBg = function () {
        // 让提示显示时场景背景复原（不是背景不变灰），供下次提示用（不是供没提示时）。
        this.m_notiLayerBg.graphics.clear();
        this.m_notiLayerBg.graphics.beginFill(0xaaaaaa, 0.4);
        this.m_notiLayerBg.graphics.drawRect(0, 0, CGlobals.g_winWidth, CGlobals.g_winHeight);
        this.m_notiLayerBg.graphics.endFill();
    };
    CCommonEyelenPraScene.prototype.sendMsg = function (msgType, msgObj) {
        console.log("Error! sendMsg in super classes called as not implemented in sub class!");
        return null;
    };
    return CCommonEyelenPraScene;
}(eui.Component));
window["CCommonEyelenPraScene"] = CCommonEyelenPraScene;
__reflect(CCommonEyelenPraScene.prototype,"CCommonEyelenPraScene",["IEyelenPraScene","INotiParent"]); 


/***/ }),

/***/ "./src/UI/scenes/Eyelen/CPraDiffProScene.ts":
/***/ (function(module, exports) {

// /src/UI/scenes/Eyelen/CPraDifficultScene.ts
/**
 *
 * 困难难度练习画面场景。
 * 分为顶部、中部、底部三大区域。
 *  顶部区域可收缩和展开，显示缩略图，得分和进度。
 *  中部区域显示背景图片和待测角度。
 *  底部区域显示用户长度输入控件和菜单。
 *
 * 拖动中部区域的图片或点击顶部区域的缩略图均可变换屏幕选择区域。
 *
 */
var MSG_PICS_PRELOAD_FINISHED = 1; // 事件ID。练习图片json加载完成。
window["MSG_PICS_PRELOAD_FINISHED"] = MSG_PICS_PRELOAD_FINISHED;
var MSG_IMGS_PRELOAD_FINISHED = 2; // 事件ID。练习图片加载完成。
window["MSG_IMGS_PRELOAD_FINISHED"] = MSG_IMGS_PRELOAD_FINISHED;
var s_topRightWidth = 250;
window["s_topRightWidth"] = s_topRightWidth;
var s_topRightHeight1 = 70;
window["s_topRightHeight1"] = s_topRightHeight1;
var s_cellWidth = 20;
window["s_cellWidth"] = s_cellWidth;
var eyelen4 = window['eyelen4']; 
/*
 * 画面初始化方法：
 *  1、创建对象。
 *  2、setWinWidth/setWinHeight。
 *  3、startNewPra。
 */
var eyelen4;
(function (eyelen4) {
    var CPraDiffProScene = /** @class */ (function (_super) {
        __extends(CPraDiffProScene, _super);
        /////////////////////////////////////////////////////////////////////////////
        function CPraDiffProScene() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.x = 0;
            _this.y = 0;
            _this.m_topOpen = true;
            _this.m_wm = new CEyelen4WinModel(); // 此模型用于计算画面各区域的位置大小等数据。
            _this.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            _this.m_wm.setTopHeight1(30);
            _this.m_wm.setTopHeight2(190);
            _this.m_wm.showTop();
            _this.m_wm.setBottomHeight(300);
            _this.m_pm = new CEyelen3EPraMachineDifficult(); //部件没改动，继续使用上一代的。
            _this.m_UIPresenter = new CEyelen4PraDifficultPresenter(); // 很多元素的位置大小不在Scene里计算，而在此presenter里。
            _this.m_UIPresenter.bindPM(_this.m_pm);
            _this.m_tipBalloon1 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon1.visible = false;
            _this.m_tipBalloon2 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon2.visible = false;
            _this.m_imgOriWidth = 0;
            _this.m_imgHorSpace = 100;
            _this.m_imgVerSpace = 80;
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_isImgMoving = false;
            _this.m_topSpace = new CTopSpace_Eyelen();
            _this.m_curPicTag = -1; //Refresh when showImg.
            _this.m_curRoundTag = -1;
            _this.m2_isFirstPra = true;
            return _this;
        }
        CPraDiffProScene.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(24);
            this.m_bgUnderTop = new egret.Shape();
            this.bgUnderTopGrp.addChild(this.m_bgUnderTop);
            this.midArea.m_UIPresenter = this.m_UIPresenter;
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            //            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.backBtnTap , this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.bottomArea.menuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuBtn, this);
            this.bottomArea.lenInputer.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKButtonTap, this);
            this.m2_cc = true;
            this.shutdownClock.setTimer(CGlobals.g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
        };
        CPraDiffProScene.prototype._setParentContainer = function (c) {
            _super.prototype._setParentContainer.call(this, c);
            this.m_UIPresenter.setRenderFilter(this.getParentContainer()._getRenderFilter());
        };
        CPraDiffProScene.prototype.getPM = function () {
            return this.m_pm;
        };
        CPraDiffProScene.prototype.setLenArr = function (la) {
            this.m_pm.setLenArr(la);
        };
        CPraDiffProScene.prototype.recMis = function (len) {
            egret.ExternalInterface.call("recMis", JSON.stringify(len));
        };
        CPraDiffProScene.prototype.decMisDeviation = function (len) {
            egret.ExternalInterface.call("decMisDeviation", JSON.stringify(len));
        };
        CPraDiffProScene.prototype.getCurPicTag = function () {
            return this.m_curPicTag;
        };
        /*
        * 初始化长度比较对话框。
        */
        CPraDiffProScene.prototype.initCmpLenDlg = function () {
            this.m_cmpLenDlg = new eyelen4.CCmpLenDlg();
            this.m_cmpLenDlg.x = (this.m_winWidth - 400) / 2; //40.0 / 480 * this.m_winWidth;
            this.m_cmpLenDlg.y = 200;
            this.m_cmpLenDlg.visible = false;
            this.m_cmpLenDlg.onNextBtnEvent(egret.TouchEvent.TOUCH_TAP, this.onNextButtonTap, this);
            this.addChild(this.m_cmpLenDlg);
        };
        CPraDiffProScene.prototype.savScore = function () {
            egret.ExternalInterface.call("savScore", this.m_pm.getCurScore().toString());
        };
        /*
        * 触摸“下一长度”按钮后触发。
        */
        CPraDiffProScene.prototype.onNextButtonTap = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.hideCmpLenDlg();
            var p;
            p = this.m_pm.getCmplProgress();
            if (p >= 10) // Practice finished
             {
                this.bottomArea.lenInputer.lock();
                var score = this.m_pm.getCurScore();
                this.finalScoreDlg.setScore(score);
                this.finalScoreDlg.visible = true;
                if (score >= 270) {
                    this.finalScoreDlg.setStars(3);
                }
                else if (score >= 240) {
                    this.finalScoreDlg.setStars(2);
                }
                else if (score >= 180) {
                    this.finalScoreDlg.setStars(1);
                }
                else {
                    this.finalScoreDlg.setStars(0);
                    this._getParentContainer().showAlert("成绩很差哟！\n别灰心，继续努力！！", this.onFailurePanelClose);
                }
                this.savScore();
            }
            else {
                this.m_UIPresenter.nextLen();
                this.m_UIPresenter.setUserLen(0);
                this.bottomArea.lenInputer.clearLen();
                this.bottomArea.lenInputer.unlock();
                this.showLen(this.m_pm.getCurLen());
            }
        };
        CPraDiffProScene.prototype.onFailurePanelClose = function (evt) {
            //Nothing to do here.
        };
        /*
        * 显示长度比较对话框。
        */
        CPraDiffProScene.prototype.showCmpLenDlg = function () {
            var r = this.m_UIPresenter.m_curRank;
            this.m_cmpLenDlg.setScore(10 * r);
            var correOriLen = this.m_pm.getCurLen();
            this.m_cmpLenDlg.setCorreLen(this.m_pm.getCurLen().m_length * this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_cmpLenDlg.setUserLen(this.m_UIPresenter.m_userLen);
            this.m_cmpLenDlg.visible = true;
            //            var curLen = this.m_pm.getCurLen();
        };
        CPraDiffProScene.prototype.hideCmpLenDlg = function () {
            this.m_cmpLenDlg.visible = false;
        };
        /*
        * “确定”按钮点击后触发。提交用户输入的长度。
        */
        CPraDiffProScene.prototype.onOKButtonTap = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.m_UIPresenter.setUserLen(this.bottomArea.lenInputer.getLen());
            this.m_UIPresenter.submitLen();
            if (this.m_UIPresenter.m_curRank <= 1) {
                this.recMis(this.m_pm.getCurLen());
            }
            else {
                this.decMisDeviation(this.m_pm.getCurLen());
            }
            this.showCmpLenDlg();
            this.bottomArea.lenInputer.lock();
            var r = this.m_pm.getLastLenRank();
            var curScore = this.m_pm.getCurScore();
            var curPro = this.m_pm.getCmplProgress();
            this.topArea.scoreView.setScoreWithPro(curScore, curPro);
            this.topArea.progressView.setProgress(curPro);
        };
        //重新开始练习。
        CPraDiffProScene.prototype.replayBtnTouched = function () {
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            this.getParentContainer().startNewPra();
        };
        CPraDiffProScene.prototype.onClockTap = function () {
            CGlobals.g_praDifficultContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        // 开始新一轮练习。
        CPraDiffProScene.prototype.startNewPra = function () {
            console.log("Starting diffPro!");
            this.m_pm.startPra();
            if (this.m2_isFirstPra) {
                this.m2_isFirstPra = false;
                console.log("OK2");
                this.createScene();
            }
            else {
                this.recreateScene();
            }
        };
        /*
        * 重新调整缩略图。
        * 修改 m_itm 后应运行本函数。
        */
        CPraDiffProScene.prototype.readjustThumb = function () {
            //Affect:thumb
            //Do not affect:thumbSel,thumbQuestioner
            var thRect = this.m_UIPresenter.getThumbRect();
            if (this.m_NoImgMode) {
                this.topArea.thumbUI.setShape(this.midArea.m_randomGraphShape);
            }
            else {
                this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
            }
            this.topArea.thumbUI.x = thRect.m_left / 480 * this.m_winWidth;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
        };
        /*
        * 重新调整缩略图选框。
        * 修改 m_itm 或图片选区变化后应调用本函数。
        */
        CPraDiffProScene.prototype.readjustThumbSel = function () {
            var tsr = this.m_UIPresenter.getThumbSelRect();
            this.topArea.thumbUI.setSelRect(tsr);
        };
        /*
        * 根据某一长度对象在缩略图显示问号。
        * 修改 m_itm 或进入新的长度时应调用本函数。此时参数应传入当前长度。
        */
        CPraDiffProScene.prototype.showThumbQuestioner = function (len) {
            var tmpLen = this.m_pm.getCurLen();
            var tmpPoint = new gdeint.CPoint();
            var tmpPoint2 = new gdeint.CPoint();
            tmpPoint.m_x = tmpLen.m_x + tmpLen.m_length / 2;
            tmpPoint.m_y = tmpLen.m_y;
            var qdp = this.m_UIPresenter.getThumbQuestionerDispCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = qdp.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = qdp.m_y - 11;
        };
        /*
        * 在屏幕显示图片。
        */
        CPraDiffProScene.prototype.showImg = function (imgResName) {
            if (this.m_NoImgMode) {
                console.log("Warning! showImg not supported in no img mode!");
                return;
            }
            var oldImgResName;
            oldImgResName = this.m_curImgResName; // getCurImgResName();
            var tmpImg = new egret.Bitmap(); //既用作计算大图，也用作缩略图。
            tmpImg.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
            this.m_imgOriWidth = tmpImg.width;
            //            this.midArea.imgFromFile.width = this.m_UIPresenter.getImgRect().m_width; 后面有相关计算，此处不设置。
            this.midArea.imgFromFile.height = tmpImg.height;
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            this.midArea.imgFromFile.width = this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat();
            this.midArea.imgFromFile.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
            this.m_curImgResName = imgResName;
            this.topArea.thumbUI.setImgSrc(imgResName);
            /*
                换了图片：框移到右上角；
                没换图片：框回到原来的位置：
            */
            if (oldImgResName == this.m_curImgResName) {
            }
            else {
                var selPt = new gdeint.CPoint();
                selPt.m_x = 0;
                selPt.m_y = 0;
                this.m_UIPresenter.inpImgSelPt(selPt);
                this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
                var imgRect;
                imgRect = this.m_UIPresenter.getImgRect();
                this.midArea.midContentGroup.x = imgRect.m_left;
                this.midArea.midContentGroup.y = imgRect.m_top;
            }
            this.readjustThumb();
            this.readjustThumbSel();
        };
        CPraDiffProScene.prototype.showRandomGraph = function () {
            //每次均重新产生随机图。
            this.midArea.randomGraph.visible = true;
            this.midArea.imgFromFile.visible = false;
            this.midArea.m_randomGraphShape.genGraph(1024, 720);
            this.m_imgOriWidth = 1024;
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(720);
            this.midArea.m_randomGraphShape.resize(this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat(), 720);
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            this.midArea.midContentGroup.x = imgRect.m_left;
            this.midArea.midContentGroup.y = imgRect.m_top;
            this.readjustThumb();
            this.readjustThumbSel();
        };
        /*
        * 在屏幕显示一个长度。不显示图片，不更新presenter。
        */
        CPraDiffProScene.prototype._showLen = function (len) {
            this.m_lenEdgeCanvas.graphics.clear();
            if (len.m_isHor) {
                //Draw questioner:
                this.m_lenQuestioner.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() + len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() / 2 - 10;
                this.m_lenQuestioner.y = len.m_y - 20;
                //Draw two edges:
                this.m_lenEdgeCanvas.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() - 5;
                this.m_lenEdgeCanvas.y = len.m_y - 30;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, 5, 60); //Edge1
                var edge2X, edge2Y;
                edge2X = len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() + 5;
                edge2Y = 0;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, 5, 60); //Edge2
                this.m_lenEdgeCanvas.graphics.endFill();
            }
            else {
                var lenDispPtsRect;
                lenDispPtsRect = this.m_UIPresenter.calcuLenPtsRects(len);
                //Draw questioner:
                var tmpFontSize = this.m_UIPresenter.getLenQuestionerFontSize();
                this.m_lenQuestioner.x = lenDispPtsRect.m_lenQuestionerDispPt.m_x;
                this.m_lenQuestioner.y = lenDispPtsRect.m_lenQuestionerDispPt.m_y;
                this.m_lenQuestioner.size = tmpFontSize;
                //Draw two edges:
                this.m_lenEdgeCanvas.x = lenDispPtsRect.m_lenEdge1DispRect.m_left;
                this.m_lenEdgeCanvas.y = lenDispPtsRect.m_lenEdge1DispRect.m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, lenDispPtsRect.m_lenEdge1DispRect.m_width, lenDispPtsRect.m_lenEdge1DispRect.m_height);
                var edge2X, edge2Y;
                edge2X = lenDispPtsRect.m_lenEdge2DispRect.m_left - lenDispPtsRect.m_lenEdge1DispRect.m_left;
                edge2Y = lenDispPtsRect.m_lenEdge2DispRect.m_top - lenDispPtsRect.m_lenEdge1DispRect.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, lenDispPtsRect.m_lenEdge1DispRect.m_width, lenDispPtsRect.m_lenEdge1DispRect.m_height);
                this.m_lenEdgeCanvas.graphics.endFill();
            }
        };
        /*
        * 在屏幕显示一个长度。图片也会一起显示。
        */
        CPraDiffProScene.prototype.showLen = function (len) {
            this.m_UIPresenter.showLen(len);
            if (this.m_NoImgMode) {
                this.showRandomGraph();
            }
            else {
                //Change img if needed:
                this.showImg(len.m2_imgResName);
            }
            this._showLen(len);
            this.showThumbQuestioner(len);
        };
        /*
        * 缩略图点击时触发。
        */
        CPraDiffProScene.prototype.onThumbTap = function (evt) {
            var tmpSelTp = new gdeint.CPoint();
            tmpSelTp.m_x = evt.m_tchX - this.m_UIPresenter.getThumbSelRect().m_width / 2;
            tmpSelTp.m_y = evt.m_tchY - this.m_UIPresenter.getThumbSelRect().m_height / 2;
            this.m_UIPresenter.inpThSelPt(tmpSelTp);
            //            this.syncWithUIPresenter();
            this.refreshScene();
        };
        /*
        * 创建顶部区域。
        */
        CPraDiffProScene.prototype.createTop = function () {
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.m_bgUnderTop.x = 0;
            this.m_bgUnderTop.y = 0;
            this.m_bgUnderTop.width = this.m_wm.getWinWidth();
            this.m_bgUnderTop.height = this.m_wm.getTopHeight();
            this.m_bgUnderTop.graphics.beginFill(0x00FF00);
            this.m_bgUnderTop.graphics.drawRect(0, 0, this.m_bgUnderTop.width, this.m_bgUnderTop.height);
            this.m_bgUnderTop.graphics.endFill();
            this.topArea.scoreView.x = this.m_bgUnderTop.x + this.m_bgUnderTop.width - s_topRightWidth + 5;
            this.topArea.scoreView.y = this.m_bgUnderTop.y + s_topRightHeight1 + 3;
            this.topArea.progressView.x = this.m_bgUnderTop.x + this.m_bgUnderTop.width - s_topRightWidth + 5;
            this.topArea.progressView.y = s_topRightHeight1 / 2 - 35;
            this.topArea.setTrueWidth(this.m_winWidth);
            this.topArea.setTrueHeight(this.m_wm.getTopHeight2());
            this.m_UIPresenter.setImgWidth(160);
            this.m_UIPresenter.setImgHeight(160);
            this.m_imgOriWidth = 160;
            this.m_lenView = new egret.DisplayObjectContainer();
            this.m_lenEdgeCanvas = new egret.Shape();
            this.m_lenQuestioner = new egret.TextField();
            this.m_lenQuestioner.textColor = 0xFF0000;
            this.m_lenQuestioner.size = 36;
            this.m_lenQuestioner.text = "?";
            this.midArea.midCanvasGrp.addChild(this.m_lenEdgeCanvas);
            this.midArea.midCanvasGrp.addChild(this.m_lenQuestioner);
            //Add thumb and thumbSel:
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //Add components to scene:
            this.topArea.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP, this.onThumbTap, this);
            this.topArea.visible = true;
            this.topArea.addEventListener(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP, this.onTopBtnTab, this);
            this.topAreaGroup.y = this.m_wm.getTopY();
        };
        /*
        * 创建中间区域。
        */
        CPraDiffProScene.prototype.createMid = function () {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            console.log("midTrueWidth:" + this.m_winWidth + ",midTrueHeight:" + this.m_wm.getMidHeight());
        };
        /*
        * 创建底部区域。
        */
        CPraDiffProScene.prototype.createBottom = function () {
            var bottomY, bottomHeight;
            bottomY = this.m_wm.getBottomY();
            this.bottomAreaGroup.y = bottomY;
            bottomHeight = this.m_wm.getBottomHeight();
            this.bottomArea.setTrueWidth(this.m_winWidth);
            this.bottomArea.setTrueHeight(bottomHeight);
            //Draw bottom
        };
        /*
        * 资源加载完成后，运行此函数创建场景。
        */
        CPraDiffProScene.prototype.createScene = function () {
            _super.prototype.createScene.call(this);
            this.m_wm.setWinWidth(this.m_winWidth);
            this.m_wm.setWinHeight(this.m_winHeight);
            this.m_topSpace.setColor(0xFFFFFF);
            this.m_topSpace.x = 0;
            this.m_topSpace.y = 0;
            this.m_topSpace.width = this.m_wm.getWinWidth();
            this.m_topSpace.height = this.m_wm.getTopSpaceHeight();
            this.m_topSpace.draw();
            this.midArea.imgFromFile.fillMode = egret.BitmapFillMode.SCALE;
            this.midArea.imgGrp.x = 0;
            this.createTop();
            this.createMid();
            this.createBottom();
            console.log("OK3");
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGMOVE, this.onImgDragMove, this);
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND, this.onImgDragEnd, this);
            this.addChild(this.m_topSpace);
            this.finalScoreDlg.left = (this.m_winWidth - this.finalScoreDlg.width) / 2;
            this.finalScoreDlg.visible = false;
            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP, this.replayBtnTouched, this);
            //Add touch events:
            this.initCmpLenDlg();
            //OK to start and show first len.
            var firstLen = this.m_pm.getCurLen();
            this.showLen(firstLen);
            this.readjustThumb();
            this.readjustThumbSel();
            this.showInitInstrus();
        };
        /*
        * 显示开始练习时的提示说明。
        */
        CPraDiffProScene.prototype.showInitInstrus = function () {
            this.prepareTipBalloons();
            var balloonX = CGlobals.g_scenePos.m_x + 65 * CGlobals.g_scale;
            var balloonY = CGlobals.g_scenePos.m_y + /*190**/ 230 * CGlobals.g_scale;
            this.m_tipBalloon1.x = balloonX * 0.9;
            this.m_tipBalloon1.y = balloonY;
            this.m_tipBalloon1.scaleX = CGlobals.g_scale;
            this.m_tipBalloon1.scaleY = CGlobals.g_scale;
            this.m_tipBalloon1.title = "提示";
            this.m_tipBalloon1.setContent("请目测图上“？”处显示的长度，并拖动拉尺输入您目测的结果。");
            this.m_tipBalloon1.visible = true;
            this.disableScene();
            this.m_tipBalloon2.x = balloonX * 1.1;
            this.m_tipBalloon2.y = balloonY;
            this.m_tipBalloon2.scaleX = CGlobals.g_scale;
            this.m_tipBalloon2.scaleY = CGlobals.g_scale;
            this.m_tipBalloon2.title = "提示";
            this.m_tipBalloon2.setContent("请目测图上“？”处显示的\n长度并拖动拉尺输入您目测的结果。");
            this.m_tipBalloon2.visible = false; //隐藏2以防两个重叠显示。
            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon1Close, this);
            //        make rulerUser bright
            var r = new gdeint.CRect();
            r.m_left = 5;
            r.m_top = this.m_wm.getBottomY() + 25;
            r.m_width = 440.0 / 480 * this.m_winWidth;
            r.m_height = 140;
            this.brightenNotiLayerBgRect(r);
        };
        CPraDiffProScene.prototype.prepareTipBalloons = function () {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraDiffProScene.prototype.onTipBalloon1Close = function (evt) {
            this.m_tipBalloon2.visible = true;
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon2Close, this);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraDiffProScene.prototype.onTipBalloon2Close = function (evt) {
            this.enabled = true;
            this.recoverNotiLayerBg();
            this.m_notiLayer.visible = false;
        };
        /*
        * 顶部按钮触摸后触发。
        */
        CPraDiffProScene.prototype.onTopBtnTab = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            if (this.m_topOpen) //Already open,close it.
             {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.midArea.setTrueHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                var tw_bgUnderTop = egret.Tween.get(this.bgUnderTopGrp);
                var targetTopY = -(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
                tw.to({ y: targetTopY }, 300);
                tw_bgUnderTop.to({ y: targetTopY }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSClosed, this);
                timer.start();
            }
            else //Already closed,open it.
             {
                this.m_topOpen = true;
                this.m_wm.showTop();
                var tw = egret.Tween.get(this.topArea);
                var tw_bgUnderTop = egret.Tween.get(this.bgUnderTopGrp);
                tw.to({ y: 0 }, 300);
                tw_bgUnderTop.to({ y: 0 }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSOpen, this);
                timer.start();
            }
        };
        /*
        * 顶部区域展开完成时触发。
        */
        CPraDiffProScene.prototype.timerTSOpen = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.readjustThumbSel();
        };
        /*
        * 顶部区域关闭完成时触发。
        */
        CPraDiffProScene.prototype.timerTSClosed = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(0);
            this.readjustThumbSel();
        };
        CPraDiffProScene.prototype.onImgDragMove = function (evt) {
            this.readjustThumbSel();
        };
        CPraDiffProScene.prototype.onImgDragEnd = function (evt) {
            this.readjustThumbSel();
        };
        // 处理外部投递到此类的消息。
        CPraDiffProScene.prototype.sendMsg = function (msgType, msgObj) {
            var retObj = null;
            /*
                msgType表（CPraEasyScene)：
                    onCaliDlgClose
            
            */
            if ("getOnCaliDlgCloseFunc" == msgType) {
                console.log("getOnCaliDlgCloseFunc via send message!");
                retObj = this.onCaliDlgClose;
            }
            return retObj;
        };
        /*
        * 横竖校准对话框确定退出时调用。
        */
        CPraDiffProScene.prototype.onCaliDlgClose = function (dlgResult) {
            if (dlgResult) { // OK btn tap.
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                this.m_UIPresenter.updateFromPM();
                //                this.syncWithUIPresenter();
                this.refreshScene();
            }
            this.m_parentContainer.showPraMenu();
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraDiffProScene.prototype.onCaliBtn = function (evt) {
            this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraDiffProScene.prototype.onMenuBtn = function (evt) {
            this.m_parentContainer.showPraMenu();
        };
        /*
            获取父 container。
        */
        CPraDiffProScene.prototype.getParentContainer = function () {
            return this.m_parentContainer;
        };
        /*
        * 点击“返回”按钮时触发。
        */
        CPraDiffProScene.prototype.backBtnTap = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraDiffProScene.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                this.finalScoreDlg.visible = false;
                CGlobals.g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        /*
        * 创建底部菜单。
        */
        CPraDiffProScene.prototype.createBottomMenu = function () {
        };
        /*
        * 重置场景各元素状态以便进行新一轮练习。
        */
        CPraDiffProScene.prototype.resetSceneElems = function () {
            this.m_cmpLenDlg.visible = false;
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
        };
        /*
        * 刷新场景。通常新练习开始时，资源加载完成后调用。
        */
        CPraDiffProScene.prototype.recreateScene = function () {
            this.resetSceneElems();
            //        1、Reset Img content & location
            this.showLen(this.m_pm.getCurLen());
            if (this.m_NoImgMode) {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(720);
            }
            else {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            }
            var tmpSelRect = new gdeint.CRect();
            tmpSelRect.m_left = 0;
            tmpSelRect.m_top = 0;
            tmpSelRect.m_width = this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat();
            tmpSelRect.m_height = this.m_wm.getMidHeight();
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //reset thumb & thumbSel
            this.readjustThumb();
            this.readjustThumbSel();
            //        2、Progress bar and score to 0
            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.clearScore();
            //        3、Ruler user and OK button
            this.m_UIPresenter.m_userLen = 0;
            this.bottomArea.lenInputer.clearLen();
            this.showInitInstrus();
            this.bottomArea.lenInputer.unlock();
        };
        CPraDiffProScene.prototype.refreshScene = function () {
            //数据源：m_pm、m_wm、m_UIPresenter。
            {
                //本大括号内代码根据m_pm、m_wm更新m_UIPresenter。不得对m_pm、m_wm进行修改！
                this.m_UIPresenter.updateFromPM();
                this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            }
            //本函数此后代码不得对数据源进行修改！
            this.m_topSpace.height = CGlobals.g_topSpaceHeight;
            this.m_topSpace.setColor(0xDDDDDD);
            this.m_topSpace.redraw();
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.topArea.setTrueHeight(this.m_wm.getTopHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.bottomAreaGroup.y = this.m_wm.getBottomY();
            this.bottomArea.setTrueHeight(this.m_wm.getBottomHeight());
            this.m_cmpLenDlg.visible = false;
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            // Img
            this.midArea.readjustCircler();
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            if (this.m_NoImgMode) {
                this.midArea.m_randomGraphShape.resize(imgRect.m_width, imgRect.m_height);
            }
            else {
                this.midArea.imgFromFile.width = imgRect.m_width;
                this.midArea.imgFromFile.height = imgRect.m_height;
            }
            var tmpLen;
            tmpLen = this.m_UIPresenter.getLen();
            if (tmpLen && null != tmpLen) {
                if (this.m_NoImgMode) {
                    // 要加上这三行缩略图才显示正常。原因未知。
                    this.m_imgOriWidth = 1024;
                    this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                    this.m_UIPresenter.setImgHeight(720);
                }
                else {
                    this.showImg(tmpLen.m2_imgResName);
                }
            }
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = this.m_UIPresenter.getImgRect().m_left;
            inpPos.m_y = this.m_UIPresenter.getImgRect().m_top;
            this.midArea.m_imgCircler.setInpPos(inpPos);
            var inpPosFinal = this.midArea.m_imgCircler.getOutpPos();
            console.log("inpPosFinal:[" + inpPosFinal.m_x + "," + inpPosFinal.m_y + "]");
            this.midArea.midContentGroup.x = inpPosFinal.m_x;
            this.midArea.midContentGroup.y = inpPosFinal.m_y;
            var newImgSelPt = new gdeint.CPoint();
            newImgSelPt.m_x = -inpPosFinal.m_x;
            newImgSelPt.m_y = -inpPosFinal.m_y + this.midArea.m_visibleStartY;
            this.midArea.m_UIPresenter.inpImgSelPt(newImgSelPt);
            // Len
            this._showLen(tmpLen);
            // Thumb
            this.readjustThumb();
            // ThumbQuestioner
            var questionerPt;
            questionerPt = this.m_UIPresenter.getThumbQuestionerDispCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = questionerPt.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = questionerPt.m_y - 11;
            // ThumbSel
            this.readjustThumbSel();
        };
        return CPraDiffProScene;
    }(CCommonEyelenPraScene));
    eyelen4.CPraDiffProScene = CPraDiffProScene;
    __reflect(CPraDiffProScene.prototype,"eyelen4.CPraDiffProScene",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/CPraDifficultScene.ts":
/***/ (function(module, exports) {

// /src/UI/scenes/Eyelen/CPraDifficultScene.ts
/**
 *
 * 困难难度练习画面场景。
 * 分为顶部、中部、底部三大区域。
 *  顶部区域可收缩和展开，显示缩略图，得分和进度。
 *  中部区域显示背景图片和待测角度。
 *  底部区域显示用户长度输入控件和菜单。
 *
 * 拖动中部区域的图片或点击顶部区域的缩略图均可变换屏幕选择区域。
 *
 */
var MSG_PICS_PRELOAD_FINISHED = 1; // 事件ID。练习图片json加载完成。
window["MSG_PICS_PRELOAD_FINISHED"] = MSG_PICS_PRELOAD_FINISHED;
var MSG_IMGS_PRELOAD_FINISHED = 2; // 事件ID。练习图片加载完成。
window["MSG_IMGS_PRELOAD_FINISHED"] = MSG_IMGS_PRELOAD_FINISHED;
var s_topRightWidth = 250;
window["s_topRightWidth"] = s_topRightWidth;
var s_topRightHeight1 = 70;
window["s_topRightHeight1"] = s_topRightHeight1;
var s_cellWidth = 20;
window["s_cellWidth"] = s_cellWidth;
var eyelen4 = window['eyelen4']; 
/*
 * 画面初始化方法：
 *  1、创建对象。
 *  2、setWinWidth/setWinHeight。
 *  3、startNewPra。
 */
var eyelen4;
(function (eyelen4) {
    var CPraDifficultScene = /** @class */ (function (_super) {
        __extends(CPraDifficultScene, _super);
        /////////////////////////////////////////////////////////////////////////////
        function CPraDifficultScene() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.x = 0;
            _this.y = 0;
            _this.m_topOpen = true;
            _this.m_wm = new CEyelen4WinModel(); // 此模型用于计算画面各区域的位置大小等数据。
            _this.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            _this.m_wm.setTopHeight1(30);
            _this.m_wm.setTopHeight2(190);
            _this.m_wm.showTop();
            _this.m_wm.setBottomHeight(300);
            _this.m_pm = new CEyelen3EPraMachineDifficult(); //部件没改动，继续使用上一代的。
            _this.m_UIPresenter = new CEyelen4PraDifficultPresenter(); // 很多元素的位置大小不在Scene里计算，而在此presenter里。
            _this.m_UIPresenter.bindPM(_this.m_pm);
            _this.m_tipBalloon1 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon1.visible = false;
            _this.m_tipBalloon2 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon2.visible = false;
            _this.m_imgOriWidth = 0;
            _this.m_imgHorSpace = 100;
            _this.m_imgVerSpace = 80;
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_isImgMoving = false;
            _this.m_topSpace = new CTopSpace_Eyelen();
            _this.m_curPicTag = -1; //Refresh when showImg.
            _this.m_curRoundTag = -1;
            _this.m2_isFirstPra = true;
            return _this;
        }
        CPraDifficultScene.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(24);
            this.m_bgUnderTop = new egret.Shape();
            this.bgUnderTopGrp.addChild(this.m_bgUnderTop);
            this.midArea.m_UIPresenter = this.m_UIPresenter;
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            //            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.backBtnTap , this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.bottomArea.menuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuBtn, this);
            this.bottomArea.lenInputer.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKButtonTap, this);
            this.m2_cc = true;
            this.shutdownClock.setTimer(CGlobals.g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
        };
        CPraDifficultScene.prototype._setParentContainer = function (c) {
            _super.prototype._setParentContainer.call(this, c);
            this.m_UIPresenter.setRenderFilter(this.getParentContainer()._getRenderFilter());
        };
        CPraDifficultScene.prototype.getPM = function () {
            return this.m_pm;
        };
        CPraDifficultScene.prototype.setLenArr = function (la) {
            this.m_pm.setLenArr(la);
        };
        CPraDifficultScene.prototype.getCurPicTag = function () {
            return this.m_curPicTag;
        };
        /*
        * 初始化长度比较对话框。
        */
        CPraDifficultScene.prototype.initCmpLenDlg = function () {
            this.m_cmpLenDlg = new eyelen4.CCmpLenDlg();
            this.m_cmpLenDlg.x = (this.m_winWidth - 400) / 2; //40.0 / 480 * this.m_winWidth;
            this.m_cmpLenDlg.y = 200;
            this.m_cmpLenDlg.visible = false;
            this.m_cmpLenDlg.onNextBtnEvent(egret.TouchEvent.TOUCH_TAP, this.onNextButtonTap, this);
            this.addChild(this.m_cmpLenDlg);
        };
        /*
        * 触摸“下一长度”按钮后触发。
        */
        CPraDifficultScene.prototype.onNextButtonTap = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.hideCmpLenDlg();
            var p;
            p = this.m_pm.getCmplProgress();
            if (p >= 10) // Practice finished
             {
                this.bottomArea.lenInputer.lock();
                var score = this.m_pm.getCurScore();
                this.finalScoreDlg.setScore(score);
                this.finalScoreDlg.visible = true;
                if (score >= 270) {
                    this.finalScoreDlg.setStars(3);
                }
                else if (score >= 240) {
                    this.finalScoreDlg.setStars(2);
                }
                else if (score >= 180) {
                    this.finalScoreDlg.setStars(1);
                }
                else {
                    this.finalScoreDlg.setStars(0);
                    this._getParentContainer().showAlert("成绩很差哟！\n别灰心，继续努力！！", this.onFailurePanelClose);
                }
            }
            else {
                this.m_UIPresenter.nextLen();
                this.m_UIPresenter.setUserLen(0);
                this.bottomArea.lenInputer.clearLen();
                this.bottomArea.lenInputer.unlock();
                this.showLen(this.m_pm.getCurLen());
            }
        };
        CPraDifficultScene.prototype.onFailurePanelClose = function (evt) {
            //Nothing to do here.
        };
        /*
        * 显示长度比较对话框。
        */
        CPraDifficultScene.prototype.showCmpLenDlg = function () {
            var r = this.m_UIPresenter.m_curRank;
            this.m_cmpLenDlg.setScore(10 * r);
            var correOriLen = this.m_pm.getCurLen();
            this.m_cmpLenDlg.setCorreLen(this.m_pm.getCurLen().m_length * this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_cmpLenDlg.setUserLen(this.m_UIPresenter.m_userLen);
            this.m_cmpLenDlg.visible = true;
            var curLen = this.m_pm.getCurLen();
        };
        CPraDifficultScene.prototype.hideCmpLenDlg = function () {
            this.m_cmpLenDlg.visible = false;
        };
        /*
        * “确定”按钮点击后触发。提交用户输入的长度。
        */
        CPraDifficultScene.prototype.onOKButtonTap = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.m_UIPresenter.setUserLen(this.bottomArea.lenInputer.getLen());
            this.m_UIPresenter.submitLen();
            this.showCmpLenDlg();
            this.bottomArea.lenInputer.lock();
            var r = this.m_pm.getLastLenRank();
            var curScore = this.m_pm.getCurScore();
            var curPro = this.m_pm.getCmplProgress();
            this.topArea.scoreView.setScoreWithPro(curScore, curPro);
            this.topArea.progressView.setProgress(curPro);
        };
        //重新开始练习。
        CPraDifficultScene.prototype.replayBtnTouched = function () {
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            this.getParentContainer().startNewPra();
        };
        CPraDifficultScene.prototype.onClockTap = function () {
            CGlobals.g_praDifficultContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        // 开始新一轮练习。
        CPraDifficultScene.prototype.startNewPra = function () {
            this.m_pm.startPra();
            if (this.m2_isFirstPra) {
                this.m2_isFirstPra = false;
                this.createScene();
            }
            else {
                this.recreateScene();
            }
        };
        /*
        * 重新调整缩略图。
        * 修改 m_itm 后应运行本函数。
        */
        CPraDifficultScene.prototype.readjustThumb = function () {
            //Affect:thumb
            //Do not affect:thumbSel,thumbQuestioner
            var thRect = this.m_UIPresenter.getThumbRect();
            if (this.m_NoImgMode) {
                this.topArea.thumbUI.setShape(this.midArea.m_randomGraphShape);
            }
            else {
                this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
            }
            this.topArea.thumbUI.x = thRect.m_left / 480 * this.m_winWidth;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
        };
        /*
        * 重新调整缩略图选框。
        * 修改 m_itm 或图片选区变化后应调用本函数。
        */
        CPraDifficultScene.prototype.readjustThumbSel = function () {
            var tsr = this.m_UIPresenter.getThumbSelRect();
            this.topArea.thumbUI.setSelRect(tsr);
        };
        /*
        * 根据某一长度对象在缩略图显示问号。
        * 修改 m_itm 或进入新的长度时应调用本函数。此时参数应传入当前长度。
        */
        CPraDifficultScene.prototype.showThumbQuestioner = function (len) {
            var tmpLen = this.m_pm.getCurLen();
            var tmpPoint = new gdeint.CPoint();
            var tmpPoint2 = new gdeint.CPoint();
            tmpPoint.m_x = tmpLen.m_x + tmpLen.m_length / 2;
            tmpPoint.m_y = tmpLen.m_y;
            var qdp = this.m_UIPresenter.getThumbQuestionerDispCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = qdp.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = qdp.m_y - 11;
        };
        /*
        * 在屏幕显示图片。
        */
        CPraDifficultScene.prototype.showImg = function (imgResName) {
            if (this.m_NoImgMode) {
                console.log("Warning! showImg not supported in no img mode!");
                return;
            }
            var oldImgResName;
            oldImgResName = this.m_curImgResName; // getCurImgResName();
            var tmpImg = new egret.Bitmap(); //既用作计算大图，也用作缩略图。
            tmpImg.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
            this.m_imgOriWidth = tmpImg.width;
            //            this.midArea.imgFromFile.width = this.m_UIPresenter.getImgRect().m_width; 后面有相关计算，此处不设置。
            this.midArea.imgFromFile.height = tmpImg.height;
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            this.midArea.imgFromFile.width = this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat();
            this.midArea.imgFromFile.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
            this.m_curImgResName = imgResName;
            this.topArea.thumbUI.setImgSrc(imgResName);
            /*
                换了图片：框移到右上角；
                没换图片：框回到原来的位置：
            */
            if (oldImgResName == this.m_curImgResName) {
            }
            else {
                var selPt = new gdeint.CPoint();
                selPt.m_x = 0;
                selPt.m_y = 0;
                this.m_UIPresenter.inpImgSelPt(selPt);
                this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
                var imgRect;
                imgRect = this.m_UIPresenter.getImgRect();
                this.midArea.midContentGroup.x = imgRect.m_left;
                this.midArea.midContentGroup.y = imgRect.m_top;
            }
            this.readjustThumb();
            this.readjustThumbSel();
        };
        CPraDifficultScene.prototype.showRandomGraph = function () {
            //每次均重新产生随机图。
            this.midArea.randomGraph.visible = true;
            this.midArea.imgFromFile.visible = false;
            this.midArea.m_randomGraphShape.genGraph(1024, 720);
            this.m_imgOriWidth = 1024;
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(720);
            this.midArea.m_randomGraphShape.resize(this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat(), 720);
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            this.midArea.midContentGroup.x = imgRect.m_left;
            this.midArea.midContentGroup.y = imgRect.m_top;
            this.readjustThumb();
            this.readjustThumbSel();
        };
        /*
        * 在屏幕显示一个长度。不显示图片，不更新presenter。
        */
        CPraDifficultScene.prototype._showLen = function (len) {
            this.m_lenEdgeCanvas.graphics.clear();
            if (len.m_isHor) {
                //Draw questioner:
                this.m_lenQuestioner.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() + len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() / 2 - 10;
                this.m_lenQuestioner.y = len.m_y - 20;
                //Draw two edges:
                this.m_lenEdgeCanvas.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() - 5;
                this.m_lenEdgeCanvas.y = len.m_y - 30;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, 5, 60); //Edge1
                var edge2X, edge2Y;
                edge2X = len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() + 5;
                edge2Y = 0;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, 5, 60); //Edge2
                this.m_lenEdgeCanvas.graphics.endFill();
            }
            else {
                var lenDispPtsRect;
                lenDispPtsRect = this.m_UIPresenter.calcuLenPtsRects(len);
                //Draw questioner:
                var tmpFontSize = this.m_UIPresenter.getLenQuestionerFontSize();
                this.m_lenQuestioner.x = lenDispPtsRect.m_lenQuestionerDispPt.m_x;
                this.m_lenQuestioner.y = lenDispPtsRect.m_lenQuestionerDispPt.m_y;
                this.m_lenQuestioner.size = tmpFontSize;
                //Draw two edges:
                this.m_lenEdgeCanvas.x = lenDispPtsRect.m_lenEdge1DispRect.m_left;
                this.m_lenEdgeCanvas.y = lenDispPtsRect.m_lenEdge1DispRect.m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, lenDispPtsRect.m_lenEdge1DispRect.m_width, lenDispPtsRect.m_lenEdge1DispRect.m_height);
                var edge2X, edge2Y;
                edge2X = lenDispPtsRect.m_lenEdge2DispRect.m_left - lenDispPtsRect.m_lenEdge1DispRect.m_left;
                edge2Y = lenDispPtsRect.m_lenEdge2DispRect.m_top - lenDispPtsRect.m_lenEdge1DispRect.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, lenDispPtsRect.m_lenEdge1DispRect.m_width, lenDispPtsRect.m_lenEdge1DispRect.m_height);
                this.m_lenEdgeCanvas.graphics.endFill();
            }
        };
        /*
        * 在屏幕显示一个长度。图片也会一起显示。
        */
        CPraDifficultScene.prototype.showLen = function (len) {
            this.m_UIPresenter.showLen(len);
            if (this.m_NoImgMode) {
                this.showRandomGraph();
            }
            else {
                //Change img if needed:
                this.showImg(len.m2_imgResName);
            }
            this._showLen(len);
            this.showThumbQuestioner(len);
        };
        /*
        * 缩略图点击时触发。
        */
        CPraDifficultScene.prototype.onThumbTap = function (evt) {
            var tmpSelTp = new gdeint.CPoint();
            tmpSelTp.m_x = evt.m_tchX - this.m_UIPresenter.getThumbSelRect().m_width / 2;
            tmpSelTp.m_y = evt.m_tchY - this.m_UIPresenter.getThumbSelRect().m_height / 2;
            this.m_UIPresenter.inpThSelPt(tmpSelTp);
            this.refreshScene();
        };
        /*
        * 创建顶部区域。
        */
        CPraDifficultScene.prototype.createTop = function () {
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.m_bgUnderTop.x = 0;
            this.m_bgUnderTop.y = 0;
            this.m_bgUnderTop.width = this.m_wm.getWinWidth();
            this.m_bgUnderTop.height = this.m_wm.getTopHeight();
            this.m_bgUnderTop.graphics.beginFill(0x00FF00);
            this.m_bgUnderTop.graphics.drawRect(0, 0, this.m_bgUnderTop.width, this.m_bgUnderTop.height);
            this.m_bgUnderTop.graphics.endFill();
            this.topArea.scoreView.x = this.m_bgUnderTop.x + this.m_bgUnderTop.width - s_topRightWidth + 5;
            this.topArea.scoreView.y = this.m_bgUnderTop.y + s_topRightHeight1 + 3;
            this.topArea.progressView.x = this.m_bgUnderTop.x + this.m_bgUnderTop.width - s_topRightWidth + 5;
            this.topArea.progressView.y = s_topRightHeight1 / 2 - 35;
            this.topArea.setTrueWidth(this.m_winWidth);
            this.topArea.setTrueHeight(this.m_wm.getTopHeight2());
            this.m_UIPresenter.setImgWidth(160);
            this.m_UIPresenter.setImgHeight(160);
            this.m_imgOriWidth = 160;
            this.m_lenView = new egret.DisplayObjectContainer();
            this.m_lenEdgeCanvas = new egret.Shape();
            this.m_lenQuestioner = new egret.TextField();
            this.m_lenQuestioner.textColor = 0xFF0000;
            this.m_lenQuestioner.size = 36;
            this.m_lenQuestioner.text = "?";
            this.midArea.midCanvasGrp.addChild(this.m_lenEdgeCanvas);
            this.midArea.midCanvasGrp.addChild(this.m_lenQuestioner);
            //Add thumb and thumbSel:
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //Add components to scene:
            this.topArea.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP, this.onThumbTap, this);
            this.topArea.visible = true;
            this.topArea.addEventListener(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP, this.onTopBtnTab, this);
            this.topAreaGroup.y = this.m_wm.getTopY();
        };
        /*
        * 创建中间区域。
        */
        CPraDifficultScene.prototype.createMid = function () {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            console.log("midTrueWidth:" + this.m_winWidth + ",midTrueHeight:" + this.m_wm.getMidHeight());
        };
        /*
        * 创建底部区域。
        */
        CPraDifficultScene.prototype.createBottom = function () {
            var bottomY, bottomHeight;
            bottomY = this.m_wm.getBottomY();
            this.bottomAreaGroup.y = bottomY;
            bottomHeight = this.m_wm.getBottomHeight();
            this.bottomArea.setTrueWidth(this.m_winWidth);
            this.bottomArea.setTrueHeight(bottomHeight);
            //Draw bottom
        };
        /*
        * 资源加载完成后，运行此函数创建场景。
        */
        CPraDifficultScene.prototype.createScene = function () {
            _super.prototype.createScene.call(this);
            this.m_wm.setWinWidth(this.m_winWidth);
            this.m_wm.setWinHeight(this.m_winHeight);
            this.m_topSpace.setColor(0xFFFFFF);
            this.m_topSpace.x = 0;
            this.m_topSpace.y = 0;
            this.m_topSpace.width = this.m_wm.getWinWidth();
            this.m_topSpace.height = this.m_wm.getTopSpaceHeight();
            this.m_topSpace.draw();
            this.midArea.imgFromFile.fillMode = egret.BitmapFillMode.SCALE;
            this.midArea.imgGrp.x = 0;
            this.createTop();
            this.createMid();
            this.createBottom();
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGMOVE, this.onImgDragMove, this);
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND, this.onImgDragEnd, this);
            this.addChild(this.m_topSpace);
            this.finalScoreDlg.left = (this.m_winWidth - this.finalScoreDlg.width) / 2;
            this.finalScoreDlg.visible = false;
            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP, this.replayBtnTouched, this);
            //Add touch events:
            this.initCmpLenDlg();
            //OK to start and show first len.
            var firstLen = this.m_pm.getCurLen();
            this.showLen(firstLen);
            this.readjustThumb();
            this.readjustThumbSel();
            this.showInitInstrus();
        };
        /*
        * 显示开始练习时的提示说明。
        */
        CPraDifficultScene.prototype.showInitInstrus = function () {
            this.prepareTipBalloons();
            var balloonX = CGlobals.g_scenePos.m_x + 65 * CGlobals.g_scale;
            var balloonY = CGlobals.g_scenePos.m_y + /*190**/ 230 * CGlobals.g_scale;
            this.m_tipBalloon1.x = balloonX * 0.9;
            this.m_tipBalloon1.y = balloonY;
            this.m_tipBalloon1.scaleX = CGlobals.g_scale;
            this.m_tipBalloon1.scaleY = CGlobals.g_scale;
            this.m_tipBalloon1.title = "提示";
            this.m_tipBalloon1.setContent("请目测图上“？”处显示的长度，并拖动拉尺输入您目测的结果。");
            this.m_tipBalloon1.visible = true;
            this.disableScene();
            this.m_tipBalloon2.x = balloonX * 1.1;
            this.m_tipBalloon2.y = balloonY;
            this.m_tipBalloon2.scaleX = CGlobals.g_scale;
            this.m_tipBalloon2.scaleY = CGlobals.g_scale;
            this.m_tipBalloon2.title = "提示";
            this.m_tipBalloon2.setContent("请目测图上“？”处显示的\n长度并拖动拉尺输入您目测的结果。");
            this.m_tipBalloon2.visible = false; //隐藏2以防两个重叠显示。
            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon1Close, this);
            //        make rulerUser bright
            var r = new gdeint.CRect();
            r.m_left = 5;
            r.m_top = this.m_wm.getBottomY() + 25;
            r.m_width = 440.0 / 480 * this.m_winWidth;
            r.m_height = 140;
            this.brightenNotiLayerBgRect(r);
        };
        CPraDifficultScene.prototype.prepareTipBalloons = function () {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraDifficultScene.prototype.onTipBalloon1Close = function (evt) {
            this.m_tipBalloon2.visible = true;
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon2Close, this);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraDifficultScene.prototype.onTipBalloon2Close = function (evt) {
            this.enabled = true;
            this.recoverNotiLayerBg();
            this.m_notiLayer.visible = false;
        };
        /*
        * 顶部按钮触摸后触发。
        */
        CPraDifficultScene.prototype.onTopBtnTab = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            if (this.m_topOpen) //Already open,close it.
             {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.midArea.setTrueHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                var tw_bgUnderTop = egret.Tween.get(this.bgUnderTopGrp);
                var targetTopY = -(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
                tw.to({ y: targetTopY }, 300);
                tw_bgUnderTop.to({ y: targetTopY }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSClosed, this);
                timer.start();
            }
            else //Already closed,open it.
             {
                this.m_topOpen = true;
                this.m_wm.showTop();
                var tw = egret.Tween.get(this.topArea);
                var tw_bgUnderTop = egret.Tween.get(this.bgUnderTopGrp);
                tw.to({ y: 0 }, 300);
                tw_bgUnderTop.to({ y: 0 }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSOpen, this);
                timer.start();
            }
        };
        /*
        * 顶部区域展开完成时触发。
        */
        CPraDifficultScene.prototype.timerTSOpen = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.readjustThumbSel();
        };
        /*
        * 顶部区域关闭完成时触发。
        */
        CPraDifficultScene.prototype.timerTSClosed = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(0);
            this.readjustThumbSel();
        };
        CPraDifficultScene.prototype.onImgDragMove = function (evt) {
            this.readjustThumbSel();
        };
        CPraDifficultScene.prototype.onImgDragEnd = function (evt) {
            this.readjustThumbSel();
        };
        // 处理外部投递到此类的消息。
        CPraDifficultScene.prototype.sendMsg = function (msgType, msgObj) {
            var retObj = null;
            /*
                msgType表（CPraEasyScene)：
                    onCaliDlgClose
            
            */
            if ("getOnCaliDlgCloseFunc" == msgType) {
                console.log("getOnCaliDlgCloseFunc via send message!");
                retObj = this.onCaliDlgClose;
            }
            return retObj;
        };
        /*
        * 横竖校准对话框确定退出时调用。
        */
        CPraDifficultScene.prototype.onCaliDlgClose = function (dlgResult) {
            if (dlgResult) { // OK btn tap.
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                this.m_UIPresenter.updateFromPM();
                this.refreshScene();
            }
            this.m_parentContainer.showPraMenu();
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraDifficultScene.prototype.onCaliBtn = function (evt) {
            this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraDifficultScene.prototype.onMenuBtn = function (evt) {
            this.m_parentContainer.showPraMenu();
        };
        /*
            获取父 container。
        */
        CPraDifficultScene.prototype.getParentContainer = function () {
            return this.m_parentContainer;
        };
        /*
        * 点击“返回”按钮时触发。
        */
        CPraDifficultScene.prototype.backBtnTap = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraDifficultScene.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                this.finalScoreDlg.visible = false;
                CGlobals.g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        /*
        * 创建底部菜单。
        */
        CPraDifficultScene.prototype.createBottomMenu = function () {
        };
        /*
        * 重置场景各元素状态以便进行新一轮练习。
        */
        CPraDifficultScene.prototype.resetSceneElems = function () {
            this.m_cmpLenDlg.visible = false;
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
        };
        /*
        * 刷新场景。通常新练习开始时，资源加载完成后调用。
        */
        CPraDifficultScene.prototype.recreateScene = function () {
            this.resetSceneElems();
            //        1、Reset Img content & location
            this.showLen(this.m_pm.getCurLen());
            if (this.m_NoImgMode) {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(720);
            }
            else {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            }
            var tmpSelRect = new gdeint.CRect();
            tmpSelRect.m_left = 0;
            tmpSelRect.m_top = 0;
            tmpSelRect.m_width = this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat();
            tmpSelRect.m_height = this.m_wm.getMidHeight();
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //reset thumb & thumbSel
            this.readjustThumb();
            this.readjustThumbSel();
            //        2、Progress bar and score to 0
            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.clearScore();
            //        3、Ruler user and OK button
            this.m_UIPresenter.m_userLen = 0;
            this.bottomArea.lenInputer.clearLen();
            this.showInitInstrus();
            this.bottomArea.lenInputer.unlock();
        };
        CPraDifficultScene.prototype.refreshScene = function () {
            //数据源：m_pm、m_wm、m_UIPresenter。
            {
                //本大括号内代码根据 m_pm、m_wm更新 m_UIPresenter。不得对 m_pm、m_wm进行修改。
                this.m_UIPresenter.updateFromPM();
                this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            }
            // 本函数内此后代码不得对数据源进行修改！
            // Img
            this.midArea.readjustCircler();
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            if (this.m_NoImgMode) {
                this.midArea.m_randomGraphShape.resize(imgRect.m_width, imgRect.m_height);
            }
            else {
                this.midArea.imgFromFile.width = imgRect.m_width;
                this.midArea.imgFromFile.height = imgRect.m_height;
            }
            var tmpLen;
            tmpLen = this.m_UIPresenter.getLen();
            if (tmpLen && null != tmpLen) {
                if (this.m_NoImgMode) {
                    // 要加上这三行缩略图才显示正常。原因未知。
                    this.m_imgOriWidth = 1024;
                    this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                    this.m_UIPresenter.setImgHeight(720);
                }
                else {
                    this.showImg(tmpLen.m2_imgResName);
                }
            }
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = this.m_UIPresenter.getImgRect().m_left;
            inpPos.m_y = this.m_UIPresenter.getImgRect().m_top;
            this.midArea.m_imgCircler.setInpPos(inpPos);
            var inpPosFinal = this.midArea.m_imgCircler.getOutpPos();
            console.log("inpPosFinal:[" + inpPosFinal.m_x + "," + inpPosFinal.m_y + "]");
            this.midArea.midContentGroup.x = inpPosFinal.m_x;
            this.midArea.midContentGroup.y = inpPosFinal.m_y;
            var newImgSelPt = new gdeint.CPoint();
            newImgSelPt.m_x = -inpPosFinal.m_x;
            newImgSelPt.m_y = -inpPosFinal.m_y + this.midArea.m_visibleStartY;
            this.midArea.m_UIPresenter.inpImgSelPt(newImgSelPt);
            // Len
            this._showLen(tmpLen);
            this.m_topSpace.height = CGlobals.g_topSpaceHeight;
            this.m_topSpace.setColor(0xDDDDDD);
            this.m_topSpace.redraw();
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.topArea.setTrueHeight(this.m_wm.getTopHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.bottomAreaGroup.y = this.m_wm.getBottomY();
            this.bottomArea.setTrueHeight(this.m_wm.getBottomHeight());
            // Thumb
            this.readjustThumb();
            // ThumbQuestioner
            var questionerPt;
            questionerPt = this.m_UIPresenter.getThumbQuestionerDispCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = questionerPt.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = questionerPt.m_y - 11;
            // ThumbSel
            this.readjustThumbSel();
        };
        return CPraDifficultScene;
    }(CCommonEyelenPraScene));
    eyelen4.CPraDifficultScene = CPraDifficultScene;
    __reflect(CPraDifficultScene.prototype,"eyelen4.CPraDifficultScene",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/CPraEasyScene.ts":
/***/ (function(module, exports) {

// /src/UI/scenes/Eyelen/CPraEasyScene.ts
/**
 *
 * 简单难度练习画面场景。
 * 分为顶部、中部、底部三大区域。
 *  顶部区域可收缩和展开，显示缩略图，得分和进度。
 *  中部区域显示背景图片和待测长度。
 *  底部区域显示用户长度输入控件和菜单。
 *
 * 拖动中部区域的图片或点击顶部区域的缩略图均可变换屏幕选择区域。
 *
 */
var MSG_PICS_PRELOAD_FINISHED = 1; // 事件ID。练习图片json加载完成。
window["MSG_PICS_PRELOAD_FINISHED"] = MSG_PICS_PRELOAD_FINISHED;
var MSG_IMGS_PRELOAD_FINISHED = 2; // 事件ID。练习图片加载完成。
window["MSG_IMGS_PRELOAD_FINISHED"] = MSG_IMGS_PRELOAD_FINISHED;
var s_topRightWidth = 250; // 顶部右边宽度。
window["s_topRightWidth"] = s_topRightWidth;
var s_topRightHeight1 = 70; // 顶部收起时的高度。
window["s_topRightHeight1"] = s_topRightHeight1;
var s_cellWidth = 20; // 拉尺每格的宽度。
window["s_cellWidth"] = s_cellWidth;
var eyelen4 = window['eyelen4']; 
/*
 * 画面初始化方法：
 *  1、创建对象。
 *  2、setWinWidth/setWinHeight。
 *  3、startNewPra。
 */
var eyelen4;
(function (eyelen4) {
    var CPraEasyScene = /** @class */ (function (_super) {
        __extends(CPraEasyScene, _super);
        /////////////////////////////////////////////////////////////////////////////
        function CPraEasyScene() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.x = 0;
            _this.y = 0;
            _this.m_topOpen = true;
            _this.m_wm = new CEyelen4WinModel();
            _this.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            _this.m_wm.setTopHeight1(30);
            _this.m_wm.setTopHeight2(190);
            _this.m_wm.showTop();
            _this.m_wm.setBottomHeight(300);
            _this.m_pm = new CEyelen3EPraMachineEasy(); //部件没改动，继续使用上一代的。
            _this.m_UIPresenter = new CEyelen4PraEasyPresenter();
            _this.m_UIPresenter.bindPM(_this.m_pm);
            _this.m_tipBalloon1 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon1.visible = false;
            _this.m_tipBalloon2 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon2.visible = false;
            _this.m_imgOriWidth = 0;
            _this.m_imgHorSpace = 100;
            _this.m_imgVerSpace = 80;
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_isImgMoving = false;
            _this.m_topSpace = new CTopSpace_Eyelen();
            _this.m_curPicTag = -1; //Refresh when showImg.
            _this.m_curRoundTag = -1;
            _this.m2_isFirstPra = true;
            return _this;
        }
        CPraEasyScene.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(24);
            this.midArea.m_UIPresenter = this.m_UIPresenter;
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.m_bgUnderTop = new egret.Shape();
            this.bgUnderTopGrp.addChild(this.m_bgUnderTop);
            //            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.backBtnTap , this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.bottomArea.menuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuBtn, this);
            this.bottomArea.lenInputer.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKButtonTap, this);
            this.shutdownClock.setTimer(CGlobals.g_shutdownTimer); // 关联全局计时器以显示时间。
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
            this.m2_cc = true;
        };
        CPraEasyScene.prototype._setParentContainer = function (c) {
            // 设置父容器，以使用各种提示框等。
            _super.prototype._setParentContainer.call(this, c);
            this.m_UIPresenter.setRenderFilter(this.getParentContainer()._getRenderFilter());
        };
        CPraEasyScene.prototype.getPM = function () {
            return this.m_pm;
        };
        CPraEasyScene.prototype.setLenArr = function (la) {
            this.m_pm.setLenArr(la);
        };
        CPraEasyScene.prototype.getCurPicTag = function () {
            return this.m_curPicTag;
        };
        /*
        * 初始化长度比较对话框。
        */
        CPraEasyScene.prototype.initCmpLenDlg = function () {
            this.m_cmpLenDlg = new eyelen4.CGridCmpLenDlg();
            this.m_cmpLenDlg.x = this.m_winWidth * 0.15; //(this.m_winWidth-400)/2;
            this.m_cmpLenDlg.y = this.m_winHeight * 0.3; //200;
            var cmpLenDlgTrueWidth = this.m_winWidth * 0.7;
            this.m_cmpLenDlg.setTrueWidth(cmpLenDlgTrueWidth);
            this.m_cmpLenDlg.setTrueHeight(cmpLenDlgTrueWidth * 350 / 400);
            this.m_cmpLenDlg.visible = false;
            this.m_cmpLenDlg.onNextBtnEvent(egret.TouchEvent.TOUCH_TAP, this.onNextButtonTap, this);
            this.addChild(this.m_cmpLenDlg);
        };
        /*
        * 触摸“下一长度”按钮后触发。
        */
        CPraEasyScene.prototype.onNextButtonTap = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.hideCmpLenDlg();
            var p;
            p = this.m_pm.getCmplProgress();
            if (p >= 10) // Practice finished
             {
                this.bottomArea.lenInputer.lock();
                var score = this.m_pm.getCurScore();
                this.finalScoreDlg.setScore(score);
                this.finalScoreDlg.visible = true;
                if (score >= 270) {
                    this.finalScoreDlg.setStars(3);
                }
                else if (score >= 240) {
                    this.finalScoreDlg.setStars(2);
                }
                else if (score >= 180) {
                    this.finalScoreDlg.setStars(1);
                }
                else {
                    this.finalScoreDlg.setStars(0);
                    this._getParentContainer().showAlert("成绩很差哟！\n别灰心，继续努力！！", this.onFailurePanelClose);
                }
            }
            else {
                this.m_UIPresenter.nextLen();
                this.m_UIPresenter.setUserGridCnt(0);
                this.bottomArea.lenInputer.clearLen();
                this.bottomArea.lenInputer.unlock();
                this.showLen(this.m_pm.getCurLen());
            }
        };
        CPraEasyScene.prototype.onFailurePanelClose = function (evt) {
            //Nothing to do here.
        };
        /*
        * 显示长度比较对话框。
        */
        CPraEasyScene.prototype.showCmpLenDlg = function () {
            var r = this.m_UIPresenter.m_curRank;
            this.m_cmpLenDlg.setScore(10 * r);
            var correOriLen = this.m_pm.getCurLen();
            this.m_cmpLenDlg.setCorreLen(this.m_pm.getCurLen().m_length * this.m_UIPresenter.getRenderFilter()._getCaRat());
            var gridWidth = this.bottomArea.lenInputer.getGridWidth();
            var gridCnt = this.bottomArea.lenInputer.getUserGridCnt();
            this.m_cmpLenDlg.setUserGridWidth(gridWidth);
            this.m_cmpLenDlg.setUserGridCnt(gridCnt);
            this.m_cmpLenDlg.visible = true;
            var curLen = this.m_pm.getCurLen();
        };
        CPraEasyScene.prototype.hideCmpLenDlg = function () {
            this.m_cmpLenDlg.visible = false;
        };
        /*
        * “确定”按钮点击后触发。提交用户输入的长度。
        */
        CPraEasyScene.prototype.onOKButtonTap = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.m_UIPresenter.setUserGridCnt(this.bottomArea.lenInputer.getUserGridCnt());
            this.m_UIPresenter.submitLen();
            this.showCmpLenDlg();
            this.bottomArea.lenInputer.lock();
            var r = this.m_pm.getLastLenRank();
            var curScore = this.m_pm.getCurScore();
            var curPro = this.m_pm.getCmplProgress();
            this.topArea.scoreView.setScoreWithPro(curScore, curPro);
            this.topArea.progressView.setProgress(curPro);
        };
        CPraEasyScene.prototype.replayBtnTouched = function () {
            //        start next pra      
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            this.getParentContainer().startNewPra();
        };
        CPraEasyScene.prototype.onClockTap = function () {
            CGlobals.g_praEasyContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        CPraEasyScene.prototype.startNewPra = function () {
            this.m_pm.startPra();
            if (this.m2_isFirstPra) {
                this.m2_isFirstPra = false;
                this.createScene();
            }
            else {
                this.resetScene();
            }
        };
        /*
        * 重新调整缩略图。
        * 修改 m_itm 后应运行本函数。
        */
        CPraEasyScene.prototype.readjustThumb = function () {
            //Affect:thumb
            //Do not affect:thumbSel,thumbQuestioner
            var thRect = this.m_UIPresenter.getThumbRect();
            this.topArea.thumbUI.x = thRect.m_left / 480 * this.m_winWidth;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
            if (!this.m_NoImgMode) {
                this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
            }
        };
        /*
        * 重新调整缩略图选框。
        * 修改 m_itm 或图片选区变化后应调用本函数。
        */
        CPraEasyScene.prototype.readjustThumbSel = function () {
            var tsr = this.m_UIPresenter.getThumbSelRect();
            this.topArea.thumbUI.setSelRect(tsr);
        };
        /*
        * 根据某一长度对象在缩略图显示问号。
        * 修改 m_itm 或进入新的长度时应调用本函数。此时参数应传入当前长度。
        */
        CPraEasyScene.prototype.showThumbQuestioner = function (len) {
            var tmpLen = this.m_pm.getCurLen();
            var tmpPoint = new gdeint.CPoint();
            var tmpPoint2 = new gdeint.CPoint();
            tmpPoint.m_x = tmpLen.m_x + tmpLen.m_length / 2;
            tmpPoint.m_y = tmpLen.m_y;
            var qdp = this.m_UIPresenter.getThumbQuestionerDispPt();
            this.topArea.thumbUI.thumbQuestioner.x = qdp.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = qdp.m_y - 11;
        };
        /*
        * 在屏幕显示图片。
        */
        CPraEasyScene.prototype.showImg = function (imgResName) {
            //注：Png图片的渐变等特效很可能会对长度显示造成影响！须谨慎！
            if (this.m_NoImgMode) {
            }
            else {
                var oldImgResName = this.m_curImgResName;
                var tmpImg = new egret.Bitmap();
                tmpImg.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
                this.m_imgOriWidth = tmpImg.width;
                var tmpBitmap = new egret.Bitmap();
                tmpBitmap.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
                this.midArea.imgFromFile.$setBitmapData(tmpBitmap.texture);
                this.midArea.imgFromFile.width = this.m_UIPresenter.getImgRect().m_width;
                this.midArea.imgFromFile.height = tmpImg.height;
                this.m_curImgResName = imgResName;
                this.topArea.thumbUI.setImgSrc(imgResName);
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
                this.midArea.imgFromFile.width = this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat();
                /*
                    换了图片：框移到右上角；
                    没换图片：框回到原来的位置：
                */
                if (oldImgResName == this.m_curImgResName) {
                }
                else {
                    var selPt = new gdeint.CPoint();
                    selPt.m_x = 0;
                    selPt.m_y = 0;
                    this.m_UIPresenter.inpImgSelPt(selPt);
                    this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                    this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
                    var imgRect;
                    imgRect = this.m_UIPresenter.getImgRect();
                    this.midArea.midContentGroup.x = imgRect.m_left;
                    this.midArea.midContentGroup.y = imgRect.m_top;
                }
            }
            this.readjustThumb();
            this.readjustThumbSel();
        };
        /*
            使用无图模式时，随机图形在这函数生成。
        */
        CPraEasyScene.prototype.showRandomGraph = function () {
            this.m_imgOriWidth = 1024;
            try {
                this.midArea.randomGraph.removeChild(this.midArea.m_randomGraphShape);
            }
            catch (e) {
            }
            this.midArea.m_randomGraphShape.genGraph(1024, 720);
            this.midArea.m_randomGraphShape.visible = true;
            this.midArea.randomGraph.visible = true;
            this.midArea.randomGraph.addChild(this.midArea.m_randomGraphShape);
            this.midArea.imgFromFile.visible = false;
            this.topArea.thumbUI.setShape(this.midArea.m_randomGraphShape);
            //                this.topArea.thumbUI.setImgSrc(imgResName);
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(720);
            this.midArea.m_randomGraphShape.resize(this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat(), 720);
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            this.midArea.midContentGroup.x = imgRect.m_left;
            this.midArea.midContentGroup.y = imgRect.m_top;
            this.readjustThumb();
            this.readjustThumbSel();
        };
        /*
        * 在屏幕显示一个长度。不带图片，也不更新presenter。
        */
        CPraEasyScene.prototype._showLen = function (len) {
            this.m_lenEdgeCanvas.graphics.drawRect(0, 0, 5, 60);
            this.m_lenEdgeCanvas.graphics.clear();
            if (len.m_isHor) {
                //Draw questioner:
                this.m_lenQuestioner.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() + len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() / 2 - 10;
                this.m_lenQuestioner.y = len.m_y - 20;
                //Draw two edges:
                var tmpRect1 = this.m_UIPresenter.getLenEdge1DispRect();
                var tmpRect2 = this.m_UIPresenter.getLenEdge2DispRect();
                this.m_lenEdgeCanvas.x = tmpRect1.m_left;
                this.m_lenEdgeCanvas.y = tmpRect1.m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, tmpRect1.m_width, tmpRect1.m_height); //Edge1
                var edge2X, edge2Y;
                edge2X = tmpRect2.m_left - tmpRect1.m_left;
                edge2Y = tmpRect2.m_top - tmpRect1.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, tmpRect2.m_width, tmpRect2.m_height); //Edge2
                this.m_lenEdgeCanvas.graphics.endFill();
            }
            else {
                var tmpRect1, tmpRect2, tmpPt;
                //Draw questioner:
                tmpPt = this.m_UIPresenter.getLenQuestionerDispPt();
                var tmpFontSize = this.m_UIPresenter.getLenQuestionerFontSize();
                this.m_lenQuestioner.x = tmpPt.m_x;
                this.m_lenQuestioner.y = tmpPt.m_y;
                this.m_lenQuestioner.size = tmpFontSize;
                //Draw two edges:
                tmpRect1 = this.m_UIPresenter.getLenEdge1DispRect();
                tmpRect2 = this.m_UIPresenter.getLenEdge2DispRect();
                this.m_lenEdgeCanvas.x = this.m_UIPresenter.getLenEdge1DispRect().m_left;
                this.m_lenEdgeCanvas.y = this.m_UIPresenter.getLenEdge1DispRect().m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, tmpRect1.m_width, tmpRect1.m_height);
                var edge2X, edge2Y;
                edge2X = tmpRect2.m_left - tmpRect1.m_left;
                edge2Y = tmpRect2.m_top - tmpRect1.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, tmpRect2.m_width, tmpRect2.m_height);
                this.m_lenEdgeCanvas.graphics.endFill();
            }
        };
        /*
        * 在屏幕显示一个长度。图片也会一起显示。
        */
        CPraEasyScene.prototype.showLen = function (len) {
            this.m_UIPresenter.showLen(len);
            if (!this.m_NoImgMode) {
                this.showImg(len.m2_imgResName);
            }
            else {
                this.showRandomGraph();
            }
            this._showLen(len);
            this.showThumbQuestioner(len);
        };
        /*
        * 缩略图点击时触发。
        */
        CPraEasyScene.prototype.onThumbTap = function (evt) {
            var tmpSelTp = new gdeint.CPoint();
            tmpSelTp.m_x = evt.m_tchX - this.m_UIPresenter.getThumbSelRect().m_width / 2;
            tmpSelTp.m_y = evt.m_tchY - this.m_UIPresenter.getThumbSelRect().m_height / 2;
            this.m_UIPresenter.inpThSelPt(tmpSelTp);
            //            this.syncWithUIPresenter();
            this.refreshScene();
        };
        /*
        * 创建顶部区域。
        */
        CPraEasyScene.prototype.createTop = function () {
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.m_bgUnderTop.x = 0;
            this.m_bgUnderTop.y = 0;
            this.m_bgUnderTop.width = this.m_winWidth;
            this.m_bgUnderTop.height = this.m_wm.getTopHeight();
            this.m_bgUnderTop.graphics.beginFill(0x00FF00);
            this.m_bgUnderTop.graphics.drawRect(0, 0, this.m_bgUnderTop.width, this.m_bgUnderTop.height);
            this.m_bgUnderTop.graphics.endFill();
            var winWidth, topHeight;
            winWidth = this.m_wm.getWinWidth();
            this.topArea.setTrueWidth(winWidth);
            topHeight = this.m_wm.getTopHeight2();
            this.topArea.setTrueHeight(topHeight);
            this.m_UIPresenter.setImgWidth(160);
            this.m_UIPresenter.setImgHeight(160);
            this.m_imgOriWidth = 160;
            this.m_lenView = new egret.DisplayObjectContainer();
            this.m_lenEdgeCanvas = new egret.Shape();
            this.m_lenQuestioner = new egret.TextField();
            this.m_lenQuestioner.textColor = 0xFF0000;
            this.m_lenQuestioner.size = 36;
            this.m_lenQuestioner.text = "?";
            this.midArea.midCanvasGrp.addChild(this.m_lenEdgeCanvas);
            this.midArea.midCanvasGrp.addChild(this.m_lenQuestioner);
            //Calculate for thumb and thumbSel（计算结果保存在presenter）:
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //先在这里添加listener，后面统一调整的时候会调整缩略图显示位置等:
            this.topArea.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP, this.onThumbTap, this);
            this.topArea.visible = true;
            this.topArea.addEventListener(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP, this.onTopBtnTab, this);
            this.topAreaGroup.y = this.m_wm.getTopY();
        };
        /*
        * 创建中间区域。
        */
        CPraEasyScene.prototype.createMid = function () {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
        };
        /*
        * 创建底部区域。
        */
        CPraEasyScene.prototype.createBottom = function () {
            var bottomY, bottomHeight;
            bottomY = this.m_wm.getBottomY();
            this.bottomAreaGroup.y = bottomY;
            bottomHeight = this.m_wm.getBottomHeight();
            this.bottomArea.setTrueWidth(this.m_winWidth);
            this.bottomArea.setTrueHeight(bottomHeight);
        };
        /*
        * 资源加载完成后，运行此函数创建场景。
        */
        CPraEasyScene.prototype.createScene = function () {
            _super.prototype.createScene.call(this);
            this.m_wm.setWinWidth(this.m_winWidth);
            this.m_wm.setWinHeight(this.m_winHeight);
            this.m_topSpace.setColor(0xFFFFFF);
            this.m_topSpace.x = 0;
            this.m_topSpace.y = 0;
            this.m_topSpace.width = this.m_wm.getWinWidth();
            this.m_topSpace.height = this.m_wm.getTopSpaceHeight();
            this.m_topSpace.draw();
            this.midArea.imgFromFile.fillMode = egret.BitmapFillMode.SCALE;
            this.midArea.imgFromFile.x = 0;
            this.midArea.imgFromFile.y = 0;
            this.midArea.imgFromFile.width = 160;
            this.midArea.imgFromFile.height = 160;
            this.createTop();
            this.createMid();
            this.createBottom();
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGMOVE, this.onImgDragMove, this);
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND, this.onImgDragEnd, this);
            this.addChild(this.m_topSpace);
            this.finalScoreDlg.left = (this.m_winWidth - this.finalScoreDlg.width) / 2;
            this.finalScoreDlg.visible = false;
            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP, this.replayBtnTouched, this);
            this.initCmpLenDlg();
            //OK to start and show first len. （对于无图模式此处代码未必正确）
            var firstLen = this.m_pm.getCurLen();
            this.m_UIPresenter.showLen(firstLen);
            //            this.syncWithUIPresenter();
            this.refreshScene();
            this.showInitInstrus();
        };
        /*
        * 显示开始练习时的提示说明。
        */
        CPraEasyScene.prototype.showInitInstrus = function () {
            this.prepareTipBalloons();
            var balloonX = CGlobals.g_scenePos.m_x + 65 * CGlobals.g_scale;
            var balloonY = CGlobals.g_scenePos.m_y + /*190**/ 230 * CGlobals.g_scale;
            this.m_tipBalloon1.x = balloonX * 0.9;
            this.m_tipBalloon1.y = balloonY;
            this.m_tipBalloon1.scaleX = CGlobals.g_scale;
            this.m_tipBalloon1.scaleY = CGlobals.g_scale;
            this.m_tipBalloon1.title = "提示";
            this.m_tipBalloon1.setContent("请目测图上“？”处显示的长度，并点击格子输入您目测的结果。");
            this.m_tipBalloon1.visible = true;
            this.disableScene();
            this.m_tipBalloon2.x = balloonX * 1.1;
            this.m_tipBalloon2.y = balloonY;
            this.m_tipBalloon2.scaleX = CGlobals.g_scale;
            this.m_tipBalloon2.scaleY = CGlobals.g_scale;
            this.m_tipBalloon2.title = "提示";
            this.m_tipBalloon2.setContent("请目测图上“？”处显示的\n长度并点击格子输入您目测的结果。");
            this.m_tipBalloon2.visible = false; //隐藏气球2以防两个重叠显示。
            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon1Close, this);
            //此时尺子亮起来，屏幕其它内容变灰，直到关闭气球：
            var r = new gdeint.CRect();
            r.m_left = 5;
            r.m_top = this.m_wm.getBottomY() + 25;
            r.m_width = 440.0 / 480 * this.m_winWidth;
            r.m_height = 140;
            this.brightenNotiLayerBgRect(r);
        };
        CPraEasyScene.prototype.prepareTipBalloons = function () {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraEasyScene.prototype.onTipBalloon1Close = function (evt) {
            this.m_tipBalloon2.visible = true;
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon2Close, this);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraEasyScene.prototype.onTipBalloon2Close = function (evt) {
            this.enabled = true;
            this.recoverNotiLayerBg(); //make ruler dark again for other disable scene actions.
            this.m_notiLayer.visible = false;
            //                this.midArea.imgFromFile.texture = this.m_parentContainer._getResLoader().getRes("img_017_png");
        };
        /*
        * 顶部按钮触摸后触发。
        */
        CPraEasyScene.prototype.onTopBtnTab = function (evt) {
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            if (this.m_topOpen) //Already open,close it.
             {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.midArea.setTrueHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                var tw_topBg = egret.Tween.get(this.bgUnderTopGrp);
                var targetTopY = -(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
                tw.to({ y: targetTopY }, 300);
                tw_topBg.to({ y: targetTopY }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSClosed, this);
                timer.start();
            }
            else //Already closed,open it.
             {
                this.m_topOpen = true;
                this.m_wm.showTop();
                var tw = egret.Tween.get(this.topArea);
                var tw_topBg = egret.Tween.get(this.bgUnderTopGrp);
                tw.to({ y: 0 }, 300);
                tw_topBg.to({ y: 0 }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSOpen, this);
                timer.start();
            }
        };
        /*
        * 顶部区域展开完成时触发。
        */
        CPraEasyScene.prototype.timerTSOpen = function (event) {
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");
            var tmpRect;
            tmpRect = this.m_UIPresenter.getImgRect();
            var imgSelPt;
            imgSelPt = new gdeint.CPoint();
            imgSelPt.m_x = -tmpRect.m_left;
            imgSelPt.m_y = -tmpRect.m_top + this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1();
            this.m_UIPresenter.inpImgSelPt(imgSelPt);
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.readjustThumbSel();
        };
        /*
        * 顶部区域关闭完成时触发。
        */
        CPraEasyScene.prototype.timerTSClosed = function (event) {
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");
            var tmpRect;
            tmpRect = this.m_UIPresenter.getImgRect();
            var imgSelPt;
            imgSelPt = new gdeint.CPoint();
            imgSelPt.m_x = -tmpRect.m_left;
            imgSelPt.m_y = -tmpRect.m_top;
            this.m_UIPresenter.inpImgSelPt(imgSelPt);
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(0);
            this.readjustThumbSel();
        };
        CPraEasyScene.prototype.onImgDragMove = function (evt) {
            this.readjustThumbSel();
        };
        CPraEasyScene.prototype.onImgDragEnd = function (evt) {
            this.readjustThumbSel();
        };
        // 处理外部投递到此类的消息。
        CPraEasyScene.prototype.sendMsg = function (msgType, msgObj) {
            var retObj = null;
            /*
                msgType表（CPraEasyScene)：
                    onCaliDlgClose
            
            */
            if ("getOnCaliDlgCloseFunc" == msgType) {
                console.log("getOnCaliDlgCloseFunc via send message!");
                retObj = this.onCaliDlgClose;
            }
            return retObj;
        };
        /*
        * 横竖校准对话框确定退出时调用。
        */
        CPraEasyScene.prototype.onCaliDlgClose = function (dlgResult) {
            if (dlgResult) { // OK btn tap.
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                var newGridWidth = this.m_UIPresenter.getRenderFilter().xOConv(30);
                this.bottomArea.lenInputer.setGridWidth(newGridWidth);
                this.m_pm.setGridDispWidth(newGridWidth);
                //                this.m_UIPresenter.updateFromPM();
                //                this.syncWithUIPresenter();
                this.refreshScene();
            }
            this.m_parentContainer.showPraMenu();
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraEasyScene.prototype.onCaliBtn = function (evt) {
            this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraEasyScene.prototype.onMenuBtn = function (evt) {
            this.m_parentContainer.showPraMenu();
        };
        /*
            获取父 container。
        */
        CPraEasyScene.prototype.getParentContainer = function () {
            return this.m_parentContainer;
        };
        /*
        * 点击“返回”按钮时触发。
        */
        CPraEasyScene.prototype.backBtnTap = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraEasyScene.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                this.resetSceneElems();
                CGlobals.g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        /*
        * 创建底部菜单。
        */
        CPraEasyScene.prototype.createBottomMenu = function () {
        };
        /*
        * 重置场景各元素状态。
        */
        CPraEasyScene.prototype.refreshSceneElems = function () {
            this.m_topSpace.height = CGlobals.g_topSpaceHeight;
            this.m_topSpace.setColor(0xDDDDDD);
            this.m_topSpace.redraw();
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.topArea.setTrueHeight(this.m_wm.getTopHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.bottomAreaGroup.y = this.m_wm.getBottomY();
            this.bottomArea.setTrueHeight(this.m_wm.getBottomHeight());
            this.m_cmpLenDlg.visible = false;
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
        };
        CPraEasyScene.prototype.resetSceneElems = function () {
            this.refreshSceneElems();
        };
        /*
        * 重置场景。通常新练习开始时，资源加载完成后调用。
        */
        CPraEasyScene.prototype.resetScene = function () {
            //        1、Reset Img content & location
            this.refreshSceneElems();
            this.showLen(this.m_pm.getCurLen());
            if (this.m_NoImgMode) {
                this.m_UIPresenter.setImgWidth(1024);
                this.m_UIPresenter.setImgHeight(720);
            }
            else {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            }
            var tmpSelRect = new gdeint.CRect();
            tmpSelRect.m_left = 0;
            tmpSelRect.m_top = 0;
            tmpSelRect.m_width = this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat();
            tmpSelRect.m_height = this.m_wm.getMidHeight();
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //reset thumb & thumbSel
            this.readjustThumb();
            this.readjustThumbSel();
            //        2、Progress bar and score to 0
            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.clearScore();
            //        3、Ruler user and OK button
            this.m_UIPresenter.m_userGCnt = 0;
            this.showInitInstrus();
        };
        // 根据数据模型对象的内容刷新画面。需要createScene后才能正常调用。
        CPraEasyScene.prototype.refreshScene = function () {
            //数据源：m_pm、m_UIPresenter、m_wm
            {
                // 根据数据源：m_pm、m_wm 更新 m_UIPresenter。本大括号里不得对数据源进行修改！
                this.m_UIPresenter.updateFromPM();
                this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            }
            // 本函数里此后代码不得对数据源进行修改：
            this.m_topSpace.height = CGlobals.g_topSpaceHeight;
            this.m_topSpace.setColor(0xDDDDDD);
            this.m_topSpace.redraw();
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.topArea.setTrueHeight(this.m_wm.getTopHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.bottomAreaGroup.y = this.m_wm.getBottomY();
            this.bottomArea.setTrueHeight(this.m_wm.getBottomHeight());
            this.m_cmpLenDlg.visible = false;
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            // Img
            this.midArea.readjustCircler();
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            if (!this.m_NoImgMode) {
                this.midArea.imgFromFile.width = imgRect.m_width;
                this.midArea.imgFromFile.height = imgRect.m_height;
            }
            else {
                this.midArea.m_randomGraphShape.resize(imgRect.m_width, imgRect.m_height);
            }
            var tmpLen;
            tmpLen = this.m_UIPresenter.getLen();
            if (tmpLen && null != tmpLen) {
                if (!this.m_NoImgMode) {
                    this.showImg(tmpLen.m2_imgResName);
                }
                else {
                    //                    this.showRandomGraph();
                }
            }
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = this.m_UIPresenter.getImgRect().m_left;
            inpPos.m_y = this.m_UIPresenter.getImgRect().m_top;
            this.midArea.m_imgCircler.setInpPos(inpPos);
            var inpPosFinal = this.midArea.m_imgCircler.getOutpPos();
            this.midArea.midContentGroup.x = inpPosFinal.m_x;
            this.midArea.midContentGroup.y = inpPosFinal.m_y;
            console.log("inpPosFinal:[" + inpPosFinal.m_x + "," + inpPosFinal.m_y + "]");
            var newImgSelPt = new gdeint.CPoint();
            newImgSelPt.m_x = -inpPosFinal.m_x;
            newImgSelPt.m_y = -inpPosFinal.m_y + this.midArea.m_visibleStartY;
            this.midArea.m_UIPresenter.inpImgSelPt(newImgSelPt);
            this.showLen(this.m_pm.getCurLen());
            var tmpSelRect = new gdeint.CRect();
            tmpSelRect.m_left = 0;
            tmpSelRect.m_top = 0;
            tmpSelRect.m_width = this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat();
            tmpSelRect.m_height = this.m_wm.getMidHeight();
            //reset thumb & thumbSel
            this.readjustThumb();
            this.readjustThumbSel();
            //        2、Progress bar and score to 0
            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.clearScore();
        };
        return CPraEasyScene;
    }(CCommonEyelenPraScene));
    eyelen4.CPraEasyScene = CPraEasyScene;
    __reflect(CPraEasyScene.prototype,"eyelen4.CPraEasyScene",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/IEyelenPraScene.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CAdjustTopDlg.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CAdjustTopDlg = /** @class */ (function (_super) {
        __extends(CAdjustTopDlg, _super);
        function CAdjustTopDlg() {
            return _super.call(this) || this;
        }
        CAdjustTopDlg.prototype.childrenCreated = function () {
            console.log("Children created in CAdjustTop!");
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelBtn, this);
            this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKBtn, this);
            this.applyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onApplyBtn, this);
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelBtn, this);
        };
        CAdjustTopDlg.prototype.onOKBtn = function () {
            this.onApplyBtn();
            this.visible = false;
        };
        CAdjustTopDlg.prototype.onApplyBtn = function () {
            console.log("Applying new topspace!");
            var tmpTH = parseInt(this.topSpaceInp.text);
            if (tmpTH < 0)
                tmpTH = 0;
            else if (tmpTH > 200)
                tmpTH = 200;
            CGlobals.g_topSpaceHeight = tmpTH;
            console.log("New topspace height(num):" + CGlobals.g_topSpaceHeight);
            CGlobals.g_praEasyScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            CGlobals.g_praDiffProScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            CGlobals.g_praDifficultScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            if (CGlobals.g_praEasyScene.m_created) {
                CGlobals.g_praEasyScene.refreshScene();
            }
            if (CGlobals.g_praDiffProScene.m_created) {
                CGlobals.g_praDiffProScene.refreshScene();
            }
            if (CGlobals.g_praDifficultScene.m_created) {
                CGlobals.g_praDifficultScene.refreshScene();
            }
            if (CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_ANDROID) {
                egret.ExternalInterface.call("storeTopSpaceHeight", CGlobals.g_topSpaceHeight.toString());
            }
            console.log("Apply finished!");
        };
        CAdjustTopDlg.prototype.onCancelBtn = function () {
            this.visible = false;
        };
        return CAdjustTopDlg;
    }(eui.Component));
    gdeint.CAdjustTopDlg = CAdjustTopDlg;
    __reflect(CAdjustTopDlg.prototype,"gdeint.CAdjustTopDlg",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CBottomAreaDifficult.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/*
 * /src/UI/scenes/Eyelen/partials/CBottomAreaDifficult.ts
 */
var eyelen4;
(function (eyelen4) {
    var CBottomAreaDifficult = /** @class */ (function (_super) {
        __extends(CBottomAreaDifficult, _super);
        function CBottomAreaDifficult() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.m_trueWidth = 480;
            _this.m_trueHeight = 210;
            return _this;
        }
        CBottomAreaDifficult.prototype.childrenCreated = function () {
            this.m2_cc = true;
            this.rearrangeUI();
        };
        CBottomAreaDifficult.prototype.setTrueWidth = function (tw) {
            this.m_trueWidth = tw;
            if (this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if (this.m2_cc) {
                this.rearrangeUI();
            }
        };
        CBottomAreaDifficult.prototype.setTrueHeight = function (th) {
            this.m_trueHeight = th;
            if (this.height < this.m_trueHeight) {
                this.height = this.m_trueHeight;
            }
            if (this.m2_cc) {
                this.rearrangeUI();
            }
        };
        CBottomAreaDifficult.prototype.rearrangeUI = function () {
            this.lenInputer.setWidth(this.m_trueWidth - this.lenInputer.x - 10);
            this.lenInputer.scaleY = 1.2;
            this.menuGroup.y = this.m_trueHeight * 0.6;
            //		adjust the size of the buttons
            var scale;
            scale = 0.32 * this.m_trueHeight / this.caliBtn.height;
            this.menuGroup.scaleY = scale;
            this.menuGroup.scaleX = scale;
        };
        return CBottomAreaDifficult;
    }(eui.Component));
    eyelen4.CBottomAreaDifficult = CBottomAreaDifficult;
    __reflect(CBottomAreaDifficult.prototype,"eyelen4.CBottomAreaDifficult",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CBottomAreaEasy.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/*
 * /src/UI/scenes/Eyelen/partials/CBottomAreaEasy.ts
 * 简单难度底部区域。
*/
var eyelen4;
(function (eyelen4) {
    var CBottomAreaEasy = /** @class */ (function (_super) {
        __extends(CBottomAreaEasy, _super);
        function CBottomAreaEasy() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.m_trueWidth = 480;
            _this.m_trueHeight = 210;
            return _this;
        }
        CBottomAreaEasy.prototype.childrenCreated = function () {
            this.m2_cc = true;
            this.rearrange();
        };
        CBottomAreaEasy.prototype.setTrueWidth = function (tw) {
            this.m_trueWidth = tw;
            if (this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if (this.m2_cc) {
                this.rearrange();
            }
        };
        CBottomAreaEasy.prototype.setTrueHeight = function (th) {
            this.m_trueHeight = th;
            if (this.height < this.m_trueHeight) {
                this.height = this.m_trueHeight;
            }
            if (this.m2_cc) {
                this.rearrange();
            }
        };
        CBottomAreaEasy.prototype.rearrange = function () {
            this.lenInputer.setWidth(this.m_trueWidth - this.lenInputer.x - 10);
            this.lenInputer.scaleY = 1.2;
            this.menuGroup.y = this.m_trueHeight * 0.6;
            //		adjust the size of the buttons
            var scale;
            scale = 0.32 * this.m_trueHeight / this.caliBtn.height;
            this.menuGroup.scaleY = scale;
            this.menuGroup.scaleX = scale;
        };
        return CBottomAreaEasy;
    }(eui.Component));
    eyelen4.CBottomAreaEasy = CBottomAreaEasy;
    __reflect(CBottomAreaEasy.prototype,"eyelen4.CBottomAreaEasy",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CMidAreaDifficult.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 * /src/UI/scenes/Eyelen/partials/CMidAreaDifficult.ts
 * 练习场景中部区域。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CMidAreaDifficult = /** @class */ (function (_super) {
        __extends(CMidAreaDifficult, _super);
        function CMidAreaDifficult() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m_visibleStartY = 0;
            _this.m2_isImgMoving = false;
            _this.m2_cc = false;
            _this.s_horSpace = 80;
            _this.s_verSpace = 80;
            _this.m_imgCircler = new gdeint.CSquareCircler();
            _this.m_bg = new egret.Shape();
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_imgStartPoint = new gdeint.CPoint();
            _this.m_evtImgDragEnd = new CMidAreaEvent_Eyelen(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND);
            _this.m_randomGraphShape = new gdeint.CRandomGraph();
            return _this;
        }
        CMidAreaDifficult.prototype.childrenCreated = function () {
            this.randomGraph.addChild(this.m_randomGraphShape);
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if (0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;
            this.mask = rect;
            this.midBgGrp.addChild(this.m_bg);
            if (CGlobals.S_NO_IMG_MODE) {
                this.m_randomGraphShape.touchEnabled = true;
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            else {
                this.imgFromFile.touchEnabled = true;
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            this.m2_cc = true;
        };
        CMidAreaDifficult.prototype.redrawBg = function () {
            this.m_bg.width = this.getTrueWidth();
            this.m_bg.height = this.m_trueHeight;
            this.m_bg.graphics.clear();
            this.m_bg.graphics.beginFill(0x999999);
            this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
            this.m_bg.graphics.endFill();
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if (0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;
            this.mask = rect; // 超出显示范围部分不显示。
        };
        CMidAreaDifficult.prototype.readjustCircler = function () {
            // 宽度使用校准后的。
            var circlerRect = new gdeint.CRect();
            circlerRect.m_left = 0;
            circlerRect.m_top = this.m_visibleStartY;
            circlerRect.m_width = this.getTrueWidth();
            circlerRect.m_height = this.getTrueHeight() - this.m_visibleStartY;
            this.m_imgCircler.setCirclerRect(circlerRect);
            this.m_imgCircler.setPullGapHor(this.s_horSpace);
            this.m_imgCircler.setPullGapVer(this.s_verSpace);
            this.m_imgCircler.setPushGapHor(this.s_horSpace);
            this.m_imgCircler.setPushGapVer(this.s_verSpace);
            var imgRect = new gdeint.CRect();
            if (CGlobals.S_NO_IMG_MODE) {
                imgRect.m_width = this.randomGraph.width;
                imgRect.m_height = this.randomGraph.height;
            }
            else {
                imgRect.m_width = this.imgFromFile.width;
                imgRect.m_height = this.imgFromFile.height;
            }
            this.m_imgCircler.setItemRect(imgRect);
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = -this.midContentGroup.x;
            inpPos.m_y = -this.midContentGroup.y;
            this.m_imgCircler.setInpPos(inpPos);
        };
        CMidAreaDifficult.prototype.touchBegin = function (evt) {
            this.readjustCircler();
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;
            this.m2_isImgMoving = true;
        };
        CMidAreaDifficult.prototype.touchMove = function (evt) {
            if (this.m2_isImgMoving) {
                if (evt.target == this.imgFromFile) {
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var inpPos = new gdeint.CPoint();
                    inpPos.m_x = newX;
                    inpPos.m_y = newY;
                    this.m_imgCircler.setInpPos(inpPos);
                    var outPos;
                    outPos = this.m_imgCircler.getOutpPos(); // 若超出可拖动范围，则限制移动。
                    newX = outPos.m_x;
                    newY = outPos.m_y;
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // 通知PraScene进行有关处理。目前DragMove和DragEnd进行的处理相同。
                }
                else if (evt.target == this.m_randomGraphShape) {
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var graphShowWidth = this.m_randomGraphShape.width;
                    if (newX > this.s_horSpace
                        && newX + graphShowWidth > this.getTrueWidth() + this.s_horSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newX - this.s_horSpace;
                        gap2 = newX + graphShowWidth - (this.getTrueWidth() + this.s_horSpace);
                        if (gap1 > gap2) {
                            newX = -(graphShowWidth - (this.getTrueWidth() + this.s_horSpace));
                        }
                        else {
                            newX = this.s_horSpace;
                        }
                    }
                    if (newX < -(graphShowWidth + this.s_horSpace - this.getTrueWidth())
                        && newX < -this.s_horSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newX + graphShowWidth + this.s_horSpace - this.getTrueWidth();
                        gap2 = newX + this.s_horSpace;
                        if (gap1 < gap2) {
                            newX = -this.s_horSpace;
                        }
                        else {
                            newX = -(graphShowWidth + this.s_horSpace - this.getTrueWidth());
                        }
                    }
                    if (newY > this.s_verSpace
                        && newY + 720 - this.getTrueHeight() > this.s_verSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newY - this.s_verSpace;
                        gap2 = newY + 720 - this.getTrueHeight() - this.s_verSpace;
                        if (gap1 > gap2) {
                            newY = -(720 - this.getTrueHeight() - this.s_verSpace);
                        }
                        else {
                            newY = this.s_verSpace;
                        }
                    }
                    if (newY < -(720 + this.s_verSpace - this.getTrueHeight())
                        && newY < -this.s_verSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newY + 720 + this.s_verSpace - this.getTrueHeight();
                        gap2 = this.s_verSpace;
                        if (gap1 < gap2) {
                            newY = -this.s_verSpace;
                        }
                        else {
                            newY = -(720 + this.s_verSpace - this.getTrueHeight());
                        }
                    }
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!
                }
            }
            else {
            }
        };
        CMidAreaDifficult.prototype.touchEnd = function (evt) {
            this.m2_isImgMoving = false;
            this.dispatchEvent(this.m_evtImgDragEnd);
        };
        CMidAreaDifficult.prototype.setVisibleStartY = function (vsy) {
            this.m_visibleStartY = vsy;
            this.m_UIPresenter.m_visibleStartY = vsy;
        };
        CMidAreaDifficult.prototype.setTrueWidth = function (tw) {
            this.m_trueWidth = tw;
            if (this.m2_cc) {
                if (this.width < this.m_trueWidth) {
                    this.width = this.m_trueWidth;
                }
                this.redrawBg();
            }
        };
        CMidAreaDifficult.prototype.getTrueWidth = function () {
            return this.m_trueWidth;
        };
        CMidAreaDifficult.prototype.setTrueHeight = function (th) {
            this.m_trueHeight = th;
            this.redrawBg();
        };
        CMidAreaDifficult.prototype.getTrueHeight = function () {
            return this.m_trueHeight;
        };
        return CMidAreaDifficult;
    }(eui.Component));
    eyelen4.CMidAreaDifficult = CMidAreaDifficult;
    __reflect(CMidAreaDifficult.prototype,"eyelen4.CMidAreaDifficult",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CMidAreaEasy.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 * /src/UI/scenes/Eyelen/partials/CMidAreaEasy.ts
 *
 * 练习场景中部区域。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CMidAreaEasy = /** @class */ (function (_super) {
        __extends(CMidAreaEasy, _super);
        function CMidAreaEasy() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m_visibleStartY = 0;
            _this.m2_isImgMoving = false;
            _this.s_horSpace = 80;
            _this.s_verSpace = 80;
            _this.m2_cc = false;
            _this.m_imgCircler = new gdeint.CSquareCircler(); // 控制练习图片可拖动范围的模型。
            _this.m_bg = new egret.Shape();
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_imgStartPoint = new gdeint.CPoint();
            _this.m_evtImgDragEnd = new CMidAreaEvent_Eyelen(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND);
            _this.m_randomGraphShape = new gdeint.CRandomGraph();
            _this.m_randomGraphShape.genGraph(1024, 720);
            return _this;
        }
        CMidAreaEasy.prototype.childrenCreated = function () {
            this.randomGraph.addChild(this.m_randomGraphShape);
            this.m_randomGraphShape.touchEnabled = true;
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if (0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;
            this.mask = rect; //超出范围的内容不显示。
            this.midBgGrp.addChild(this.m_bg);
            if (!(CGlobals.S_NO_IMG_MODE)) {
                this.imgFromFile.touchEnabled = true;
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            this.m2_cc = true;
        };
        CMidAreaEasy.prototype.redrawBg = function () {
            this.m_bg.width = this.getTrueWidth();
            this.m_bg.height = this.m_trueHeight;
            this.m_bg.graphics.clear();
            this.m_bg.graphics.beginFill(0x999999);
            this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
            this.m_bg.graphics.endFill();
        };
        //根据场景设置调整可拖动范围。
        CMidAreaEasy.prototype.readjustCircler = function () {
            //Use dispWidth.
            var circlerRect = new gdeint.CRect();
            circlerRect.m_left = 0;
            circlerRect.m_top = this.m_visibleStartY;
            circlerRect.m_width = this.getTrueWidth();
            circlerRect.m_height = this.getTrueHeight() - this.m_visibleStartY;
            this.m_imgCircler.setCirclerRect(circlerRect);
            this.m_imgCircler.setPullGapHor(this.s_horSpace);
            this.m_imgCircler.setPullGapVer(this.s_verSpace);
            this.m_imgCircler.setPushGapHor(this.s_horSpace);
            this.m_imgCircler.setPushGapVer(this.s_verSpace);
            var imgRect = new gdeint.CRect();
            if (CGlobals.S_NO_IMG_MODE) {
                imgRect.m_width = this.randomGraph.width;
                imgRect.m_height = this.randomGraph.height;
            }
            else {
                imgRect.m_width = this.imgFromFile.width;
                imgRect.m_height = this.imgFromFile.height;
            }
            this.m_imgCircler.setItemRect(imgRect);
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = -this.midContentGroup.x;
            inpPos.m_y = -this.midContentGroup.y;
            this.m_imgCircler.setInpPos(inpPos);
        };
        // 练习图片开始拖动时触发。
        CMidAreaEasy.prototype.touchBegin = function (evt) {
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;
            this.readjustCircler();
            this.m2_isImgMoving = true;
        };
        CMidAreaEasy.prototype.touchMove = function (evt) {
            if (this.m2_isImgMoving) {
                if (evt.target == this.imgFromFile) {
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var newPt = new gdeint.CPoint();
                    newPt.m_x = newX;
                    newPt.m_y = newY;
                    this.m_imgCircler.setInpPos(newPt);
                    var newPtFinal = new gdeint.CPoint();
                    newPtFinal = this.m_imgCircler.getOutpPos(); // InpPos未超出范围，则OutpPos==InpPos；若超出范围，则OutpPos把练习图片控制在范围内。
                    newX = newPtFinal.m_x;
                    newY = newPtFinal.m_y;
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // 把事件通知PraScene进行相关处理。目前DragMove和DragEnd处理内容相同。
                }
                else if (evt.target == this.m_randomGraphShape) {
                    console.log("Moving randomGraph!");
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var graphShowWidth = this.m_randomGraphShape.width;
                    var newPt = new gdeint.CPoint();
                    newPt.m_x = newX;
                    newPt.m_y = newY;
                    this.m_imgCircler.setInpPos(newPt);
                    var newPtFinal = new gdeint.CPoint();
                    newPtFinal = this.m_imgCircler.getOutpPos();
                    newX = newPtFinal.m_x;
                    newY = newPtFinal.m_y;
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!
                }
            }
            else {
            }
        };
        CMidAreaEasy.prototype.touchEnd = function (evt) {
            this.m2_isImgMoving = false;
            this.dispatchEvent(this.m_evtImgDragEnd);
        };
        CMidAreaEasy.prototype.setVisibleStartY = function (vsy) {
            this.m_visibleStartY = vsy;
            this.m_UIPresenter.m_visibleStartY = vsy;
        };
        CMidAreaEasy.prototype.setTrueWidth = function (tw) {
            this.m_trueWidth = tw;
            if (this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if (this.m2_cc) {
                var rect = new egret.Rectangle();
                rect.x = 0;
                rect.y = 0;
                if (0 == this.m_trueWidth) {
                    rect.width = 480;
                }
                else {
                    rect.width = this.m_trueWidth;
                }
                rect.height = 2000;
                this.mask = rect;
            }
            this.redrawBg();
        };
        CMidAreaEasy.prototype.getTrueWidth = function () {
            if (0 == this.m_trueWidth) {
                return 720;
            }
            else {
                return this.m_trueWidth;
            }
        };
        CMidAreaEasy.prototype.setTrueHeight = function (th) {
            this.m_trueHeight = th;
            this.redrawBg();
        };
        CMidAreaEasy.prototype.getTrueHeight = function () {
            return this.m_trueHeight;
        };
        return CMidAreaEasy;
    }(eui.Component));
    eyelen4.CMidAreaEasy = CMidAreaEasy;
    __reflect(CMidAreaEasy.prototype,"eyelen4.CMidAreaEasy",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CMidAreaEvent_Eyelen.ts":
/***/ (function(module, exports) {

/**
 * /src/UI/scenes/Eyelen/partials/CMidAreaEvent_Eyelen.ts
 */
var CMidAreaEvent_Eyelen = /** @class */ (function (_super) {
    __extends(CMidAreaEvent_Eyelen, _super);
    function CMidAreaEvent_Eyelen(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CMidAreaEvent_Eyelen.EVT_IMG_DRAGMOVE = "EVT_IMG_DRAGMOVE";
    CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND = "EVT_IMG_DRAGEND";
    return CMidAreaEvent_Eyelen;
}(egret.Event));
window["CMidAreaEvent_Eyelen"] = CMidAreaEvent_Eyelen;
__reflect(CMidAreaEvent_Eyelen.prototype,"CMidAreaEvent_Eyelen",[]); 


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CPraMenu.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CPraMenu = /** @class */ (function (_super) {
        __extends(CPraMenu, _super);
        function CPraMenu() {
            return _super.call(this) || this;
        }
        CPraMenu.prototype.childrenCreated = function () {
            this.sndConfMenu.fetchData(); // 从存储获取设置值到声音设置对话框。
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            this.adjustTopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAdjustTopBtn, this);
            this.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.sndConfBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSndConfBtn, this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpBtn, this);
            this.viewTermsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewTermsBtn, this);
            this.quitPraBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQuitPra, this);
        };
        CPraMenu.prototype.show = function () {
            this.visible = true;
        };
        CPraMenu.prototype.hide = function () {
            this.visible = false;
        };
        CPraMenu.prototype.isVisible = function () {
            return this.visible;
        };
        CPraMenu.prototype.setSceneRect = function (x, y, wid, hei) {
            //设置父场景大小和坐标偏移量，以便确定确认框的显示位置。
            this.x = x + (wid - 350) / 2;
            this.y = y + (hei - 580) / 5 * 2;
            console.log("Setting scene rect!");
        };
        CPraMenu.prototype._setParentContainer = function (c) {
            this.m_parentContainer = c;
            this._getParentContainer().getDlgLayer().addChild(CDispObj2EgretDOAdapter.from(this));
            console.log("Parent container set!");
        };
        CPraMenu.prototype._getParentContainer = function () {
            return this.m_parentContainer;
        };
        CPraMenu.prototype._setMenuListener = function (menuListener) {
            this.m_menuListener = menuListener;
        };
        /*
        * 右上角关闭按钮触摸时触发。
        */
        CPraMenu.prototype.onClose = function () {
            this.visible = false;
            var argArr = new Array(); // apply是javascript方法所以要用javascript对象。
            argArr[0] = false;
            this._getParentContainer().applyFunc(this.m_closeListener, argArr);
        };
        CPraMenu.prototype.onAdjustTopBtn = function () {
            this.onMenu("AdjustTop");
        };
        CPraMenu.prototype.onCaliBtn = function () {
            this.onMenu("Calibrate");
        };
        CPraMenu.prototype.onSndConfBtn = function () {
            console.log("Showing SndConfMenu!");
            this.sndConfMenu.show(); // 不能直接设置visible，因为需要读取当前设置。
            this.onMenu("SndConf");
        };
        CPraMenu.prototype.onHelpBtn = function () {
            this.helpPanel.visible = true;
        };
        CPraMenu.prototype.onViewTermsBtn = function () {
            this.viewTermsMenu.visible = true;
            this.onMenu("ViewTerms");
        };
        CPraMenu.prototype.onMenu = function (menuClicked) {
            if ("AdjustTop" == menuClicked) {
                console.log("onMenu Adjusting top!");
                console.log("Now top space is:" + CGlobals.g_topSpaceHeight);
                //                gdeint.CAdjustTop 
                this.adjustTopDlg.topSpaceInp.text = CGlobals.g_topSpaceHeight.toString();
                this.adjustTopDlg.visible = true;
            }
            if ("Calibrate" == menuClicked) {
                //                this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
                this.m_parentContainer.showCaliDlg(this.m_parentContainer.sendMsgToScene("getOnCaliDlgCloseFunc", null));
                this.visible = false;
            }
            //            else if("ViewTerms" == menuClicked) 不涉及跟容器或scene交互的菜单不触发onMenu。
        };
        CPraMenu.prototype.onQuitPra = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraMenu.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                CGlobals.g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        return CPraMenu;
    }(eui.Component));
    gdeint.CPraMenu = CPraMenu;
    __reflect(CPraMenu.prototype,"gdeint.CPraMenu",["IContainerPlugin"]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CProTopArea_Eyelen.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/UI/scenes/Eyelen/partials/CTopArea_Eyelen.ts
 * 练习场景顶部区域。
 *
 * 请勿外部修改 scale/x/y，而要通过 setTrueWidth/setTrueHeight 。
 *
 */
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CProTopArea_Eyelen = /** @class */ (function (_super) {
        __extends(CProTopArea_Eyelen, _super);
        function CProTopArea_Eyelen() {
            var _this = _super.call(this) || this;
            // Under 480 horizontal resolution.
            _this.s_bgFrontWidth = 428;
            _this.s_bgFrontHeight = 160;
            _this.s_topRightWidth = 250;
            _this.s_topRightHeight1 = 65;
            _this.s_thumbAreax = 25;
            _this.s_thumbAreay = 0;
            _this.s_thumbAreaWidth = 428 - 250;
            _this.s_thumbAreaHeight = 160;
            _this.m_trueWidth = 480;
            _this.m_trueHeight = 180;
            _this.m2_cc = false;
            _this.m_bgFront = new egret.Shape();
            _this.m_topButtonBg = new egret.Shape();
            _this.m_evtSwitchBtnTap = new CTopAreaEvent_Eyelen(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP);
            return _this;
        }
        CProTopArea_Eyelen.prototype.readjustUI = function () {
            if (this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if (this.height < this.m_trueHeight) {
                this.height = this.m_trueHeight;
            }
            this.m_bgFront.width = this.s_bgFrontWidth / 480 * this.m_trueWidth;
            this.m_bgFront.height = this.s_bgFrontHeight / 180 * this.m_trueHeight;
            var bgFrontRectBg, bgFrontRectLeft, bgFrontRectBottomRight;
            bgFrontRectBg = new eui.Rect();
            bgFrontRectBg.fillColor = 0x00FF00;
            bgFrontRectBg.width = this.m_bgFront.width;
            bgFrontRectBg.height = this.m_bgFront.height;
            bgFrontRectLeft = new eui.Rect();
            bgFrontRectLeft.fillColor = 0xAAFFEE;
            bgFrontRectLeft.width = this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth;
            bgFrontRectLeft.height = this.m_bgFront.height;
            bgFrontRectBottomRight = new eui.Rect();
            bgFrontRectBottomRight.fillColor = 0xEE8855;
            bgFrontRectBottomRight.x = this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth;
            bgFrontRectBottomRight.y = this.s_topRightHeight1;
            bgFrontRectBottomRight.width = this.s_topRightWidth / 480 * this.m_trueWidth;
            bgFrontRectBottomRight.height = this.m_bgFront.height - this.s_topRightHeight1;
            this.m_bgFront.graphics.beginFill(0xAAFFEE); //Middle.
            this.m_bgFront.graphics.drawRect(0, 0, this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth, this.m_bgFront.height);
            this.m_bgFront.graphics.endFill();
            this.m_bgFront.graphics.beginFill(0xEE8855); //Right bottom.
            this.m_bgFront.graphics.drawRect(this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth, this.s_topRightHeight1, this.s_topRightWidth / 480 * this.m_trueWidth, this.m_bgFront.height - this.s_topRightHeight1);
            this.m_bgFront.graphics.endFill();
            this.m_topButtonBg.width = this.switchBtn.width;
            this.m_topButtonBg.height = this.switchBtn.height;
            this.m_topButtonBg.graphics.beginFill(0xFFFFFF);
            this.m_topButtonBg.graphics.drawRect(0, 0, this.m_topButtonBg.width, this.m_topButtonBg.height);
            this.m_topButtonBg.graphics.endFill();
            this.bgFrontGrp.left = 25 / 480 * this.m_trueWidth;
            this.bgFrontGrp.addChild(bgFrontRectBg);
            this.bgFrontGrp.addChild(bgFrontRectLeft);
            this.bgFrontGrp.addChild(bgFrontRectBottomRight);
            //Progress view:
            this.progressView.left = bgFrontRectBottomRight.x + 30 / 480 * this.m_trueWidth; // 没有 TopRight.x 只能用 BottomRight.x 代替。
            //Score view:
            this.scoreView.left = bgFrontRectBottomRight.x + 30 / 480 * this.m_trueWidth;
            //Switch button:
            this.switchBtn.left = 209 / 480 * this.m_trueWidth;
            this.switchBtn.top = 154 / 180 * this.m_trueHeight;
            this.switchBtnBgGrp.left = this.switchBtn.left;
            this.switchBtnBgGrp.top = this.switchBtn.top;
            //Thumb area:
            //      No action here! decided in CPraEasyScene because renderFilter required!
        };
        CProTopArea_Eyelen.prototype.setTrueWidth = function (w) {
            this.m_trueWidth = w;
            if (this.m2_cc) {
                this.readjustUI();
            }
        };
        CProTopArea_Eyelen.prototype.setTrueHeight = function (h) {
            this.m_trueHeight = h;
            if (this.m2_cc) {
                this.readjustUI();
            }
        };
        CProTopArea_Eyelen.prototype.childrenCreated = function () {
            console.log("ProTopArea shown!");
            this.readjustUI();
            this.switchBtnBgGrp.addChild(this.m_topButtonBg);
            this.switchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitchBtnTap, this);
            this.m2_cc = true;
        };
        CProTopArea_Eyelen.prototype.onSwitchBtnTap = function (evt) {
            this.dispatchEvent(this.m_evtSwitchBtnTap);
        };
        return CProTopArea_Eyelen;
    }(eui.Component));
    eyelen4.CProTopArea_Eyelen = CProTopArea_Eyelen;
    __reflect(CProTopArea_Eyelen.prototype,"eyelen4.CProTopArea_Eyelen",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CSndConfMenu.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CSndConfMenu = /** @class */ (function (_super) {
        __extends(CSndConfMenu, _super);
        function CSndConfMenu() {
            return _super.call(this) || this;
        }
        // 从存储获取设置值。第一次打开对话框时需要外部调用执行。
        CSndConfMenu.prototype.fetchData = function () {
            egret.ExternalInterface.call("fetchIsSndOn", "");
        };
        CSndConfMenu.prototype.show = function () {
            this.sndOnSwitch.$setSelected(CGlobals.g_isSndOn);
            this.visible = true;
        };
        CSndConfMenu.prototype.savData = function () {
            var strSndOn = "";
            CGlobals.g_isSndOn = this.sndOnSwitch.selected;
            if (CGlobals.g_isSndOn) {
                strSndOn = "1";
            }
            else {
                strSndOn = "0";
            }
            egret.ExternalInterface.call("storeIsSndOn", strSndOn);
            this.visible = false;
        };
        CSndConfMenu.prototype.childrenCreated = function () {
            this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKBtn, this);
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelBtn, this);
        };
        CSndConfMenu.prototype.onOKBtn = function () {
            this.savData();
            this.visible = false;
        };
        CSndConfMenu.prototype.onCancelBtn = function () {
            this.fetchData(); //回滚到修改前的设置。
            this.visible = false;
        };
        return CSndConfMenu;
    }(eui.Component));
    gdeint.CSndConfMenu = CSndConfMenu;
    __reflect(CSndConfMenu.prototype,"gdeint.CSndConfMenu",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CTopAreaEvent_Eyelen.ts":
/***/ (function(module, exports) {

/**
 * /src/UI/scenes/Eyelen/partials/CTopAreaEvent_Eyelen.ts
 */
var CTopAreaEvent_Eyelen = /** @class */ (function (_super) {
    __extends(CTopAreaEvent_Eyelen, _super);
    function CTopAreaEvent_Eyelen(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP = "EVT_SWITCHBTN_TAP";
    return CTopAreaEvent_Eyelen;
}(egret.Event));
window["CTopAreaEvent_Eyelen"] = CTopAreaEvent_Eyelen;
__reflect(CTopAreaEvent_Eyelen.prototype,"CTopAreaEvent_Eyelen",[]); 


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CTopArea_Eyelen.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/UI/scenes/Eyelen/partials/CTopArea_Eyelen.ts
 * 练习场景顶部区域。
 *
 * 请勿外部修改 scale/x/y，而要通过 setTrueWidth/setTrueHeight 。
 *
 */
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CTopArea_Eyelen = /** @class */ (function (_super) {
        __extends(CTopArea_Eyelen, _super);
        function CTopArea_Eyelen() {
            var _this = _super.call(this) || this;
            // Under 480 horizontal resolution.
            _this.s_bgFrontWidth = 428;
            _this.s_bgFrontHeight = 160;
            _this.s_topRightWidth = 250;
            _this.s_topRightHeight1 = 65;
            _this.s_thumbAreax = 25;
            _this.s_thumbAreay = 0;
            _this.s_thumbAreaWidth = 428 - 250;
            _this.s_thumbAreaHeight = 160;
            _this.m_trueWidth = 480;
            _this.m_trueHeight = 180;
            _this.m2_cc = false;
            _this.m_bgFront = new egret.Shape();
            _this.m_topButtonBg = new egret.Shape();
            _this.m_evtSwitchBtnTap = new CTopAreaEvent_Eyelen(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP);
            return _this;
        }
        CTopArea_Eyelen.prototype.readjustUI = function () {
            if (this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if (this.height < this.m_trueHeight) {
                this.height = this.m_trueHeight;
            }
            this.m_bgFront.width = this.s_bgFrontWidth / 480 * this.m_trueWidth;
            this.m_bgFront.height = this.s_bgFrontHeight / 180 * this.m_trueHeight;
            var bgFrontRectBg, bgFrontRectLeft, bgFrontRectBottomRight;
            bgFrontRectBg = new eui.Rect();
            bgFrontRectBg.fillColor = 0x00FF00;
            bgFrontRectBg.width = this.m_bgFront.width;
            bgFrontRectBg.height = this.m_bgFront.height;
            bgFrontRectLeft = new eui.Rect();
            bgFrontRectLeft.fillColor = 0xAAFFEE;
            bgFrontRectLeft.width = this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth;
            bgFrontRectLeft.height = this.m_bgFront.height;
            bgFrontRectBottomRight = new eui.Rect();
            bgFrontRectBottomRight.fillColor = 0xEE8855;
            bgFrontRectBottomRight.x = this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth;
            bgFrontRectBottomRight.y = this.s_topRightHeight1;
            bgFrontRectBottomRight.width = this.s_topRightWidth / 480 * this.m_trueWidth;
            bgFrontRectBottomRight.height = this.m_bgFront.height - this.s_topRightHeight1;
            this.m_bgFront.graphics.beginFill(0xAAFFEE); //Middle.
            this.m_bgFront.graphics.drawRect(0, 0, this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth, this.m_bgFront.height);
            this.m_bgFront.graphics.endFill();
            this.m_bgFront.graphics.beginFill(0xEE8855); //Right bottom.
            this.m_bgFront.graphics.drawRect(this.m_bgFront.width - this.s_topRightWidth / 480 * this.m_trueWidth, this.s_topRightHeight1, this.s_topRightWidth / 480 * this.m_trueWidth, this.m_bgFront.height - this.s_topRightHeight1);
            this.m_bgFront.graphics.endFill();
            this.m_topButtonBg.width = this.switchBtn.width;
            this.m_topButtonBg.height = this.switchBtn.height;
            this.m_topButtonBg.graphics.beginFill(0xFFFFFF);
            this.m_topButtonBg.graphics.drawRect(0, 0, this.m_topButtonBg.width, this.m_topButtonBg.height);
            this.m_topButtonBg.graphics.endFill();
            this.bgFrontGrp.left = 25 / 480 * this.m_trueWidth;
            this.bgFrontGrp.addChild(bgFrontRectBg);
            this.bgFrontGrp.addChild(bgFrontRectLeft);
            this.bgFrontGrp.addChild(bgFrontRectBottomRight);
            //Progress view:
            this.progressView.left = bgFrontRectBottomRight.x + 30 / 480 * this.m_trueWidth; // 没有 TopRight.x 只能用 BottomRight.x 代替。
            //Score view:
            this.scoreView.left = bgFrontRectBottomRight.x + 30 / 480 * this.m_trueWidth;
            //Switch button:
            this.switchBtn.left = 209 / 480 * this.m_trueWidth;
            this.switchBtn.top = 154 / 180 * this.m_trueHeight;
            this.switchBtnBgGrp.left = this.switchBtn.left;
            this.switchBtnBgGrp.top = this.switchBtn.top;
            //Thumb area:
            //      No action here! decided in CPraEasyScene because renderFilter required!
        };
        CTopArea_Eyelen.prototype.setTrueWidth = function (w) {
            this.m_trueWidth = w;
            if (this.m2_cc) {
                this.readjustUI();
            }
        };
        CTopArea_Eyelen.prototype.setTrueHeight = function (h) {
            this.m_trueHeight = h;
            if (this.m2_cc) {
                this.readjustUI();
            }
        };
        CTopArea_Eyelen.prototype.childrenCreated = function () {
            this.readjustUI();
            this.switchBtnBgGrp.addChild(this.m_topButtonBg);
            this.switchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitchBtnTap, this);
            this.m2_cc = true;
        };
        CTopArea_Eyelen.prototype.onSwitchBtnTap = function (evt) {
            this.dispatchEvent(this.m_evtSwitchBtnTap);
        };
        return CTopArea_Eyelen;
    }(eui.Component));
    eyelen4.CTopArea_Eyelen = CTopArea_Eyelen;
    __reflect(CTopArea_Eyelen.prototype,"eyelen4.CTopArea_Eyelen",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CViewDiffProHisScoreDlg.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CViewDiffProHisScoreDlg = /** @class */ (function (_super) {
        __extends(CViewDiffProHisScoreDlg, _super);
        function CViewDiffProHisScoreDlg() {
            return _super.call(this) || this;
        }
        CViewDiffProHisScoreDlg.prototype.childrenCreated = function () {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        };
        CViewDiffProHisScoreDlg.prototype.show = function () {
            console.log("ScoreJSONObjSize():" + CGlobals.g2_tmpScoresJSONObj.size);
            this.scoreLabel.text = "";
            var i;
            for (i = 0; i < CGlobals.g2_tmpScoresJSONObj.Scores.length; ++i) {
                this.scoreLabel.text += (CGlobals.g2_tmpScoresJSONObj.Scores[i].Score + "分 于" + CGlobals.g2_tmpScoresJSONObj.Scores[i].PraDateTime + "\n\n");
            }
            this.visible = true;
        };
        CViewDiffProHisScoreDlg.prototype.onCloseBtn = function () {
            this.visible = false;
        };
        return CViewDiffProHisScoreDlg;
    }(eui.Component));
    eyelen4.CViewDiffProHisScoreDlg = CViewDiffProHisScoreDlg;
    __reflect(CViewDiffProHisScoreDlg.prototype,"eyelen4.CViewDiffProHisScoreDlg",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/UI/scenes/Eyelen/partials/CViewTermsMenu.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CViewTermsMenu = /** @class */ (function (_super) {
        __extends(CViewTermsMenu, _super);
        function CViewTermsMenu() {
            return _super.call(this) || this;
        }
        CViewTermsMenu.prototype.childrenCreated = function () {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            this.viewUserProBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewUserProBtn, this);
            this.viewPriPoliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewPriPoliBtn, this);
        };
        CViewTermsMenu.prototype.onViewUserProBtn = function () {
            this.userProPanel.visible = true;
        };
        CViewTermsMenu.prototype.onViewPriPoliBtn = function () {
            this.priPoliPanel.visible = true;
        };
        CViewTermsMenu.prototype.onCloseBtn = function () {
            this.visible = false;
        };
        return CViewTermsMenu;
    }(eui.Component));
    gdeint.CViewTermsMenu = CViewTermsMenu;
    __reflect(CViewTermsMenu.prototype,"gdeint.CViewTermsMenu",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/UI/scenes/common/IScene.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/scenes/common/IUIContainer.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/scenes/common/IWithMsgHandling.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/UI/scenes/other/LoadingUI_Eint_V3.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/UI/scenes/other/loadingUI_Eint_V3.ts
* 程序启动时的资源加载界面。
* 使用方法：创建对象 —> setWinSize —> create 。需要“触摸屏幕继续”时，await调用touch2C。
*
************************************************************/
var LoadingUI_Eint_V3 = /** @class */ (function (_super) {
    __extends(LoadingUI_Eint_V3, _super);
    //此处不能使用eui。因为未对接childrenCreated。
    function LoadingUI_Eint_V3() {
        // 注意：new前要把全局变量g_winWidth和g_winHeight填写好，并且logo预加载完成。
        return _super.call(this) || this;
    }
    LoadingUI_Eint_V3.prototype.create = function () {
        this.width = this.m_winWidth;
        this.height = this.m_winHeight;
        this.createView();
        // 初始化“触摸屏幕继续”定时器等：
        this.m_flashCnt = 0;
        this.m_flashTimer = new egret.Timer(300, 0);
        this.m_flashTimer.addEventListener(egret.TimerEvent.TIMER, this.onFlashTimer, this);
    };
    LoadingUI_Eint_V3.prototype.createView = function () {
        this.m_bg = new egret.Shape();
        this.m_bg.width = this.width;
        this.m_bg.height = this.height;
        this.m_bg.graphics.beginFill(0xFFFFFF);
        this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
        this.m_bg.graphics.endFill();
        this.m_procra = new egret.TextField();
        this.m_procra.x = this.width / 2 - 200;
        this.m_procra.y = this.height * 0.2;
        this.m_procra.size = 56;
        this.m_procra.textColor = 0x000000;
        this.m_procra.text = "卓越是为了奉献";
        this.m_logo = new egret.Bitmap();
        this.m_logo.x = this.width / 2 - 60;
        this.m_logo.y = this.height * 0.3;
        this.m_logo.width = 240;
        this.m_logo.height = 128;
        this.m_logo.texture = RES.getRes("eint_logo_png");
        this.m_progress = new egret.TextField();
        this.m_progress.x = this.width / 2 - 90;
        this.m_progress.y = this.height * 0.6;
        this.m_progress.textColor = 0x000000;
        this.m_progress.textAlign = "center";
        this.m_p2c = new egret.TextField();
        this.m_p2c.x = this.width / 2 - 80;
        this.m_p2c.y = this.height * 0.7;
        this.m_p2c.textColor = 0x000000;
        this.m_p2c.text = "触摸屏幕继续";
        this.m_p2c.visible = false;
        this.addChild(this.m_bg);
        this.addChild(this.m_procra);
        this.addChild(this.m_logo);
        this.addChild(this.m_progress);
        this.addChild(this.m_p2c);
    };
    LoadingUI_Eint_V3.prototype.onTchTimer = function (evt) {
        this.m_p2c.visible = true; // and flash
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.m_flashTimer.start();
    };
    LoadingUI_Eint_V3.prototype.onFlashTimer = function (evt) {
        ++this.m_flashCnt;
        if (0 == this.m_flashCnt % 3) {
            this.m_p2c.visible = false;
        }
        else {
            this.m_p2c.visible = true;
        }
    };
    LoadingUI_Eint_V3.prototype.onTouch = function (evt) {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.m_flashTimer.stop();
        this.m_p2c.visible = true;
        this.visible = false;
    };
    LoadingUI_Eint_V3.prototype.setProgress = function (current, total) {
        // 让界面显示为参数的数值。
        this.m_progress.text = "准备中..." + (current / total * 100).toString().substr(0, 4) + "%";
    };
    LoadingUI_Eint_V3.prototype.setWinSize = function (wid, hei) {
        this.m_winWidth = wid;
        this.m_winHeight = hei;
    };
    /*
        接口方法。在加载进度增加时自动触发。
    */
    LoadingUI_Eint_V3.prototype.onProgress = function (current, total) {
        this.setProgress(current, total);
    };
    LoadingUI_Eint_V3.prototype.touch2C = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retPromise;
            var _this = this;
            return __generator(this, function (_a) {
                retPromise = new Promise(function (resolve) {
                    _this.m_p2c.visible = true; // "Touch to continue" flash
                    _this.touchEnabled = true;
                    _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (resv) { resolve(); }, _this);
                    _this.m_flashTimer.start();
                });
                return [2 /*return*/, retPromise];
            });
        });
    };
    return LoadingUI_Eint_V3;
}(egret.Sprite));
window["LoadingUI_Eint_V3"] = LoadingUI_Eint_V3;
__reflect(LoadingUI_Eint_V3.prototype,"LoadingUI_Eint_V3",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/UI/scenes/other/LoadingUI_NoUI.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/UI/scenes/other/loadingUI_NoUI.ts
* 无界面资源加载界面。
*
************************************************************/
var LoadingUI_NoUI = /** @class */ (function (_super) {
    __extends(LoadingUI_NoUI, _super);
    function LoadingUI_NoUI() {
        return _super.call(this) || this;
    }
    LoadingUI_NoUI.prototype.onProgress = function (current, total) {
    };
    return LoadingUI_NoUI;
}(egret.Sprite));
window["LoadingUI_NoUI"] = LoadingUI_NoUI;
__reflect(LoadingUI_NoUI.prototype,"LoadingUI_NoUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CCmpLenDlg.ts":
/***/ (function(module, exports) {

/**
 * /src/components/UIComponents/Eyelen/CCmpLenDlg.ts
 *
 * 长度比较对话框控件。困难难度用。
 * 本控件只直接显示用户填入的数据。不进行横竖校准等计算。
 *
 */
function anyObj() {
}
window["anyObj"] = anyObj;
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CCmpLenDlg = /** @class */ (function (_super) {
        __extends(CCmpLenDlg, _super);
        function CCmpLenDlg() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m_childrenCreated = false;
            _this.m_nextBtnEventCache = new anyObj();
            _this.m_flagsArr = new Array();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_flagsArr[i] = new egret.Bitmap();
            }
            _this.m_flagsArr[0].texture = RES.getRes("score_flag_png");
            _this.m_flagsArr[1].texture = RES.getRes("score_dot_png");
            _this.m_flagsArr[2].texture = RES.getRes("score_flag_png");
            _this.m_flagsContainer = new egret.DisplayObjectContainer();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_flagsArr[i].width = 35;
                _this.m_flagsArr[i].height = 45;
                _this.m_flagsArr[i].x = i * 45;
                _this.m_flagsArr[i].y = 0;
                _this.m_flagsContainer.addChild(_this.m_flagsArr[i]);
            }
            _this.m_correLenShape = new egret.Shape();
            _this.m_userLenShape = new egret.Shape();
            _this.m2_cc = true;
            if (_this.m_trueWidth > 0) {
                _this.width = _this.m_trueWidth;
            }
            if (_this.m_trueHeight > 0) {
                _this.height = _this.m_trueHeight;
            }
            return _this;
        }
        CCmpLenDlg.prototype.readjustUI = function () {
            if (this.m_trueHeight < 350) {
                // 高度小于350时，子元素保持原有大小和坐标。
            }
            else {
                this.nextBtn.x = this.m_trueWidth / 2 - 32;
                this.nextBtn.y = this.m_trueHeight * 240 / 350;
                this.scoreValue.y = this.m_trueHeight * 20 / 350;
                this.correLenIcon.y = this.m_trueHeight * 135 / 350;
                this.correLen.y = this.m_trueHeight * 139 / 350;
                this.userLenIcon.y = this.m_trueHeight * 190 / 350;
                this.userLen.y = this.m_trueHeight * 195 / 350;
                this.scoreFlags.y = this.m_trueHeight * 70 / 350;
                this.scoreValue.x = this.m_trueWidth / 2 - this.scoreValue.width / 2;
                this.scoreFlags.x = this.m_trueWidth * 0.5 - 50;
            }
        };
        CCmpLenDlg.prototype.childrenCreated = function () {
            this.m_childrenCreated = true;
            // Do the actions planed to do after children created.
            if (this.m_nextBtnEventCache.type) {
                this._onNextBtnEvent(this.m_nextBtnEventCache.type, this.m_nextBtnEventCache.listener, this.m_nextBtnEventCache.thisObject);
            }
            this._setScore(this.m2_tmpScore);
            this._setCorreLen(this.m2_tmpCorreLen);
            this._setUserLen(this.m2_tmpUserLen);
            this.scoreFlags.addChild(this.m_flagsContainer);
            this.userLen.addChild(this.m_userLenShape);
            this.correLen.addChild(this.m_correLenShape);
        };
        CCmpLenDlg.prototype.setTrueWidth = function (w) {
            this.m_trueWidth = w;
            if (this.m2_cc) {
                this.width = w;
            }
        };
        CCmpLenDlg.prototype.setTrueHeight = function (h) {
            this.m_trueHeight = h;
            if (this.m2_cc) {
                this.height = h;
            }
        };
        /*
        * 设置界面上的得分。请勿直接调用本函数，应当调用 setScore函数 。
        */
        CCmpLenDlg.prototype._setScore = function (v) {
            var i;
            this.scoreValue.text = "+" + v;
            for (i = 0; i * 10 < v; i++) {
                this.m_flagsArr[i].texture = RES.getRes("score_flag_png");
            }
            for (; i < 3; i++) {
                this.m_flagsArr[i].texture = RES.getRes("score_cross_png");
            }
        };
        /*
        * 设置界面上的正确长度。请勿直接调用本函数，应当调用 setCorreLen函数。
        */
        CCmpLenDlg.prototype._setCorreLen = function (v) {
            if (!isNaN(v)) {
                this.m_correLenShape.graphics.clear();
                this.m_correLenShape.graphics.beginFill(0x55CCAA);
                this.m_correLenShape.graphics.drawRect(0, 0, v, this.correLen.height);
                this.m_correLenShape.graphics.endFill();
            }
        };
        /*
        * 设置界面上的用户长度。请勿直接调用本函数，应当调用 setUserLen函数。
        */
        CCmpLenDlg.prototype._setUserLen = function (v) {
            if (!isNaN(v)) {
                this.m_userLenShape.graphics.clear();
                this.m_userLenShape.graphics.beginFill(0x55CCAA);
                this.m_userLenShape.graphics.drawRect(0, 0, v, this.userLen.height);
                this.m_userLenShape.graphics.endFill();
            }
        };
        CCmpLenDlg.prototype._onNextBtnEvent = function (type, listener, thisObject) {
            this.nextBtn.addEventListener(type, listener, thisObject);
        };
        CCmpLenDlg.prototype.setScore = function (v) {
            this.m2_tmpScore = v; //Save to temp and show it after children created.
            if (this.m_childrenCreated) {
                this._setScore(v);
            }
            else {
                //If children not created yet, left to childrenCreated() to continue the remaining job.
            }
        };
        CCmpLenDlg.prototype.setCorreLen = function (v) {
            this.m2_tmpCorreLen = v;
            if (this.m_childrenCreated) {
                this._setCorreLen(v);
            }
            else {
            }
        };
        CCmpLenDlg.prototype.setUserLen = function (v) {
            this.m2_tmpUserLen = v;
            if (this.m_childrenCreated) {
                this._setUserLen(v);
            }
            else {
            }
        };
        CCmpLenDlg.prototype.onNextBtnEvent = function (type, listener, thisObject) {
            if (this.m_childrenCreated) {
                this._onNextBtnEvent(type, listener, thisObject);
            }
            else {
                // Save the parms into cache and plan to do it when ready.
                this.m_nextBtnEventCache.type = type;
                this.m_nextBtnEventCache.listener = listener;
                this.m_nextBtnEventCache.thisObject = thisObject;
            }
        };
        return CCmpLenDlg;
    }(eui.Component));
    eyelen4.CCmpLenDlg = CCmpLenDlg;
    __reflect(CCmpLenDlg.prototype,"eyelen4.CCmpLenDlg",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CGridCmpLenDlg.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * /src/components/UIComponents/Eyelen/CGridCmpLenDlg.ts
 * 长度比较对话框格子版。简单难度用。
 * 本控件只直接显示用户填入的数据。不进行横竖校准等计算。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CGridCmpLenDlg = /** @class */ (function (_super) {
        __extends(CGridCmpLenDlg, _super);
        function CGridCmpLenDlg() {
            var _this = _super.call(this) || this;
            _this.m_userGridWidth = 30;
            _this.m_loadedGridCnt = 0; // 已加载的格子个数。若需要显示更多格子，则加载后增加此变量的值。
            _this.m2_cc = false; // 子界面元素是否已创建。
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m_nextBtnEventCache = new anyObj();
            _this.m_flagsArr = new Array();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_flagsArr[i] = new egret.Bitmap();
            }
            _this.m_flagsArr[0].texture = RES.getRes("score_flag_png");
            _this.m_flagsArr[1].texture = RES.getRes("score_dot_png");
            _this.m_flagsArr[2].texture = RES.getRes("score_flag_png");
            _this.m_flagsContainer = new egret.DisplayObjectContainer();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_flagsArr[i].width = 35;
                _this.m_flagsArr[i].height = 45;
                _this.m_flagsArr[i].x = i * 45;
                _this.m_flagsArr[i].y = 0;
                _this.m_flagsContainer.addChild(_this.m_flagsArr[i]);
            }
            _this.m_userLenGroup = new egret.DisplayObjectContainer();
            _this.m_userLenGridsArr = new Array();
            _this.loadGrids(12); //预加载12个格子，优化性能。
            return _this;
        }
        CGridCmpLenDlg.prototype.readjustUI = function () {
            if (this.m_trueHeight < 350) {
                // 高度小于350时，子元素保持原有大小和坐标。
            }
            else {
                this.nextBtn.x = this.m_trueWidth / 2 - 32;
                this.nextBtn.y = this.m_trueHeight * 240 / 350;
                this.scoreValue.y = this.m_trueHeight * 20 / 350;
                this.correLenIcon.y = this.m_trueHeight * 135 / 350;
                this.correLenRect.y = this.m_trueHeight * 139 / 350;
                this.userLenIcon.y = this.m_trueHeight * 190 / 350;
                this.userLenGrp.y = this.m_trueHeight * 195 / 350;
                this.scoreFlags.y = this.m_trueHeight * 70 / 350;
                this.scoreValue.x = this.m_trueWidth / 2 - this.scoreValue.width / 2;
                this.scoreFlags.x = this.m_trueWidth * 0.5 - 50;
            }
        };
        CGridCmpLenDlg.prototype.setTrueWidth = function (w) {
            this.m_trueWidth = w;
            if (this.m2_cc) {
                if (this.width < w) {
                    this.width = w;
                }
                this.readjustUI();
            }
        };
        CGridCmpLenDlg.prototype.setTrueHeight = function (h) {
            this.m_trueHeight = h;
            if (this.m2_cc) {
                if (this.height < h) {
                    this.height = h;
                }
                this.readjustUI();
            }
        };
        CGridCmpLenDlg.prototype.loadGrids = function (gridCnt) {
            var i;
            for (i = this.m_loadedGridCnt; i < gridCnt; ++i) {
                this.m_userLenGridsArr[i] = new CRulerEasyBodyCell();
                this.m_userLenGridsArr[i].texture = RES.getRes("rulerBodyCell2_gif");
                this.m_userLenGridsArr[i].x = i * this.m_userGridWidth /*30 * g_caRat*/;
                this.m_userLenGridsArr[i].width = this.m_userGridWidth /*30 * g_caRat*/;
                this.m_userLenGridsArr[i].height = 45;
                this.m_userLenGridsArr[i].visible = false;
                this.m_userLenGroup.addChild(this.m_userLenGridsArr[i]);
            }
            this.m_loadedGridCnt = gridCnt;
        };
        CGridCmpLenDlg.prototype.childrenCreated = function () {
            this.m2_cc = true;
            if (this.m_trueWidth > 0) {
                this.width = this.m_trueWidth;
            }
            else {
                this.m_trueWidth = this.width;
            }
            if (this.m_trueHeight > 0) {
                this.height = this.m_trueHeight;
            }
            else {
                this.m_trueWidth = this.width;
            }
            this.readjustUI();
            // Do the actions planed to do after children created.
            if (this.m_nextBtnEventCache.type) {
                this._onNextBtnEvent(this.m_nextBtnEventCache.type, this.m_nextBtnEventCache.listener, this.m_nextBtnEventCache.thisObject);
            }
            this._setScore(this.m2_tmpScore);
            this._setCorreLen(this.m2_tmpCorreLen);
            this._setUserGridCnt(this.m2_tmpUserGridCnt);
            this.scoreFlags.addChild(this.m_flagsContainer);
            this.userLenGrp.addChild(this.m_userLenGroup);
        };
        /*
        * 设置得分。请勿直接调用本函数。应当调用 setScore函数。
        */
        CGridCmpLenDlg.prototype._setScore = function (v) {
            var i;
            this.scoreValue.text = "+" + v;
            for (i = 0; i * 10 < v; i++) {
                this.m_flagsArr[i].texture = RES.getRes("score_flag_png");
            }
            for (; i < 3; i++) {
                this.m_flagsArr[i].texture = RES.getRes("score_cross_png");
            }
        };
        /*
        * 设置正确长度。请勿直接调用本函数。应当调用 setCorreLen函数。
        */
        CGridCmpLenDlg.prototype._setCorreLen = function (v) {
            if (!isNaN(v)) {
                this.correLenRect.width = v;
            }
        };
        CGridCmpLenDlg.prototype._onNextBtnEvent = function (type, listener, thisObject) {
            this.nextBtn.addEventListener(type, listener, thisObject);
        };
        CGridCmpLenDlg.prototype.setScore = function (v) {
            this.m2_tmpScore = v; //Save to temp and show it after children created.
            if (this.m2_cc) {
                this._setScore(v);
            }
            else {
                //If children not created yet, left to childrenCreated() to continue the remaining job.
            }
        };
        CGridCmpLenDlg.prototype.setCorreLen = function (v) {
            this.m2_tmpCorreLen = v;
            if (this.m2_cc) {
                this._setCorreLen(v);
            }
            else {
            }
        };
        /*
        * 设置用户输入的格子数。请勿直接调用本函数，应当调用 setUserGridCnt函数。
        */
        CGridCmpLenDlg.prototype._setUserGridCnt = function (cnt) {
            if (!isNaN(cnt)) {
                if (this.m_loadedGridCnt < cnt) {
                    this.loadGrids(cnt);
                }
                for (i = 0; i < this.m_userLenGridsArr.length /*12*/; ++i) {
                    this.m_userLenGridsArr[i].x = i * this.m_userGridWidth /*30 * g_caRat*/;
                    this.m_userLenGridsArr[i].width = this.m_userGridWidth /*30 * g_caRat*/;
                }
                var i;
                for (i = 0; i < cnt; ++i) {
                    this.m_userLenGridsArr[i].visible = true;
                }
                for (; i < this.m_loadedGridCnt; ++i) {
                    this.m_userLenGridsArr[i].visible = false;
                }
            }
        };
        CGridCmpLenDlg.prototype.setUserGridWidth = function (gWidth) {
            this.m_userGridWidth = gWidth;
        };
        CGridCmpLenDlg.prototype.setUserGridCnt = function (cnt) {
            this.m2_tmpUserGridCnt = cnt;
            if (this.m2_cc) {
                this._setUserGridCnt(cnt);
            }
            else {
            }
        };
        /*
        * 下一长度按钮点击时触发。
        */
        CGridCmpLenDlg.prototype.onNextBtnEvent = function (type, listener, thisObject) {
            if (this.m2_cc) {
                this._onNextBtnEvent(type, listener, thisObject);
            }
            else {
                // Save the parms into cache and plan to do it when ready.
                this.m_nextBtnEventCache.type = type;
                this.m_nextBtnEventCache.listener = listener;
                this.m_nextBtnEventCache.thisObject = thisObject;
            }
        };
        return CGridCmpLenDlg;
    }(eui.Component));
    eyelen4.CGridCmpLenDlg = CGridCmpLenDlg;
    __reflect(CGridCmpLenDlg.prototype,"eyelen4.CGridCmpLenDlg",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CLenInputerBase.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/components/UIComponents/common/Eyelen/CLenInputerBase.ts
 * 长度输入器基类。
 *
 */
var CLenInputerBase = /** @class */ (function (_super) {
    __extends(CLenInputerBase, _super);
    function CLenInputerBase() {
        return _super.call(this) || this;
    }
    CLenInputerBase.prototype.setWidth = function (wid) {
        //        g_console.text += "Error!!Abstract class's func called!!'\n";
    };
    CLenInputerBase.prototype.getLen = function () {
        //        g_console.text += "Error!!Abstract class's func called!!'\n";
        return 0;
    };
    CLenInputerBase.prototype.clearLen = function () {
        //        g_console.text += "Error!!Abstract class's func called!!'\n";
    };
    CLenInputerBase.prototype.lock = function () {
        //        g_console.text += "Error!!Abstract class's func called!!'\n";
    };
    CLenInputerBase.prototype.unlock = function () {
        //        g_console.text += "Error!!Abstract class's func called!!'\n";
    };
    return CLenInputerBase;
}(eui.Component));
window["CLenInputerBase"] = CLenInputerBase;
__reflect(CLenInputerBase.prototype,"CLenInputerBase",[]); 


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CLenInputerDifficult.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * /src/components/UIComponents/Eyelen/CLenInputerDifficult.ts
 * 困难难度下的长度输入控件。让用户拉动卷尺输入长度。
 * 本卷尺控件由尺盒、尺带、拉环三部分组成。用户拉动拉环进行目测结果输入。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CLenInputerDifficult = /** @class */ (function (_super) {
        __extends(CLenInputerDifficult, _super);
        function CLenInputerDifficult() {
            return _super.call(this) || this;
        }
        CLenInputerDifficult.prototype.childrenCreated = function () {
            this.m_isDraging = false;
            this.m_firstDraged = false;
            this.okBtn.enabled = false;
            this.m_dragerBaseX = this.ruler_head.x + this.ruler_head.width;
            this.m_rulerBodyShape = new egret.Shape();
            this.ruler_body.addChild(this.m_rulerBodyShape);
            this.drager.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartDrag, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveOnStage, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTchEndOnStage, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTchRelOutOfStage, this);
        };
        /*
        * 开始拖动时触发。
        */
        CLenInputerDifficult.prototype.onStartDrag = function (evt) {
            if (this.m_isLocked) {
                return;
            }
            this.m_isDraging = true;
            this.m_firstDraged = true;
            this.okBtn.enabled = true;
            this.m_tchPosX = evt.localX;
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
        };
        /*
        * 画尺带。
        */
        CLenInputerDifficult.prototype.drawLen = function () {
            this.m_rulerBodyShape.graphics.clear();
            this.m_rulerBodyShape.graphics.beginFill(0x888888);
            this.m_rulerBodyShape.graphics.drawRect(0, 0, this.drager.x - this.m_dragerBaseX, 60);
            this.m_rulerBodyShape.graphics.endFill();
        };
        /*
        * 拖动时触发。
        */
        CLenInputerDifficult.prototype.onMoveOnStage = function (evt) {
            if (this.m_isLocked) {
                return;
            }
            if (this.m_isDraging) {
                var newX = evt.stageX - this.m_tchPosX;
                if (newX < this.m_dragerBaseX) {
                    newX = this.m_dragerBaseX;
                }
                this.drager.x = newX;
                this.drawLen();
            }
        };
        /*
        * 触摸结束时触发（在卷尺控件内释放）
        */
        CLenInputerDifficult.prototype.onTchEndOnStage = function (evt) {
            if (this.m_isDraging) {
                if (CGlobals.g_isSndOn) {
                    playBtnSnd();
                }
            }
            this.m_isDraging = false;
        };
        /*
        * 触摸结束时触发（在卷尺控件外释放）
        */
        CLenInputerDifficult.prototype.onTchRelOutOfStage = function (evt) {
            this.m_isDraging = false;
        };
        CLenInputerDifficult.prototype.setWidth = function (wid) {
            this.width = wid;
            this.okBtn.x = wid - this.okBtn.width - 20;
        };
        /*
        * 获取当前卷尺代表的长度。
        */
        CLenInputerDifficult.prototype.getLen = function () {
            return this.drager.x - this.m_dragerBaseX;
        };
        /*
        * 清空卷尺长度。
        */
        CLenInputerDifficult.prototype.clearLen = function () {
            this.drager.x = this.m_dragerBaseX;
            this.m_rulerBodyShape.graphics.clear();
            this.m_rulerBodyShape.graphics.beginFill(0x000000);
            this.m_rulerBodyShape.graphics.endFill(); // 要加上这两行否则安卓真机下可能清除失败。
            this.m_firstDraged = false;
            this.okBtn.enabled = false;
        };
        /*
        * 锁定不允许操作卷尺。
        */
        CLenInputerDifficult.prototype.lock = function () {
            this.m_isLocked = true;
            this.okBtn.enabled = false;
        };
        /*
        * 解除锁定，重新允许操作卷尺。
        */
        CLenInputerDifficult.prototype.unlock = function () {
            this.m_isLocked = false;
            if (this.m_firstDraged) {
                this.okBtn.enabled = true;
            }
        };
        return CLenInputerDifficult;
    }(CLenInputerBase));
    eyelen4.CLenInputerDifficult = CLenInputerDifficult;
    __reflect(CLenInputerDifficult.prototype,"eyelen4.CLenInputerDifficult",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CLenInputerEasy.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * /src/components/UIComponents/Eyelen/CLenInputerEasy.ts
 * 简单难度的长度输入控件。用户通过选择格子数量来确定要输入的长度。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CLenInputerEasy = /** @class */ (function (_super) {
        __extends(CLenInputerEasy, _super);
        function CLenInputerEasy() {
            var _this = _super.call(this) || this;
            _this.m_gridWidth = 30;
            _this.m_loadedCellCnt = 0; //已加载的格子个数。
            _this.m_totalGridCnt = 15;
            _this.m_rulerBodyCellContainer = new egret.DisplayObjectContainer();
            _this.m_cells = new Array();
            _this.drawEmptyCells(_this.m_totalGridCnt);
            return _this;
        }
        CLenInputerEasy.prototype.drawEmptyCells = function (cellCnt) {
            var i;
            //1、加载未加载的格子：
            if (this.m_loadedCellCnt < cellCnt) {
                for (i = this.m_loadedCellCnt; i < cellCnt; ++i) {
                    this.m_cells[i] = new CRulerEasyBodyCell();
                    this.m_cells[i].m_tag = i;
                    this.m_cells[i].texture = RES.getRes("rulerBodyCell_gif");
                    this.m_cells[i].x = i * this.m_gridWidth;
                    this.m_cells[i].width = this.m_gridWidth;
                    this.m_cells[i].height = 60;
                    this.m_rulerBodyCellContainer.addChild(this.m_cells[i]);
                }
                this.m_loadedCellCnt = cellCnt;
            }
            //2、重新调整格子的尺寸和位置并显示：
            for (i = 0; i < cellCnt; ++i) {
                this.m_cells[i].x = i * this.m_gridWidth;
                this.m_cells[i].width = this.m_gridWidth;
                this.m_cells[i].visible = true;
            }
            //3、隐藏不显示的格子：
            for (; i < cellCnt; this.m_loadedCellCnt) {
                this.m_cells[i].visible = false;
            }
        };
        CLenInputerEasy.prototype.childrenCreated = function () {
            this.m_isDraging = false;
            this.m_firstDraged = false;
            this.okBtn.enabled = false;
            this.m_dragerBaseX = this.ruler_head.x + this.ruler_head.width;
            this.ruler_body_rect.width = 0;
            this.ruler_body_rect.height = 60;
            this.ruler_body_cells.addChild(this.m_rulerBodyCellContainer);
            var dragerShape;
            var innerBmp;
            var innerBg; // The size of it determines the dragable area.
            dragerShape = new egret.DisplayObjectContainer();
            innerBmp = new egret.Bitmap();
            innerBg = new egret.Shape();
            innerBmp.texture = RES.getRes("ruler_drager_png");
            innerBmp.width = 60;
            innerBmp.height = 80;
            innerBg.graphics.beginFill(0x000000, 0);
            innerBg.graphics.drawRect(0, 0, 90, 80);
            innerBg.graphics.endFill();
            dragerShape.addChild(innerBg);
            dragerShape.addChild(innerBmp);
            dragerShape.width = 200;
            this.m_rulerBodyCellContainer.touchEnabled = true;
            this.m_rulerBodyCellContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRulerTouch, this);
            this.ruler_body_rect.touchEnabled = true;
            this.ruler_body_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRulerTouch, this);
        };
        /*
        * 用户触摸格子时触发。选定从尺盒出口到用户触摸处的所有格子。
        */
        CLenInputerEasy.prototype.onRulerTouch = function (evt) {
            if (this.m_isLocked) {
                return;
            }
            var cellEndTag = Math.floor(evt.localX / (this.m_gridWidth));
            if (cellEndTag >= this.m_totalGridCnt) {
                return;
            }
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
            this.m_userGridCnt = cellEndTag + 1;
            var i;
            for (i = 0; i < cellEndTag; ++i) {
                this.m_cells[i].check();
            }
            for (; i < this.m_totalGridCnt; ++i) {
                this.m_cells[i].uncheck();
            }
            var tmpWid = (Math.floor(cellEndTag) + 1) * this.m_gridWidth;
            this.ruler_body_rect.width = tmpWid;
            this.m_firstDraged = true;
            this.okBtn.enabled = true;
        };
        /*
        * 设置控件的宽度。参数wid为新宽度。通常根据屏幕宽度来设置。
        * 格子总数也需随着改变。
        */
        CLenInputerEasy.prototype.setWidth = function (wid) {
            this.width = wid;
            this.okBtn.x = wid - this.okBtn.width - 20;
            this.m_totalGridCnt = Math.floor((wid - 112) / this.m_gridWidth) - 2;
            this.drawEmptyCells(this.m_totalGridCnt);
        };
        CLenInputerEasy.prototype.getGridWidth = function () {
            return this.m_gridWidth;
        };
        CLenInputerEasy.prototype.getTotalGridCnt = function () {
            return this.m_totalGridCnt;
        };
        /*
        * 获取用户输入的格子数。
        */
        CLenInputerEasy.prototype.getUserGridCnt = function () {
            return this.m_userGridCnt;
        };
        /*
        * 清空用户输入。
        */
        CLenInputerEasy.prototype.clearLen = function () {
            this.ruler_body_rect.width = 0;
            this.m_firstDraged = false;
            this.okBtn.enabled = false;
        };
        CLenInputerEasy.prototype.lock = function () {
            this.m_isLocked = true;
            this.okBtn.enabled = false;
        };
        CLenInputerEasy.prototype.unlock = function () {
            this.m_isLocked = false;
            if (this.m_firstDraged) {
                this.okBtn.enabled = true;
            }
        };
        /*
        * 设置单个各自的宽度。格子越小难度越高。
        */
        CLenInputerEasy.prototype.setGridWidth = function (wid) {
            this.m_gridWidth = wid;
            var i;
            for (i = 0; i < this.m_totalGridCnt; ++i) {
                this.m_cells[i].m_tag = i;
                this.m_cells[i].texture = RES.getRes("rulerBodyCell_gif");
                this.m_cells[i].x = i * this.m_gridWidth;
                this.m_cells[i].width = this.m_gridWidth;
                this.m_cells[i].height = 60;
            }
        };
        return CLenInputerEasy;
    }(CLenInputerBase));
    eyelen4.CLenInputerEasy = CLenInputerEasy;
    __reflect(CLenInputerEasy.prototype,"eyelen4.CLenInputerEasy",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CPraOKBtn.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * 底部区域的确定按钮。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CPraOKBtn = /** @class */ (function (_super) {
        __extends(CPraOKBtn, _super);
        function CPraOKBtn() {
            return _super.call(this) || this;
        }
        CPraOKBtn.prototype.childrenCreated = function () {
        };
        return CPraOKBtn;
    }(eui.Button));
    eyelen4.CPraOKBtn = CPraOKBtn;
    __reflect(CPraOKBtn.prototype,"eyelen4.CPraOKBtn",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CPrivacyPolicyPanel.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CPrivacyPolicyPanel = /** @class */ (function (_super) {
        __extends(CPrivacyPolicyPanel, _super);
        function CPrivacyPolicyPanel() {
            var _this = _super.call(this) || this;
            /*		private s_PriText = "\n\
                            只需要使用修改当前设置权限让内容正确显示（修改分辨率、语言、字体等）。\n\
                            不需要其它权限，如：完全的互联网访问、存储、读取本机识别码、通讯录访问、读取位置信息等。如有申请，禁止即可。\n\
                            建议在权限管理中禁用除修改当前设置外的所有权限。\n\
                            本app不会向用户索取私人信息。";
            */
            _this.s_PriText = "\n\
宜英app隐私政策（2020-08-23修正，2020-08-27于尺眼通更新）\n\
\n\
  本文的主要目的是和您约定我们收集哪些信息、如何收集和使用这些信息，及我们采取的信息安全措施和承诺等。我们深知用户信息保护的重要性，特此制定本政策。\n\
\n\
一、名词解释：\n\
    本政策中“个人信息”、“个人敏感信息”的定义见GB/T35273-2017。\n\
\n\
二、我们收集哪些信息：\n\
    1、我们会在征得用户同意的前提下，收集用户昵称、联系方式（主要是QQ、email，也包括电话号码）。用于必要的以及用户协议规定的沟通。收集方式是为客户提供客服QQ、邮箱地址、信息反馈页面等，用户联系时便能收集到这些信息。\n\
    2、我们可能会在征得同意的前提下收集用户的操作轨迹、设备型号、使用的其它app及服务等用于产品的改进。\n\
    3、我们会借助第三方服务实现一些功能，如：通过百度网盘提供一些大文件的下载。会收集到用户在这些第三方厂商的账号信息。\n\
    4、我们使用的第三方SDK可能会获取一些用户信息，如已安装包名列表。这些行为是我们难以控制的。但我们采用的SDK都是知名或有资质的，因此一般不会损害用户的利益。\n\
\n\
三、我们如何存储这些信息：\n\
    1、我们不会把用户的个人信息提供给他人，以下情况除外：\n\
        （1）用户已违规，按用户协议宜英可公开披露其有关信息。\n\
        （2）用户把宜英产品作违法、违禁用途。为了社会安定和他人人身安全，宜英有权向监管部门、司法机构等提供违反者的有关信息。\n\
        （3）用户的行为损害了宜英的合法权利或扰乱了正常秩序，需要举报或把有关的用户信息交公安机关、司法机构处理。\n\
        （4）用户使用的某些服务需要使用用户的个人信息，我们会在征得用户同意的前提下向第三方提供必要的用户个人信息。此情况下获取的用户个人信息不作他用。\n\
        （5）因程序运行需要，我们会把个人信息存储到其它厂商提供的服务器，并使用服务器软件运行、管理辅助软件管理，还会使用加密软件进行加密……因此，不可避免地把您的信息提供给了服务器提供商、各款服务器软件的厂商、加密解密软件厂商……\n\
            对此，宜英采取的措施是选用有知名度或有资质的软件，并适当了解其有关用户协议及政府和专业媒体披露的相关信息。您理解并同意因知名或有资质厂商的原因造成您个人信息泄露，宜英不承担赔偿责任。\n\
        （6）GB/T35273-2017等国标规定允许披露用户个人信息的其它情况。\n\
\n\
    2、我们如何处理用户个人敏感信息：\n\
        我们获取用户个人敏感信息会根据必要性原则，说明用途并征得用户同意。我们力求做到拒绝提供敏感信息时不影响无关功能的使用。对于获取到的敏感信息我们会不留存或以更高安全保护标准进行存储。\n\
\n\
    3、信息安全措施：\n\
        宜英将按国家一级（即最基础等级）信息安全保护等级标准存储您的个人信息。您理解并同意，若个人信息泄露事件为此标准所难以防范，宜英不承担赔偿责任。\n\
        信息泄露事件发生时，我们会及时联系存储厂商和公安机关进行处理。\n\
\n\
\n\
四、儿童隐私政策：\n\
    1、儿童的界定：\n\
        我们把未满14周岁的用户界定为儿童。\n\
\n\
    2、我们如何获取儿童信息：\n\
        考虑到儿童不具备完全民事行为能力，我们会在征得监护人同意的前提下获取监护人及儿童的个人信息。若儿童在监护人不知情的情况下使用我们的产品，我们会对其进行限制和监管。\n\
\n\
    3、我们如何使用少年儿童的个人信息：\n\
        为了保障少年儿童的身心健康和人身安全，我们可能会把儿童的个人信息及app内有关数据提供给其监护人以及有监护责任的监管部门，而不征得儿童本人的同意。\n\
\n\
		";
            return _this;
        }
        CPrivacyPolicyPanel.prototype.childrenCreated = function () {
            this.contentLabel.$setText(this.s_PriText);
            this.cpyTextPanel.setText(this.s_PriText);
            this.cpyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCpyBtn, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        };
        CPrivacyPolicyPanel.prototype.onCpyBtn = function (e) {
            this.cpyTextPanel.visible = true;
        };
        CPrivacyPolicyPanel.prototype.onCloseBtn = function (e) {
            this.visible = false;
        };
        return CPrivacyPolicyPanel;
    }(eui.Component));
    eyelen4.CPrivacyPolicyPanel = CPrivacyPolicyPanel;
    __reflect(CPrivacyPolicyPanel.prototype,"eyelen4.CPrivacyPolicyPanel",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CRulerEasyBodyCell.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/components/UIComponents/Eyelen/CRulerEasyBodyCell.ts
 * 简单难度尺带的格子。
 *
 */
var CRulerEasyBodyCell = /** @class */ (function (_super) {
    __extends(CRulerEasyBodyCell, _super);
    function CRulerEasyBodyCell() {
        var _this = _super.call(this) || this;
        _this.m_tag = -1;
        _this.m_checked = false;
        return _this;
    }
    /*
     * 选中。
     */
    CRulerEasyBodyCell.prototype.check = function () {
        this.m_checked = true;
    };
    /*
     * 取消选中。
     */
    CRulerEasyBodyCell.prototype.uncheck = function () {
        this.m_checked = false;
    };
    /*
     * 判断是否选中。
     */
    CRulerEasyBodyCell.prototype.checked = function () {
        return this.m_checked;
    };
    return CRulerEasyBodyCell;
}(egret.Bitmap));
window["CRulerEasyBodyCell"] = CRulerEasyBodyCell;
__reflect(CRulerEasyBodyCell.prototype,"CRulerEasyBodyCell",[]); 


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CTopSpace_Eyelen.ts":
/***/ (function(module, exports) {

/**
 *
 * 顶部空白条。当系统为iOS时可用来让当前时间和电池信息等得以显示。
 *
 * 使用方法：设置width —> 设置height —> setColor() —> draw() 。
 *
 */
// 对于刘海屏问题，IOS Native无需使用TopSpace，把data-scale-mode设为“showAll”即可解决。微信小游戏此问题尚未解决。
var CTopSpace_Eyelen = /** @class */ (function (_super) {
    __extends(CTopSpace_Eyelen, _super);
    function CTopSpace_Eyelen() {
        var _this = _super.call(this) || this;
        _this.m_width = 300;
        _this.m_height = 200;
        _this.m_space = new egret.Shape();
        _this.m_space.x = 0;
        _this.m_space.y = 0;
        _this.addChild(_this.m_space);
        return _this;
    }
    CTopSpace_Eyelen.prototype.setColor = function (clr) {
        this.m_color = clr;
    };
    CTopSpace_Eyelen.prototype.draw = function () {
        this.m_space.width = this.m_width;
        this.m_space.height = this.m_height;
        this.m_space.graphics.clear();
        this.m_space.graphics.beginFill(this.m_color);
        this.m_space.graphics.drawRect(0, 0, this.width, this.height);
        this.m_space.graphics.endFill();
    };
    CTopSpace_Eyelen.prototype.redraw = function () {
        this.draw();
    };
    return CTopSpace_Eyelen;
}(egret.DisplayObjectContainer));
window["CTopSpace_Eyelen"] = CTopSpace_Eyelen;
__reflect(CTopSpace_Eyelen.prototype,"CTopSpace_Eyelen",[]); 


/***/ }),

/***/ "./src/components/UIComponents/Eyelen/CUserProPanel.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CUserProPanel = /** @class */ (function (_super) {
        __extends(CUserProPanel, _super);
        function CUserProPanel() {
            var _this = _super.call(this) || this;
            _this.s_PriText = "\n\
宜英尺眼通、角眼通app用户协议（2020-08-23修正，2020-08-27于尺眼通更新）\n\
\n\
一、序：\n\
    1.1、不同意本协议者将不允许使用宜英提供的相关服务。对于不同意本协议且以协议所述方式侵犯宜英及合作厂商合法权益者，宜英也保留追究其法律责任的权利。\n\
\n\
    1.2、您理解并同意，故意逼迫、唆使、误导他人违规者也列入违规用户。\n\
\n\
    1.3、您理解并同意，对于违反本协议，或经合理判断认为违反本协议的用户，宜英有权对其账号进行封停、限制等处理，且有权公开披露其身份信息以及违规的具体情况并进行必要的说明。您理解并同意，披露的截图若难免含有侵权、泄密等不良信息，后果由您自行承担，且宜英有权把您作态度恶劣论处。\n\
        公开披露的同时我们会通过您提供的联系方式（如有）进行通知，或尝试通过他人转告。对披露结果有异议者可于5个月内与我们沟通解决。\n\
\n\
    1.4、您理解并同意，对于可能违反本协议或可能侵犯供应链厂商合法权益、扰乱公公秩序的情况，宜英有权向您展开调查。若调查受阻（包括但不限于沟通受阻、无回应、不以真实情况回答），情节严重者可列入违规用户名单并公开披露。\n\
\n\
    1.5、您充分理解并同意，违规行为为第三方逼迫、唆使、误导引起，但不能提供充分证据证明是第三方所为的情况，宜英将把您作违规者论处。\n\
\n\
    1.6、本协议内容会有后续变更。宜英会在协议里注明最后更新时间。您理解并同意，对于协议更新造成的纠纷，我们只根据情节和自身能力给与适当的帮助和补偿。不同意新协议内容者建议以邮件或QQ形式向我们报告，以减少因违规处罚造成的损失。\n\
\n\
    1.7、争议解决：争议发生时应当先友好协商。协商未能达成共识则可通过监管平台、监管部门、法律途径解决。宜英工作室愿意接受国家相关部门的监管、整改、关闭以及履行法定义务、承担因违法违规带来的责任。\n\
\n\
\n\
二、服务性质与责任的承担：\n\
    2.1、您理解并同意，用户无需支付费用便允许使用本app，但因使用本app造成的后果由用户自行承担，宜英工作室及供应链厂商（包括但不限于运行库提供商、素材供应商）、劳务提供商均不承担赔偿等责任。\n\
\n\
    2.2、品牌标识的有关说明：\n\
    “宜英”目前为个人工作室品牌。非宜英成员不得把宜英标志、app图标等用于敏感用途，包括但不限于产品标识、用户图标、论坛签名。不得冒充宜英工作室进行产品发布、消息发布、用户召集等活动。\n\
\n\
    2.3、您理解并同意，宜英app为公众提供的服务主要为非排他服务。用户不得以己方竞业要求为由阻碍宜英向竞争对手宣传和提供通用服务。须出具带有宜英签章的书面开发协议方可认定为专属定制服务。\n\
        违反以上规定的用户应当向宜英赔偿正规渠道推广费用的10倍（下文称“服务限制赔偿金”）。造成其它损害，包括但不限于名誉权、人身财产权者，应当根据法律规定向宜英承担额外的法律责任。服务限制赔偿金不包含名誉权、人身财产权等方面的赔偿，也不能减免其它责任。若服务限制行为同时侵犯了竞争对手的合法权益，则应同时向竞争对手和宜英足额承担各自的法律责任。\n\
\n\
    2.4、您理解并同意，对于没有以书面合同明确约定的服务，宜英工作室有权单方对服务内容进行变更、关停并于官方途径公布，而无需以邮件、手机等方式推送通知您。\n\
\n\
    2.5、您理解并同意，您不得把本app用于违禁用途，包括但不限于违法用途、法律法规规定禁止使用的情形、《使用指引》上所述的医疗等。\n\
        您理解并同意，对于作违禁用途者，一切后果由违反者承担，宜英不承担连带责任。宜英有权不考虑违反者的利益采取各种措施，包括但不限于中止服务、调查、举报。以上措施对涉嫌违反者造成的损失宜英不承担赔偿责任。\n\
\n\
\n\
三、知识产权：\n\
    3.1、app的使用许可：\n\
        本程序使用许可为MIT许可。关于MIT协议的详细说明见MIT协议官方网站。\n\
\n\
    3.2、著作权归属：\n\
        根据国际上的规定，本app著作权归核心技术提供方北京白鹭时代信息技术有限公司（简称白鹭科技）所有。而在中国，因发布推广的需要，内容创作方宜英工作室为著作权证书持有者。\n\
        侵犯著作权通常会同时侵犯白鹭科技和宜英工作室的合法权益。白鹭科技和宜英工作室均保留追究法律责任的权利。\n\
\n\
    3.3、第三方素材的有关协议：\n\
        宜英app会使用一些第三方提供的素材，如图片、音乐。\n\
        用户擅自使用这些素材作敏感用途，包括但不限于商业视频、用于自己的产品或Logo，均很有可能侵犯第三方的知识产权。\n\
        您理解并同意，对此侵权责任由用户自行承担。且宜英工作室因协助第三方调查、取证对您造成的损失不予以赔偿。\n\
\n\
    3.4、二次开发的有关协议：\n\
        （1）二次开发者发布时须在遵守MIT协议的基础上把app图标更换成自家图标，以示与原版app的区别。app内容有改动的，也要在遵守MIT协议的基础上去除相关部分的宜英标识，以区别于原版app。\n\
        （2）二次开发者不得侵犯程序项目中框架引擎、开发库、素材提供者等的知识产权。\n\
        注：本app代码中（例如：main. ts）包含白鹭科技的版权声明。二次开发者须充分理解并遵守该BSD协议，避免侵权。该版权声明的最终解释权归白鹭科技所有。\n\
\n\
";
            return _this;
        }
        CUserProPanel.prototype.childrenCreated = function () {
            this.contentLabel.$setText(this.s_PriText);
            this.resetTextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResetTextBtn, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
        };
        CUserProPanel.prototype.onResetTextBtn = function () {
            this.contentLabel.$setText(this.s_PriText);
        };
        CUserProPanel.prototype.onCloseBtnTap = function (e) {
            this.contentLabel.$setText(this.s_PriText);
            this.visible = false;
        };
        return CUserProPanel;
    }(eui.Component));
    eyelen4.CUserProPanel = CUserProPanel;
    __reflect(CUserProPanel.prototype,"eyelen4.CUserProPanel",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CCopyrightPanel_V2.ts":
/***/ (function(module, exports) {

/**************************************************
 * /src/components/UIComponents/common/CCopyrightPanel.ts
 *
 * 版权声明显示框。显示白鹭引擎的版权声明。
 *
**************************************************/
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CCopyrightPanel_V2 = /** @class */ (function (_super) {
        __extends(CCopyrightPanel_V2, _super);
        function CCopyrightPanel_V2() {
            var _this = _super.call(this) || this;
            _this.s_cpText = "\n    Copyright (C) 2019-present, 梁力，MIT许可。\n\
				注：部分运行库和素材为第三方版权所有，擅自提取使用可能造成侵权！\n\
				白鹭引擎版权声明在白鹭科技官网上的有关产品可找到。";
            return _this;
            /*
                测试滚动效果用：
                            var i;
                            for(i=0;i<6;++i) {
                                this.s_cpText += "fwefwefsdafdf\n";
                                this.s_cpText += "6fgfsdf234234234wser234234\n";
                                this.s_cpText += "f4ddfsaf23433234wfsdfsdf\n";
                            }*/
        }
        CCopyrightPanel_V2.prototype.childrenCreated = function () {
            this.content.textColor = 0x000000;
            this.content.size = 18;
            this.content.text = this.s_cpText;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
            this.arrowUp.touchEnabled = true;
            this.arrowDown.touchEnabled = true;
            this.arrowUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUpArrowTap, this);
            this.arrowDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDownArrowTap, this);
        };
        CCopyrightPanel_V2.prototype.onUpArrowTap = function (e) {
            if (this.contentScroller.viewport.scrollV - 100 < 0) {
                this.contentScroller.viewport.scrollV = 0;
            }
            else {
                this.contentScroller.viewport.scrollV -= 100;
            }
        };
        CCopyrightPanel_V2.prototype.onDownArrowTap = function (e) {
            if (this.contentScroller.viewport.scrollV + 100 > 400) {
                this.contentScroller.viewport.scrollV = 400;
            }
            else {
                this.contentScroller.viewport.scrollV += 100;
            }
        };
        CCopyrightPanel_V2.prototype.onCloseBtnTap = function (e) {
            this.visible = false;
            //				this.content.y = 141;
            this.contentScroller.viewport.scrollV = 0;
        };
        return CCopyrightPanel_V2;
    }(eui.Component));
    eyelen4.CCopyrightPanel_V2 = CCopyrightPanel_V2;
    __reflect(CCopyrightPanel_V2.prototype,"eyelen4.CCopyrightPanel_V2",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CCpyTextPanel.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CCpyTextPanel = /** @class */ (function (_super) {
        __extends(CCpyTextPanel, _super);
        function CCpyTextPanel() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            return _this;
        }
        CCpyTextPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.m2_cc = true;
            this.txtArea.$setText(this.m_text);
            this.resetTextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResetTextBtn, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            this.txtArea.addEventListener(eui.UIEvent.CHANGE, this.onResetTextBtn, this);
        };
        CCpyTextPanel.prototype.setText = function (txt) {
            this.m_text = txt;
            if (this.m2_cc) {
                this.txtArea.$setText(this.m_text);
            }
        };
        CCpyTextPanel.prototype.onResetTextBtn = function () {
            this.txtArea.$setText(this.m_text);
        };
        CCpyTextPanel.prototype.onCloseBtn = function () {
            this.txtArea.$setText(this.m_text);
            this.visible = false;
        };
        return CCpyTextPanel;
    }(eui.Component));
    eyelen4.CCpyTextPanel = CCpyTextPanel;
    __reflect(CCpyTextPanel.prototype,"eyelen4.CCpyTextPanel",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CFinalScoreDlg.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * /src/components/UIComponents/common/CFinalScoreDlg.ts
 * 最终得分显示对话框。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CFinalScoreDlg = /** @class */ (function (_super) {
        __extends(CFinalScoreDlg, _super);
        function CFinalScoreDlg() {
            var _this = _super.call(this) || this;
            _this.m_bg = new egret.Shape();
            _this.m_starsArr = new Array();
            _this.m_starsContainer = new egret.DisplayObjectContainer();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_starsArr[i] = new egret.Bitmap();
                _this.m_starsArr[i].texture = RES.getRes("star_empty_png");
                _this.m_starsArr[i].width = 60;
                _this.m_starsArr[i].height = 60;
                _this.m_starsArr[i].x = 64 * i;
                _this.m_starsContainer.addChild(_this.m_starsArr[i]);
            }
            _this.m_replayEvt = new CFinalScoreDlgEvent(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP);
            return _this;
        }
        CFinalScoreDlg.prototype.childrenCreated = function () {
            this.m_bg.graphics.beginFill(0x00FF00);
            this.m_bg.graphics.drawRect(0, 0, this.width, this.height);
            this.m_bg.graphics.endFill();
            this.bgGrp.addChild(this.m_bg);
            this.stars.addChild(this.m_starsContainer);
            this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplay, this);
        };
        CFinalScoreDlg.prototype.setScore = function (s) {
            this.score.text = s.toString();
        };
        CFinalScoreDlg.prototype.setStars = function (scnt) {
            var i;
            for (i = 0; i < scnt; ++i) {
                this.m_starsArr[i].texture = RES.getRes("star_full_png");
            }
            for (; i < 3; ++i) {
                this.m_starsArr[i].texture = RES.getRes("star_empty_png");
            }
        };
        CFinalScoreDlg.prototype.onReplay = function (evt) {
            this.dispatchEvent(this.m_replayEvt);
        };
        return CFinalScoreDlg;
    }(eui.Component));
    eyelen4.CFinalScoreDlg = CFinalScoreDlg;
    __reflect(CFinalScoreDlg.prototype,"eyelen4.CFinalScoreDlg",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CFinalScoreDlgEvent.ts":
/***/ (function(module, exports) {

/**
 * /src/components/UIComponents/common/CFinalScoreDlgEvent.ts
 * 最终得分显示对话框事件。
 */
var CFinalScoreDlgEvent = /** @class */ (function (_super) {
    __extends(CFinalScoreDlgEvent, _super);
    function CFinalScoreDlgEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP = "EVT_REPLAY_BTN_TAP";
    return CFinalScoreDlgEvent;
}(egret.Event));
window["CFinalScoreDlgEvent"] = CFinalScoreDlgEvent;
__reflect(CFinalScoreDlgEvent.prototype,"CFinalScoreDlgEvent",[]); 


/***/ }),

/***/ "./src/components/UIComponents/common/CHelpPanel.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CHelpPanel = /** @class */ (function (_super) {
        __extends(CHelpPanel, _super);
        function CHelpPanel() {
            var _this = _super.call(this) || this;
            _this.s_PriText_Android = "\n\
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
            _this.s_PriText_iOS = "\n\
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
            _this.s_PriText_Other = "\n\
				适宜用户：\n\
					本产品适合8-60岁身体、精神均健康者使用。\n\
					少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
					老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
					本产品旨在提升能力，不宜作竞赛用途。\n\
				\n\
				(更新于2020-10-04)\n\
				";
            return _this;
        }
        CHelpPanel.prototype.childrenCreated = function () {
            if (CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_ANDROID) {
                this.contentLabel.text = this.s_PriText_Android;
            }
            else if (CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_IOS) {
                this.contentLabel.text = this.s_PriText_iOS;
            }
            else {
                this.contentLabel.text = this.s_PriText_Other;
            }
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
        };
        CHelpPanel.prototype.onCloseBtnTap = function (e) {
            this.visible = false;
        };
        return CHelpPanel;
    }(eui.Component));
    eyelen4.CHelpPanel = CHelpPanel;
    __reflect(CHelpPanel.prototype,"eyelen4.CHelpPanel",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CHorverCheckPanel.ts":
/***/ (function(module, exports) {

/*
*   /src/components/UIComponents/common/CHorverCheckPanel.ts
*   横竖检验框。
*/
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CHorverCheckPanel = /** @class */ (function (_super) {
        __extends(CHorverCheckPanel, _super);
        function CHorverCheckPanel() {
            var _this = _super.call(this) || this;
            _this.m_squareTag = 1; // 当前图案的编号。
            _this.m_squareChCntTotal = 1; // 表示换图所需敲击次数。敲击多了该值会逐渐增大，换图逐渐变慢。
            _this.m_squareChCntLeft = 1; // 剩余换图敲击次数。敲击一次该值减小1。减到 0 则换图并把该值置为换图最大次数。
            return _this;
        }
        CHorverCheckPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.caliSquare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSquareTap, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            // 初始化正方形上的红圈动画：
            this.m_rippleCircle = new egret.Bitmap();
            this.m_rippleCircle.width = 20;
            this.m_rippleCircle.height = 20;
            this.m_rippleCircle.x = this.caliSquare.x + this.caliSquare.width / 2 - 10;
            this.m_rippleCircle.y = this.caliSquare.y + this.caliSquare.height / 2 - 10;
            this.m_rippleCircle.texture = RES.getRes("rippleCircle_png");
            this.addChild(this.m_rippleCircle);
            //开启红圈动画效果:
            var tw = egret.Tween.get(this.m_rippleCircle, { loop: true });
            tw.to({ x: this.caliSquare.x + 5, y: this.caliSquare.y + 5, width: 150, height: 150, alpha: 0.4 }, 200).to({ alpha: 0 }, 100).wait(1500);
        };
        CHorverCheckPanel.prototype.onSquareTap = function (evt) {
            --this.m_squareChCntLeft;
            if (this.m_squareChCntLeft <= 0) //满足换图条件
             {
                this.m_squareTag = this.m_squareTag % 3 + 1;
                var squNameStr;
                squNameStr = "square" + this.m_squareTag + "_png";
                this.caliSquare.source = squNameStr;
                if (this.m_squareTag <= 1) //图换了一圈
                 {
                    ++this.m_squareChCntTotal;
                }
                this.m_squareChCntLeft = this.m_squareChCntTotal;
            }
        };
        CHorverCheckPanel.prototype.onCloseBtn = function () {
            this.visible = false;
        };
        return CHorverCheckPanel;
    }(eui.Component));
    eyelen4.CHorverCheckPanel = CHorverCheckPanel;
    __reflect(CHorverCheckPanel.prototype,"eyelen4.CHorverCheckPanel",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CMenuBtn.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CMenuBtn = /** @class */ (function (_super) {
        __extends(CMenuBtn, _super);
        function CMenuBtn() {
            return _super.call(this) || this;
        }
        return CMenuBtn;
    }(eui.Button));
    gdeint.CMenuBtn = CMenuBtn;
    __reflect(CMenuBtn.prototype,"gdeint.CMenuBtn",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/components/UIComponents/common/CProProgressView.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 * /src/components/UIComponents/common/CProProgressView.ts
 * 进度显示控件。
 */
var eyelen4;
(function (eyelen4) {
    var CProProgressView = /** @class */ (function (_super) {
        __extends(CProProgressView, _super);
        function CProProgressView() {
            var _this = _super.call(this) || this;
            _this.s_cellWidth = 20; // 格子宽度。
            _this.s_cellHeight = 18; //格子高度。
            var i;
            _this.m_progressCellsArr = new Array();
            _this.m_progressCellContainer = new egret.DisplayObjectContainer();
            _this.m_progress = 0;
            for (i = 0; i < 3; ++i) {
                _this.m_progressCellsArr[i] = new egret.Bitmap();
                _this.m_progressCellsArr[i].x = i * _this.s_cellWidth;
                _this.m_progressCellsArr[i].y = -5;
                _this.m_progressCellsArr[i].width = _this.s_cellWidth;
                _this.m_progressCellsArr[i].height = _this.s_cellHeight + 10;
                //                this.m_progressCellsArr[i].scaleY = 1.5;
                _this.m_progressCellsArr[i].texture = RES.getRes("progress_cell_empty_png");
                _this.m_progressCellContainer.addChild(_this.m_progressCellsArr[i]);
            }
            for (i = 3; i < 10; ++i) {
                _this.m_progressCellsArr[i] = new egret.Bitmap();
                _this.m_progressCellsArr[i].x = i * _this.s_cellWidth;
                _this.m_progressCellsArr[i].y = 0;
                _this.m_progressCellsArr[i].width = _this.s_cellWidth;
                _this.m_progressCellsArr[i].height = _this.s_cellHeight;
                _this.m_progressCellsArr[i].texture = RES.getRes("progress_cell_empty_png");
                _this.m_progressCellContainer.addChild(_this.m_progressCellsArr[i]);
            }
            return _this;
        }
        CProProgressView.prototype.childrenCreated = function () {
            this.progressCells.addChild(this.m_progressCellContainer);
            console.log("ProProgressView ready!");
        };
        // 显示参数所指的进度。
        CProProgressView.prototype.setProgress = function (progress) {
            //progress range:0~10
            this.m_progress = progress;
            var i;
            for (i = 1; i <= this.m_progress; ++i) {
                this.m_progressCellsArr[i - 1].texture = RES.getRes("progress_cell_png");
            }
            for (; i <= 10; ++i) {
                this.m_progressCellsArr[i - 1].texture = RES.getRes("progress_cell_empty_png");
            }
        };
        CProProgressView.prototype.clear = function () {
            this.setProgress(0);
        };
        return CProProgressView;
    }(eui.Component));
    eyelen4.CProProgressView = CProProgressView;
    __reflect(CProProgressView.prototype,"eyelen4.CProProgressView",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CProgressView.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 * /src/components/UIComponents/common/CProgressView.ts
 * 进度显示控件。
 */
var eyelen4;
(function (eyelen4) {
    var CProgressView = /** @class */ (function (_super) {
        __extends(CProgressView, _super);
        function CProgressView() {
            var _this = _super.call(this) || this;
            _this.s_cellWidth = 20; // 格子宽度。
            _this.s_cellHeight = 18; //格子高度。
            var i;
            _this.m_progressCellsArr = new Array();
            _this.m_progressCellContainer = new egret.DisplayObjectContainer();
            _this.m_progress = 0;
            for (i = 0; i < 10; ++i) {
                _this.m_progressCellsArr[i] = new egret.Bitmap();
                _this.m_progressCellsArr[i].x = i * _this.s_cellWidth;
                _this.m_progressCellsArr[i].y = 0;
                _this.m_progressCellsArr[i].width = _this.s_cellWidth;
                _this.m_progressCellsArr[i].height = _this.s_cellHeight;
                _this.m_progressCellsArr[i].texture = RES.getRes("progress_cell_empty_png");
                _this.m_progressCellContainer.addChild(_this.m_progressCellsArr[i]);
            }
            return _this;
        }
        CProgressView.prototype.childrenCreated = function () {
            this.progressCells.addChild(this.m_progressCellContainer);
        };
        // 显示参数所指的进度。
        CProgressView.prototype.setProgress = function (progress) {
            //progress range:0~10
            this.m_progress = progress;
            var i;
            for (i = 1; i <= this.m_progress; ++i) {
                this.m_progressCellsArr[i - 1].texture = RES.getRes("progress_cell_png");
            }
            for (; i <= 10; ++i) {
                this.m_progressCellsArr[i - 1].texture = RES.getRes("progress_cell_empty_png");
            }
        };
        CProgressView.prototype.clear = function () {
            this.setProgress(0);
        };
        return CProgressView;
    }(eui.Component));
    eyelen4.CProgressView = CProgressView;
    __reflect(CProgressView.prototype,"eyelen4.CProgressView",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CRandomGraph.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
/*
 * /src/components/UIComponents/common/CRandomGraph.ts
 * 随机练习图形。
 */
var gdeint;
(function (gdeint) {
    var CRandomGraph = /** @class */ (function (_super) {
        __extends(CRandomGraph, _super);
        function CRandomGraph() {
            var _this = _super.call(this) || this;
            _this.m_seed = 0; // 当前图形的对应的种子。
            _this.width = 1024;
            _this.height = 720;
            // 尽可能用一个shape完成。
            _this.m_shapes = new Array();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_shapes.push(new egret.Shape());
                _this.addChild(_this.m_shapes[i]);
            }
            return _this;
        }
        CRandomGraph.prototype.genFromSeed = function (seed) {
            this.m_seed = seed;
            var i;
            for (i = 0; i < this.m_shapes.length; ++i) {
                this.m_shapes[i].graphics.clear();
            }
            switch (seed) {
                case 1:
                    var x1, x2, x3;
                    x1 = 0;
                    x2 = this.width / 3;
                    x3 = this.width / 3 * 2;
                    this.m_shapes[0].graphics.beginFill(0xAA0088);
                    this.m_shapes[0].graphics.drawRect(x1, 0, this.width / 3, this.height);
                    this.m_shapes[0].graphics.endFill();
                    this.m_shapes[1].graphics.beginFill(0x339900);
                    this.m_shapes[1].graphics.drawRect(x2, 0, this.width / 3, this.height);
                    this.m_shapes[1].graphics.endFill();
                    this.m_shapes[2].graphics.beginFill(0x0000FF);
                    this.m_shapes[2].graphics.drawRect(x3, 0, this.width / 3, this.height);
                    this.m_shapes[2].graphics.endFill();
                    break;
                case 2:
                    var y1, y2, y3;
                    y1 = 0;
                    y2 = this.height / 3;
                    y3 = this.height / 3 * 2;
                    this.m_shapes[0].graphics.beginFill(0x0000FF);
                    this.m_shapes[0].graphics.drawRect(0, y1, this.width, this.height / 3);
                    this.m_shapes[0].graphics.endFill();
                    this.m_shapes[1].graphics.beginFill(0x339900);
                    this.m_shapes[1].graphics.drawRect(0, y2, this.width, this.height / 3);
                    this.m_shapes[1].graphics.endFill();
                    this.m_shapes[2].graphics.beginFill(0xAA0088);
                    this.m_shapes[2].graphics.drawRect(0, y3, this.width, this.height / 3);
                    this.m_shapes[2].graphics.endFill();
                    break;
                case 3:
                    this.m_shapes[0].graphics.beginFill(0x339900);
                    this.m_shapes[0].graphics.drawRect(0, 0, this.width, this.height);
                    this.m_shapes[0].graphics.endFill();
                    this.m_shapes[0].graphics.beginFill(0x0000FF);
                    this.m_shapes[0].graphics.drawEllipse(0, 0, this.width / 2, this.height);
                    this.m_shapes[0].graphics.endFill();
                    this.m_shapes[0].graphics.beginFill(0xAA0088);
                    this.m_shapes[0].graphics.drawEllipse(this.width / 2, 0, this.width / 2, this.height);
                    this.m_shapes[0].graphics.endFill();
            }
        };
        CRandomGraph.prototype.genGraph = function (wid, hei) {
            this.width = wid;
            this.height = hei;
            var seed;
            seed = Math.floor(Math.random() * 3) + 1; //种子取值范围：[1,3]
            this.genFromSeed(seed);
        };
        CRandomGraph.prototype.resize = function (wid, hei) {
            this.width = wid;
            this.height = hei;
            this.genFromSeed(this.m_seed);
        };
        /*
            a、只复制图的内容。
            b、连同尺寸。
        */
        CRandomGraph.prototype.copyFrom = function (src, copySize) {
            if (copySize === void 0) { copySize = true; }
            if (copySize) {
                this.resize(src.width, src.height);
            }
            this.genFromSeed(src.m_seed);
        };
        return CRandomGraph;
    }(eui.Component));
    gdeint.CRandomGraph = CRandomGraph;
    __reflect(CRandomGraph.prototype,"gdeint.CRandomGraph",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/components/UIComponents/common/CScoreFlagRect.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/components/UIComponents/common/CScoreFlagRect.ts
 * 数字点阵转换器。用于把数字转换成点阵。程序中把得分以三行 旗子/点/叉 方式输出就要用到本转换器。
 *
 */
var CScoreFlagRect = /** @class */ (function () {
    function CScoreFlagRect() {
        this.m_value1 = 0; //Flag count.
        this.m_value2 = 0; //Cross count.
    }
    CScoreFlagRect.prototype.setCnts = function (v1, v2) {
        //只接受整数。
        this.m_value1 = Math.floor(v1);
        this.m_value2 = Math.floor(v2);
    };
    CScoreFlagRect.prototype.getFlagArr = function () {
        //1、Init:
        var ret = new Array(); // 10 * 3. 0:dot 1:flag 2:cross
        var i, j;
        for (i = 0; i < 3; ++i) {
            ret[i] = new Array();
            for (j = 0; j < 10; ++j) {
                ret[i][j] = 0;
            }
        }
        //Validate inputs:
        if (this.m_value1 < 0 || this.m_value2 < 0) {
            return ret;
        }
        if (this.m_value1 + this.m_value2 > 30) {
            return ret;
        }
        //2、Fill1 flags:
        var startVal = 0; //Range: 0-29
        var endVal = this.m_value1 - 1; //Range: 0-29
        if (endVal >= startVal) { //Do nothing if startVal>endVal
            if (Math.floor(startVal / 10) == Math.floor(endVal / 10)) //Start and end same line.
             {
                for (j = startVal; j <= endVal; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 1;
                }
            }
            else //Start and end different line.
             {
                for (j = startVal % 10; j < 10; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 1;
                }
                for (i = Math.floor(startVal / 10) + 1; i < Math.floor(endVal / 10); ++i) {
                    for (j = 0; j < 10; ++j) {
                        ret[i][j] = 1;
                    }
                }
                for (j = 0; j <= Math.floor(endVal % 10); ++j) {
                    ret[Math.floor(endVal / 10)][j] = 1;
                }
            }
        }
        //3、Fill dots:
        startVal = this.m_value1;
        endVal = 29 - this.m_value2;
        if (endVal >= startVal) { //Do nothing if startVal>endVal
            if (Math.floor(startVal / 10) == Math.floor(endVal / 10)) //Start and end same line.
             {
                for (j = startVal; j <= endVal; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 0;
                }
            }
            else //Start and end different line.
             {
                for (j = startVal % 10; j < 10; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 0;
                }
                for (i = Math.floor(startVal / 10) + 1; i < Math.floor(endVal / 10); ++i) {
                    for (j = 0; j < 10; ++j) {
                        ret[i][j] = 0;
                    }
                }
                for (j = 0; j <= Math.floor(endVal % 10); ++j) {
                    ret[Math.floor(endVal / 10)][j] = 0;
                }
            }
        }
        //4、Fill3(Crosses):
        startVal = 30 - this.m_value2;
        endVal = 29;
        if (endVal >= startVal) { //Do nothing if startVal>endVal
            if (Math.floor(startVal / 10) == Math.floor(endVal / 10)) //Start and end same line.
             {
                for (j = startVal; j <= endVal; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 2;
                }
            }
            else //Start and end different line.
             {
                for (j = startVal % 10; j < 10; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 2;
                }
                for (i = Math.floor(startVal / 10) + 1; i < Math.floor(endVal / 10); ++i) {
                    for (j = 0; j < 10; ++j) {
                        ret[i][j] = 2;
                    }
                }
                for (j = 0; j <= Math.floor(endVal % 10); ++j) {
                    ret[Math.floor(endVal / 10)][j] = 2;
                }
            }
        }
        return ret;
    };
    return CScoreFlagRect;
}());
window["CScoreFlagRect"] = CScoreFlagRect;
__reflect(CScoreFlagRect.prototype,"CScoreFlagRect",["IScoreFlagRect"]); 


/***/ }),

/***/ "./src/components/UIComponents/common/CScoreView.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * /src/components/UIComponents/common/CScoreView.ts
 * 练习得分显示（含数字和图示）。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CScoreView = /** @class */ (function (_super) {
        __extends(CScoreView, _super);
        function CScoreView() {
            var _this = _super.call(this) || this;
            _this.s_flagWidth = 13; //旗子宽度。
            _this.s_flagHeight = 22; //旗子高度。
            _this.m_score = 0; // 当前成绩。不填写则为0。
            _this.m_progress = 0; // 当前进度。不填写则为0。
            _this.m_created = false; // 界面子元素是否已创建完成。
            _this.m_scoreFlagsArr = new Array();
            _this.m_scoreFlagsContainer = new egret.DisplayObjectContainer();
            return _this;
        }
        CScoreView.prototype.childrenCreated = function () {
            this.m_created = true;
            this.m_scoreFlagsArr = new Array();
            this.m_scoreFlagsContainer = new egret.DisplayObjectContainer();
            var i, j;
            for (i = 0; i < 3; ++i) {
                this.m_scoreFlagsArr[i] = new Array();
                for (j = 0; j < 10; ++j) {
                    this.m_scoreFlagsArr[i][j] = new egret.Bitmap();
                    this.m_scoreFlagsArr[i][j].x = (this.s_flagWidth + 3) * j + 5;
                    this.m_scoreFlagsArr[i][j].y = (this.s_flagHeight + 2) * i;
                    this.m_scoreFlagsArr[i][j].width = this.s_flagWidth;
                    this.m_scoreFlagsArr[i][j].height = this.s_flagHeight;
                    this.m_scoreFlagsArr[i][j].texture = RES.getRes("score_dot_png");
                    this.m_scoreFlagsContainer.addChild(this.m_scoreFlagsArr[i][j]);
                }
            }
            this.scoreFlags.addChild(this.m_scoreFlagsContainer);
            this.updateScoreFlags();
        };
        /*
        * 根据 m_score 刷新旗子矩阵。
        */
        CScoreView.prototype.updateScoreFlags = function () {
            if (!this.m_created) {
                return;
            }
            this.scoreTxt.text = this.m_score.toString();
            var fra = new CScoreFlagRect();
            var flagCnt = this.m_score / 10;
            var dotCnt = 30 - (this.m_progress) * 3;
            var crossCnt = 30 - flagCnt - dotCnt;
            fra.setCnts(flagCnt, crossCnt);
            var flagArrInt = fra.getFlagArr();
            var i, j;
            for (i = 0; i < 3; ++i) {
                for (j = 0; j < 10; ++j) {
                    switch (flagArrInt[i][j]) {
                        case 0:
                            this.m_scoreFlagsArr[i][j].texture = RES.getRes("score_dot_png");
                            break;
                        case 1:
                            this.m_scoreFlagsArr[i][j].texture = RES.getRes("score_flag_png");
                            break;
                        case 2:
                            this.m_scoreFlagsArr[i][j].texture = RES.getRes("score_cross_png");
                            break;
                    }
                }
            }
        };
        /*
        * 设置成绩（连同进度）。
        */
        CScoreView.prototype.setScoreWithPro = function (score, progress) {
            //progress:0-10
            this.m_score = score;
            this.m_progress = progress;
            this.updateScoreFlags();
        };
        /*
        * 清空数据。
        */
        CScoreView.prototype.clearScore = function () {
            this.setScoreWithPro(0, -1);
        };
        return CScoreView;
    }(eui.Component));
    eyelen4.CScoreView = CScoreView;
    __reflect(CScoreView.prototype,"eyelen4.CScoreView",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CShutDownClock.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CShutdownClock = /** @class */ (function (_super) {
        __extends(CShutdownClock, _super);
        function CShutdownClock() {
            var _this = _super.call(this) || this;
            _this.m2_fontSize = 24;
            _this.m2_cc = false;
            _this.m2_cc = 94;
            return _this;
        }
        CShutdownClock.prototype.childrenCreated = function () {
            this.m2_cc = true;
            this.timeLabel.size = this.m2_fontSize;
            this.m_tracerTimer = new egret.Timer(200, 0);
            this.m_tracerTimer.addEventListener(egret.TimerEvent.TIMER, this.onTracerTimer, this);
        };
        CShutdownClock.prototype.setFontSize = function (fs) {
            this.m2_fontSize = fs;
            if (this.m2_cc) {
                this.timeLabel.size = this.m2_fontSize;
            }
        };
        CShutdownClock.prototype.onTracerTimer = function () {
            this.timeLabel.text = gdeint.seconds2MinSec(1200 - this.m_timerPointer.currentCount);
        };
        /*		public setTimer(msCnt:number , listener:Function) {
                    var timer:egret.Timer;
                    timer = new egret.Timer(msCnt , 1);
                    timer.addEventListener(egret.TimerEvent.TIMER,listener,this);
                    timer.start();
                }*/
        CShutdownClock.prototype.setTimer = function (timer) {
            this.m_timerPointer = timer;
            this.m_tracerTimer.start();
        };
        return CShutdownClock;
    }(eui.Component));
    gdeint.CShutdownClock = CShutdownClock;
    __reflect(CShutdownClock.prototype,"gdeint.CShutdownClock",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/components/UIComponents/common/CShutdownScr.ts":
/***/ (function(module, exports) {

var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CShutdownScr = /** @class */ (function (_super) {
        __extends(CShutdownScr, _super);
        function CShutdownScr() {
            return _super.call(this) || this;
        }
        CShutdownScr.prototype.childrenCreated = function () {
        };
        return CShutdownScr;
    }(eui.Component));
    gdeint.CShutdownScr = CShutdownScr;
    __reflect(CShutdownScr.prototype,"gdeint.CShutdownScr",[]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/components/UIComponents/common/CThumbUI.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/*
    本组件只提供元素。大小和位置操作由外部程序负责。
*/
var eyelen4;
(function (eyelen4) {
    var CThumbUI = /** @class */ (function (_super) {
        __extends(CThumbUI, _super);
        function CThumbUI() {
            var _this = _super.call(this) || this;
            _this.m_NoImgMode = false;
            _this.m_thumbTapEvt = new CThumbUIEvent(CThumbUIEvent.EVT_THUMB_TAP);
            _this.m_randomGraphShape = new gdeint.CRandomGraph();
            _this.m_randomGraphShape.width = 150;
            _this.m_randomGraphShape.height = 120;
            _this.m_randomGraphShape.visible = false;
            return _this;
        }
        CThumbUI.prototype.childrenCreated = function () {
            this.randomGraphThumbGrp.addChild(this.m_randomGraphShape);
            this.thumbCover.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onThumbTap, this);
            this.m2_cc = true;
            if (this.m_NoImgMode) {
                this.imgThumb.visible = false;
                this.randomGraphThumbGrp.visible = true;
                this.m_randomGraphShape.visible = true;
            }
            else {
                this.imgThumb.visible = true;
                this.randomGraphThumbGrp.visible = false;
                this.m_randomGraphShape.visible = false;
            }
        };
        CThumbUI.prototype.setThumbWidth = function (w) {
            this.imgThumb.width = w;
            this.m_randomGraphShape.resize(w, this.m_randomGraphShape.height);
            this.thumbSel.width = w;
            this.thumbCover.width = w;
        };
        CThumbUI.prototype.getThumbWidth = function () {
            var ret;
            if (this.m_NoImgMode) {
                ret = this.m_randomGraphShape.width;
            }
            else {
                ret = this.imgThumb.width;
            }
            return ret;
        };
        CThumbUI.prototype.setThumbHeight = function (h) {
            console.log("Setting thumbHeight to:" + h);
            this.imgThumb.height = h;
            this.m_randomGraphShape.resize(this.m_randomGraphShape.width, h);
            this.thumbSel.height = h;
            this.thumbCover.height = h;
        };
        CThumbUI.prototype.getThumbHeight = function () {
            var ret;
            if (this.m_NoImgMode) {
                ret = this.m_randomGraphShape.height;
            }
            else {
                ret = this.imgThumb.height;
            }
            return ret;
        };
        CThumbUI.prototype.setNoImgMode = function (nim) {
            this.m_NoImgMode = nim;
            if (this.m2_cc) {
                if (nim) {
                    this.imgThumb.visible = false;
                    this.randomGraphThumbGrp.visible = true;
                    this.m_randomGraphShape.visible = true;
                }
                else {
                    this.imgThumb.visible = true;
                    this.randomGraphThumbGrp.visible = false;
                    this.m_randomGraphShape.visible = false;
                }
            }
        };
        CThumbUI.prototype.setImgSrc = function (s) {
            this.setNoImgMode(false);
            this.imgThumb.source = s;
        };
        CThumbUI.prototype.setShape = function (shp) {
            this.setNoImgMode(true);
            this.m_randomGraphShape.copyFrom(shp, false);
            /*			this.m_randomGraphShape.scaleX = this.getThumbWidth() / 1024;
                        this.m_randomGraphShape.scaleY = this.getThumbHeight() / 720;*/
            this.m_randomGraphShape.visible = true;
        };
        CThumbUI.prototype.setSelRect = function (r) {
            this.thumbSel.x = r.m_left;
            this.thumbSel.y = r.m_top;
            this.thumbSel.width = r.m_width;
            this.thumbSel.height = r.m_height;
        };
        CThumbUI.prototype.onThumbTap = function (evt) {
            this.thumbSel.x = evt.localX - this.thumbSel.width / 2;
            this.thumbSel.y = evt.localY - this.thumbSel.height / 2;
            this.m_thumbTapEvt.m_tchX = evt.localX;
            this.m_thumbTapEvt.m_tchY = evt.localY;
            this.dispatchEvent(this.m_thumbTapEvt);
        };
        return CThumbUI;
    }(eui.Component));
    eyelen4.CThumbUI = CThumbUI;
    __reflect(CThumbUI.prototype,"eyelen4.CThumbUI",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/UIComponents/common/CThumbUIEvent.ts":
/***/ (function(module, exports) {

var CThumbUIEvent = /** @class */ (function (_super) {
    __extends(CThumbUIEvent, _super);
    function CThumbUIEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        var _this = _super.call(this, type, bulle, cancel) || this;
        _this.m_tchX = 0;
        _this.m_tchY = 0;
        return _this;
    }
    CThumbUIEvent.EVT_THUMB_TAP = "EVT_THUMB_TAP";
    return CThumbUIEvent;
}(egret.Event));
window["CThumbUIEvent"] = CThumbUIEvent;
__reflect(CThumbUIEvent.prototype,"CThumbUIEvent",[]); 


/***/ }),

/***/ "./src/components/UIComponents/common/IScoreFlagRect.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/calibrate/Basic_CaliPresenter.ts":
/***/ (function(module, exports) {

/***********************************************************
 * /src/components/Basic_CaliPresenter.ts
 * 横竖校准界面的presenter的基类。延续自旧版本的尺眼通3。现在仍为Javascript。
 * 现在用Adapter转接成Typescript类后使用。
 *
 ***********************************************************/
function Basic_CaliPresenter() {
    this.m_initA1 = 0;
    this.m_initA2 = 0;
    this.m_locked = false;
    this.m_a1 = 0; // 输入通道1。
    this.m_a2 = 0; // 输入通道2（现处于非使用状态）。
    this.m_a1Set = false;
    this.m_a2Set = false;
    this.m_a2Enabled = false;
    this.m_oldValues = new Array();
    this.m_lastValueTag = -1;
    this.m_ovTopTag = -1;
    this.m2_newValRecd = true;
    this.setInitA1 = function (ia1) {
        if (!this.validateInput(ia1)) {
            return;
        }
        this.m_initA1 = ia1;
        if (!this.m_a1Set) {
            this.m_a1 = this.m_initA1;
            this.m_a1Set = true;
        }
        if (this.m_lastValueTag < 0) {
            this.m_lastValueTag = 0;
            this.m_oldValues[0] = ia1;
            this.m_ovTopTag = 0;
        }
    };
    this.setInitA2 = function (ia2) {
        if (!this.validateInput(ia2)) {
            return;
        }
        this.m_initA2 = ia2;
        if (!this.m_a2Set) {
            this.m_a2 = this.m_initA2;
            this.m_a2Set = true;
        }
    };
    this.lock = function () {
        this.m_locked = true;
    };
    this.unlock = function () {
        this.m_locked = false;
    };
    this.getA1 = function () {
        return this.m_a1;
    };
    this.inputA1 = function (a1) {
        if (!this.validateInput(a1)) {
            return;
        }
        if (this.m_locked) {
            return;
        }
        if (!this.m_a1Set) // First input without init a1 value.
         {
            this.m_lastValueTag = 0;
            this.m_oldValues[this.m_lastValueTag] = a1;
            this.m_ovTopTag = 0;
        }
        else {
            this.m2_newValRecd = false;
        }
        this.m_a1 = a1;
        this.m_a1Set = true;
    };
    this.undoA1 = function () {
        if (this.m_lastValueTag > 0 && this.m2_newValRecd)
            --this.m_lastValueTag;
        this.m_a1 = this.m_oldValues[this.m_lastValueTag];
        this.m2_newValRecd = true;
    };
    this.redoA1 = function () {
        if (!this.m2_newValRecd) {
            return;
        }
        if (this.m_lastValueTag < this.m_ovTopTag) {
            ++this.m_lastValueTag;
        }
        else //Already the latest value
         {
        }
        this.m_a1 = this.m_oldValues[this.m_lastValueTag];
    };
    this.recA1 = function () {
        ++this.m_lastValueTag;
        this.m_oldValues[this.m_lastValueTag] = this.m_a1;
        this.m_ovTopTag = this.m_lastValueTag;
        this.m2_newValRecd = true;
    };
    this.enableA2 = function () {
        this.m_a2Enabled = true;
    };
    this.disableA2 = function () {
        this.m_a2Enabled = false;
    };
    this.a2Enabled = function () {
        return this.m_a2Enabled;
    };
    this.getA2 = function () {
        if (this.m_a2Enabled) {
            return this.m_a2;
        }
        else {
            return this.m_a1;
        }
    };
    this.inputA2 = function (a2) {
        if (!this.validateInput(a2)) {
            return;
        }
        if (this.m_locked) {
            return;
        }
        if (!this.m_a2Enabled) {
            return;
        }
        this.m_a2 = a2;
        this.m_a2Set = true;
    };
    this.resetValues = function () {
        this.m_a1 = this.m_initA1;
        this.m_a2 = this.m_initA2;
        this.m_locked = false;
        this.m_a2Enabled = false;
        this.m_a1Set = false;
        this.m_a2Set = false;
    };
    this.validateInput = function (v) {
        if ("number" == typeof (v)) {
            if (isNaN(v)) {
                return false;
            }
            if (v <= 0) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
}
window["Basic_CaliPresenter"] = Basic_CaliPresenter;


/***/ }),

/***/ "./src/components/calibrate/CCaliCloseBtn.ts":
/***/ (function(module, exports) {

/**
 * /src/components/calibrate/CCaliCloseBtn.ts
 * 叉号关闭按钮。
 *
 */
var CCaliCloseBtn = /** @class */ (function (_super) {
    __extends(CCaliCloseBtn, _super);
    function CCaliCloseBtn() {
        return _super.call(this) || this;
    }
    CCaliCloseBtn.prototype.childrenCreated = function () {
    };
    return CCaliCloseBtn;
}(eui.Button));
window["CCaliCloseBtn"] = CCaliCloseBtn;
__reflect(CCaliCloseBtn.prototype,"CCaliCloseBtn",[]); 


/***/ }),

/***/ "./src/components/calibrate/CCaliDlg.ts":
/***/ (function(module, exports) {

/**********************************************************
 * /src/components/calibrate/CCaliDlg.ts
 * 横竖校准对话框。（2016-09-29版）
 * 若屏幕输出的宽高比不是 1:1 ，则需要用户进行横竖校准，否则会严重影响练习效果。
 *
 **********************************************************/
var g2_pcnt = 0;
window["g2_pcnt"] = g2_pcnt;
var g2_mcnt = 0;
window["g2_mcnt"] = g2_mcnt;
var eyelen4 = window['eyelen4']; 
var eyelen4;
(function (eyelen4) {
    var CCaliDlg = /** @class */ (function (_super) {
        __extends(CCaliDlg, _super);
        function CCaliDlg() {
            var _this = _super.call(this) || this;
            _this.m_caliImgTag = 1;
            _this.m_caRate = 1.0; //校准系数初始为1.0。
            _this.m_autoUpdateFromCaliField = true;
            _this.m_caliPresenter = new CCaliPresenterAdapter();
            _this.m_caliPresenter.setInitA1(_this.m_caRate);
            return _this;
        }
        CCaliDlg.prototype._setParentContainer = function (c) {
            this.m_parentContainer = c;
            this._getParentContainer().getDlgLayer().addChild(CDispObj2EgretDOAdapter.from(this));
        };
        CCaliDlg.prototype._getParentContainer = function () {
            return this.m_parentContainer;
        };
        CCaliDlg.prototype._setCloseListener = function (closeListener) {
            this.m_closeListener = closeListener;
        };
        CCaliDlg.prototype._closeDlg = function () {
            this.visible = false;
            if (this.m_closeListener) {
                this.m_closeListener(false); // 从外部关闭，认为是取消。
            }
        };
        CCaliDlg.prototype.setSceneRect = function (x, y, wid, hei) {
            //设置父场景大小和坐标偏移量，以便确定确认框的显示位置。
            this.x = x + (wid - 400) / 2;
            this.y = y + (hei - 580) / 5 * 2;
        };
        CCaliDlg.prototype.childrenCreated = function () {
            this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOK, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            this.plusBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPlusTchBegin, this);
            this.plusBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onPlusTchEnd, this);
            this.plusBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPlusTchEnd, this); //避免释放后继续自动增大。
            this.minusBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMinusTchBegin, this);
            this.minusBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onMinusTchEnd, this);
            this.minusBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMinusTchEnd, this); //避免释放后继续自动减小。
            this.undoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUndo, this);
            this.redoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRedo, this);
            this.caliRateField.addEventListener(egret.Event.CHANGE, this.onCaliRateFieldChange, this);
            this.caliSquareCover.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliSquareCoverTap, this);
            this.chCaliImgBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliImgBtnTap, this);
            this.lockCB.addEventListener(egret.Event.CHANGE, this.onlockCBChanged, this);
            this.refreshCaRateField();
            this.m_plusTimer = new egret.Timer(200, 0);
            this.m_minusTimer = new egret.Timer(200, 0);
        };
        /*
        * 获取对话框设定的横竖校准系数值。
        */
        CCaliDlg.prototype.getCaliRat = function () {
            return this.m_caRate;
        };
        CCaliDlg.prototype.getSquareWidth = function () {
            return this.m_squareWidth;
        };
        CCaliDlg.prototype.setSquareWidth = function (w) {
            //Set the width of caliSquare and other relevant components.
            this.m_squareWidth = w;
            this.caliSquare.width = w;
            this.caliImg.width = w;
        };
        /*
        * 根据内存里的系数值刷新界面。
        */
        CCaliDlg.prototype.refreshCaRateField = function () {
            this.m_autoUpdateFromCaliField = false;
            this.caliRateField.text = this.m_caRate.toString();
            this.m_autoUpdateFromCaliField = true;
            this.setSquareWidth(this.caliSquare.height * this.m_caRate);
        };
        /*
        * 以触摸方式输入校准系数时触发。
        */
        CCaliDlg.prototype.onCaliSquareCoverTap = function (evt) {
            if (this.m_locked) {
                return;
            }
            this.setSquareWidth(evt.stageX - (this.caliSquareCover.x + this.x)); //Be careful if a parent added!
            this.m_caRate = this.caliSquare.width / this.caliSquare.height;
            this.caliRateField.text = this.m_caRate.toString();
            this.m_caliPresenter.inputA1(this.m_caRate);
            this.m_caliPresenter.recA1();
        };
        /*
        * 在文本框里输入校准系数时触发。
        */
        CCaliDlg.prototype.onCaliRateFieldChange = function (evt) {
            if (this.m_autoUpdateFromCaliField) {
                if (gdeint.EintValidators.CaRatValidator.validate(evt.target.text)) {
                    var tmpCaRate = gdeint.EintParsers.CaRatParser.parseFloat(evt.target.text);
                    if (tmpCaRate > 1.8) {
                        tmpCaRate = 1.8;
                    }
                    this.m_caliPresenter.inputA1(tmpCaRate);
                    if (Math.abs(this.m_caRate - this.m_caliPresenter.getA1()) > 0.000001) {
                        this.m_caliPresenter.recA1();
                    }
                    this.m_caRate = tmpCaRate;
                    this.setSquareWidth(this.caliSquare.height * tmpCaRate);
                }
                else {
                }
            }
        };
        /*
        * 锁定复选框触摸时触发。锁定输入以便用户进行尺寸测量。
        */
        CCaliDlg.prototype.onlockCBChanged = function (evt) {
            if (evt.target.selected) {
                this.m_locked = true;
                this.caliRateField.enabled = false;
            }
            else {
                this.m_locked = false;
                this.caliRateField.enabled = true;
            }
        };
        CCaliDlg.prototype.onCaliImgBtnTap = function (evt) {
            this.m_caliImgTag = this.m_caliImgTag % 3 + 1;
            this.caliImg.source = "square" + this.m_caliImgTag + "_png";
            if (CGlobals.g_isSndOn) {
                playBtnSnd();
            }
        };
        /*
        * 点击确定按钮时触发。
        */
        CCaliDlg.prototype.onOK = function () {
            this.visible = false;
            this._getParentContainer().setCaRat(this.getCaliRat());
            var argArr = new Array(); // apply是javascript方法所以要用javascript对象。
            argArr[0] = true;
            this._getParentContainer().applyFunc(this.m_closeListener, argArr);
        };
        /*
        * 右上角关闭按钮触摸时触发。
        */
        CCaliDlg.prototype.onClose = function () {
            this.visible = false;
            var argArr = new Array(); // apply是javascript方法所以要用javascript对象。
            argArr[0] = false;
            this._getParentContainer().applyFunc(this.m_closeListener, argArr);
        };
        /*
        * 增大按钮长按时触发。
        */
        CCaliDlg.prototype.onPlusTimer = function () {
            if (this.m_caRate >= 1.8) {
                return;
            }
            this.m_caRate += 0.01; //Global var should be used!!
            g2_pcnt++;
            if (g2_pcnt > 10) {
                this.m_caRate += 0.09; //Totally 0.1
            }
            this.refreshCaRateField();
            if (3 == g2_pcnt % 5) {
                this.m_caliPresenter.inputA1(this.m_caRate);
                this.m_caliPresenter.recA1();
            }
        };
        /*
        * 增大按钮释放时（包括单击和长按）触发。
        */
        CCaliDlg.prototype.onPlusTchEnd = function () {
            g2_pcnt = 0;
            this.m_plusTimer.stop();
            this.m_caliPresenter.inputA1(this.m_caRate);
            this.m_caliPresenter.recA1();
        };
        /*
        * 增大按钮开始触摸（包括单击和长按）时触发。
        */
        CCaliDlg.prototype.onPlusTchBegin = function () {
            if (this.m_locked) {
                return;
            }
            if (this.m_caRate >= 1.8) {
                return;
            }
            this.m_caRate += 0.01; //Global var should be used!!
            g2_pcnt++;
            this.refreshCaRateField();
            this.m_plusTimer.stop();
            this.m_plusTimer.addEventListener(egret.TimerEvent.TIMER, this.onPlusTimer, this);
            this.m_plusTimer.start();
        };
        /*
        * 减小按钮长按时触发。
        */
        CCaliDlg.prototype.onMinusTimer = function () {
            this.m_caRate -= 0.01; //Global var should be used!!
            g2_mcnt++;
            if (g2_mcnt > 10) {
                this.m_caRate -= 0.09; //Totally 0.1
            }
            if (this.m_caRate < 0) {
                this.m_caRate = 0.00001;
            }
            this.refreshCaRateField();
            if (3 == g2_pcnt % 5) {
                this.m_caliPresenter.inputA1(this.m_caRate);
                this.m_caliPresenter.recA1();
            }
        };
        /*
        * 减小按钮开始触摸（包括单击和长按）时触发。
        */
        CCaliDlg.prototype.onMinusTchBegin = function () {
            if (this.m_locked) {
                return;
            }
            this.m_caRate -= 0.01; //Global var should be used!!
            g2_mcnt++;
            if (this.m_caRate < 0) {
                this.m_caRate = 0.00001;
            }
            this.refreshCaRateField();
            this.m_minusTimer.stop();
            this.m_minusTimer.addEventListener(egret.TimerEvent.TIMER, this.onMinusTimer, this);
            this.m_minusTimer.start();
        };
        /*
        * 减小按钮释放（包括单击和长按）时触发。
        */
        CCaliDlg.prototype.onMinusTchEnd = function () {
            g2_mcnt = 0;
            this.m_minusTimer.stop();
            this.m_caliPresenter.inputA1(this.m_caRate);
            this.m_caliPresenter.recA1();
        };
        /*
        * 撤销按钮点击时触发。
        */
        CCaliDlg.prototype.onUndo = function () {
            this.m_caliPresenter.undoA1();
            var newA1 = this.m_caliPresenter.getA1();
            this.m_caRate = newA1;
            this.m_autoUpdateFromCaliField = false;
            this.caliRateField.text = newA1.toString();
            this.m_autoUpdateFromCaliField = true;
            this.setSquareWidth(this.caliSquare.height * newA1);
        };
        /*
        * 重做按钮点击时触发。
        */
        CCaliDlg.prototype.onRedo = function () {
            this.m_caliPresenter.redoA1();
            var newA1 = this.m_caliPresenter.getA1();
            this.m_caRate = newA1;
            this.m_autoUpdateFromCaliField = false;
            this.caliRateField.text = newA1.toString();
            this.m_autoUpdateFromCaliField = true;
            this.setSquareWidth(this.caliSquare.height * newA1);
        };
        CCaliDlg.prototype.show = function () {
            this.visible = true;
        };
        CCaliDlg.prototype.hide = function () {
            this.visible = false;
        };
        CCaliDlg.prototype.isVisible = function () {
            return this.visible;
        };
        return CCaliDlg;
    }(eui.Component));
    eyelen4.CCaliDlg = CCaliDlg;
    __reflect(CCaliDlg.prototype,"eyelen4.CCaliDlg",["ICaliDlgPlugin"]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/calibrate/CCaliPresenterAdapter.ts":
/***/ (function(module, exports) {

/*********************************************************************
 * /src/components/calibrate/CCaliPresenterAdapter.ts
 * 横竖校准对话框对应的 presenter 。用于处理横竖校准对话框的工作逻辑。
 *
 *********************************************************************/
var CCaliPresenterAdapter = /** @class */ (function () {
    function CCaliPresenterAdapter() {
        this.m_icp = new Basic_CaliPresenter();
    }
    /*
     * 设置初始校准系数。若对话框取消保存并退出，则下次打开时系数仍为该初始值。
     */
    CCaliPresenterAdapter.prototype.setInitA1 = function (ia1) {
        this.m_icp.setInitA1(ia1);
    };
    /*
     * 锁定输入。
     */
    CCaliPresenterAdapter.prototype.lock = function () {
        this.m_icp.lock();
    };
    CCaliPresenterAdapter.prototype.unlock = function () {
        this.m_icp.unlock();
    };
    /*
     * 获取当前校准系数。
     */
    CCaliPresenterAdapter.prototype.getA1 = function () {
        return this.m_icp.getA1();
    };
    /*
     * 输入新的校准系数。
     */
    CCaliPresenterAdapter.prototype.inputA1 = function (a1) {
        this.m_icp.inputA1(a1);
    };
    /*
     * 撤销一步操作。
     */
    CCaliPresenterAdapter.prototype.undoA1 = function () {
        this.m_icp.undoA1();
    };
    /*
     * 重做一步操作。
     */
    CCaliPresenterAdapter.prototype.redoA1 = function () {
        this.m_icp.redoA1();
    };
    /*
     * 当前系数入栈。撤销操作只能回滚到已入栈的系数值。
     */
    CCaliPresenterAdapter.prototype.recA1 = function () {
        this.m_icp.recA1();
    };
    return CCaliPresenterAdapter;
}());
window["CCaliPresenterAdapter"] = CCaliPresenterAdapter;
__reflect(CCaliPresenterAdapter.prototype,"CCaliPresenterAdapter",["ICaliPresenter"]); 


/***/ }),

/***/ "./src/components/calibrate/ICaliDlg.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/calibrate/ICaliDlgPlugin.ts":
/***/ (function(module, exports) {

// TypeScript file


/***/ }),

/***/ "./src/components/calibrate/ICaliPresenter.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/commonSimple/CCloseBtn.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * @author
 *
 */
var eyelen4;
(function (eyelen4) {
    var CCloseBtn = /** @class */ (function (_super) {
        __extends(CCloseBtn, _super);
        function CCloseBtn() {
            return _super.call(this) || this;
        }
        return CCloseBtn;
    }(eui.Button));
    eyelen4.CCloseBtn = CCloseBtn;
    __reflect(CCloseBtn.prototype,"eyelen4.CCloseBtn",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/finders/Eyelen/CEyelen4HTTPSResUrlFinder.ts":
/***/ (function(module, exports) {

/*
 * /src/components/finders/Eyelen/CEyelen4HTTPSResUrlFinder.ts
 * 使用本寻找器可通过文件名、编号等获取远程资源URL。
*/
var CEyelen4HTTPSResUrlFinder = /** @class */ (function () {
    function CEyelen4HTTPSResUrlFinder() {
    }
    CEyelen4HTTPSResUrlFinder.prototype.setInp = function (inp) {
        //inp eg: 88 , "4" , "pic002.json" , "img_001.gif" , "img_001_gif"
        this.m_inpStr = inp;
    };
    CEyelen4HTTPSResUrlFinder.prototype.getResult = function () {
        //返回得到的资源URL。
        var ret;
        var strTmpTag;
        var temp;
        if (this.m_inpStr.indexOf(".gif") >= 0 || this.m_inpStr.indexOf("_gif") >= 0 || this.m_inpStr.indexOf("img") >= 0) {
            temp = parseInt(this.m_inpStr.substr(4, 3));
            strTmpTag = "";
            if (temp < 10) {
                strTmpTag = "00" + temp.toString();
            }
            else if (temp < 100) {
                strTmpTag = "0" + temp.toString();
            }
            else {
                strTmpTag = "" + temp.toString();
            }
            //			ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getImgCrossDomain.php?tag=";
            ret = "https://www.gdeint.cn/HTTPSExports/wechat/Eyelen/Eyelen4_Wechat/pics/Eyelen/getImgCrossDomain.php?tag=";
            ret += strTmpTag;
        }
        else {
            if (this.m_inpStr.indexOf(".json") >= 0) {
                temp = parseInt(this.m_inpStr.substr(3, 3));
            }
            else {
                temp = parseInt(this.m_inpStr);
            }
            strTmpTag = "";
            if (temp < 10) {
                strTmpTag = "00" + temp.toString();
            }
            else if (temp < 100) {
                strTmpTag = "0" + temp.toString();
            }
            else {
                strTmpTag = "" + temp.toString();
            }
            //			ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getPicCrossDomain.php?tag=";
            ret = "https://www.gdeint.cn/HTTPSExports/wechat/Eyelen/Eyelen4_Wechat/pics/Eyelen/getPicCrossDomain.php?tag=";
            ret += strTmpTag;
        }
        return ret;
    };
    return CEyelen4HTTPSResUrlFinder;
}());
window["CEyelen4HTTPSResUrlFinder"] = CEyelen4HTTPSResUrlFinder;
__reflect(CEyelen4HTTPSResUrlFinder.prototype,"CEyelen4HTTPSResUrlFinder",["IEyelen4ResNameFinder"]); 


/***/ }),

/***/ "./src/components/finders/Eyelen/CEyelen4ResNameFinder.ts":
/***/ (function(module, exports) {

/*
 * /src/components/finders/Eyelen/CEyelen4ResNameFinder.ts
 * 使用本寻找器可通过文件名、编号等获取资源名。
*/
var CEyelen4ResNameFinder = /** @class */ (function () {
    function CEyelen4ResNameFinder() {
    }
    CEyelen4ResNameFinder.prototype.setInp = function (inp) {
        //inp eg: 88 , "4" , "pic002.json" , "img_001.gif" , "img_001_gif"
        this.m_inpStr = inp;
    };
    CEyelen4ResNameFinder.prototype.getResult = function () {
        //返回得到的资源名。
        var ret;
        var temp;
        if (this.m_inpStr.indexOf(".gif") >= 0 || this.m_inpStr.indexOf("_gif") >= 0) {
            temp = parseInt(this.m_inpStr.substr(4, 3));
            if (temp < 10) {
                ret = "img_00" + temp.toString();
            }
            else if (temp < 100) {
                ret = "img_0" + temp.toString();
            }
            else {
                ret = "img_" + temp.toString();
            }
            ret += "_gif";
        }
        else if (this.m_inpStr.indexOf(".png") >= 0 || this.m_inpStr.indexOf("_png") >= 0 || this.m_inpStr.indexOf("img") >= 0) {
            temp = parseInt(this.m_inpStr.substr(4, 3));
            if (temp < 10) {
                ret = "img_00" + temp.toString();
            }
            else if (temp < 100) {
                ret = "img_0" + temp.toString();
            }
            else {
                ret = "img_" + temp.toString();
            }
            ret += "_png";
        }
        else {
            if (this.m_inpStr.indexOf(".json") >= 0) {
                temp = parseInt(this.m_inpStr.substr(3, 3));
            }
            else {
                temp = parseInt(this.m_inpStr);
            }
            if (temp < 10) {
                ret = "pic00" + temp.toString();
            }
            else if (temp < 100) {
                ret = "pic0" + temp.toString();
            }
            else {
                ret = "pic" + temp.toString();
            }
            ret += "_json";
        }
        return ret;
    };
    return CEyelen4ResNameFinder;
}());
window["CEyelen4ResNameFinder"] = CEyelen4ResNameFinder;
__reflect(CEyelen4ResNameFinder.prototype,"CEyelen4ResNameFinder",["IEyelen4ResNameFinder"]); 


/***/ }),

/***/ "./src/components/finders/Eyelen/IEyelen4ResNameFinder.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/finders/common/IFinder.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/lenCheckers/CLenCheckerDifficult.ts":
/***/ (function(module, exports) {

/*
 * /src/components/lenCheckers/CLenCheckerDifficult.ts
 * 长度比较器。比较用户长度和正确长度，返回准确度评定。
 */
var CLenCheckerDifficult = /** @class */ (function () {
    function CLenCheckerDifficult() {
        this.m_renderFilter = new CEyelen3ERenderFilter();
    }
    CLenCheckerDifficult.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CLenCheckerDifficult.prototype.setCorreOriLen = function (len) {
        this.m_correOriLen = len;
    };
    /*    public setCorreHor(ch:boolean) {
            this.m_correHor = ch;
        }*/
    CLenCheckerDifficult.prototype.setInputDispLen = function (len) {
        this.m_inputDispLen = len;
    };
    CLenCheckerDifficult.prototype.checkLen = function () {
        var ret; // 1: 2: 3:
        ret = 0;
        var corre, inp, diff;
        //        if(this.m_correHor) {
        corre = this.m_renderFilter.xOConv(this.m_correOriLen);
        //        }
        //        else {
        //            corre = this.m_renderFilter.xOConv(this.m_correOriLen);
        //        }
        inp = this.m_inputDispLen;
        diff = Math.abs(corre - inp);
        if (corre < 30) {
            if (diff < 2) {
                ret = 3;
            }
            else if (diff < 4) {
                ret = 2;
            }
            else if (diff < 8) {
                ret = 1;
            }
            else {
                ret = 0;
            }
        }
        else if (corre < 100) {
            if (diff < 5) {
                ret = 3;
            }
            else if (diff < 10) {
                ret = 2;
            }
            else if (diff < 18) {
                ret = 1;
            }
            else {
                ret = 0;
            }
        }
        else {
            if (diff < 8) {
                ret = 3;
            }
            else if (diff < 15) {
                ret = 2;
            }
            else if (diff < 25) {
                ret = 1;
            }
            else {
                ret = 0;
            }
        }
        return ret;
    };
    return CLenCheckerDifficult;
}());
window["CLenCheckerDifficult"] = CLenCheckerDifficult;
__reflect(CLenCheckerDifficult.prototype,"CLenCheckerDifficult",["ILenCheckerDifficult"]); 


/***/ }),

/***/ "./src/components/lenCheckers/CLenCheckerEasy.ts":
/***/ (function(module, exports) {

/*
 * /src/components/lenCheckers/CLenCheckerEasy.ts
 * 把 用户输入的格数*每格宽度 与 正确的长度 作比较（需要考虑校准），并返回得分。
*/
var CLenCheckerEasy = /** @class */ (function () {
    function CLenCheckerEasy() {
        this.m_renderFilter = new CEyelen3ERenderFilter();
    }
    CLenCheckerEasy.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CLenCheckerEasy.prototype.setGridDispWidth = function (gw) {
        this.m_gridDispWidth = gw;
    };
    CLenCheckerEasy.prototype.getCorreGridCnt = function () {
        var correDispLen = this.m_renderFilter.xOConv(this.m_correOriLen);
        var ceilGCnt = Math.ceil(correDispLen / this.m_gridDispWidth);
        var floorGCnt = Math.floor(correDispLen / this.m_gridDispWidth);
        if (ceilGCnt == floorGCnt) {
            return ceilGCnt;
        }
        else {
            if (correDispLen / this.m_gridDispWidth > (ceilGCnt + floorGCnt)) {
                return ceilGCnt;
            }
            else {
                return floorGCnt;
            }
        }
    };
    CLenCheckerEasy.prototype.setCorreOriLen = function (len) {
        this.m_correOriLen = len;
    };
    CLenCheckerEasy.prototype.setInputGridCnt = function (igcnt) {
        this.m_gridCnt = igcnt;
    };
    CLenCheckerEasy.prototype.checkLen = function () {
        var correDispLen = this.m_renderFilter.xOConv(this.m_correOriLen);
        var gap = Math.abs(this.m_gridDispWidth * this.m_gridCnt - correDispLen);
        var correGCnt = this.getCorreGridCnt();
        var border1, border2;
        if (2 * gap <= this.m_gridDispWidth) {
            return 3;
        }
        if (correGCnt <= 2) {
            border1 = 7;
            border2 = 9;
        }
        else if (correGCnt <= 8) {
            border1 = 11;
            border2 = 17;
        }
        else {
            border1 = 17;
            border2 = 29;
        }
        if (gap * 10 <= border1 * this.m_gridDispWidth) {
            return 2;
        }
        else if (gap * 10 <= border2 * this.m_gridDispWidth) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return CLenCheckerEasy;
}());
window["CLenCheckerEasy"] = CLenCheckerEasy;
__reflect(CLenCheckerEasy.prototype,"CLenCheckerEasy",["ILenCheckerEasy"]); 


/***/ }),

/***/ "./src/components/lenCheckers/IGridLenChecker.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/lenCheckers/ILenChecker.ts":
/***/ (function(module, exports) {

;


/***/ }),

/***/ "./src/components/lenCheckers/ILenCheckerDifficult.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/lenCheckers/ILenCheckerEasy.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/lenCheckers/ILenCheckerWithCa.ts":
/***/ (function(module, exports) {

;


/***/ }),

/***/ "./src/components/lenCheckers/IPlainLenChecker.ts":
/***/ (function(module, exports) {

;


/***/ }),

/***/ "./src/components/notifications/CAlertPanelEvent.ts":
/***/ (function(module, exports) {

/**
 *
 * @author
 *
 */
var CAlertPanelEvent = /** @class */ (function (_super) {
    __extends(CAlertPanelEvent, _super);
    function CAlertPanelEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CAlertPanelEvent.EVT_CLOSE = "EVT_CLOSE";
    return CAlertPanelEvent;
}(egret.Event));
window["CAlertPanelEvent"] = CAlertPanelEvent;
__reflect(CAlertPanelEvent.prototype,"CAlertPanelEvent",[]); 


/***/ }),

/***/ "./src/components/notifications/CAlertPanel_v2.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/components/notifications/CAlertPanel.ts
* 功能类似于 window.alert 。作为显示容器的插件使用。
*
************************************************************/
var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CAlertPanel_v2 = /** @class */ (function (_super) {
        __extends(CAlertPanel_v2, _super);
        function CAlertPanel_v2() {
            var _this = _super.call(this) || this;
            _this.m_cc = false;
            _this.visible = false;
            _this.x = 0;
            _this.y = 0;
            return _this;
        }
        /*
            设置父窗体。
        */
        CAlertPanel_v2.prototype.setParent = function (p) {
            this.m_parent = p;
        };
        CAlertPanel_v2.prototype.getParent = function () {
            return this.m_parent;
        };
        CAlertPanel_v2.prototype.setCloseListener = function (func) {
            this.m_closeListener = func;
        };
        /*
            设置要提示的内容。
        */
        CAlertPanel_v2.prototype.setContent = function (con) {
            this.cc_content = con;
            if (this.m_cc) {
                this.content.text = this.cc_content;
            }
        };
        /*
            显示警告框。
        */
        CAlertPanel_v2.prototype.showDlg = function () {
            if (this.getParent()) {
                this.getParent().getNotiLayer().addChild(CDispObj2EgretDOAdapter.from(this));
                this.getParent().getNotiLayer().show();
                this.visible = true;
                this.getParent().disableForNoti();
            }
            else {
                this.show();
            }
        };
        /*
            传入父场景的大小和坐标偏移量，以便根据父场景确定本框的显示位置。
        */
        CAlertPanel_v2.prototype.setSceneRect = function (x, y, wid, hei) {
            this.x = x + (wid - 300) / 2;
            this.y = y + (hei - 300) / 5 * 2;
        };
        /*
            设置父容器。因实现多接口所以难以避免代码重复。
        */
        CAlertPanel_v2.prototype._setParentContainer = function (pc) {
            this.m_parentContainer = pc;
        };
        CAlertPanel_v2.prototype._getParentContainer = function () {
            window.alert("Don't use _getParentContainer() here. Use getParent() instead.");
            return this.m_parentContainer;
        };
        CAlertPanel_v2.prototype.childrenCreated = function () {
            this.m_cc = true;
            this.content.text = this.cc_content;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        };
        CAlertPanel_v2.prototype.onCloseBtn = function (evt) {
            this.visible = false;
            if (this.getParent()) {
                this.getParent().getNotiLayer().hide();
                this.getParent().applyFunc(this.m_closeListener, null);
                this.getParent().resumeAfterNoti();
            }
        };
        /*
            注：要利用警告框提示信息时应调用showDlg()，而不是show()。
        */
        CAlertPanel_v2.prototype.show = function () {
            this.visible = true;
        };
        CAlertPanel_v2.prototype.hide = function () {
            this.visible = false;
        };
        CAlertPanel_v2.prototype.isVisible = function () {
            return this.visible;
        };
        return CAlertPanel_v2;
    }(eui.Panel));
    gdeint.CAlertPanel_v2 = CAlertPanel_v2;
    __reflect(CAlertPanel_v2.prototype,"gdeint.CAlertPanel_v2",["IAlertDlg","IContainerPlugin"]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/components/notifications/CBalloonTip.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * 功能类似 window.alert。区别在于提示的是消息气球而不是对话框。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CBalloonTip = /** @class */ (function (_super) {
        __extends(CBalloonTip, _super);
        function CBalloonTip() {
            var _this = _super.call(this) || this;
            _this.m_cc = false;
            _this.x = 0;
            _this.y = 0;
            _this.m_evtClose = new CBalloonTipEvent(CBalloonTipEvent.EVT_CLOSE);
            return _this;
        }
        CBalloonTip.prototype.childrenCreated = function () {
            this.m_cc = true;
            this.content.text = this.cc_content;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            var tw = egret.Tween.get(this.arrow, { loop: true });
            tw.to({ y: 355 }, 200).wait(300).to({ y: 345 }, 200).wait(100);
        };
        CBalloonTip.prototype.onCloseBtn = function (evt) {
            this.close();
            this.dispatchEvent(this.m_evtClose);
        };
        CBalloonTip.prototype.setContent = function (con) {
            this.cc_content = con;
            if (this.m_cc) {
                this.content.text = this.cc_content;
            }
        };
        return CBalloonTip;
    }(eui.Panel));
    eyelen4.CBalloonTip = CBalloonTip;
    __reflect(CBalloonTip.prototype,"eyelen4.CBalloonTip",[]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/notifications/CBalloonTipEvent.ts":
/***/ (function(module, exports) {

/**
 *
 * @author
 *
 */
var CBalloonTipEvent = /** @class */ (function (_super) {
    __extends(CBalloonTipEvent, _super);
    function CBalloonTipEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CBalloonTipEvent.EVT_CLOSE = "EVT_CLOSE";
    return CBalloonTipEvent;
}(egret.Event));
window["CBalloonTipEvent"] = CBalloonTipEvent;
__reflect(CBalloonTipEvent.prototype,"CBalloonTipEvent",[]); 


/***/ }),

/***/ "./src/components/notifications/CConfirmPanel.ts":
/***/ (function(module, exports) {

/***********************************************************
* /src/components/notifications/CConfirmPanel.ts
* 功能类似于 window.confirm 。作为显示容器的插件使用。
*
************************************************************/
var gdeint = window['gdeint']; 
var gdeint;
(function (gdeint) {
    var CConfirmPanel = /** @class */ (function (_super) {
        __extends(CConfirmPanel, _super);
        function CConfirmPanel() {
            var _this = _super.call(this) || this;
            _this.m_cc = false;
            _this.m_ret = false;
            _this.x = 0;
            _this.y = 0;
            return _this;
        }
        CConfirmPanel.prototype.setParent = function (p) {
            this.m_parent = p;
        };
        CConfirmPanel.prototype.getParent = function () {
            return this.m_parent;
        };
        CConfirmPanel.prototype.setCloseListener = function (func) {
            this.m_closeListener = func;
        };
        CConfirmPanel.prototype._setContent = function (content) {
            this.m_content = content;
            if (this.m_cc) {
                this.content.text = this.m_content;
            }
        };
        CConfirmPanel.prototype.showDlg = function () {
            this.title = "确认";
            var ret;
            this.getParent().getNotiLayer().addChild(CDispObj2EgretDOAdapter.from(this));
            this.getParent().getNotiLayer().show();
            this.show();
            this.getParent().disableForNoti();
            this.addEventListener(CConfirmPanelEvent.EVT_CLOSE, this.m_closeListener, this.getParent());
        };
        CConfirmPanel.prototype._getParentContainer = function () {
            window.alert("Don't use _getParentContainer() here. Use getParent() instead.");
            return this.m_parentContainer;
        };
        CConfirmPanel.prototype._setParentContainer = function (c) {
            this.m_parentContainer = c;
        };
        CConfirmPanel.prototype.getResult = function () {
            return false;
        };
        CConfirmPanel.prototype.setSceneRect = function (x, y, wid, hei) {
            this.x = x + (wid - 400) / 2;
            this.y = y + (hei - 280) / 5 * 2;
        };
        CConfirmPanel.prototype.childrenCreated = function () {
            this.m_cc = true;
            this.content.text = this.m_content;
            this.yesBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onYesBtn, this);
            this.noBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNoBtn, this);
            this.m_bg = new egret.Shape();
            this.m_bg.graphics.beginFill(0xaaaaFF);
            this.m_bg.graphics.drawRect(0, 0, this.width, this.height);
            this.m_bg.graphics.endFill();
            this.bgGrp.addChild(this.m_bg);
        };
        CConfirmPanel.prototype.onYesBtn = function (evt) {
            this.m_ret = true;
            this.getParent().getNotiLayer().hide();
            this.close();
            var params = new Array();
            params[0] = this.m_ret;
            this.getParent().applyFunc(this.m_closeListener, params);
            this.getParent().resumeAfterNoti();
        };
        CConfirmPanel.prototype.onNoBtn = function (evt) {
            this.m_ret = false;
            this.getParent().getNotiLayer().hide();
            this.close();
            var params = new Array();
            params[0] = this.m_ret;
            this.getParent().applyFunc(this.m_closeListener, params);
            this.getParent().resumeAfterNoti();
        };
        CConfirmPanel.prototype.getRet = function () {
            return this.m_ret;
        };
        CConfirmPanel.prototype.show = function () {
            this.visible = true;
        };
        CConfirmPanel.prototype.hide = function () {
            this.visible = false;
        };
        CConfirmPanel.prototype.isVisible = function () {
            return this.visible;
        };
        return CConfirmPanel;
    }(eui.Panel));
    gdeint.CConfirmPanel = CConfirmPanel;
    __reflect(CConfirmPanel.prototype,"gdeint.CConfirmPanel",["IConfirmDlg","IContainerPlugin"]); 
})(gdeint || (gdeint = {}));
window["gdeint"] = gdeint;


/***/ }),

/***/ "./src/components/notifications/CConfirmPanelEvent.ts":
/***/ (function(module, exports) {

/**
 *
 * @author
 *
 */
var CConfirmPanelEvent = /** @class */ (function (_super) {
    __extends(CConfirmPanelEvent, _super);
    function CConfirmPanelEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CConfirmPanelEvent.EVT_CLOSE = "EVT_CLOSE";
    return CConfirmPanelEvent;
}(egret.Event));
window["CConfirmPanelEvent"] = CConfirmPanelEvent;
__reflect(CConfirmPanelEvent.prototype,"CConfirmPanelEvent",[]); 


/***/ }),

/***/ "./src/components/notifications/IAlertDlg.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/notifications/IAlertDlgPlugin.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/notifications/IConfirmDlg.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/notifications/IConfirmDlgPlugin.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/notifications/INotiParent.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/notifications/INotification.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/pageJumperAdapters/Eyelen/CPage2EyelenPraContainerAdapter.ts":
/***/ (function(module, exports) {

/*
 * /src/components/pageJumperAdapters/Eyelen/CPage2EyelenPraContainerAdapter.ts
 *
 * 用途：Container转Page。
 
        使用步骤：
        1、设定 m_adaptee.
        2、绑定PageJumper。
        3、利用PageJumer切换页面时，show或hide会触发。
*/
var CPage2EyelenPraContainerAdapter = /** @class */ (function (_super) {
    __extends(CPage2EyelenPraContainerAdapter, _super);
    function CPage2EyelenPraContainerAdapter() {
        return _super.call(this) || this;
    }
    CPage2EyelenPraContainerAdapter.prototype.show = function () {
        _super.prototype.show.call(this);
        this.m_adaptee.show();
    };
    CPage2EyelenPraContainerAdapter.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.m_adaptee.hide();
    };
    return CPage2EyelenPraContainerAdapter;
}(gdeint.CPage));
window["CPage2EyelenPraContainerAdapter"] = CPage2EyelenPraContainerAdapter;
__reflect(CPage2EyelenPraContainerAdapter.prototype,"CPage2EyelenPraContainerAdapter",[]); 
;


/***/ }),

/***/ "./src/components/pageJumperAdapters/common/CPage2EuiAdapter.ts":
/***/ (function(module, exports) {

/**********************************************************
 * /src/components/pageJumperAdapters/common/CPage2EuiAdapter.ts
 * eui界面转CPage的adapter。
 * 使用方法：把要转的eui界面设置到m_adaptee。
 *
 **********************************************************/
var CPage2EuiAdapter = /** @class */ (function (_super) {
    __extends(CPage2EuiAdapter, _super);
    function CPage2EuiAdapter() {
        return _super.call(this) || this;
    }
    //显式调用较少。
    CPage2EuiAdapter.prototype.show = function () {
        _super.prototype.show.call(this);
        this.m_adaptee.visible = true;
    };
    //切换到本页时触发。为某一界面编写专用Page类时可重载。
    CPage2EuiAdapter.prototype.showOnFront = function () {
        _super.prototype.showOnFront.call(this);
        this.m_adaptee.visible = true;
    };
    //离开本页时也会触发。为某一界面编写专用Page类时可重载。
    CPage2EuiAdapter.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.m_adaptee.visible = false;
    };
    return CPage2EuiAdapter;
}(gdeint.CPage));
window["CPage2EuiAdapter"] = CPage2EuiAdapter;
__reflect(CPage2EuiAdapter.prototype,"CPage2EuiAdapter",[]); 
;


/***/ }),

/***/ "./src/components/praMachine/Eyelen/CEyelen3EPraMachineDifficult.ts":
/***/ (function(module, exports) {

/**
 * /src/myts/CPraMachine2.ts
 * 练习机器模型。是整个程序的中心。用来处理练习相关的数据和逻辑。计分、进入下一长度、练习结束判断等的内部数据处理都在这里进行。
 * setLenArr -> startPra -> ......
 *
 */
var CEyelen3EPraMachineDifficult = /** @class */ (function () {
    function CEyelen3EPraMachineDifficult() {
        this.m2_lastLenScore = 0;
        this.m_lenArr = [];
        this.m_lenChecker = new CLenCheckerDifficult();
        this.m_imgPathList = [];
        this.m_curLenTag = 0;
        this.m_curScore = 0;
        this.m_lenInputted = false;
        this.m_finished = false;
    }
    /*
     * 清空数据。重新开始练习等情况下调用。
     */
    CEyelen3EPraMachineDifficult.prototype.clearPra = function () {
        this.m_lenArr = [];
        this.m_imgPathList = [];
        this.rePra();
    };
    /*
     * 设置练习所使用的长度列表。
     */
    CEyelen3EPraMachineDifficult.prototype.setLenArr = function (lenArr) {
        this.m_lenArr = lenArr;
        this.m_curLenTag = 0; //Reset it because the whole len array has been changed.
    };
    CEyelen3EPraMachineDifficult.prototype.getLenChecker = function () {
        return this.m_lenChecker;
    };
    /*
     * 根据练习所使用的长度列表刷新所需图片路径列表。
     */
    CEyelen3EPraMachineDifficult.prototype.refreshImgPathList = function () {
        var i, j;
        for (i = 0; i < this.m_lenArr.length; ++i) {
            var newPath = this.m_lenArr[i].m_imgPath;
            for (j = 0; j < this.m_imgPathList.length; ++j) {
                if (this.m_imgPathList[j] == newPath) {
                    break;
                }
            }
            if (this.m_imgPathList.length == j) {
                this.m_imgPathList.push(this.m_lenArr[i].m_imgPath);
            }
        }
    };
    /*
     * 输入长度并处理。（DispLen）
     */
    CEyelen3EPraMachineDifficult.prototype.inpLen = function (len) {
        if (this.m_curLenTag >= this.m_lenArr.length) // Already over , do not input.
         {
            return;
        }
        this.m_lenInputted = true;
        var expLen = this.m_lenArr[this.m_curLenTag].m_length;
        //        var expIsHor:boolean = this.m_lenArr[this.m_curLenTag].m_isHor;
        var rank;
        this.m_lenChecker.setInputDispLen(len);
        this.m_lenChecker.setCorreOriLen(expLen);
        //        this.m_lenChecker.setCorreHor(expIsHor);
        rank = this.m_lenChecker.checkLen();
        switch (rank) {
            case 0: // 评定为 0旗子，不加分。
                break;
            case 1:
                this.m_curScore += 10; // 评定为 1旗子，加10分。
                break;
            case 2:
                this.m_curScore += 20; // 评定为 2旗子，加20分。
                break;
            case 3:
                this.m_curScore += 30; // 评定为 3旗子，加30分。
                break;
        }
        this.m2_lastLenRank = (this.getCurScore() - this.m2_lastLenScore) / 10;
        this.m2_lastLenScore = this.getCurScore();
    };
    /*
     * 进入下一长度。
     */
    CEyelen3EPraMachineDifficult.prototype.nextLen = function () {
        this.m_lenInputted = false;
        if (this.m_curLenTag < this.m_lenArr.length) // this.m_curLenTag == this.m_lenArr.length means finished!!
         {
            ++this.m_curLenTag;
            if (this.m_curLenTag >= this.m_lenArr.length) {
                this.m_finished = true;
            }
        }
    };
    CEyelen3EPraMachineDifficult.prototype.startPra = function () {
        this.rePra();
    };
    /*
     * 重新开始练习。
     */
    CEyelen3EPraMachineDifficult.prototype.rePra = function () {
        this.m_curLenTag = 0;
        this.m_curScore = 0;
        this.m_lenInputted = false;
        this.m_finished = false;
        this.m2_lastLenScore = 0;
    };
    /*
     * 获取当前长度下标。
     */
    CEyelen3EPraMachineDifficult.prototype.getCurElemTag = function () {
        return this.m_curLenTag;
    };
    CEyelen3EPraMachineDifficult.prototype.getCmplProgress = function () {
        if (this.m_lenInputted) {
            return this.m_curLenTag + 1;
        }
        else {
            return this.m_curLenTag;
        }
    };
    /*
     * 获取当前长度。
     */
    CEyelen3EPraMachineDifficult.prototype.getCurLen = function () {
        return this.m_lenArr[this.m_curLenTag];
    };
    /*
     * 获取当前得分。
     */
    CEyelen3EPraMachineDifficult.prototype.getCurScore = function () {
        return this.m_curScore;
    };
    /*
     * 获取当前图片下标。
     */
    CEyelen3EPraMachineDifficult.prototype.getCurImgTag = function () {
        var i;
        if (this.m_finished) {
            return -1;
        }
        if (this.m_curLenTag < 0) {
            return -1;
        }
        for (i = 0; i < this.m_imgPathList.length; ++i) {
            if (gdeint.tailContain(this.m_imgPathList[i], this.m_lenArr[this.m_curLenTag].m_imgPath)) {
                return i;
            }
        }
        return -1;
    };
    /*
     * 获取最近一次输入的评定。
     */
    CEyelen3EPraMachineDifficult.prototype.getLastLenRank = function () {
        return this.m2_lastLenRank;
    };
    return CEyelen3EPraMachineDifficult;
}());
window["CEyelen3EPraMachineDifficult"] = CEyelen3EPraMachineDifficult;
__reflect(CEyelen3EPraMachineDifficult.prototype,"CEyelen3EPraMachineDifficult",["IPlainLenPraMachine"]); 


/***/ }),

/***/ "./src/components/praMachine/Eyelen/CEyelen3EPraMachineEasy.ts":
/***/ (function(module, exports) {

/**
 * /src/myts/CPraMachine2.ts
 * 练习机器模型。是整个程序的中心。用来处理练习相关的数据和逻辑。计分、进入下一长度、练习结束判断等的内部数据处理都在这里进行。
 * setLenArr -> startPra -> ......
 *
 */
var CEyelen3EPraMachineEasy = /** @class */ (function () {
    function CEyelen3EPraMachineEasy() {
        this.m2_lastLenScore = 0;
        this.m_lenArr = [];
        this.m_lenChecker = new CLenCheckerEasy();
        this.m_lenChecker.setGridDispWidth(30);
        this.m_imgPathList = [];
        this.m_curLenTag = 0;
        this.m_curScore = 0;
        this.m_lenInputted = false;
        this.m_finished = false;
    }
    /*
     * 清空数据。重新开始练习等情况下调用。
     */
    CEyelen3EPraMachineEasy.prototype.clearPra = function () {
        this.m_lenArr = [];
        this.m_imgPathList = [];
        this.rePra();
    };
    /*
     * 设置练习所使用的长度列表。
     */
    CEyelen3EPraMachineEasy.prototype.setLenArr = function (lenArr) {
        this.m_lenArr = lenArr;
        this.m_curLenTag = 0; //Reset it because the whole len array has been changed.
    };
    CEyelen3EPraMachineEasy.prototype.setGridDispWidth = function (w) {
        this.m_lenChecker.setGridDispWidth(w);
    };
    CEyelen3EPraMachineEasy.prototype.getLenChecker = function () {
        return this.m_lenChecker;
    };
    /*
     * 根据练习所使用的长度列表刷新所需图片路径列表。
     */
    CEyelen3EPraMachineEasy.prototype.refreshImgPathList = function () {
        var i, j;
        for (i = 0; i < this.m_lenArr.length; ++i) {
            var newPath = this.m_lenArr[i].m_imgPath;
            for (j = 0; j < this.m_imgPathList.length; ++j) {
                if (this.m_imgPathList[j] == newPath) {
                    break;
                }
            }
            if (this.m_imgPathList.length == j) {
                this.m_imgPathList.push(this.m_lenArr[i].m_imgPath);
            }
        }
    };
    /*
     * 输入长度并处理。（DispLen）
     */
    CEyelen3EPraMachineEasy.prototype.inpGridCnt = function (gcnt) {
        if (this.m_curLenTag >= this.m_lenArr.length) // Already over , do not input.
         {
            return;
        }
        this.m_lenInputted = true;
        var expLen = this.m_lenArr[this.m_curLenTag].m_length;
        //        var expIsHor:boolean = this.m_lenArr[this.m_curLenTag].m_isHor;
        var rank;
        //        this.m_lenChecker.setInputDispLen(len);
        this.m_lenChecker.setInputGridCnt(gcnt);
        this.m_lenChecker.setCorreOriLen(expLen);
        //        this.m_lenChecker.setCorreHor(expIsHor);
        rank = this.m_lenChecker.checkLen();
        switch (rank) {
            case 0: // 评定为 0旗子，不加分。
                break;
            case 1:
                this.m_curScore += 10; // 评定为 1旗子，加10分。
                break;
            case 2:
                this.m_curScore += 20; // 评定为 2旗子，加20分。
                break;
            case 3:
                this.m_curScore += 30; // 评定为 3旗子，加30分。
                break;
        }
        this.m2_lastLenRank = (this.getCurScore() - this.m2_lastLenScore) / 10;
        this.m2_lastLenScore = this.getCurScore();
    };
    /*
     * 进入下一长度。
     */
    CEyelen3EPraMachineEasy.prototype.nextLen = function () {
        this.m_lenInputted = false;
        if (this.m_curLenTag < this.m_lenArr.length) // this.m_curLenTag == this.m_lenArr.length means finished!!
         {
            ++this.m_curLenTag;
            if (this.m_curLenTag >= this.m_lenArr.length) {
                this.m_finished = true;
            }
        }
    };
    CEyelen3EPraMachineEasy.prototype.startPra = function () {
        this.rePra();
    };
    /*
     * 重新开始练习。
     */
    CEyelen3EPraMachineEasy.prototype.rePra = function () {
        this.m_curLenTag = 0;
        this.m_curScore = 0;
        this.m_lenInputted = false;
        this.m_finished = false;
        this.m2_lastLenScore = 0;
    };
    /*
     * 获取当前长度下标。
     */
    CEyelen3EPraMachineEasy.prototype.getCurElemTag = function () {
        return this.m_curLenTag;
    };
    CEyelen3EPraMachineEasy.prototype.getCmplProgress = function () {
        if (this.m_lenInputted) {
            return this.m_curLenTag + 1;
        }
        else {
            return this.m_curLenTag;
        }
    };
    /*
     * 获取当前长度。
     */
    CEyelen3EPraMachineEasy.prototype.getCurLen = function () {
        return this.m_lenArr[this.m_curLenTag];
    };
    /*
     * 获取当前得分。
     */
    CEyelen3EPraMachineEasy.prototype.getCurScore = function () {
        return this.m_curScore;
    };
    /*    public getCurProgress():number {
            return this.getCurLenTag();
        }
    */
    /*
     * 获取当前图片下标。
     */
    CEyelen3EPraMachineEasy.prototype.getCurImgTag = function () {
        var i;
        if (this.m_finished) {
            return -1;
        }
        if (this.m_curLenTag < 0) {
            return -1;
        }
        for (i = 0; i < this.m_imgPathList.length; ++i) {
            if (gdeint.tailContain(this.m_imgPathList[i], this.m_lenArr[this.m_curLenTag].m_imgPath)) {
                return i;
            }
        }
        return -1;
    };
    /*
     * 获取最近一次输入的评定。
     */
    CEyelen3EPraMachineEasy.prototype.getLastLenRank = function () {
        return this.m2_lastLenRank;
    };
    return CEyelen3EPraMachineEasy;
}());
window["CEyelen3EPraMachineEasy"] = CEyelen3EPraMachineEasy;
__reflect(CEyelen3EPraMachineEasy.prototype,"CEyelen3EPraMachineEasy",["IGridLenPraMachine"]); 


/***/ }),

/***/ "./src/components/praMachine/Eyelen/IGridLenPraMachine.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/praMachine/Eyelen/ILenPraMachine.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/praMachine/Eyelen/IPlainLenPraMachine.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/praMachine/common/IBindableWithPM.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/praMachine/common/IPraMachine.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/preloaders/CNoUIPreloaderUI.ts":
/***/ (function(module, exports) {

var CNoUIPreloaderUI = /** @class */ (function () {
    function CNoUIPreloaderUI() {
        this.m_noTaskLeft = false; // 是否所有任务均已添加。影响完成事件的触发等。
        this.m_curTaskTag = 0;
        this.m_proporFinished = 0; // Set it to public in order to perform as base class!
        this.m_taskList = new Array();
        this.m_preloader = new CPreloader();
    }
    CNoUIPreloaderUI.prototype.setPreloader = function (preloader) {
        // Preloader 一次只处理一个 task。总进度在本类确定。
        this.m_preloader = preloader;
    };
    CNoUIPreloaderUI.prototype.setCompleteListener = function (listener, thisObj) {
        this.m_cmplListener = listener;
        this.m_cmplThisObj = thisObj;
    };
    CNoUIPreloaderUI.prototype.setNextActListener = function (listiner, thisObj) {
    };
    CNoUIPreloaderUI.prototype.addTask = function (task) {
        this.m_taskList.push(task);
    };
    CNoUIPreloaderUI.prototype.setNoTaskLeft = function (ntl) {
        this.m_noTaskLeft = ntl;
    };
    CNoUIPreloaderUI.prototype._setParentContainer = function (c) {
        this.m_parentContainer = c;
    };
    CNoUIPreloaderUI.prototype._getParentContainer = function () {
        return this.m_parentContainer;
    };
    CNoUIPreloaderUI.prototype.showUI = function () {
    };
    CNoUIPreloaderUI.prototype.hideUI = function () {
    };
    CNoUIPreloaderUI.prototype.setSceneRect = function (x, y, width, height) {
    };
    CNoUIPreloaderUI.prototype.startPreload = function () {
        this.preloadCurTask();
    };
    CNoUIPreloaderUI.prototype.preloadCurTask = function () {
        var curTask;
        curTask = this.m_taskList[this.m_curTaskTag];
        if (!curTask) {
            return;
        }
        var resNameList = new Array();
        var i;
        for (i = 0; i < curTask.m_resList.length; ++i) {
            resNameList[i] = curTask.m_resList[i].m_resName;
        }
        this.m_preloader.setResList(resNameList);
        this.m_preloader.setCompleteListener(this.onOneTaskComplete, this);
        this.m_preloader.preload();
    };
    CNoUIPreloaderUI.prototype.setProgressListener = function (progressListener, thisObj) {
        this.m_upperProgressListener = progressListener;
        this.m_upperProgressThisObj = thisObj;
        if (!this.m_upperProgressListener) {
            window.alert("Null!!");
        }
        this.m_preloader.setProgressListener(this.onProgressListener, this);
    };
    CNoUIPreloaderUI.prototype.onProgressListener = function (cur, tot) {
        // cur:当前task完成进度。tot：当前task总长。
        // 显示的结果：所有task完成的总百分比。
        var curTask = this.m_taskList[this.m_curTaskTag];
        var oldTaskProportions = 0;
        var i;
        for (i = 0; i <= this.m_curTaskTag - 1; ++i) {
            oldTaskProportions += this.m_taskList[i].m_proportion;
        }
        this.m_proporFinished = oldTaskProportions + curTask.m_proportion * cur / tot;
        if (this.m_proporFinished > 100) {
            this.m_proporFinished = 100;
        }
        var argArr = new Array();
        argArr[0] = this.m_proporFinished;
        argArr[1] = 100;
        this.m_upperProgressListener.apply(this.m_upperProgressThisObj, argArr);
    };
    CNoUIPreloaderUI.prototype.onOneTaskComplete = function () {
        ++this.m_curTaskTag;
        if (this.m_curTaskTag <= this.m_taskList.length - 1) {
            this.preloadCurTask();
        }
        else {
            if (this.m_proporFinished >= 100 || this.m_noTaskLeft) {
                //Don't clear progress here. Additial tasks may be added and go on.
                //如果预加载任务列表已全部完成但不满足以上两个条件，也不作为加载任务完成，而是等待继续添加新任务。
                this.m_cmplListener.apply(this.m_cmplThisObj);
            }
        }
    };
    CNoUIPreloaderUI.prototype.clearProgress = function () {
        this.m_taskList = [];
        this.m_proporFinished = 0;
        this.m_curTaskTag = 0;
    };
    CNoUIPreloaderUI.prototype.show = function () {
        this.showUI();
    };
    CNoUIPreloaderUI.prototype.hide = function () {
        this.hideUI();
    };
    CNoUIPreloaderUI.prototype.isVisible = function () {
        return false;
    };
    return CNoUIPreloaderUI;
}());
window["CNoUIPreloaderUI"] = CNoUIPreloaderUI;
__reflect(CNoUIPreloaderUI.prototype,"CNoUIPreloaderUI",["IPreloaderUI"]); 


/***/ }),

/***/ "./src/components/preloaders/CPreloader.ts":
/***/ (function(module, exports) {

/**
 *
 * @author
 *
 */
var CPreloader = /** @class */ (function () {
    function CPreloader() {
        this.m2_localResLoadComplete = true;
        this.m2_httpsResLoadComplete = true;
        this.m2_HTTPSStartPreloadTag = -1; //需要public因为要被timer访问。
    }
    CPreloader.prototype.setResList = function (l) {
        // 把列表里的资源分类为本地资源和外部资源：
        this.m2_httpsResList = [];
        this.m2_localResList = [];
        var l2 = new Array();
        var i;
        for (i = 0; i < l.length; ++i) {
            if ("" != l[i]) {
                // 去掉空白资源。
                if (l[i].indexOf("https") >= 0) {
                    this.m2_httpsResList.push(l[i]);
                }
                else {
                    this.m2_localResList.push(l[i]);
                }
                l2.push(l[i]);
            }
            else {
            }
        }
        this.m2_httpsResLeftCnt = this.m2_httpsResList.length;
        this.m_resList = l2;
    };
    CPreloader.prototype.setCompleteListener = function (lsner, thisObj) {
        this.m_completeListener = lsner;
        this.m_completeThisObj = thisObj;
    };
    CPreloader.prototype.setProgressListener = function (lsner, thisObj) {
        this.m_progressListener = lsner;
        this.m_progressThisObj = thisObj;
    };
    CPreloader.prototype.genGroupName = function () {
        var ret;
        var tmpTag = Math.round(1 + ((9999 - 1) * Math.random()));
        var tagStr = "";
        if (tmpTag < 10) {
            tagStr = "000" + tmpTag;
        }
        else if (tmpTag < 100) {
            tagStr = "00" + tmpTag;
        }
        else if (tmpTag < 1000) {
            tagStr = "0" + tmpTag;
        }
        else {
            tagStr = "" + tmpTag;
        }
        ret = "RandomGroup" + (new Date()).Format("yyyyMMddhhmmss") + tagStr;
        return ret;
    };
    CPreloader.prototype.f2_loadHTTPSRes = function () {
        var tag;
        tag = this.m2_HTTPSStartPreloadTag;
        if (tag < 0 || tag > this.m2_httpsResList.length - 1) {
            console.log("Err");
        }
        else {
            ++this.m2_HTTPSStartPreloadTag;
            var url = this.m2_httpsResList[tag];
            CGlobals.g_resCache[url] = new CHTTPSResStru();
            CGlobals.g_resCache[url].setUrl(url);
            if (url.indexOf("img") > 0 || url.indexOf("getImgCrossDomain.php") > 0) {
                CGlobals.g_resCache[url].setResType(RES.ResourceItem.TYPE_IMAGE);
            }
            else if (url.indexOf("pic") > 0 || url.indexOf("getPicCrossDomain.php") > 0) {
                CGlobals.g_resCache[url].setResType(RES.ResourceItem.TYPE_JSON);
            }
            CGlobals.g_resCache[url].setOnPreloadCmpl(this.onHttpsResLoadComplete, this);
            CGlobals.g_resCache[url].preload();
        }
    };
    CPreloader.prototype.preload = function () {
        // 加载本地资源
        if (this.m2_localResList.length <= 0 && this.m2_httpsResList.length <= 0) {
            //资源列表为空，无需加载。
            this.m_completeListener.apply(this.m_completeThisObj);
        }
        if (this.m2_localResList.length > 0) {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            this.m2_localResLoadComplete = false;
            var tmpGroup = this.m2_localResList;
            var groupName = this.genGroupName();
            RES.createGroup(groupName, tmpGroup);
            RES.loadGroup(groupName);
        }
        else {
            this.m2_localResLoadComplete = true;
        }
        if (this.m2_httpsResList.length > 0) {
            this.m2_httpsResLoadComplete = false;
            this.m2_HTTPSStartPreloadTag = 0;
            var requestInterval = 500; //200; //每隔0.2秒请求一次。避免因请求过于频繁而被拦截。
            var timer = new egret.Timer(requestInterval, this.m2_httpsResList.length);
            timer.addEventListener(egret.TimerEvent.TIMER, this.f2_loadHTTPSRes, this);
            timer.start();
        }
        else {
            this.m2_httpsResLoadComplete = true;
        }
    };
    CPreloader.prototype.onResourceLoadProgress = function (event) {
        // 旧：仅本地资源组。新：本地资源组+https资源。
        var argArr = new Array();
        //        argArr[0] = event.itemsLoaded;
        argArr[0] = event.itemsLoaded * 2;
        //        argArr[1] = event.itemsTotal;
        argArr[1] = this.m2_localResList.length * 2 + this.m2_httpsResList.length * 5;
        this.m_progressListener.apply(this.m_progressThisObj, argArr);
    };
    CPreloader.prototype.onResourceLoadComplete = function (evt) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        this.m2_localResLoadComplete = true;
        if (this.m2_httpsResLoadComplete) {
            var totalResPoints;
            totalResPoints = this.m2_localResList.length * 2 + this.m2_httpsResList.length * 5;
            var argArr = new Array();
            argArr[0] = 100; //totalResPoints;
            argArr[1] = 100; //totalResPoints;
            this.m_progressListener.apply(this.m_progressThisObj, argArr); // 将进度置为100%。
            this.m_completeListener.apply(this.m_completeThisObj);
        }
        this.m2_localResList = [];
    };
    CPreloader.prototype.onHttpsResLoadComplete = function (obj) {
        // 1 res complete.
        --this.m2_httpsResLeftCnt;
        if (0 >= this.m2_httpsResLeftCnt) {
            this.m2_httpsResLoadComplete = true;
            this.m2_HTTPSStartPreloadTag = -1;
            if (this.m2_localResLoadComplete) {
                var totalResPoints;
                totalResPoints = this.m2_localResList.length * 2 + this.m2_httpsResList.length * 5;
                var argArr = new Array();
                argArr[0] = 100; //totalResPoints;
                argArr[1] = 100; //totalResPoints;
                this.m_progressListener.apply(this.m_progressThisObj, argArr); // 将进度置为100%。
                this.m2_httpsResList = []; //需要complete前清空。因为complete处理函数很可能需要设置本list。
                this.m_completeListener.apply(this.m_completeThisObj);
            }
            else {
                this.m2_httpsResList = [];
            }
        }
    };
    CPreloader.prototype.onResourceLoadError = function (evt) {
        //TODO
        console.warn("Group:" + evt.groupName + " has failed to load");
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    };
    return CPreloader;
}());
window["CPreloader"] = CPreloader;
__reflect(CPreloader.prototype,"CPreloader",["IPreloader"]); 


/***/ }),

/***/ "./src/components/preloaders/CPreloaderUI.ts":
/***/ (function(module, exports) {

var eyelen4 = window['eyelen4']; 
/**
 *
 * @author
 *
 */
var eyelen4;
(function (eyelen4) {
    var CPreloaderUI = /** @class */ (function (_super) {
        __extends(CPreloaderUI, _super);
        function CPreloaderUI() {
            var _this = _super.call(this) || this;
            _this.m_noUIPreloaderUI = new CNoUIPreloaderUI();
            _this.m_noUIPreloaderUI.setProgressListener(_this.onProgressListener, _this);
            _this.x = 0;
            _this.y = 0;
            _this.m_nextActTimer = new egret.Timer(2000, 1);
            return _this;
        }
        CPreloaderUI.prototype.setPreloader = function (preloader) {
            this.m_noUIPreloaderUI.setPreloader(preloader);
        };
        CPreloaderUI.prototype.setCompleteListener = function (listener, thisObj) {
            this.m_cmplListener = listener;
            this.m_cmplThisObj = thisObj;
            this.m_noUIPreloaderUI.setCompleteListener(this.onPreloadComplete, this);
        };
        CPreloaderUI.prototype.onPreloadComplete = function () {
            if (this.m_noUIPreloaderUI.m_proporFinished >= 100) {
                this.readyLabel.visible = true;
                this.m_nextActTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onNextActTimer, this);
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onScrTch, this);
                this.m_nextActTimer.start();
            }
            else {
                //No task left case. No action here.
            }
            this.m_cmplListener.apply(this.m_cmplThisObj);
        };
        CPreloaderUI.prototype.takeNextAct = function () {
            this.m_nextActListener.apply(this.m_nextActThisObj);
            this.m_nextActTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onNextActTimer, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onScrTch, this);
        };
        CPreloaderUI.prototype.onNextActTimer = function (evt) {
            this.takeNextAct();
        };
        CPreloaderUI.prototype.onScrTch = function (evt) {
            this.takeNextAct();
        };
        CPreloaderUI.prototype.setNextActListener = function (listener, thisObj) {
            this.m_nextActListener = listener;
            this.m_nextActThisObj = thisObj;
        };
        CPreloaderUI.prototype._setParentContainer = function (c) {
            this.m_noUIPreloaderUI._setParentContainer(c);
        };
        CPreloaderUI.prototype._getParentContainer = function () {
            return this.m_noUIPreloaderUI._getParentContainer();
        };
        CPreloaderUI.prototype.addTask = function (task) {
            this.m_noUIPreloaderUI.addTask(task);
        };
        CPreloaderUI.prototype.setNoTaskLeft = function (ntl) {
            this.m_noUIPreloaderUI.setNoTaskLeft(ntl);
        };
        CPreloaderUI.prototype.setSceneRect = function (x, y, wid, hei) {
            this.x = x + (wid - 400) / 2;
            this.y = y + (hei - 300) / 5 * 2;
        };
        CPreloaderUI.prototype.startPreload = function () {
            this.m_noUIPreloaderUI.startPreload();
        };
        CPreloaderUI.prototype.clearProgress = function () {
            this.m_noUIPreloaderUI.clearProgress();
            this.readyLabel.visible = false;
            this.cmplPropor.text = "0.0%";
        };
        CPreloaderUI.prototype.onProgressListener = function () {
            this.cmplPropor.text = this.m_noUIPreloaderUI.m_proporFinished.toFixed(2) + "%";
        };
        CPreloaderUI.prototype.show = function () {
            this.visible = true;
        };
        CPreloaderUI.prototype.hide = function () {
            this.visible = false;
        };
        CPreloaderUI.prototype.isVisible = function () {
            return this.visible;
        };
        return CPreloaderUI;
    }(eui.Component));
    eyelen4.CPreloaderUI = CPreloaderUI;
    __reflect(CPreloaderUI.prototype,"eyelen4.CPreloaderUI",["IPreloaderUI"]); 
})(eyelen4 || (eyelen4 = {}));
window["eyelen4"] = eyelen4;


/***/ }),

/***/ "./src/components/preloaders/IPreloader.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/preloaders/IPreloaderUI.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/presenters/Eyelen/CEyelen4PraDifficultPresenter.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/components/presenters/CAnglePresenter.ts
 *
 * 练习界面的Presenter。包含待显示元素的坐标计算等。可单元测试。
 *
 */
var CEyelen4PraDifficultPresenter = /** @class */ (function () {
    function CEyelen4PraDifficultPresenter() {
        //顶部区域相关常量：
        this.s_thumbAreax = 25; //缩略图区域X坐标。
        this.s_thumbAreay = 0; //缩略图区域Y坐标。
        this.s_thumbAreaWidth = 428 - 250; //缩略图区域宽度。
        this.s_thumbAreaHeight = 160; //缩略图区域高度。
        this.s_thMaxWidth = 150; // 缩略图最大宽度。
        this.s_thMaxHeight = 120; // 缩略图最大高度。
        this.m_visibleStartY = 0; // 中部区域的可视区域起始Y坐标（相对于中部区域）。
        /*    private m_lenEdge1DispRect:gdeint.CRect;
            private m_lenQuestionerDispPt:gdeint.CPoint;
            private m_lenQuestionerFontSize:number;
            private m_lenEdge2DispRect:gdeint.CRect;*/
        this.m_userLen = 0; // 用户输入的长度值。(校准后)
        this.m_pm = new CEyelen3EPraMachineDifficult(); // 部件没改动，继续使用上一代的。
        this.m_itm = new gdeint.ImgThumbModelV2();
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
        this.m_imgSelRect = new gdeint.CRect();
        this.m_imgSelPtOri = new gdeint.CPoint();
        this.m_renderFilter = new CNoChangeRenderFilter();
        this.m_lenDispPtsRects = new CLenPtsRects();
    }
    CEyelen4PraDifficultPresenter.prototype.bindPM = function (pm) {
        this.m_pm = pm;
    };
    CEyelen4PraDifficultPresenter.prototype.unbindPM = function () {
        this.m_pm = null;
    };
    /*
     * 检验是否所有待填变量都已填好。并不完善，慎用。
     */
    CEyelen4PraDifficultPresenter.prototype.allFieldsFilled = function () {
        if (isNaN(this.m_winWidth)) {
            return false;
        }
        if (isNaN(this.m_winHeight)) {
            return false;
        }
        if (isNaN(this.m_imgWidth)) {
            return false;
        }
        if (isNaN(this.m_imgHeight)) {
            return false;
        }
        if (null == this.m_imgSelRect) {
            return false;
        }
        else {
            if (isNaN(this.m_imgSelRect.m_left)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_top)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_width)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_height)) {
                return false;
            }
        }
        if (isNaN(this.m_thAreaWidth)) {
            return false;
        }
        if (isNaN(this.m_thAreaHeight)) {
            return false;
        }
        if (isNaN(this.m_score)) {
            return false;
        }
        if (isNaN(this.m_progress)) {
            return false;
        }
        if (null == this.m_len) {
            return false;
        }
        else {
            if (isNaN(this.m_len.m_length)) {
                return false;
            }
            if (isNaN(this.m_len.m_x)) {
                return false;
            }
            if (isNaN(this.m_len.m_y)) {
                return false;
            }
            if (null == this.m_len.m_imgPath) {
                return false;
            }
            if (null == this.m_len.m2_imgResName) {
                return false;
            }
        }
        if (isNaN(this.m_userLen)) {
            return false;
        }
        return true;
    };
    CEyelen4PraDifficultPresenter.prototype.setITM = function (itm) {
        this.m_itm = itm;
    };
    /*
     * 强行修改缩略图区域X坐标。
     */
    CEyelen4PraDifficultPresenter.prototype.s_setThumbAreaX = function (x) {
        this.s_thumbAreax = x;
    };
    /*
     * 强行修改缩略图区域Y坐标。
     */
    CEyelen4PraDifficultPresenter.prototype.s_setThumbAreaY = function (y) {
        this.s_thumbAreay = y;
    };
    /*
     * 强行修改缩略图区域宽度。
     */
    CEyelen4PraDifficultPresenter.prototype.s_setThumbAreaWidth = function (wid) {
        this.s_thumbAreaWidth = wid;
    };
    /*
     * 强行修改缩略图区域高度。
     */
    CEyelen4PraDifficultPresenter.prototype.s_setThumbAreaHeight = function (hei) {
        this.s_thumbAreaHeight = hei;
    };
    /*
     * 强行修改缩略图最大宽度。
     */
    CEyelen4PraDifficultPresenter.prototype.s_setThMaxWidth = function (wid) {
        this.s_thMaxWidth = wid;
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
    };
    /*
     * 强行修改缩略图最大高度。
     */
    CEyelen4PraDifficultPresenter.prototype.s_setThMaxHeight = function (hei) {
        this.s_thMaxHeight = hei;
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
    };
    /*
     * 设置所使用的渲染过滤器。
     */
    CEyelen4PraDifficultPresenter.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
        this.m_pm.getLenChecker().setRenderFilter(rf);
    };
    CEyelen4PraDifficultPresenter.prototype.getRenderFilter = function () {
        return this.m_renderFilter;
    };
    CEyelen4PraDifficultPresenter.prototype.calcuLenPtsRects = function (l) {
        var ret;
        ret = new CLenPtsRects();
        //Edge1:
        if (l.m_isHor) {
            ret.m_lenEdge1DispRect.m_left = this.m_renderFilter.xOConv(l.m_x) - 5;
            ret.m_lenEdge1DispRect.m_top = l.m_y - 30;
            ret.m_lenEdge1DispRect.m_width = 5;
            ret.m_lenEdge1DispRect.m_height = 60;
        }
        else {
            ret.m_lenEdge1DispRect.m_left = this.m_renderFilter.xOConv(l.m_x) - 30;
            ret.m_lenEdge1DispRect.m_top = l.m_y - 5;
            ret.m_lenEdge1DispRect.m_width = 60;
            ret.m_lenEdge1DispRect.m_height = 5;
        }
        //Edge2:
        if (l.m_isHor) {
            ret.m_lenEdge2DispRect.m_left = this.m_renderFilter.xOConv(l.m_x + l.m_length);
            ret.m_lenEdge2DispRect.m_top = l.m_y;
            ret.m_lenEdge2DispRect.m_width = 5;
            ret.m_lenEdge2DispRect.m_height = 60;
        }
        else {
            ret.m_lenEdge2DispRect.m_left = this.m_renderFilter.xOConv(l.m_x) - 30;
            ret.m_lenEdge2DispRect.m_top = l.m_y + l.m_length;
            ret.m_lenEdge2DispRect.m_width = 60;
            ret.m_lenEdge2DispRect.m_height = 5;
        }
        //Questioner:
        if (l.m_isHor) {
            ret.m_lenQuestionerDispPt.m_x = this.m_renderFilter.xOConv(l.m_x) + this.m_renderFilter.xOConv(l.m_length / 2) - 10;
            ret.m_lenQuestionerDispPt.m_y = l.m_y - 20;
        }
        else {
            ret.m_lenQuestionerDispPt.m_x = this.m_renderFilter.xOConv(l.m_x) - 10;
            ret.m_lenQuestionerDispPt.m_y = l.m_y + l.m_length / 2 - 20;
        }
        ret.m_lenQuestionerFontSize = 36;
        return ret;
    };
    /*
     * 根据 m_len 刷新当前长度相关的几个区域和坐标变量等。
     */
    CEyelen4PraDifficultPresenter.prototype.refreshLenPtsRects = function () {
        if (!this.m_len) {
            return;
        }
        this.m_lenDispPtsRects = this.calcuLenPtsRects(this.m_len);
    };
    /*
     * 与练习机器同步，获取最新数据。
     */
    CEyelen4PraDifficultPresenter.prototype.updateFromPM = function () {
        this.m_score = this.m_pm.getCurScore();
        this.m_len = this.m_pm.getCurLen();
        this.refreshLenPtsRects();
    };
    CEyelen4PraDifficultPresenter.prototype.submitToPM = function () {
    };
    CEyelen4PraDifficultPresenter.prototype.clearTempData = function () {
    };
    /*
     * 进入下一长度。
     */
    CEyelen4PraDifficultPresenter.prototype.nextLen = function () {
        this.m_pm.nextLen();
        if (this.getProgress() >= 10) {
            //练习已完成。
            this.setState(2);
        }
        else {
            //练习未完成。
            this.setState(0);
        }
    };
    CEyelen4PraDifficultPresenter.prototype.fillScore = function (s) {
        this.m_score = s;
    };
    /*
     * 获取当前得分。
     */
    CEyelen4PraDifficultPresenter.prototype.getScore = function () {
        return this.m_score;
    };
    CEyelen4PraDifficultPresenter.prototype.fillProgress = function (p) {
        this.m_progress = p;
    };
    /*
     * 获取当前进度。
     */
    CEyelen4PraDifficultPresenter.prototype.getProgress = function () {
        //        return this.m_pm.getCurProgress() + 1;
        return this.m_progress;
    };
    /*
     * 获取当前长度。
     */
    CEyelen4PraDifficultPresenter.prototype.getLen = function () {
        return this.m_len;
    };
    /*
     * 获取最近一次目测准确度评定。
     */
    CEyelen4PraDifficultPresenter.prototype.getCurRank = function () {
        return this.m_curRank;
    };
    /*
     * 设置窗口宽度。
     */
    CEyelen4PraDifficultPresenter.prototype.setWinWidth = function (ww) {
        this.m_winWidth = ww;
        this.m_imgSelRect.m_width = ww;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyelen4PraDifficultPresenter.prototype.setWinHeight = function (wh) {
        this.m_winHeight = wh;
    };
    /*
     * 设置图片宽度。参数填原始宽度。
     */
    CEyelen4PraDifficultPresenter.prototype.setImgWidth = function (w) {
        this.m_imgWidth = w;
        this.m_imgDispWidth = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgWidth(this.m_imgDispWidth);
    };
    /*
     * 获取图片原始宽度。
     */
    CEyelen4PraDifficultPresenter.prototype.getImgWidth = function () {
        return this.m_imgWidth;
    };
    CEyelen4PraDifficultPresenter.prototype.setImgHeight = function (h) {
        this.m_imgHeight = h;
        this.m_itm.setImgHeight(h);
    };
    CEyelen4PraDifficultPresenter.prototype.getImgHeight = function () {
        return this.m_imgHeight;
    };
    /*
     * 设置图片选区位置。（填校准后坐标）
     */
    CEyelen4PraDifficultPresenter.prototype.inpImgSelPt = function (imgSelPt) {
        var rect = new gdeint.CRect();
        rect.m_left = imgSelPt.m_x;
        rect.m_top = imgSelPt.m_y;
        rect.m_width = this.m_imgSelRect.m_width;
        rect.m_height = this.m_imgSelRect.m_height;
        this.m_imgSelRect = rect;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
        //记录起点坐标（校准前尺寸规格）
        this.m_imgSelPtOri.m_x = imgSelPt.m_x / this.m_renderFilter._getCaRat();
        this.m_imgSelPtOri.m_y = imgSelPt.m_y;
    };
    /*
     * 设置缩略图选区位置。同时影响图片选区位置。
     */
    CEyelen4PraDifficultPresenter.prototype.inpThSelPt = function (thSelPt) {
        var imgSelPt;
        imgSelPt = this.m_itm.tp2Ip(thSelPt);
        this.inpImgSelPt(imgSelPt);
    };
    /*
     * 设置图片选区宽度（参数填原始宽度）。
     */
    CEyelen4PraDifficultPresenter.prototype.inpImgSelWidth = function (w) {
        this.m_imgSelRect.m_width = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyelen4PraDifficultPresenter.prototype.inpImgSelHeight = function (h) {
        this.m_imgSelRect.m_height = h;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    /*
     * 填入用户输入的长度值。（填反横竖校准后的长度）
     */
    CEyelen4PraDifficultPresenter.prototype.setUserLen = function (l) {
        /*        var tmp:number;
                if(this.m_pm.getCurLen().m_isHor) {
                    tmp = this.getRenderFilter().xIConv(l);
                }
                else {
                    tmp = l;
                }
        
                this.m_userLen = tmp;*/
        this.m_userLen = l;
    };
    /*
     * 提交用户输入的长度给练习机器。
     */
    CEyelen4PraDifficultPresenter.prototype.submitLen = function () {
        this.m_pm.inpLen(this.m_userLen);
        var lenChecker = (this.m_pm.getLenChecker());
        lenChecker.setCorreOriLen(this.m_len.m_length);
        //        lenChecker.setCorreHor(this.m_len.m_isHor);
        lenChecker.setInputDispLen(this.m_userLen);
        this.m_curRank = lenChecker.checkLen();
        this.fillProgress(this.m_pm.getCmplProgress());
    };
    CEyelen4PraDifficultPresenter.prototype.syncFromRenderFilter = function () {
        //renderFilter有改动后（例如caRat变更）调用本函数进行同步。
        var caRat = this.m_renderFilter._getCaRat();
        this.m_imgDispWidth = this.m_renderFilter.xOConv(this.m_imgWidth);
        //Update imgThumbModel:
        this.m_itm.setImgWidth(this.m_imgDispWidth);
        //Update selPt:
        var selPt = new gdeint.CPoint();
        selPt.m_x = this.m_imgSelPtOri.m_x * caRat;
        selPt.m_y = this.m_imgSelRect.m_top;
        this.inpImgSelPt(selPt);
        //imgSelWith 不变。
        this.refreshLenPtsRects();
    };
    /*
     * 设置横竖校准系数。
     */
    CEyelen4PraDifficultPresenter.prototype.setCaRat = function (caRat) {
        this.m_renderFilter.setCaRat(caRat);
        this.syncFromRenderFilter();
    };
    /*
     * 临时显示一个长度，不影响练习机器里的数据。
     */
    CEyelen4PraDifficultPresenter.prototype.showLen = function (len) {
        this.m_len = len;
        this.refreshLenPtsRects();
        //        Update itm
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    /*
     * 设置练习所用到的长度集合。
     */
    CEyelen4PraDifficultPresenter.prototype.setLenArr = function (len) {
        this.m_pm.setLenArr(len);
    };
    /*
     * 设置当前状态。
     */
    CEyelen4PraDifficultPresenter.prototype.setState = function (s) {
        //0:To input 1:checking 2:final
        this.m_state = s;
    };
    /*
     * 重新开始练习。
     */
    CEyelen4PraDifficultPresenter.prototype.rePra = function () {
        // Start a new pra.
        this.m_curRank = 0;
        this.m_pm.rePra();
    };
    CEyelen4PraDifficultPresenter.prototype.clearPra = function () {
        // Clear angles,progress and score.
        this.m_pm.clearPra();
        this.rePra();
    };
    /*
     * 获取经渲染过滤器输出后的图片区域。
     */
    CEyelen4PraDifficultPresenter.prototype.getImgRect = function () {
        var oriRect, ret;
        oriRect = new gdeint.CRect();
        oriRect.m_left = -this.m_imgSelRect.m_left / this.m_renderFilter._getCaRat();
        oriRect.m_top = -this.m_imgSelRect.m_top + this.m_visibleStartY;
        oriRect.m_width = this.m_imgWidth;
        oriRect.m_height = this.m_imgHeight;
        ret = this.m_renderFilter.rectOConv(oriRect);
        return ret;
    };
    /*
     * 获取经渲染过滤器输出后的缩略图区域。
     */
    CEyelen4PraDifficultPresenter.prototype.getThumbRect = function () {
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        var ret;
        ret = new gdeint.CRect();
        ret.m_width = this.m_itm.getThWidth();
        ret.m_height = this.m_itm.getThHeight();
        ret.m_left = this.s_thumbAreax + (this.s_thumbAreaWidth - ret.m_width) / 2;
        ret.m_top = this.s_thumbAreay + (this.s_thumbAreaHeight - ret.m_height) / 2;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出后的缩略图选区。
     */
    CEyelen4PraDifficultPresenter.prototype.getThumbSelRect = function () {
        var ret;
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        var tsr = this.m_itm.getThSelRect();
        ret = new gdeint.CRect();
        ret.m_left = tsr.m_left;
        ret.m_top = tsr.m_top;
        ret.m_width = tsr.m_width;
        ret.m_height = tsr.m_height;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出的缩略图问号坐标。
     */
    CEyelen4PraDifficultPresenter.prototype.getThumbQuestionerDispCenterPt = function () {
        var thRect;
        thRect = this.getThumbRect();
        var ret;
        var lenPt;
        var QDPCenter = new gdeint.CPoint();
        QDPCenter.m_x = this.m_lenDispPtsRects.m_lenQuestionerDispPt.m_x + 16;
        QDPCenter.m_y = this.m_lenDispPtsRects.m_lenQuestionerDispPt.m_y + 24;
        lenPt = this.m_itm.ip2Tp(QDPCenter);
        ret = new gdeint.CPoint();
        ret.m_x = lenPt.m_x /* - 8*/;
        ret.m_y = lenPt.m_y /* - 12*/;
        return ret;
    };
    CEyelen4PraDifficultPresenter.prototype.getLenEdge1DispRect = function () {
        return this.m_lenDispPtsRects.m_lenEdge1DispRect;
    };
    CEyelen4PraDifficultPresenter.prototype.getLenQuestionerDispPt = function () {
        return this.m_lenDispPtsRects.m_lenQuestionerDispPt;
    };
    CEyelen4PraDifficultPresenter.prototype.getLenQuestionerFontSize = function () {
        return this.m_lenDispPtsRects.m_lenQuestionerFontSize;
    };
    CEyelen4PraDifficultPresenter.prototype.getLenEdge2DispRect = function () {
        return this.m_lenDispPtsRects.m_lenEdge2DispRect;
    };
    return CEyelen4PraDifficultPresenter;
}());
window["CEyelen4PraDifficultPresenter"] = CEyelen4PraDifficultPresenter;
__reflect(CEyelen4PraDifficultPresenter.prototype,"CEyelen4PraDifficultPresenter",["IEyelen4PraDifficultPresenter"]); 


/***/ }),

/***/ "./src/components/presenters/Eyelen/CEyelen4PraEasyPresenter.ts":
/***/ (function(module, exports) {

/**
 *
 * /src/components/presenters/CAnglePresenter.ts
 *
 * 练习界面的Presenter。包含待显示元素的坐标计算等。可单元测试。
 *
 */
var CEyelen4PraEasyPresenter = /** @class */ (function () {
    function CEyelen4PraEasyPresenter() {
        //顶部区域相关常量：
        //（480*170）
        this.s_thumbAreax = 25; //缩略图区域X坐标。
        this.s_thumbAreay = 0; //缩略图区域Y坐标。
        this.s_thumbAreaWidth = 428 - 250; //缩略图区域宽度。
        this.s_thumbAreaHeight = 160; //缩略图区域高度。
        this.s_thMaxWidth = 150; // 缩略图最大宽度。
        this.s_thMaxHeight = 120; // 缩略图最大高度。
        this.m_visibleStartY = 0; // 中部区域的可视区域起始Y坐标（相对于中部区域）。
        //    public m_userLen: number = 0; // 用户输入的长度值。(校准后)
        this.m_userGCnt = 0; // 用户输入的格数。
        this.m_pm = new CEyelen3EPraMachineEasy(); //部件没改动，继续使用上一代的。
        this.m_itm = new gdeint.ImgThumbModelV2();
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
        this.m_imgSelRect = new gdeint.CRect();
        this.m_imgSelPtOri = new gdeint.CPoint();
        this.m_renderFilter = new CNoChangeRenderFilter();
        this.m_lenEdge1DispRect = new gdeint.CRect();
        this.m_lenQuestionerDispPt = new gdeint.CPoint();
        this.m_lenQuestionerFontSize = -1;
        this.m_lenEdge2DispRect = new gdeint.CRect();
        /*        this.m_angleVertexPt = new CPoint();
                this.m_angleVertexDispPt = new CPoint();
                this.m_angleEdge1DispPt = new CPoint();
                this.m_angleEdge2DispPt = new CPoint();*/
    }
    CEyelen4PraEasyPresenter.prototype.bindPM = function (pm) {
        this.m_pm = pm;
    };
    CEyelen4PraEasyPresenter.prototype.unbindPM = function () {
        this.m_pm = null;
    };
    /*
     * 检验是否所有待填变量都已填好。并不完善，慎用。
     */
    CEyelen4PraEasyPresenter.prototype.allFieldsFilled = function () {
        if (isNaN(this.m_winWidth)) {
            return false;
        }
        if (isNaN(this.m_winHeight)) {
            return false;
        }
        if (isNaN(this.m_imgWidth)) {
            return false;
        }
        if (isNaN(this.m_imgHeight)) {
            return false;
        }
        if (null == this.m_imgSelRect) {
            return false;
        }
        else {
            if (isNaN(this.m_imgSelRect.m_left)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_top)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_width)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_height)) {
                return false;
            }
        }
        if (isNaN(this.m_thAreaWidth)) {
            return false;
        }
        if (isNaN(this.m_thAreaHeight)) {
            return false;
        }
        if (isNaN(this.m_score)) {
            return false;
        }
        if (isNaN(this.m_progress)) {
            return false;
        }
        if (null == this.m_len) {
            return false;
        }
        else {
            if (isNaN(this.m_len.m_length)) {
                return false;
            }
            if (isNaN(this.m_len.m_x)) {
                return false;
            }
            if (isNaN(this.m_len.m_y)) {
                return false;
            }
            if (null == this.m_len.m_imgPath) {
                return false;
            }
            if (null == this.m_len.m2_imgResName) {
                return false;
            }
        }
        if (isNaN(this.m_userGCnt)) {
            return false;
        }
        return true;
    };
    CEyelen4PraEasyPresenter.prototype.setITM = function (itm) {
        this.m_itm = itm;
    };
    /*
     * 强行修改缩略图区域X坐标。
     */
    CEyelen4PraEasyPresenter.prototype.s_setThumbAreaX = function (x) {
        this.s_thumbAreax = x;
    };
    /*
     * 强行修改缩略图区域Y坐标。
     */
    CEyelen4PraEasyPresenter.prototype.s_setThumbAreaY = function (y) {
        this.s_thumbAreay = y;
    };
    /*
     * 强行修改缩略图区域宽度。
     */
    CEyelen4PraEasyPresenter.prototype.s_setThumbAreaWidth = function (wid) {
        this.s_thumbAreaWidth = wid;
    };
    /*
     * 强行修改缩略图区域高度。
     */
    CEyelen4PraEasyPresenter.prototype.s_setThumbAreaHeight = function (hei) {
        this.s_thumbAreaHeight = hei;
    };
    /*
     * 强行修改缩略图最大宽度。
     */
    CEyelen4PraEasyPresenter.prototype.s_setThMaxWidth = function (wid) {
        this.s_thMaxWidth = wid;
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
    };
    /*
     * 强行修改缩略图最大高度。
     */
    CEyelen4PraEasyPresenter.prototype.s_setThMaxHeight = function (hei) {
        this.s_thMaxHeight = hei;
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
    };
    /*
     * 设置所使用的渲染过滤器。
     */
    CEyelen4PraEasyPresenter.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
        this.m_pm.getLenChecker().setRenderFilter(rf);
    };
    CEyelen4PraEasyPresenter.prototype.getRenderFilter = function () {
        return this.m_renderFilter;
    };
    /*
     * 根据 m_len 刷新当前长度相关的几个区域和坐标变量等。
     */
    CEyelen4PraEasyPresenter.prototype.refreshLenPtsRects = function () {
        /*            private m_lenEdge1DispRect:CRect;
            private m_lenQuestionerDispPt:CPoint;
            private m_lenQuestionerFontSize:number;
            private m_lenEdge2DispRect:CRect;*/
        if (!this.m_len) {
            return;
        }
        //Edge1:
        if (this.m_len.m_isHor) {
            this.m_lenEdge1DispRect.m_left = this.m_renderFilter.xOConv(this.m_len.m_x) - 5;
            this.m_lenEdge1DispRect.m_top = this.m_len.m_y - 30;
            this.m_lenEdge1DispRect.m_width = 5;
            this.m_lenEdge1DispRect.m_height = 60;
        }
        else {
            this.m_lenEdge1DispRect.m_left = this.m_renderFilter.xOConv(this.m_len.m_x) - 30;
            this.m_lenEdge1DispRect.m_top = this.m_len.m_y - 5;
            this.m_lenEdge1DispRect.m_width = 60;
            this.m_lenEdge1DispRect.m_height = 5;
        }
        //Edge2:
        if (this.m_len.m_isHor) {
            this.m_lenEdge2DispRect.m_left = this.m_renderFilter.xOConv(this.m_len.m_x + this.m_len.m_length);
            this.m_lenEdge2DispRect.m_top = this.m_len.m_y - 30;
            this.m_lenEdge2DispRect.m_width = 5;
            this.m_lenEdge2DispRect.m_height = 60;
        }
        else {
            this.m_lenEdge2DispRect.m_left = this.m_renderFilter.xOConv(this.m_len.m_x) - 30;
            this.m_lenEdge2DispRect.m_top = this.m_len.m_y + this.m_len.m_length;
            this.m_lenEdge2DispRect.m_width = 60;
            this.m_lenEdge2DispRect.m_height = 5;
        }
        //Questioner:
        if (this.m_len.m_isHor) {
            this.m_lenQuestionerDispPt.m_x = this.m_renderFilter.xOConv(this.m_len.m_x) + this.m_renderFilter.xOConv(this.m_len.m_length / 2) - 10;
            this.m_lenQuestionerDispPt.m_y = this.m_len.m_y - 20;
        }
        else {
            this.m_lenQuestionerDispPt.m_x = this.m_renderFilter.xOConv(this.m_len.m_x) - 10;
            this.m_lenQuestionerDispPt.m_y = this.m_len.m_y + this.m_len.m_length / 2 - 20;
        }
        this.m_lenQuestionerFontSize = 36;
    };
    /*
     * 与练习机器同步，获取最新数据。
     */
    CEyelen4PraEasyPresenter.prototype.updateFromPM = function () {
        this.m_score = this.m_pm.getCurScore();
        this.m_len = this.m_pm.getCurLen();
        this.refreshLenPtsRects();
    };
    CEyelen4PraEasyPresenter.prototype.submitToPM = function () {
    };
    CEyelen4PraEasyPresenter.prototype.clearTempData = function () {
    };
    /*
     * 进入下一长度。
     */
    CEyelen4PraEasyPresenter.prototype.nextLen = function () {
        this.m_pm.nextLen();
        if (this.getProgress() >= 10) {
            //练习已完成。
            this.setState(2);
        }
        else {
            //练习未完成。
            this.setState(0);
        }
    };
    CEyelen4PraEasyPresenter.prototype.fillScore = function (s) {
        this.m_score = s;
    };
    /*
     * 获取当前得分。
     */
    CEyelen4PraEasyPresenter.prototype.getScore = function () {
        return this.m_score;
    };
    CEyelen4PraEasyPresenter.prototype.fillProgress = function (p) {
        this.m_progress = p;
    };
    /*
     * 获取当前进度。
     */
    CEyelen4PraEasyPresenter.prototype.getProgress = function () {
        //        return this.m_pm.getCurProgress() + 1;
        return this.m_progress;
    };
    /*
     * 获取当前长度。
     */
    CEyelen4PraEasyPresenter.prototype.getLen = function () {
        return this.m_len;
    };
    /*
     * 获取最近一次目测准确度评定。
     */
    CEyelen4PraEasyPresenter.prototype.getCurRank = function () {
        return this.m_curRank;
    };
    /*
     * 设置窗口宽度。
     */
    CEyelen4PraEasyPresenter.prototype.setWinWidth = function (ww) {
        this.m_winWidth = ww;
        this.m_imgSelRect.m_width = ww;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyelen4PraEasyPresenter.prototype.setWinHeight = function (wh) {
        this.m_winHeight = wh;
    };
    /*
     * 设置图片宽度。参数填原始宽度。
     */
    CEyelen4PraEasyPresenter.prototype.setImgWidth = function (w) {
        this.m_imgWidth = w;
        this.m_imgDispWidth = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgWidth(this.m_imgDispWidth);
    };
    /*
     * 获取图片原始宽度。
     */
    CEyelen4PraEasyPresenter.prototype.getImgWidth = function () {
        return this.m_imgWidth;
    };
    CEyelen4PraEasyPresenter.prototype.setImgHeight = function (h) {
        this.m_imgHeight = h;
        this.m_itm.setImgHeight(h);
    };
    CEyelen4PraEasyPresenter.prototype.getImgHeight = function () {
        return this.m_imgHeight;
    };
    /*
     * 设置图片选区位置。（填校准后坐标）
     */
    CEyelen4PraEasyPresenter.prototype.inpImgSelPt = function (imgSelPt) {
        var rect = new gdeint.CRect();
        rect.m_left = imgSelPt.m_x;
        rect.m_top = imgSelPt.m_y;
        rect.m_width = this.m_imgSelRect.m_width;
        rect.m_height = this.m_imgSelRect.m_height;
        this.m_imgSelRect = rect;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
        //记录起点坐标（校准前尺寸规格）
        this.m_imgSelPtOri.m_x = imgSelPt.m_x / this.m_renderFilter._getCaRat();
        this.m_imgSelPtOri.m_y = imgSelPt.m_y;
    };
    /*
     * 设置缩略图选区位置。同时影响图片选区位置。
     */
    CEyelen4PraEasyPresenter.prototype.inpThSelPt = function (thSelPt) {
        var imgSelPt;
        imgSelPt = this.m_itm.tp2Ip(thSelPt);
        this.inpImgSelPt(imgSelPt);
    };
    /*
     * 设置图片选区宽度（参数填原始宽度）。
     */
    CEyelen4PraEasyPresenter.prototype.inpImgSelWidth = function (w) {
        this.m_imgSelRect.m_width = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyelen4PraEasyPresenter.prototype.inpImgSelHeight = function (h) {
        this.m_imgSelRect.m_height = h;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    /*
     * 填入用户输入的角度值。（填反横竖校准后的长度）
     */
    CEyelen4PraEasyPresenter.prototype.setUserGridCnt = function (gcnt) {
        /*        var tmp:number;
                if(this.m_pm.getCurLen().m_isHor) {
                    tmp = this.getRenderFilter().xIConv(l);
                }
                else {
                    tmp = l;
                }
        
                this.m_userLen = tmp;*/
        this.m_userGCnt = gcnt;
    };
    /*
     * 提交用户输入的角度给练习机器。
     */
    CEyelen4PraEasyPresenter.prototype.submitLen = function () {
        //        this.m_pm.inpLen(this.m_userLen);
        this.m_pm.inpGridCnt(this.m_userGCnt);
        var lenChecker = (this.m_pm.getLenChecker());
        lenChecker.setCorreOriLen(this.m_len.m_length);
        //        lenChecker.setCorreHor(this.m_len.m_isHor);
        //        lenChecker.setInputDispLen(this.m_userLen);
        lenChecker.setInputGridCnt(this.m_userGCnt);
        this.m_curRank = lenChecker.checkLen();
        this.fillProgress(this.m_pm.getCmplProgress());
    };
    CEyelen4PraEasyPresenter.prototype.syncFromRenderFilter = function () {
        //renderFilter有改动后（例如caRat变更）调用本函数进行同步。
        var caRat = this.m_renderFilter._getCaRat();
        this.m_imgDispWidth = this.m_renderFilter.xOConv(this.m_imgWidth);
        //Update imgThumbModel:
        this.m_itm.setImgWidth(this.m_imgDispWidth);
        //Update selPt:
        var selPt = new gdeint.CPoint();
        selPt.m_x = this.m_imgSelPtOri.m_x * caRat;
        selPt.m_y = this.m_imgSelRect.m_top;
        this.inpImgSelPt(selPt);
        //imgSelWith 不变。
        this.refreshLenPtsRects();
    };
    /*
     * 设置横竖校准系数。
     */
    CEyelen4PraEasyPresenter.prototype.setCaRat = function (caRat) {
        this.m_renderFilter.setCaRat(caRat);
        this.syncFromRenderFilter();
    };
    /*
     * 临时显示一个角度，不影响练习机器里的数据。
     */
    CEyelen4PraEasyPresenter.prototype.showLen = function (len) {
        this.m_len = len;
        this.refreshLenPtsRects();
        //        Update itm
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    /*
     * 设置练习所用到的长度集合。
     */
    CEyelen4PraEasyPresenter.prototype.setLenArr = function (lens) {
        this.m_pm.setLenArr(lens);
    };
    /*
     * 设置当前状态。
     */
    CEyelen4PraEasyPresenter.prototype.setState = function (s) {
        //0:To input 1:checking 2:final
        this.m_state = s;
    };
    /*
     * 重新开始练习。
     */
    CEyelen4PraEasyPresenter.prototype.rePra = function () {
        // Start a new pra.
        this.m_curRank = 0;
        this.m_pm.rePra();
    };
    CEyelen4PraEasyPresenter.prototype.clearPra = function () {
        // Clear angles,progress and score.
        this.m_pm.clearPra();
        this.rePra();
    };
    /*
     * 获取经渲染过滤器输出后的图片区域。
     */
    CEyelen4PraEasyPresenter.prototype.getImgRect = function () {
        var oriRect, ret;
        oriRect = new gdeint.CRect();
        oriRect.m_left = -this.m_imgSelRect.m_left / this.m_renderFilter._getCaRat();
        oriRect.m_top = -this.m_imgSelRect.m_top + this.m_visibleStartY;
        oriRect.m_width = this.m_imgWidth;
        oriRect.m_height = this.m_imgHeight;
        ret = this.m_renderFilter.rectOConv(oriRect);
        return ret;
    };
    /*
     * 获取经渲染过滤器输出后的缩略图区域。
     */
    CEyelen4PraEasyPresenter.prototype.getThumbRect = function () {
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        var ret;
        ret = new gdeint.CRect();
        ret.m_width = this.m_itm.getThWidth();
        ret.m_height = this.m_itm.getThHeight();
        ret.m_left = this.s_thumbAreax + (this.s_thumbAreaWidth - ret.m_width) / 2;
        ret.m_top = this.s_thumbAreay + (this.s_thumbAreaHeight - ret.m_height) / 2;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出后的缩略图选区。
     */
    CEyelen4PraEasyPresenter.prototype.getThumbSelRect = function () {
        var ret;
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        //        var thRect:CRect;
        //        thRect = this.getThumbRect();
        var tsr = this.m_itm.getThSelRect();
        ret = new gdeint.CRect();
        ret.m_left = /*thRect.m_left +*/ tsr.m_left;
        ret.m_top = /*thRect.m_top +*/ tsr.m_top;
        ret.m_width = tsr.m_width;
        ret.m_height = tsr.m_height;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出的角度顶点坐标。
     */
    /*    public rfgetScrAngleVertexPt(): CPoint {
            var ret:CPoint;
            ret = this.m_angleVertexDispPt;
            return ret;
        }*/
    /*
     * 获得经渲染过滤器输出的第一条边样点坐标。
     */
    /*    public rfgetScrAngleEdge1Pt(): CPoint {
            var ret:CPoint;
            ret = this.m_angleEdge1DispPt;
            return ret;
        }*/
    /*
     * 获得经渲染过滤器输出的第二条边样点坐标。
     */
    /*    public rfgetScrAngleEdge2Pt(): CPoint {
            var ret:CPoint;
            ret = this.m_angleEdge2DispPt;
            return ret;
        }
    */
    /*
     * 获得经渲染过滤器输出的缩略图问号坐标。
     */
    CEyelen4PraEasyPresenter.prototype.getThumbQuestionerDispPt = function () {
        var thRect;
        thRect = this.getThumbRect();
        var ret;
        var lenPt;
        //        lenPt = this.m_itm.ip2Tp(this.m_renderFilter.ptOConv(this.m_lenQuestionerDispPt));
        var QDPCenter = new gdeint.CPoint();
        QDPCenter.m_x = this.m_lenQuestionerDispPt.m_x + 16;
        QDPCenter.m_y = this.m_lenQuestionerDispPt.m_y + 24;
        lenPt = this.m_itm.ip2Tp(QDPCenter);
        ret = new gdeint.CPoint();
        ret.m_x = /*thRect.m_left + */ lenPt.m_x /* - 8*/;
        ret.m_y = /*thRect.m_top + */ lenPt.m_y /* - 12*/;
        return ret;
    };
    CEyelen4PraEasyPresenter.prototype.getLenEdge1DispRect = function () {
        return this.m_lenEdge1DispRect;
    };
    CEyelen4PraEasyPresenter.prototype.getLenQuestionerDispPt = function () {
        return this.m_lenQuestionerDispPt;
    };
    CEyelen4PraEasyPresenter.prototype.getLenQuestionerFontSize = function () {
        return this.m_lenQuestionerFontSize;
    };
    CEyelen4PraEasyPresenter.prototype.getLenEdge2DispRect = function () {
        return this.m_lenEdge2DispRect;
    };
    return CEyelen4PraEasyPresenter;
}());
window["CEyelen4PraEasyPresenter"] = CEyelen4PraEasyPresenter;
__reflect(CEyelen4PraEasyPresenter.prototype,"CEyelen4PraEasyPresenter",["IEyelen4PraEasyPresenter"]); 


/***/ }),

/***/ "./src/components/presenters/Eyelen/IEyelen4PraDifficultPresenter.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/presenters/Eyelen/IEyelen4PraEasyPresenter.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/presenters/common/IPraPresenter.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/presenters/common/IPresenterWithCa.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/presenters/common/IPresenterWithThumb.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/renderFilters/Eyelen/CEyelen3ERenderFilter.ts":
/***/ (function(module, exports) {

/**********************************************************
 * /src/components/renderFilters/Eyelen/CEyelen3ERenderFilter.ts
 * 图像显示过滤器。用于调整图像输出。主要是应用横竖校准系数。可单元测试。
 *
 **********************************************************/
var CEyelen3ERenderFilter = /** @class */ (function () {
    function CEyelen3ERenderFilter() {
        this.m_caRat = 1;
    }
    CEyelen3ERenderFilter.prototype.setCaRat = function (caRat) {
        this.m_caRat = caRat;
    };
    CEyelen3ERenderFilter.prototype._getCaRat = function () {
        return this.m_caRat;
    };
    /*
     * 计算某一横宽经过滤后在屏幕输出的宽度。除了适用于x坐标还适用于水平线段的长度。
     */
    CEyelen3ERenderFilter.prototype.xOConv = function (v) {
        var ret;
        ret = v * this.m_caRat;
        return ret;
    };
    CEyelen3ERenderFilter.prototype.xIConv = function (v) {
        var ret;
        ret = v / this.m_caRat;
        return ret;
    };
    CEyelen3ERenderFilter.prototype.yOConv = function (v) {
        return v;
    };
    CEyelen3ERenderFilter.prototype.yIConv = function (v) {
        return v;
    };
    /*
     * 计算某一点经过滤后在屏幕上的坐标。
     */
    CEyelen3ERenderFilter.prototype.ptOConv = function (pt) {
        var ret;
        ret = new gdeint.CPoint();
        ret.m_x = this.xOConv(pt.m_x);
        ret.m_y = pt.m_y;
        return ret;
    };
    /*
     * 计算某一屏幕点在过滤前的原始坐标。
     */
    CEyelen3ERenderFilter.prototype.ptIConv = function (pt) {
        var ret;
        ret = new gdeint.CPoint();
        ret.m_x = pt.m_x / this.m_caRat;
        ret.m_y = pt.m_y;
        return ret;
    };
    /*
     * 计算某一原始区域过滤输出后的屏幕区域。
     */
    CEyelen3ERenderFilter.prototype.rectOConv = function (rect) {
        var ret;
        ret = new gdeint.CRect;
        ret.m_left = rect.m_left * this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width * this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    };
    /*
     * 计算某一屏幕区域在过滤前的原始区域。
     */
    CEyelen3ERenderFilter.prototype.rectIConv = function (rect) {
        var ret;
        ret = new gdeint.CRect();
        ret.m_left = rect.m_left / this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width / this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    };
    return CEyelen3ERenderFilter;
}());
window["CEyelen3ERenderFilter"] = CEyelen3ERenderFilter;
__reflect(CEyelen3ERenderFilter.prototype,"CEyelen3ERenderFilter",["IEyelen3ERenderFilter"]); 
;


/***/ }),

/***/ "./src/components/renderFilters/Eyelen/CNoChangeRenderFilterLen.ts":
/***/ (function(module, exports) {

/**
 * /src/components/renderFilters/Eyelen/CNoChangeRenderFilter.ts
 *
 * 1、定义不做任何改变的RenderFilter。
 * 2、作为RenderFilter的基类简化代码。
 *
 */
var CNoChangeRenderFilter = /** @class */ (function () {
    function CNoChangeRenderFilter() {
    }
    CNoChangeRenderFilter.prototype.setCaRat = function (caRat) {
    };
    CNoChangeRenderFilter.prototype._getCaRat = function () {
        return 1;
    };
    CNoChangeRenderFilter.prototype.xOConv = function (v) {
        var ret;
        ret = v;
        return ret;
    };
    CNoChangeRenderFilter.prototype.xIConv = function (v) {
        var ret;
        ret = v;
        return ret;
    };
    CNoChangeRenderFilter.prototype.yOConv = function (v) {
        return v;
    };
    CNoChangeRenderFilter.prototype.yIConv = function (v) {
        return v;
    };
    CNoChangeRenderFilter.prototype.ptOConv = function (pt) {
        var ret;
        ret = pt;
        return ret;
    };
    CNoChangeRenderFilter.prototype.ptIConv = function (pt) {
        var ret;
        ret = pt;
        return ret;
    };
    CNoChangeRenderFilter.prototype.rectOConv = function (rect) {
        var ret;
        ret = rect;
        return ret;
    };
    CNoChangeRenderFilter.prototype.rectIConv = function (rect) {
        var ret;
        ret = rect;
        return ret;
    };
    return CNoChangeRenderFilter;
}());
window["CNoChangeRenderFilter"] = CNoChangeRenderFilter;
__reflect(CNoChangeRenderFilter.prototype,"CNoChangeRenderFilter",["IEyelen3ERenderFilter"]); 
;


/***/ }),

/***/ "./src/components/renderFilters/Eyelen/IEyelen3ERenderFilter.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/resFetchers/IResFetcher.ts":
/***/ (function(module, exports) {

/**
 * /src/components/resLoaders/IResLoader.ts
 * 资源读取器接口。利用本接口可通过字符串格式的资源名获取各种来源的资源。
 *
 */


/***/ }),

/***/ "./src/components/resFetchers/withEgret/CEgretDefaultResLoader.ts":
/***/ (function(module, exports) {

/**
 * /src/components/resLoaders/CEgretDefaultResLoader.ts
 * 本资源读取器获取程序默认资源配置文件里描述的资源。
 * 需要和egret关联。
 *
 */
var CEgretDefaultResLoader = /** @class */ (function () {
    function CEgretDefaultResLoader() {
    }
    CEgretDefaultResLoader.prototype.getRes = function (resName) {
        return RES.getRes(resName);
    };
    return CEgretDefaultResLoader;
}());
window["CEgretDefaultResLoader"] = CEgretDefaultResLoader;
__reflect(CEgretDefaultResLoader.prototype,"CEgretDefaultResLoader",["IResWithEgret"]); 


/***/ }),

/***/ "./src/components/resFetchers/withEgret/CNetResLoaderWithEgret.ts":
/***/ (function(module, exports) {

var CNetResLoaderWithEgret = /** @class */ (function () {
    function CNetResLoaderWithEgret() {
    }
    CNetResLoaderWithEgret.prototype.getRes = function (resName) {
        var resStru;
        resStru = CGlobals.g_resCache[resName];
        if (resStru.m_isInCache) {
            return resStru.m_resCache;
        }
        else {
            return null;
        }
    };
    return CNetResLoaderWithEgret;
}());
window["CNetResLoaderWithEgret"] = CNetResLoaderWithEgret;
__reflect(CNetResLoaderWithEgret.prototype,"CNetResLoaderWithEgret",["IResWithEgret"]); 


/***/ }),

/***/ "./src/components/resFetchers/withEgret/IResWithEgret.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/winModels/Eyelen/CEyelen4WinModel.ts":
/***/ (function(module, exports) {

// /src/components/winModels/Eyelen/CEyelen3EWinModelV2.ts
/**
 *
 * 画面布局模型。用来确定画面上各大部分的位置和大小。
 *
 */
var CEyelen4WinModel = /** @class */ (function () {
    function CEyelen4WinModel() {
        this.m_topSpaceHeight = 50; // 顶端空白高度。
        this.m_topHeight1 = 55; //顶部区域收起时的顶部高度（不含顶端空白）。
        this.m_topHeight2 = 255; //顶区打开时的顶部高度（不含顶端空白）。
        this.m_showTop = true; //顶区是否处于打开状态。
        this.m_bottomHeight = 250; //底部区域的高度。
        this.m_winWidth = 0; //场景宽度。
        this.m_winHeight = 0; //场景高度。
    }
    CEyelen4WinModel.prototype.setTopSpaceHeight = function (h) {
        this.m_topSpaceHeight = h;
    };
    CEyelen4WinModel.prototype.getTopSpaceHeight = function () {
        return this.m_topSpaceHeight;
    };
    CEyelen4WinModel.prototype.getTopY = function () {
        return this.getTopSpaceHeight();
    };
    CEyelen4WinModel.prototype.setTopHeight1 = function (h) {
        this.m_topHeight1 = h;
    };
    CEyelen4WinModel.prototype.getTopHeight1 = function () {
        return this.m_topHeight1;
    };
    CEyelen4WinModel.prototype.setTopHeight2 = function (h) {
        this.m_topHeight2 = h;
    };
    CEyelen4WinModel.prototype.getTopHeight2 = function () {
        return this.m_topHeight2;
    };
    CEyelen4WinModel.prototype.showTop = function () {
        this.m_showTop = true;
    };
    CEyelen4WinModel.prototype.hideTop = function () {
        this.m_showTop = false;
    };
    CEyelen4WinModel.prototype.getTopHeight = function () {
        if (this.m_showTop) {
            return this.m_topHeight2;
        }
        else {
            return this.m_topHeight1;
        }
    };
    CEyelen4WinModel.prototype.getMidY = function () {
        return this.getTopY() + this.m_topHeight1;
    };
    /*
        获取中部区域的高度。需要通过计算。部分被顶区遮挡的区域也属于中区范围。
    */
    CEyelen4WinModel.prototype.getMidHeight = function () {
        return this.getWinHeight() - this.getTopSpaceHeight() - this.getTopHeight1() - this.getBottomHeight();
    };
    /*
        获取中部可见区域的纵坐标。需要通过计算。
    */
    CEyelen4WinModel.prototype.getMidVisibleY = function () {
        return this.getTopY() + this.getTopHeight();
    };
    CEyelen4WinModel.prototype.getMidVisibleHeight = function () {
        return this.getWinHeight() - this.getTopSpaceHeight() - this.getTopHeight() - this.getBottomHeight();
    };
    CEyelen4WinModel.prototype.getBottomY = function () {
        return this.m_winHeight - this.getBottomHeight();
    };
    CEyelen4WinModel.prototype.setBottomHeight = function (h) {
        this.m_bottomHeight = h;
    };
    CEyelen4WinModel.prototype.getBottomHeight = function () {
        return this.m_bottomHeight;
    };
    CEyelen4WinModel.prototype.setWinWidth = function (w) {
        this.m_winWidth = w;
    };
    CEyelen4WinModel.prototype.getWinWidth = function () {
        return this.m_winWidth;
    };
    CEyelen4WinModel.prototype.setWinHeight = function (h) {
        this.m_winHeight = h;
    };
    CEyelen4WinModel.prototype.getWinHeight = function () {
        return this.m_winHeight;
    };
    CEyelen4WinModel.prototype.rearrange = function () {
    };
    return CEyelen4WinModel;
}());
window["CEyelen4WinModel"] = CEyelen4WinModel;
__reflect(CEyelen4WinModel.prototype,"CEyelen4WinModel",["IEyelen4WinModel"]); 


/***/ }),

/***/ "./src/components/winModels/Eyelen/IEyelen4WinModel.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/winModels/common/ITMBWinModel.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/winModels/common/IWinModel.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/inc/funcs/common/funcs_eint2.ts":
/***/ (function(module, exports) {

/*
 *
 * 函数杂烩。（依赖于 egret）
 *
 */
var g2_sndObjs = new Array();
window["g2_sndObjs"] = g2_sndObjs;
var g2_curSndTag = 0;
window["g2_curSndTag"] = g2_curSndTag;
var g2_sndChls = Array();
window["g2_sndChls"] = g2_sndChls;
function playBtnSnd_default() {
    g2_sndObjs[g2_curSndTag] = RES.getRes("buttonSnd_mp3");
    g2_sndChls[g2_curSndTag] = g2_sndObjs[g2_curSndTag].play(0, 1);
    g2_curSndTag = (g2_curSndTag + 1) % 2;
}
window["playBtnSnd_default"] = playBtnSnd_default;
function playBtnSnd_iOS() {
    if (null != g2_sndChls[0]) {
        g2_sndChls[0].stop();
    }
    g2_sndObjs[g2_curSndTag] = RES.getRes("buttonSnd_mp3");
    g2_sndChls[0] = g2_sndObjs[g2_curSndTag].play(0, 1);
}
window["playBtnSnd_iOS"] = playBtnSnd_iOS;
function playBtnSnd() {
    if (CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_IOS) {
        playBtnSnd_iOS();
    }
    else {
        playBtnSnd_default();
    }
}
window["playBtnSnd"] = playBtnSnd;


/***/ }),

/***/ "./src/inc/funcs/eyelen/funcs_Eyelen3E.ts":
/***/ (function(module, exports) {

/*
 * 函数杂烩（尺眼通3加强版专用函数）。
 */
function getImgResNameByPicTag(picTag) {
    var tmpResName;
    if (picTag < 10) {
        tmpResName = "img_00" + picTag;
    }
    else if (picTag < 100) {
        tmpResName = "img_0" + picTag;
    }
    else {
        tmpResName = "img_" + picTag;
    }
    return tmpResName;
}
window["getImgResNameByPicTag"] = getImgResNameByPicTag;
function getHTTPSImgURLByPicTag(picTag) {
    var ret, strTag;
    ret = "https://www.gdeint.cn/wechatAppData/eyelen/eyelen3E/pics/getImgCrossDomain.php?tag=";
    if (picTag < 10) {
        strTag = "00" + picTag;
    }
    else if (picTag < 100) {
        strTag = "0" + picTag;
    }
    else {
        strTag = "" + picTag;
    }
    ret += strTag;
    return ret;
}
window["getHTTPSImgURLByPicTag"] = getHTTPSImgURLByPicTag;
function getImgResNameByFileName(fileName) {
    return fileName.substr(0, 7);
}
window["getImgResNameByFileName"] = getImgResNameByFileName;


/***/ }),

/***/ "./src/inc/funcs/eyelen/funcs_Eyelen3E_2.ts":
/***/ (function(module, exports) {

/*
 * 函数杂烩（尺眼通3加强版专用函数）。
 */
function getCurScene() {
    switch (CGlobals.g_level) {
        case 0:
            return null;
        case 1:
            //            return g_praEasyScene;
            return null;
        //            break;
        case 2:
            return null;
        //            break;
        case 3:
            return CGlobals.g_praDifficultScene;
        //            break;
    }
    return CGlobals.g_praDifficultScene;
}
window["getCurScene"] = getCurScene;


/***/ }),

/***/ "./src/inc/structs/common/withEgret/CHTTPSResStru.ts":
/***/ (function(module, exports) {

var CHTTPSResStru = /** @class */ (function () {
    function CHTTPSResStru() {
        this.m_isInCache = true;
        this.m_onPreloadCmplFunc = null;
        this.m_onPreloadCmplThisObj = null;
    }
    CHTTPSResStru.prototype.setUrl = function (url) {
        this.m_url = url;
    };
    CHTTPSResStru.prototype.getUrl = function () {
        return this.m_url;
    };
    CHTTPSResStru.prototype.setResType = function (t) {
        this.m_resType = t;
    };
    CHTTPSResStru.prototype.getResType = function () {
        return this.m_resType;
    };
    CHTTPSResStru.prototype.setOnPreloadCmpl = function (opc, thisObj) {
        // function opc(obj:CHTTPSResStru):void
        this.m_onPreloadCmplFunc = opc;
        this.m_onPreloadCmplThisObj = thisObj;
    };
    CHTTPSResStru.prototype.preload = function () {
        this.m_isInCache = false;
        RES.getResByUrl(this.m_url, this.onResDownloaded, this, this.m_resType);
    };
    CHTTPSResStru.prototype.onResDownloaded = function (event) {
        this.m_resCache = event;
        if (RES.ResourceItem.TYPE_JSON == this.m_resType) {
            console.log(event);
        }
        this.m_isInCache = true; //设置标志表明已经加载完成。
        this.m_onPreloadCmplFunc.apply(this.m_onPreloadCmplThisObj, [this]);
    };
    return CHTTPSResStru;
}());
window["CHTTPSResStru"] = CHTTPSResStru;
__reflect(CHTTPSResStru.prototype,"CHTTPSResStru",[]); 


/***/ }),

/***/ "./src/inc/structs/eyelen/CLen.ts":
/***/ (function(module, exports) {

/*
 * 长度结构体。
 */
var CLen = /** @class */ (function () {
    function CLen() {
    }
    /*
        单元测试需要from方法。请勿删除。
    */
    CLen.from = function (length, isHor, position, imgPath, imgResName, className) {
        if (imgPath === void 0) { imgPath = ""; }
        if (imgResName === void 0) { imgResName = ""; }
        if (className === void 0) { className = ""; }
        var ret = new CLen();
        ret.m_length = length;
        ret.m_isHor = isHor;
        ret.m_x = position[0];
        ret.m_y = position[1];
        ret.m_imgPath = imgPath;
        ret.m2_imgResName = imgResName;
        ret.m_className = className;
        return ret;
    };
    CLen.fromJsonStr = function (str) {
        var ret = null;
        return ret;
    };
    CLen.prototype.toJSONStr = function () {
        var ret = "";
        ret = JSON.stringify(this);
        return ret;
    };
    return CLen;
}());
window["CLen"] = CLen;
__reflect(CLen.prototype,"CLen",[]); 
;


/***/ }),

/***/ "./src/inc/structs/eyelen/CLenPtsRects.ts":
/***/ (function(module, exports) {

var CLenPtsRects = /** @class */ (function () {
    function CLenPtsRects() {
        this.m_lenEdge1DispRect = new gdeint.CRect();
        this.m_lenQuestionerDispPt = new gdeint.CPoint();
        this.m_lenQuestionerFontSize = -1;
        this.m_lenEdge2DispRect = new gdeint.CRect();
    }
    return CLenPtsRects;
}());
window["CLenPtsRects"] = CLenPtsRects;
__reflect(CLenPtsRects.prototype,"CLenPtsRects",[]); 


/***/ })

/******/ });
/**
 *
 * 数字点阵转换器。用于把数字转换成点阵。程序中把得分以三行 旗子/点/叉 方式输出就要用到本转换器。
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CScoreFlagRect = (function () {
    function CScoreFlagRect() {
        this.m_value1 = 0;
        this.m_value2 = 0;
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
        if (endVal >= startVal) {
            if (Math.floor(startVal / 10) == Math.floor(endVal / 10)) {
                for (j = startVal; j <= endVal; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 1;
                }
            }
            else {
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
        if (endVal >= startVal) {
            if (Math.floor(startVal / 10) == Math.floor(endVal / 10)) {
                for (j = startVal; j <= endVal; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 0;
                }
            }
            else {
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
        if (endVal >= startVal) {
            if (Math.floor(startVal / 10) == Math.floor(endVal / 10)) {
                for (j = startVal; j <= endVal; ++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 2;
                }
            }
            else {
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
__reflect(CScoreFlagRect.prototype, "CScoreFlagRect", ["IScoreFlagRect"]);

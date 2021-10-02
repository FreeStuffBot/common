"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = require("../themes/1");
const _2_1 = require("../themes/2");
const _3_1 = require("../themes/3");
const _4_1 = require("../themes/4");
const _5_1 = require("../themes/5");
const _6_1 = require("../themes/6");
const _7_1 = require("../themes/7");
const _8_1 = require("../themes/8");
const _9_1 = require("../themes/9");
const _10_1 = require("../themes/10");
class Themes {
    //
    static build(content, data, settings) {
        return data.theme.builder.build(content, data, settings);
    }
}
exports.default = Themes;
Themes.builders = [
    new _1_1.default(),
    new _2_1.default(),
    new _3_1.default(),
    new _4_1.default(),
    new _5_1.default(),
    new _6_1.default(),
    new _7_1.default(),
    new _8_1.default(),
    new _9_1.default(),
    new _10_1.default()
];
//# sourceMappingURL=themes.js.map
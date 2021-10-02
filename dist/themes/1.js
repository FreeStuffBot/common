"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basetheme_1 = require("./basetheme");
class ThemeOne {
    build(games, data, settings) {
        return basetheme_1.default.build(games, data, {
            ...settings,
            themeImages: true,
            themeExtraInfo: false
        });
    }
}
exports.default = ThemeOne;
//# sourceMappingURL=1.js.map
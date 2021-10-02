"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basetheme_1 = require("./basetheme");
class ThemeFour {
    build(games, data, settings) {
        return basetheme_1.default.build(games, data, {
            ...settings,
            themeImages: false,
            themeExtraInfo: true
        });
    }
}
exports.default = ThemeFour;
//# sourceMappingURL=4.js.map
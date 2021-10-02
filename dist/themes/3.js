"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basetheme_1 = require("./basetheme");
class ThemeThree {
    build(games, data, settings) {
        return basetheme_1.default.build(games, data, {
            ...settings,
            themeImages: true,
            themeExtraInfo: true
        });
    }
}
exports.default = ThemeThree;
//# sourceMappingURL=3.js.map
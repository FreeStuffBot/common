"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basetheme_1 = require("./basetheme");
class ThemeTwo {
    build(games, data, settings) {
        return basetheme_1.default.build(games, data, {
            ...settings,
            themeImages: false,
            themeExtraInfo: false
        });
    }
}
exports.default = ThemeTwo;
//# sourceMappingURL=2.js.map
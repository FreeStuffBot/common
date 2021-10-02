"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../const");
class ThemeFive {
    build(games, data, settings) {
        const content = data.role ? `<@${data.role}>` : '';
        const embeds = games.map(game => ({
            author: {
                name: '=announcement_header'
            },
            title: game.title,
            url: game.urls.default,
            footer: {
                text: settings.test
                    ? '=announcement_footer_test'
                    : '=announcement_footer'
            },
            color: const_1.default.embedDefaultColor
        }));
        const _context = {
            website: const_1.default.links.websiteClean
        };
        return { content, embeds, _context };
    }
}
exports.default = ThemeFive;
//# sourceMappingURL=5.js.map
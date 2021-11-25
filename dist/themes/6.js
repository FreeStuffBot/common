"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../const");
const themeutils_1 = require("./themeutils");
class ThemeSix {
    build(games, data, settings) {
        const content = themeutils_1.roleIdToMention(data.role);
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
            image: {
                url: game.thumbnail.full
            },
            color: const_1.default.embedDefaultColor,
            thumbnail: {
                url: const_1.default.storeIcons[game.store] + '&size=32',
                width: 32,
                height: 32
            }
        }));
        return { content, embeds };
    }
}
exports.default = ThemeSix;
//# sourceMappingURL=6.js.map
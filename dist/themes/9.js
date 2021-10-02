"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localisation_1 = require("../lib/localisation");
class ThemeNine {
    build(games, data, _settings) {
        const mention = data.role ? `<@${data.role}> ` : '';
        const links = games.map(game => localisation_1.default.text(data, '=announcement_theme9', {
            name: (game.title.startsWith('=') ? localisation_1.default.text(data, game.title) : game.title),
            url: game.urls.default
        }));
        const content = links.length > 1
            ? `${mention}\n${links.join('\n\n')}`
            : mention + links;
        return { content };
    }
}
exports.default = ThemeNine;
//# sourceMappingURL=9.js.map
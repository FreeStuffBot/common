"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThemeSeven {
    build(games, data, _settings) {
        const mention = data.role ? `<@${data.role}> ` : '';
        const links = games.map(game => game.urls.default);
        const content = links.length > 1
            ? `${mention}\n${links.join('\n')}`
            : mention + links;
        return { content };
    }
}
exports.default = ThemeSeven;
//# sourceMappingURL=7.js.map
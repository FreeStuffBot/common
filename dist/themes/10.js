"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class ThemeTen {
    build(games, data, settings) {
        const content = data.role ? `<@${data.role}>` : '';
        const embeds = games.map(game => this.buildEmbed(game, data, settings.test));
        return { content, embeds, _context: __1.BaseTheme.defaultStaticContext };
    }
    buildEmbed(game, data, test) {
        const button = game.urls.client
            ? game.store === 'steam'
                ? `=open_in_browser: [https://s.team/a/${game.urls.org.split('/app/')[1].split('/')[0]}](${game.urls.browser})\n=open_in_steam_client: ${game.urls.client}`
                : `=open_in_browser: [${game.urls.org}](${game.urls.browser})\n=open_in_epic_games_client: <${game.urls.client}>`
            : `[=open_in_browser](${game.urls.default})`;
        const steamcontent = game.store === 'steam'
            ? [
                `Subids: ${game.store_meta.steam_subids}`,
                '',
                `addlicense asf ${game.store_meta.steam_subids.split(' ').map(id => `s/${id}`).join(', ')}`
            ]
            : [];
        const lines = [
            '```yaml',
            `  Name: ${game.title}`,
            ` Store: ${__1.Localisation.text(data, '=platform_' + game.store)}`,
            ` Price: $${game.org_price.usd} | €${game.org_price.euro}`,
            ` Until: ${game.until?.toLocaleDateString('en-GB') ?? 'unknown'}`,
            `  Tags: ${game.tags?.slice(0, 3).join(', ') ?? ''}`,
            `Rating: ${~~(game.rating * 100)}% positive`,
            ...steamcontent,
            '```',
            button
        ];
        return {
            author: {
                name: '=announcement_header'
            },
            description: lines.join('\n'),
            footer: {
                text: test
                    ? '=announcement_footer_test'
                    : '=announcement_footer'
            }
        };
    }
}
exports.default = ThemeTen;
//# sourceMappingURL=10.js.map
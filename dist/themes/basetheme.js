"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typings_1 = require("@freestuffbot/typings");
const const_1 = require("../const");
const localisation_1 = require("../lib/localisation");
const themeutils_1 = require("./themeutils");
class BaseTheme {
    //
    static build(games, data, settings) {
        const content = themeutils_1.roleIdToMention(data.role);
        const embeds = games.map(game => this.buildEmbed(game, data, settings));
        if (settings.donationNotice) {
            embeds.push({
                description: localisation_1.default.text(data, '=donation_notice', { url: const_1.default.links.donate }),
                color: const_1.default.embedDefaultColor
            });
        }
        return { content, embeds, _context: this.defaultStaticContext };
    }
    //
    static buildEmbed(game, data, settings) {
        const priceString = localisation_1.default.renderPriceTag(data, game);
        const until = BaseTheme.generateUntil(game, data);
        const button = BaseTheme.generateButton(game, data);
        const showDescription = game.description && settings.themeExtraInfo;
        const showRating = game.rating && settings.themeExtraInfo;
        const showStore = !until || !showRating || !settings.themeImages;
        const divider = settings.themeExtraInfo ? ' ᲼ ᲼ ' : ' • ';
        const title = game.title;
        const btnText = button[0] === 'text' ? button[1] : undefined;
        const fields = button[0] === 'fields' ? button[1] : undefined;
        const description = BaseTheme.generateDescription(game, data, until, priceString, showDescription, showRating, showStore, divider, btnText);
        const image = BaseTheme.generateImageObject(game, data, settings);
        const thumbnail = BaseTheme.generateThumbnailObject(game, data, settings);
        const footer = BaseTheme.generateFooter(game, data, settings);
        return {
            title,
            description,
            image,
            footer,
            fields,
            color: const_1.default.embedDefaultColor,
            thumbnail
        };
    }
    //
    static generateUntil(game, data) {
        if (!game.until)
            return '';
        return localisation_1.default.text(data, '=announcement_free_until_date', {
            date: `<t:${game.until.getTime() / 1000}:d>`
        });
    }
    static generateButton(game, data) {
        if (!game.urls.client) {
            return [
                'text',
                `**[${localisation_1.default.text(data, '=announcement_button_text')}](${game.urls.default})**`
            ];
        }
        if (game.store === 'steam') {
            return [
                'fields',
                [
                    {
                        name: '=open_in_browser',
                        value: `**[https://s.team/a/${game.urls.org.split('/app/')[1].split('/')[0]}](${game.urls.browser})**`,
                        inline: true
                    },
                    {
                        name: '=open_in_steam_client',
                        value: `**${game.urls.client}**`,
                        inline: true
                    }
                ]
            ];
        }
        if (game.store === 'epic') {
            return [
                'fields',
                [
                    {
                        name: '=open_in_browser',
                        value: `**[${game.urls.org.replace('www.', '').replace('/en-US', '')}](${game.urls.browser})**`,
                        inline: true
                    },
                    {
                        name: '=open_in_epic_games_client',
                        value: `**<${game.urls.client}>**`,
                        inline: true
                    }
                ]
            ];
        }
        return [
            'text',
            `**[${localisation_1.default.text(data, '=announcement_button_text')}](${game.urls.default})**`
        ];
    }
    static generateImageObject(game, _data, settings) {
        if (!settings.themeImages)
            return undefined;
        return {
            url: settings.themeExtraInfo
                ? game.thumbnail.full
                : game.thumbnail.blank
        };
    }
    static generateThumbnailObject(game, _data, settings) {
        if (!settings.themeImages)
            return undefined;
        return {
            url: (game.flags & typings_1.GameFlag.THIRDPARTY)
                ? const_1.default.storeIconsExt[game.store]
                : const_1.default.storeIcons[game.store],
            width: 128,
            height: 128
        };
    }
    static generateDescription(game, data, until, priceString, showDescription, showRating, showStore, divider, button) {
        return ''
            + (showDescription ? `> ${game.description.startsWith('=') ? localisation_1.default.text(data, game.description) : game.description}\n\n` : '')
            + `~~${priceString}~~ **${localisation_1.default.text(data, '=announcement_pricetag_free')}** ${until}`
            + (showRating ? `${divider}${Math.round(game.rating * 20) / 2}/10 ★` : '')
            + (showStore ? `${divider}${localisation_1.default.getLine(data, 'platform_' + game.store)}` : '')
            + (button ? `\n\n${button}` : `\n** **${const_1.default.invisibleCharacter}`);
    }
    static generateFooter(_game, _data, settings) {
        return {
            text: settings.test
                ? '=announcement_footer_test'
                : '=announcement_footer'
        };
    }
}
exports.default = BaseTheme;
BaseTheme.defaultStaticContext = {
    website: const_1.default.links.websiteClean
};
//# sourceMappingURL=basetheme.js.map
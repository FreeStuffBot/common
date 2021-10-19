"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = require("./themes/1");
const _2_1 = require("./themes/2");
const _3_1 = require("./themes/3");
const _4_1 = require("./themes/4");
const _5_1 = require("./themes/5");
const _6_1 = require("./themes/6");
const _7_1 = require("./themes/7");
const _8_1 = require("./themes/8");
const _9_1 = require("./themes/9");
const _10_1 = require("./themes/10");
const util_1 = require("./lib/util");
const localisation_1 = require("./lib/localisation");
class Const {
}
exports.default = Const;
Const.links = {
    website: 'https://freestuffbot.xyz/',
    websiteClean: 'freestuffbot.xyz',
    botInvite: 'https://discord.com/oauth2/authorize?redirect_uri=https%3A%2F%2Ffreestuffbot.xyz%2Fcallback&client_id=672822334641537041&permissions=445504&scope=bot%20applications.commands&response_type=code',
    supportInvite: 'https://discord.gg/WrnKKF8',
    topgg: 'https://top.gg/bot/672822334641537041/vote',
    dbl: 'https://discord.ly/freestuff',
    dlabs: 'https://bots.discordlabs.org/bot/672822334641537041',
    team: 'https://freestuffbot.xyz/team',
    privacy: 'https://freestuffbot.xyz/privacy',
    terms: 'https://freestuffbot.xyz/terms',
    testgame: 'https://freestuffbot.xyz/testgame',
    guide: 'https://freestuffbot.xyz/guide',
    themes: 'https://freestuffbot.xyz/themes',
    donate: 'https://freestuffbot.xyz/donate'
};
Const.embedDefaultColor = 0x2F3136;
Const.invisibleCharacter = '﻿';
Const.placeholderThumbnail = 'https://media.discordapp.net/attachments/672907465670787083/830794212894572574/thumbnail_placeholder.png';
Const.brandIcons = {
    graySquare: 'https://cdn.discordapp.com/attachments/672907465670787083/870424590269181992/icon_trans.png',
    regularSquare: 'https://cdn.discordapp.com/attachments/672907465670787083/870424608623448114/icon.png',
    regularRound: 'https://media.discordapp.net/attachments/672907465670787083/890319438933524521/icon_round.png'
};
Const.storeIcons = {
    steam: 'https://media.discordapp.net/attachments/672907465670787083/820258285566820402/steam.png',
    epic: 'https://cdn.discordapp.com/attachments/672907465670787083/820258283293638676/epic.png',
    humble: 'https://cdn.discordapp.com/attachments/672907465670787083/820258291862601728/humble.png',
    gog: 'https://cdn.discordapp.com/attachments/672907465670787083/820258294735962152/gog.png',
    origin: 'https://cdn.discordapp.com/attachments/672907465670787083/820258290063769600/origin.png',
    uplay: 'https://cdn.discordapp.com/attachments/672907465670787083/820258286816854046/ubi.png',
    twitch: 'https://cdn.discordapp.com/attachments/672907465670787083/820258287337472010/twitch.png',
    itch: 'https://cdn.discordapp.com/attachments/672907465670787083/820258293410299924/itch.png',
    discord: 'https://cdn.discordapp.com/attachments/672907465670787083/820258296149704714/discord.png',
    apple: 'https://cdn.discordapp.com/emojis/700097690653949952.png?v=1',
    google: 'https://cdn.discordapp.com/emojis/700097689194594305.png?v=1',
    switch: 'https://cdn.discordapp.com/attachments/672907465670787083/820258288938647592/switch.png',
    ps: '',
    xbox: '',
    other: ''
};
Const.storeIconsExt = {
    ...Const.storeIcons,
    steam: 'https://media.discordapp.net/attachments/672907465670787083/833646821611798538/steam_ext.png',
    epic: 'https://media.discordapp.net/attachments/672907465670787083/833646813172465734/epic_ext.png',
    humble: 'https://media.discordapp.net/attachments/672907465670787083/833652544252674068/humble_ext.png',
    gog: 'https://media.discordapp.net/attachments/672907465670787083/833652542113185823/gog_ext.png',
    origin: 'https://media.discordapp.net/attachments/672907465670787083/833652533431500850/origin_ext.png',
    uplay: 'https://media.discordapp.net/attachments/672907465670787083/833652539286093834/ubi_ext.png',
    twitch: 'https://media.discordapp.net/attachments/672907465670787083/833652537063768104/twitch_ext.png',
    itch: 'https://media.discordapp.net/attachments/672907465670787083/833652545867087872/itch_ext.png',
    discord: 'https://media.discordapp.net/attachments/672907465670787083/833652540641247262/discord_ext.png',
    switch: 'https://media.discordapp.net/attachments/672907465670787083/833652535356817418/switch_ext.png'
};
Const.themes = [
    {
        id: 0,
        name: '=theme_one_name',
        description: '=theme_one_desc',
        emoji: '1️⃣',
        builder: new _1_1.default(),
        toggleCurrencies: true,
        usesEmbeds: true
    },
    {
        id: 1,
        name: '=theme_two_name',
        description: '=theme_two_desc',
        emoji: '2️⃣',
        builder: new _2_1.default(),
        toggleCurrencies: true,
        usesEmbeds: true
    },
    {
        id: 2,
        name: '=theme_three_name',
        description: '=theme_three_desc',
        emoji: '3️⃣',
        builder: new _3_1.default(),
        toggleCurrencies: true,
        usesEmbeds: true
    },
    {
        id: 3,
        name: '=theme_four_name',
        description: '=theme_four_desc',
        emoji: '4️⃣',
        builder: new _4_1.default(),
        toggleCurrencies: true,
        usesEmbeds: true
    },
    {
        id: 4,
        name: '=theme_five_name',
        description: '=theme_five_desc',
        emoji: '5️⃣',
        builder: new _5_1.default(),
        toggleCurrencies: false,
        usesEmbeds: true
    },
    {
        id: 5,
        name: '=theme_six_name',
        description: '=theme_six_desc',
        emoji: '6️⃣',
        builder: new _6_1.default(),
        toggleCurrencies: false,
        usesEmbeds: true
    },
    {
        id: 6,
        name: '=theme_seven_name',
        description: '=theme_seven_desc',
        emoji: '7️⃣',
        builder: new _7_1.default(),
        toggleCurrencies: false,
        usesEmbeds: false
    },
    {
        id: 7,
        name: '=theme_eight_name',
        description: '=theme_eight_desc',
        emoji: '8️⃣',
        builder: new _8_1.default(),
        toggleCurrencies: false,
        usesEmbeds: false
    },
    {
        id: 8,
        name: '=theme_nine_name',
        description: '=theme_nine_desc',
        emoji: '9️⃣',
        builder: new _9_1.default(),
        toggleCurrencies: false,
        usesEmbeds: false
    },
    {
        id: 9,
        name: '=theme_ten_name',
        description: '=theme_ten_desc',
        emoji: '🔟',
        builder: new _10_1.default(),
        toggleCurrencies: false,
        usesEmbeds: false
    }
];
Const.defaultTheme = Const.themes[0];
Const.currencies = [
    {
        id: 0,
        code: 'euro',
        name: '=currency_euro',
        symbol: '€',
        calculated: false
    },
    {
        id: 1,
        code: 'usd',
        name: '=currency_usd',
        symbol: '$',
        calculated: false
    },
    {
        id: 2,
        code: 'gbp',
        name: '=currency_gbp',
        symbol: '£',
        calculated: true
    },
    {
        id: 3,
        code: 'brl',
        name: '=currency_brl',
        symbol: 'R$',
        calculated: true
    },
    {
        id: 4,
        code: 'bgn',
        name: '=currency_bgn',
        symbol: 'Лв',
        calculated: true
    },
    {
        id: 5,
        code: 'pln',
        name: '=currency_pln',
        symbol: 'zł',
        calculated: true
    },
    {
        id: 6,
        code: 'huf',
        name: '=currency_huf',
        symbol: 'Ft',
        calculated: true
    },
    {
        id: 7,
        code: 'btc',
        name: '=currency_btc',
        symbol: '₿',
        calculated: true
    }
];
Const.defaultCurrency = Const.currencies[0];
Const.priceClasses = [
    {
        id: 0,
        from: 0,
        name: '=price_class_a'
    },
    {
        id: 1,
        from: 1,
        name: '=price_class_b'
    },
    {
        id: 2,
        from: 3,
        name: '=price_class_c'
    },
    {
        id: 3,
        from: 10,
        name: '=price_class_d'
    }
];
Const.defaultPriceClass = Const.priceClasses[2];
Const.platforms = [
    {
        id: 'other',
        bit: 1 << 0,
        name: '=platform_other',
        description: 'Less popular platforms or publisher websites',
        moderated: true,
        default: false
    },
    {
        id: 'steam',
        bit: 1 << 1,
        name: '=platform_steam',
        description: 'https://store.steampowered.com/',
        moderated: true,
        default: true
    },
    {
        id: 'epic',
        bit: 1 << 2,
        name: '=platform_epic',
        description: 'https://www.epicgames.com/store/',
        moderated: true,
        default: true
    },
    {
        id: 'humble',
        bit: 1 << 3,
        name: '=platform_humble',
        description: 'https://www.humblebundle.com/',
        moderated: true,
        default: true
    },
    {
        id: 'gog',
        bit: 1 << 4,
        name: '=platform_gog',
        description: 'https://www.gog.com/',
        moderated: true,
        default: true
    },
    {
        id: 'origin',
        bit: 1 << 5,
        name: '=platform_origin',
        description: 'https://www.origin.com/store',
        moderated: true,
        default: true
    },
    {
        id: 'uplay',
        bit: 1 << 6,
        name: '=platform_uplay',
        description: 'https://store.ubi.com/',
        moderated: true,
        default: true
    },
    {
        id: 'itch',
        bit: 1 << 7,
        name: '=platform_itch',
        description: 'https://itch.io/',
        moderated: false,
        default: true
    }
];
Const.defaultPlatforms = Const.platforms
    .filter(p => p.default)
    .reduce((val, p) => (val ^= p.bit), 0);
Const.testAnnouncementContent = {
    id: 0,
    title: '=cmd_test_announcement_header',
    org_price: {
        euro: 19.99,
        usd: 19.99,
        gbp: 19.99,
        brl: 19.99,
        bgn: 19.99,
        pln: 19.99,
        huf: 19.99,
        btc: 19.99
    },
    price: {
        euro: 0,
        usd: 0,
        gbp: 0,
        brl: 0,
        bgn: 0,
        pln: 0,
        huf: 0,
        btc: 0
    },
    store: 'steam',
    thumbnail: {
        blank: Const.placeholderThumbnail,
        full: Const.placeholderThumbnail,
        org: Const.placeholderThumbnail,
        tags: Const.placeholderThumbnail
    },
    kind: 'game',
    description: '=cmd_test_announcement_description',
    tags: [],
    rating: 0.8,
    urls: {
        org: Const.links.testgame,
        default: Const.links.testgame,
        browser: Const.links.testgame
    },
    flags: 0,
    until: null,
    type: 'free',
    store_meta: {
        steam_subids: '12345 98760'
    }
};
Const.defaultSettingsBits = 0
    | util_1.default.modifyBits(0, 5, 4, Const.currencies[0].id)
    | util_1.default.modifyBits(0, 10, 6, localisation_1.default.languageToId('en-GB'));
Const.defaultFilterBits = 0
    | util_1.default.modifyBits(0, 2, 2, Const.defaultPriceClass.id)
    | util_1.default.modifyBits(0, 4, 8, Const.defaultPlatforms);
//# sourceMappingURL=const.js.map
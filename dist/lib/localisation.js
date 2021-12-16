"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Localisation {
    static load(languages) {
        const all = languages.sort((a, b) => a._id.startsWith('en')
            ? -1
            : b._id.startsWith('en')
                ? 1
                : 0);
        Localisation.list = [];
        Localisation.idmap = {};
        Localisation.texts = {};
        for (const lang of all) {
            for (const key in lang) {
                if (key.startsWith('_'))
                    continue;
                lang[key] = lang[key].split('\\n').join('\n');
            }
            Localisation.list.push(lang._id);
            Localisation.idmap[lang._index] = lang._id;
            Localisation.texts[lang._id] = lang;
        }
    }
    static getLine(d, key) {
        return Localisation.getRaw(d?.language ?? Localisation.list[0], key, true);
    }
    static getRaw(language, key, fallback = true) {
        if (!Localisation.list.length)
            return key;
        if (!fallback)
            return Localisation.fetch(language, key) || key;
        if (!language || !Localisation.texts[language])
            return Localisation.fetch(Localisation.idmap[0], key) || key;
        return Localisation.fetch(language, key) || Localisation.fetch(Localisation.idmap[0], key) || key;
    }
    static fetch(language, key) {
        return Localisation.texts[language]?.[key];
    }
    static existsLanguageById(id) {
        return !!Localisation.idmap[id + ''];
    }
    static languageById(id) {
        return Localisation.idmap[id + ''] || Localisation.idmap[0];
    }
    static languageToId(lang) {
        for (const key in Localisation.idmap) {
            if (Localisation.idmap[key] === lang)
                return parseInt(key, 10);
        }
        return -1;
    }
    static languageByName(query) {
        query = query.toLowerCase();
        for (const lang of Localisation.list) {
            if (Localisation.fetch(lang, 'lang_name').toLowerCase() === query)
                return lang;
            if (Localisation.fetch(lang, 'lang_name_en').toLowerCase() === query)
                return lang;
        }
        for (const lang of Localisation.list)
            if (lang.startsWith(query))
                return lang;
        for (const lang of Localisation.list) {
            if (Localisation.fetch(lang, 'lang_name').toLowerCase().includes(query))
                return lang;
            if (Localisation.fetch(lang, 'lang_name_en').toLowerCase().includes(query))
                return lang;
        }
        return '';
    }
    static getAllLanguages() {
        return Localisation.list.map(lang => ({
            id: lang,
            name: Localisation.fetch(lang, 'lang_name'),
            nameEn: Localisation.fetch(lang, 'lang_name_en'),
            flag: Localisation.fetch(lang, 'lang_flag_emoji'),
            ranking: parseInt(Localisation.fetch(lang, '_ranking') + '', 10)
        }));
    }
    /**
     * Recursively traverses the given object until maxDepth, translating every string value found
     */
    static translateObject(object, guildData, context, maxDepth) {
        if (maxDepth <= 0)
            return null;
        for (const key in object) {
            if (key === '_context')
                continue;
            if (typeof object[key] === 'object')
                Localisation.translateObject(object[key], guildData, context, maxDepth - 1);
            else if (typeof object[key] === 'string')
                object[key] = Localisation.text(guildData, object[key], context);
        }
        return object;
    }
    /**
     * Finds any language keys within the given text and translates them
     * @param d Guild Data to base the language on
     * @param text The text to process
     * @param context The translation context with variables
     * @returns The processed text
     */
    static text(d, text, context) {
        let out = (text.startsWith('=')
            ? Localisation.getRaw(d?.language, text.substr(1), true)
            : text);
        if (context) {
            for (const key in context)
                out = out.split(`{${key}}`).join(context[key]);
        }
        return out;
    }
    /**
     * Renders a price tag properly
     */
    static renderPriceTag(data, game) {
        const price = game.org_price[data.currency.code] || game.org_price.euro;
        return Localisation.getLine(data, 'currency_sign_position') === 'after'
            ? `${price}${data.currency.symbol}`
            : `${data.currency.symbol}${price}`;
    }
}
exports.default = Localisation;
Localisation.list = [];
Localisation.idmap = {};
Localisation.texts = {};
//# sourceMappingURL=localisation.js.map
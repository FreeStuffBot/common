import { GameInfo, GuildData } from '@freestuffbot/typings';
import { GenericMongodbObject } from '../types';
export default class Localisation {
    private static list;
    private static idmap;
    private static texts;
    static load(languages: GenericMongodbObject<string>[]): void;
    static getLine(d: GuildData, key: string): string;
    static getRaw(language: string, key: string, fallback?: boolean): string;
    private static fetch;
    static existsLanguageById(id: number | string): boolean;
    static languageById(id: number | string): string;
    static languageToId(lang: string): number;
    static languageByName(query: string): string;
    static getAllLanguages(): {
        id: string;
        name: string;
        nameEn: string;
        flag: string;
        ranking: number;
    }[];
    /**
     * Recursively traverses the given object until maxDepth, translating every string value found
     */
    static translateObject<T extends Object>(object: T, guildData: GuildData | undefined, context: any, maxDepth: number): T;
    /**
     * Finds any language keys within the given text and translates them
     * @param d Guild Data to base the language on
     * @param text The text to process
     * @param context The translation context with variables
     * @returns The processed text
     */
    static text(d: GuildData, text: string, context?: {
        [varname: string]: string;
    }): string;
    /**
     * Renders a price tag properly
     */
    static renderPriceTag(data: GuildData, game: GameInfo): string;
}

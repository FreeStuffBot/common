import { GameInfo, GuildData } from "@freestuffbot/typings";
import { InteractionApplicationCommandCallbackData } from "cordo";
declare type themeSettings = {
    test?: boolean;
    donationNotice?: boolean;
    themeImages: boolean;
    themeExtraInfo: boolean;
};
declare type MessageEmbed = InteractionApplicationCommandCallbackData["embeds"][number];
export default class BaseTheme {
    static build(games: GameInfo[], data: GuildData, settings: themeSettings): InteractionApplicationCommandCallbackData;
    static buildEmbed(game: GameInfo, data: GuildData, settings: themeSettings): Partial<MessageEmbed>;
    static generateUntil(game: GameInfo, data: GuildData): string;
    static generateButton(game: GameInfo, data: GuildData): ['text', string] | ['fields', MessageEmbed["fields"][number]];
    static generateImageObject(game: GameInfo, _data: GuildData, settings: themeSettings): MessageEmbed['image'];
    static generateThumbnailObject(game: GameInfo, _data: GuildData, settings: themeSettings): MessageEmbed['thumbnail'];
    static generateDescription(game: GameInfo, data: GuildData, until: string, priceString: string, showDescription: boolean, showRating: boolean, showStore: boolean, divider: string, button: string): string;
    static generateFooter(_game: GameInfo, _data: GuildData, settings: themeSettings): {
        text: string;
    };
}
export {};

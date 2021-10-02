import { GameInfo, GuildData, ThemeBuilder } from "@freestuffbot/typings";
import { InteractionApplicationCommandCallbackData } from "cordo";
export default class ThemeTen implements ThemeBuilder {
    build(games: GameInfo[], data: GuildData, settings: {
        test?: boolean;
    }): InteractionApplicationCommandCallbackData;
    private buildEmbed;
}

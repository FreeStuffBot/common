import { GameInfo, GuildData } from "@freestuffbot/typings";
import { InteractionApplicationCommandCallbackData } from "cordo";
import { ThemeBuilder } from "../types";
export default class ThemeTen implements ThemeBuilder {
    build(games: GameInfo[], data: GuildData, settings: {
        test?: boolean;
    }): InteractionApplicationCommandCallbackData;
    private buildEmbed;
}

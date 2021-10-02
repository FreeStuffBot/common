import { GameInfo, GuildData, ThemeBuilder } from "@freestuffbot/typings";
import { InteractionApplicationCommandCallbackData } from "cordo";
export default class ThemeEight implements ThemeBuilder {
    build(games: GameInfo[], data: GuildData, _settings: {
        test?: boolean;
    }): InteractionApplicationCommandCallbackData;
}

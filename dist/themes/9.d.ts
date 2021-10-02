import { GameInfo, GuildData } from "@freestuffbot/typings";
import { InteractionApplicationCommandCallbackData } from "cordo";
import { ThemeBuilder } from "../types";
export default class ThemeNine implements ThemeBuilder {
    build(games: GameInfo[], data: GuildData, _settings: {
        test?: boolean;
    }): InteractionApplicationCommandCallbackData;
}

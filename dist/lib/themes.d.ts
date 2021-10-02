import { InteractionApplicationCommandCallbackData } from "cordo";
import { GameInfo, GuildData, ThemeBuilder } from "@freestuffbot/typings";
export default class Themes {
    static readonly builders: ThemeBuilder[];
    static build(content: GameInfo[], data: GuildData, settings: {
        test?: boolean;
        donationNotice?: boolean;
    }): InteractionApplicationCommandCallbackData;
}

import { GameInfo, GuildData, ThemeBuilder } from '@freestuffbot/typings';
import { InteractionApplicationCommandCallbackData } from 'cordo';
export default class ThemeFour implements ThemeBuilder {
    build(games: GameInfo[], data: GuildData, settings: {
        test?: boolean;
        donationNotice?: boolean;
    }): InteractionApplicationCommandCallbackData;
}

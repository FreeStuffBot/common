import { GameInfo, GuildData } from '@freestuffbot/typings';
import { InteractionApplicationCommandCallbackData } from 'cordo';
import { ThemeBuilder } from '../types';
export default class ThemeFour implements ThemeBuilder {
    build(games: GameInfo[], data: GuildData, settings: {
        test?: boolean;
        donationNotice?: boolean;
    }): InteractionApplicationCommandCallbackData;
}

import { GameInfo, GuildData } from "@freestuffbot/typings";
import { InteractionApplicationCommandCallbackData } from "cordo";
export interface ThemeBuilder {
    build(content: GameInfo[], data: GuildData, settings: {
        test?: boolean;
        donationNotice?: boolean;
    }): InteractionApplicationCommandCallbackData;
}
export declare type GenericMongodbObject<T> = {
    _id: T;
    [key: string]: string | number | boolean | Object | any[];
};

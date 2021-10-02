import { GameInfo, GuildData, ThemeBuilder } from '@freestuffbot/typings'
import { InteractionApplicationCommandCallbackData } from 'cordo'


export default class ThemeSeven implements ThemeBuilder {

  public build(games: GameInfo[], data: GuildData, _settings: { test?: boolean }): InteractionApplicationCommandCallbackData {
    const mention = data.role ? `<@${data.role}> ` : ''
    const links = games.map(game => game.urls.default)

    const content = links.length > 1
      ? `${mention}\n${links.join('\n')}`
      : mention + links

    return { content }
  }

}

import { GameInfo, GuildData, ThemeBuilder } from '@freestuffbot/typings'
import { InteractionApplicationCommandCallbackData } from 'cordo'
import Const from '../const'


export default class ThemeFive implements ThemeBuilder {

  public build(games: GameInfo[], data: GuildData, settings: { test?: boolean, donationNotice?: boolean }): InteractionApplicationCommandCallbackData {
    const content = data.role ? `<@&${data.role}>` : ''
    const embeds = games.map(game => ({
      author: {
        name: '=announcement_header'
      },
      title: game.title,
      url: game.urls.default,
      footer: {
        text: settings.test
          ? '=announcement_footer_test'
          : '=announcement_footer'
      },
      color: Const.embedDefaultColor
    }))

    const _context = {
      website: Const.links.websiteClean
    }

    return { content, embeds, _context }
  }

}

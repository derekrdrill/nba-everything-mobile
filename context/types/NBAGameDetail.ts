import { NBAGamePlayer } from './NBAGamePlayer';
import { NBAGameStatLeader } from './NBAGameStatLeader';

export type NBAGameDetail = {
  abbrName: string;
  boxScoreData: Omit<NBAGamePlayer, 'game'>[];
  boxScoreDataShort: Omit<
    NBAGamePlayer,
    | 'dreb'
    | 'fg3_pct'
    | 'fg3a'
    | 'fg3m'
    | 'fg_pct'
    | 'fga'
    | 'fgm'
    | 'fta'
    | 'ftm'
    | 'game'
    | 'oreb'
    | 'pf'
  >[];
  fullGameData: NBAGamePlayer[];
  fullName: string;
  locale: 'home' | 'away';
  score: number;
  statLeaders: NBAGameStatLeader[];
};

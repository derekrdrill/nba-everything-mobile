import { NBAPlayer } from './NBAPlayer';
import { NBATeamGameData } from './NBATeamGameData';

export type NBAGamePlayer = {
  ast: number;
  blk: number;
  dreb?: number;
  fg3_pct?: string;
  fg3a?: number;
  fg3m?: number;
  fg_pct?: string;
  fga?: number;
  fgm?: number;
  fta?: number;
  ftm?: number;
  game?: NBATeamGameData;
  min: number;
  oreb?: number;
  pf?: number;
  player: string | NBAPlayer;
  pts: number;
  reb: number;
  stl: number;
  turnover: number;
};

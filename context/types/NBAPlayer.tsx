import { NBATeam } from './NBATeam';

export type NBAPlayer = {
  _id: string;
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  first_name: string;
  ft_pct: number;
  fta: number;
  ftm: number;
  games_played: number;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  min: string;
  oreb: number;
  pf: number;
  player_id: number;
  position: string;
  pts: number;
  reb: number;
  season: number;
  stl: number;
  team: NBATeam;
  turnover: number;
  weight_pounds: number;
};

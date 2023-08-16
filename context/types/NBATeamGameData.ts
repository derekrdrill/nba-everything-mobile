import { NBATeam } from './NBATeam';

export type NBATeamGameData = {
  date: string;
  home_team: NBATeam;
  home_team_score: number;
  id: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: NBATeam;
  visitor_team_score: number;
  win: boolean;
};

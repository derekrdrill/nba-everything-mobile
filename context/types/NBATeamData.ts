import { NBATeamGameData } from './NBATeamGameData';

export type NBATeamData = {
  gamesPlayed: number;
  losses: number;
  ppg: number;
  teamGameData: NBATeamGameData[];
  wins: number;
};

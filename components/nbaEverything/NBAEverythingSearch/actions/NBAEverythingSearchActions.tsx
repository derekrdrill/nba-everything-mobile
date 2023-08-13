import axios from 'axios';

import { GlobalReducerActionEnum } from '../../../../context/GlobalReducer';
import { NBATeam } from '../../../../context/types/NBATeam';

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
const GET_ALL_TEAMS_API = process.env.EXPO_PUBLIC_GET_ALL_TEAMS_API;

export type SetSeasonParams = {
  type: GlobalReducerActionEnum.SET_NBA_SEASON_SELECTED;
  payload: { nbaSeasonSelected: string };
};

export type SetTeamParams = {
  type: GlobalReducerActionEnum.SET_NBA_TEAMS;
  payload: { nbaTeams: NBATeam[] };
};

export type SetSelectedTeamParams = {
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED;
  payload: { nbaTeamSelected: NBATeam };
};

export const getTeams = async (): Promise<NBATeam[]> => {
  const teamsOptions = {
    method: 'GET',
    url: `${BACKEND_URL}/${GET_ALL_TEAMS_API}`,
  };

  const teamsRequest = await axios.request(teamsOptions).then(async response => response);
  const teams = await teamsRequest.data;

  return teams;
};

export const setSeasonSelected = async (nbaSeasonSelected: string): Promise<SetSeasonParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_SEASON_SELECTED,
  payload: { nbaSeasonSelected: nbaSeasonSelected },
});

export const setTeams = async (): Promise<SetTeamParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_TEAMS,
  payload: { nbaTeams: await getTeams() },
});

export const setTeamSelected = async (
  nbaTeamSelected: NBATeam,
): Promise<SetSelectedTeamParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED,
  payload: { nbaTeamSelected: nbaTeamSelected },
});

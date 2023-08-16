import axios from 'axios';

import { GlobalReducerActionEnum } from '../../context/GlobalReducer';

import { NBAGameDetail, NBATeam, NBATeamData, NBATeamTotals } from '../../context/types';

import {
  SetIsNBAEverythingLoadingParams,
  SetNBASeasonParams,
  SetNBATeamParams,
  SetNBATeamSelectedParams,
  SetNBATeamSelectedDataParams,
  SetNBATeamSelectedTotalsParams,
  SetNBAGameDetailsParams,
} from './types';

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
const GET_ALL_TEAMS_API = process.env.EXPO_PUBLIC_GET_ALL_TEAMS_API;
const GET_TEAM_SELECTED_DATA = process.env.EXPO_PUBLIC_GET_TEAM_DATA_API;
const GET_TEAM_SELECTED_TOTALS = process.env.EXPO_PUBLIC_GET_TEAM_TOTALS_API;
const GET_GAME_DETAIL = process.env.EXPO_PUBLIC_GET_GAME_DETAIL_DATA_API;

///////////////////////
//     GETTERS       //
///////////////////////
export const getGameDetails = async (gameID: number | undefined): Promise<NBAGameDetail[]> => {
  const gameDetailOptions = {
    method: 'GET',
    url: `${BACKEND_URL}/${GET_GAME_DETAIL}/${gameID}`,
  };

  const gameDetailRequest = await axios.request(gameDetailOptions).then(async response => response);
  const gameDetail = await gameDetailRequest.data;

  return gameDetail;
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

export const getTeamSelectedData = async (
  teamID: number | undefined,
  season: number,
): Promise<NBATeamData> => {
  const teamSelectedDataOptions = {
    method: 'GET',
    url: `${BACKEND_URL}/${GET_TEAM_SELECTED_DATA}/${teamID}/${season}`,
  };

  const teamSelectedDataRequest = await axios
    .request(teamSelectedDataOptions)
    .then(async response => response);

  const teamSelectedData = await teamSelectedDataRequest.data;

  return teamSelectedData;
};

export const getTeamSelectedTeamTotals = async (
  teamID: number | undefined,
  season: number,
): Promise<NBATeamTotals> => {
  const teamSelectedTotalsOptions = {
    method: 'GET',
    url: `${BACKEND_URL}/${GET_TEAM_SELECTED_TOTALS}/${teamID}/${season}`,
  };

  const teamSelectedTotalsRequest = await axios
    .request(teamSelectedTotalsOptions)
    .then(async response => response);

  const teamSelectedTotals = await teamSelectedTotalsRequest.data;

  return teamSelectedTotals;
};

///////////////////////
//     SETTERS       //
///////////////////////
export const setGameDetails = async (
  gameID: number | undefined,
): Promise<SetNBAGameDetailsParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_GAME_DETAILS,
  payload: { nbaGameDetails: await getGameDetails(gameID) },
});

export const setIsNBAEverythingLoading = async (
  isNBAEverythingLoading: boolean,
): Promise<SetIsNBAEverythingLoadingParams> => ({
  type: GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_LOADING,
  payload: { isNBAEverythingLoading: isNBAEverythingLoading },
});

export const setSelectedTeamData = async (
  teamID: number | undefined,
  season: number,
): Promise<SetNBATeamSelectedDataParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED_DATA,
  payload: { nbaTeamSelectedData: await getTeamSelectedData(teamID, season) },
});

export const setSelectedTeamTotals = async (
  teamID: number | undefined,
  season: number,
): Promise<SetNBATeamSelectedTotalsParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED_TOTALS,
  payload: { nbaTeamSelectedTotals: await getTeamSelectedTeamTotals(teamID, season) },
});

export const setSeasonSelected = async (
  nbaSeasonSelected: string,
): Promise<SetNBASeasonParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_SEASON_SELECTED,
  payload: { nbaSeasonSelected: nbaSeasonSelected },
});

export const setTeams = async (): Promise<SetNBATeamParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_TEAMS,
  payload: { nbaTeams: await getTeams() },
});

export const setTeamSelected = async (
  nbaTeamSelected: NBATeam,
): Promise<SetNBATeamSelectedParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED,
  payload: { nbaTeamSelected: nbaTeamSelected },
});

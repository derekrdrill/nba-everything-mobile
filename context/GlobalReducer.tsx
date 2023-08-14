import { GlobalStateType } from './GlobalState';

export enum GlobalReducerActionEnum {
  SET_IS_NBA_EVERYTHING_LOADING = 'SET_IS_NBA_EVERYTHING_LOADING',
  SET_NBA_TEAMS = 'SET_NBA_TEAMS',
  SET_NBA_TEAM_SELECTED = 'SET_NBA_TEAM_SELECTED',
  SET_NBA_SEASON_SELECTED = 'SET_NBA_SEASON_SELECTED',
  SET_NBA_TEAM_SELECTED_DATA = 'SET_NBA_TEAM_SELECTED_DATA',
  SET_NBA_TEAM_SELECTED_TOTALS = 'SET_NBA_TEAM_SELECTED_TOTALS',
}

export type GlobalReducerAction = {
  type: GlobalReducerActionEnum;
  payload: GlobalStateType;
};

const GlobalReducer = (state: GlobalStateType, action: GlobalReducerAction) => {
  const {
    payload: {
      isNBAEverythingLoading,
      nbaSeasonSelected,
      nbaTeams,
      nbaTeamSelected,
      nbaTeamSelectedData,
      nbaTeamSelectedTotals,
    },
    type,
  } = action;

  switch (type) {
    case GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_LOADING:
      return {
        ...state,
        isNBAEverythingLoading: isNBAEverythingLoading,
      };
    case GlobalReducerActionEnum.SET_NBA_TEAMS:
      return {
        ...state,
        nbaTeams: nbaTeams,
      };
    case GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED:
      return {
        ...state,
        nbaTeamSelected: nbaTeamSelected,
      };
    case GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED_DATA:
      return {
        ...state,
        nbaTeamSelectedData: nbaTeamSelectedData,
      };
    case GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED_TOTALS:
      return {
        ...state,
        nbaTeamSelectedTotals: nbaTeamSelectedTotals,
      };
    case GlobalReducerActionEnum.SET_NBA_SEASON_SELECTED:
      return {
        ...state,
        nbaSeasonSelected: nbaSeasonSelected,
      };
    default:
      return state;
  }
};

export default GlobalReducer;

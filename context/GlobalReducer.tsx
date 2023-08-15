import { GlobalStateType } from './GlobalState';

export enum GlobalReducerActionEnum {
  SET_IS_NBA_EVERYTHING_LOADING = 'SET_IS_NBA_EVERYTHING_LOADING',
  SET_IS_NBA_EVERYTHING_RETRO = 'SET_IS_NBA_EVERYTHING_RETRO',
  SET_IS_NBA_EVERYTHING_DARK_MODE = 'SET_IS_NBA_EVERYTHING_DARK_MODE',
  SET_NBA_EVERYTHING_VIEW = 'SET_NBA_EVERYTHING_VIEW',
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
      isNBAEverythingDarkMode,
      isNBAEverythingLoading,
      isNBAEverythingRetro,
      nbaEverythingView,
      nbaSeasonSelected,
      nbaTeams,
      nbaTeamSelected,
      nbaTeamSelectedData,
      nbaTeamSelectedTotals,
    },
    type,
  } = action;

  switch (type) {
    case GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_DARK_MODE:
      return {
        ...state,
        isNBAEverythingDarkMode: isNBAEverythingDarkMode,
      };
    case GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_LOADING:
      return {
        ...state,
        isNBAEverythingLoading: isNBAEverythingLoading,
      };
    case GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_RETRO:
      return {
        ...state,
        isNBAEverythingRetro: isNBAEverythingRetro,
      };
    case GlobalReducerActionEnum.SET_NBA_EVERYTHING_VIEW:
      return {
        ...state,
        nbaEverythingView: nbaEverythingView,
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

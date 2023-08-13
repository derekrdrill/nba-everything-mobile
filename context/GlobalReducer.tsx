import { GlobalStateType } from './GlobalState';

export enum GlobalReducerActionEnum {
  SET_NBA_TEAMS = 'SET_NBA_TEAMS',
  SET_NBA_TEAM_SELECTED = 'SET_NBA_TEAM_SELECTED',
  SET_NBA_SEASON_SELECTED = 'SET_NBA_SEASON_SELECTED',
}

export type GlobalReducerAction = {
  type: GlobalReducerActionEnum;
  payload: GlobalStateType;
};

const GlobalReducer = (state: GlobalStateType, action: GlobalReducerAction) => {
  const {
    payload: { nbaSeasonSelected, nbaTeams, nbaTeamSelected },
    type,
  } = action;

  switch (type) {
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

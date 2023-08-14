import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';

export type SetNBASeasonParams = {
  type: GlobalReducerActionEnum.SET_NBA_SEASON_SELECTED;
  payload: { nbaSeasonSelected: string };
};

import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { NBAGameDetail } from '../../../context/types/NBAGameDetail';

export type SetNBAGameDetailsParams = {
  type: GlobalReducerActionEnum.SET_NBA_GAME_DETAILS;
  payload: { nbaGameDetails: NBAGameDetail[] };
};

import { GlobalReducerActionEnum } from '../../../../context/GlobalReducer';

export type SetRetroParams = {
  type: GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_RETRO;
  payload: { isNBAEverythingRetro: boolean };
};

import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';

export type SetIsNBAEverythingLoadingParams = {
  type: GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_LOADING;
  payload: { isNBAEverythingLoading: boolean };
};

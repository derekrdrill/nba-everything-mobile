import { GlobalReducerActionEnum } from '../../../../context/GlobalReducer';

export type SetDarkModeParams = {
  type: GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_DARK_MODE;
  payload: { isNBAEverythingDarkMode: boolean };
};

import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';

import { SetDarkModeParams, SetRetroParams } from './types';

export const setDarkMode = async (
  isNBAEverythingDarkMode: boolean,
): Promise<SetDarkModeParams> => ({
  type: GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_DARK_MODE,
  payload: { isNBAEverythingDarkMode: isNBAEverythingDarkMode },
});

export const setRetroMode = async (isNBAEverythingRetro: boolean): Promise<SetRetroParams> => ({
  type: GlobalReducerActionEnum.SET_IS_NBA_EVERYTHING_RETRO,
  payload: { isNBAEverythingRetro: isNBAEverythingRetro },
});

import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';

import { SetNBAEverythingViewParams } from './types';

export const setView = async (
  nbaEverythingView: 'team' | 'game' | 'player',
): Promise<SetNBAEverythingViewParams> => ({
  type: GlobalReducerActionEnum.SET_NBA_EVERYTHING_VIEW,
  payload: { nbaEverythingView: nbaEverythingView },
});

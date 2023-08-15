import { GlobalReducerActionEnum } from '../../../../context/GlobalReducer';

export type SetNBAEverythingViewParams = {
  type: GlobalReducerActionEnum.SET_NBA_EVERYTHING_VIEW;
  payload: { nbaEverythingView: 'team' | 'game' | 'player' };
};

import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { NBATeamTotals } from '../../../context/types/NBATeamTotals';

export type SetNBATeamSelectedTotalsParams = {
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED_TOTALS;
  payload: { nbaTeamSelectedTotals: NBATeamTotals };
};

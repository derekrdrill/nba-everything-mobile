import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { NBATeamData } from '../../../context/types/NBATeamData';

export type SetNBATeamSelectedDataParams = {
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED_DATA;
  payload: { nbaTeamSelectedData: NBATeamData };
};

import { GlobalReducerActionEnum } from '../../context/GlobalReducer';
import { NBATeam } from '../../context/types/NBATeam';

export type SetNBATeamSelectedParams = {
  type: GlobalReducerActionEnum.SET_NBA_TEAM_SELECTED;
  payload: { nbaTeamSelected: NBATeam };
};

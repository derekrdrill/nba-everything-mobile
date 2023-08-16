import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { NBATeam } from '../../../context/types/NBATeam';

export type SetNBATeamParams = {
  type: GlobalReducerActionEnum.SET_NBA_TEAMS;
  payload: { nbaTeams: NBATeam[] };
};

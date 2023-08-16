import { NBASeason, NBATeam, NBATeamData, NBATeamTotals } from './types';
import { NBAGameDetail } from './types/NBAGameDetail';

export type GlobalStateType = {
  isNBAEverythingDarkMode?: boolean;
  isNBAEverythingLoading?: boolean;
  isNBAEverythingRetro?: boolean;
  nbaGameDetails?: NBAGameDetail[];
  nbaEverythingView?: 'team' | 'game' | 'player';
  nbaSeasons?: NBASeason[];
  nbaSeasonSelected?: string;
  nbaTeams?: NBATeam[] | undefined;
  nbaTeamSelected?: NBATeam;
  nbaTeamSelectedData?: NBATeamData;
  nbaTeamSelectedTotals?: NBATeamTotals;
};

const GlobalState: GlobalStateType = {
  isNBAEverythingDarkMode: true,
  isNBAEverythingLoading: true,
  isNBAEverythingRetro: false,
  nbaGameDetails: undefined,
  nbaEverythingView: 'team',
  nbaTeams: [],
  nbaTeamSelected: undefined,
  nbaTeamSelectedData: undefined,
  nbaTeamSelectedTotals: undefined,
  nbaSeasons: [
    { year: 2000, display_year: '2000-2001' },
    { year: 2001, display_year: '2001-2002' },
    { year: 2002, display_year: '2002-2003' },
    { year: 2003, display_year: '2003-2004' },
    { year: 2004, display_year: '2004-2005' },
    { year: 2005, display_year: '2005-2006' },
    { year: 2006, display_year: '2006-2007' },
    { year: 2007, display_year: '2007-2008' },
    { year: 2008, display_year: '2008-2009' },
    { year: 2009, display_year: '2009-2010' },
    { year: 2010, display_year: '2010-2011' },
    { year: 2011, display_year: '2011-2012' },
    { year: 2012, display_year: '2012-2013' },
    { year: 2013, display_year: '2013-2014' },
    { year: 2014, display_year: '2014-2015' },
    { year: 2015, display_year: '2015-2016' },
    { year: 2016, display_year: '2016-2017' },
    { year: 2017, display_year: '2017-2018' },
    { year: 2018, display_year: '2018-2019' },
    { year: 2019, display_year: '2019-2020' },
    { year: 2020, display_year: '2020-2021' },
    { year: 2021, display_year: '2021-2022' },
    { year: 2022, display_year: '2022-2023' },
  ],
  nbaSeasonSelected: '',
};

export default GlobalState;

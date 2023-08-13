import * as React from 'react';
import { View } from 'react-native';
import { PaperSelect as Select } from 'react-native-paper-select';
import styled from 'styled-components';

import GlobalContext from '../../../context/GlobalContext';

import { setTeams, setTeamSelected, setSeasonSelected } from './actions/NBAEverythingSearchActions';

const NBAEverythingSearch = () => {
  const {
    state: { nbaSeasonSelected, nbaSeasons, nbaTeams, nbaTeamSelected },
    dispatch,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const setTeamsRequest = async () => {
      dispatch(await setTeams());
    };

    setTeamsRequest();
  }, []);

  return (
    <NBAEverythingSearchRoot>
      <Select
        arrayList={
          nbaSeasons?.map(season => ({
            _id: season.year.toString(),
            value: season.display_year,
          })) ?? [{ _id: '', value: '' }]
        }
        containerStyle={{ width: '48%' }}
        errorText=''
        label='Season'
        multiEnable={false}
        onSelection={async e =>
          e.selectedList[0].value && dispatch(await setSeasonSelected(e.selectedList[0].value))
        }
        selectedArrayList={[]}
        value={nbaSeasonSelected ?? ''}
      />
      <Select
        arrayList={
          nbaTeams?.map(team => ({ _id: team.id.toString(), value: team.full_name })) ?? [
            { _id: '', value: '' },
          ]
        }
        containerStyle={{ width: '48%' }}
        errorText=''
        label='Team'
        multiEnable={false}
        onSelection={async e =>
          e.selectedList[0].value &&
          dispatch(
            await setTeamSelected(
              nbaTeams.filter(team => team.id.toString() === e.selectedList[0]._id)[0],
            ),
          )
        }
        selectedArrayList={[]}
        value={nbaTeamSelected?.full_name ?? ''}
      />
    </NBAEverythingSearchRoot>
  );
};

const NBAEverythingSearchRoot = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export default NBAEverythingSearch;

import * as React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components';

import GlobalContext from '../../context/GlobalContext';

import { NBAEverythingSearch, NBAEverythingTeamDetail } from './components';

import {
  setIsNBAEverythingLoading,
  setSelectedTeamData,
  setSelectedTeamTotals,
  setTeams,
} from '../../actions/nbaEverything/NBAEverythingActions';

const NBAEverything = () => {
  const {
    dispatch,
    state: { isNBAEverythingLoading, nbaSeasonSelected, nbaTeamSelected },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const setTeamsRequest = async () => {
      dispatch(await setTeams());
      dispatch(await setIsNBAEverythingLoading(false));
    };

    setTeamsRequest();
  }, []);

  React.useEffect(() => {
    const setSelectedTeamDataRequest = async () => {
      dispatch(await setIsNBAEverythingLoading(true));
      dispatch(
        await setSelectedTeamData(nbaTeamSelected?.id, Number(nbaSeasonSelected?.slice(0, 4))),
      );

      dispatch(
        await setSelectedTeamTotals(nbaTeamSelected?.id, Number(nbaSeasonSelected?.slice(0, 4))),
      );

      dispatch(await setIsNBAEverythingLoading(false));
    };

    if (nbaSeasonSelected && nbaTeamSelected) {
      setSelectedTeamDataRequest();
    }
  }, [nbaSeasonSelected, nbaTeamSelected]);

  return (
    <View>
      {isNBAEverythingLoading && (
        <NBAEverythingLoaderView>
          <ActivityIndicator animating color={'white'} size={150} />
        </NBAEverythingLoaderView>
      )}
      <View style={{ opacity: isNBAEverythingLoading ? 0.2 : 1 }}>
        <NBAEverythingSearch />
        <NBAEverythingTeamDetail />
      </View>
    </View>
  );
};

const NBAEverythingLoaderView = styled(View)({
  position: 'absolute',
  left: '30%',
  top: 200,
  zIndex: 1,
});

export default NBAEverything;

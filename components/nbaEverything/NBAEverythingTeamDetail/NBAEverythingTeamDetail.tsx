import * as React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

import GlobalContext from '../../../context/GlobalContext';

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
const NBA_EVERYTHING_LOGOS_LOCATION = process.env.EXPO_PUBLIC_NBA_EVERYTHING_LOGOS_LOCATION;

const NBAEverythingTeamDetail = () => {
  const {
    dispatch,
    state: { nbaSeasonSelected, nbaTeamSelected },
  } = React.useContext(GlobalContext);

  const fullNameFormattedLogo = nbaTeamSelected?.full_name.replaceAll('_', '').replace(/\s/g, '');
  const fullNameFormattedStubHub = nbaTeamSelected?.full_name.replaceAll(' ', '-').toLowerCase();

  const logos = [
    {
      src: `${BACKEND_URL}/${NBA_EVERYTHING_LOGOS_LOCATION}/${fullNameFormattedLogo}.png`,
    },
    {
      src: `${BACKEND_URL}/${NBA_EVERYTHING_LOGOS_LOCATION}/${fullNameFormattedLogo}Retro.png`,
    },
  ];

  return (
    nbaSeasonSelected &&
    nbaTeamSelected && (
      <View>
        <View>
          <NBAEverythingTeamDetailText>{nbaTeamSelected.full_name}</NBAEverythingTeamDetailText>
        </View>
        <NBAEverythingTeamDetailLogo source={{ uri: logos[0].src }} />
        <View>
          <NBAEverythingTeamDetailText>{nbaTeamSelected.arena.name}</NBAEverythingTeamDetailText>
        </View>
        <NBAEverythingTeamDetailAddressView>
          <NBAEverythingTeamDetailAddressPinIcon
            backgroundColor='transparent'
            color='skyblue'
            name='map-pin'
            size={15}
          />
          <NBAEverythingTeamDetailText>{nbaTeamSelected.arena.address}</NBAEverythingTeamDetailText>
        </NBAEverythingTeamDetailAddressView>
        <NBAEverythingTeamDetailArenaCapacityView>
          <NBAEverythingTeamDetailText $isBold>Capacity: </NBAEverythingTeamDetailText>
          <NBAEverythingTeamDetailText>{`${nbaTeamSelected.arena.capacity}`}</NBAEverythingTeamDetailText>
        </NBAEverythingTeamDetailArenaCapacityView>
      </View>
    )
  );
};

const NBAEverythingTeamDetailText = styled(Text)<{ $isBold?: boolean }>(({ $isBold }) => ({
  color: 'white',
  fontWeight: $isBold ? 'bold' : 'normal',
}));

const NBAEverythingTeamDetailLogo = styled(Image)({
  height: 100,
  width: 100,
});

const NBAEverythingTeamDetailAddressPinIcon = styled(Icon.Button)({
  padding: 0,
});

const NBAEverythingTeamDetailAddressView = styled(View)({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  paddingVertical: 4,
});

const NBAEverythingTeamDetailArenaCapacityView = styled(View)({
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

export default NBAEverythingTeamDetail;

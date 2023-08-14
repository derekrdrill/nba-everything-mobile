import * as React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

import GlobalContext from '../../../../context/GlobalContext';

import NBAEverythingTeamDetailStats from './components/NBAEverythingTeamDetailStats';

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
const NBA_EVERYTHING_LOGOS_LOCATION = process.env.EXPO_PUBLIC_NBA_EVERYTHING_LOGOS_LOCATION;

const NBAEverythingTeamDetail = () => {
  const {
    dispatch,
    state: { nbaSeasonSelected, nbaTeamSelected, nbaTeamSelectedData, nbaTeamSelectedTotals },
  } = React.useContext(GlobalContext);

  const arenaNameFormatted = `${nbaTeamSelected?.arena.name.replaceAll(' ', '+').toLowerCase()}+${
    nbaTeamSelected?.name
  }`;

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
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <NBAEverythingTeamDetailText $fontSize={24}>
            {nbaTeamSelected.full_name}
          </NBAEverythingTeamDetailText>
        </View>
        <View style={{ flexDirection: 'row', height: 250, width: 300 }}>
          <NBAEverythingTeamDetailLogo source={{ uri: logos[0].src }} />
        </View>
        <View>
          <View style={{ marginBottom: 8 }}>
            <NBAEverythingTeamDetailText $fontSize={20}>Arena Info</NBAEverythingTeamDetailText>
          </View>
          <View>
            <NBAEverythingTeamDetailText>{nbaTeamSelected.arena.name}</NBAEverythingTeamDetailText>
          </View>
          <NBAEverythingTeamDetailAddressView>
            <NBAEverythingTeamDetailAddressPinIcon
              backgroundColor='transparent'
              color='skyblue'
              name='map-pin'
              onPress={() =>
                Linking.openURL(`https://google.com/maps/search/${arenaNameFormatted}`)
              }
              size={15}
            />
            <NBAEverythingTeamDetailText>
              {nbaTeamSelected.arena.address}
            </NBAEverythingTeamDetailText>
          </NBAEverythingTeamDetailAddressView>
          <NBAEverythingTeamDetailArenaCapacityView>
            <NBAEverythingTeamDetailText $isBold>Capacity: </NBAEverythingTeamDetailText>
            <NBAEverythingTeamDetailText>
              {`${(nbaTeamSelected.arena.capacity / 1000)
                .toFixed(3)
                .toString()
                .replaceAll('.', ',')}`}{' '}
            </NBAEverythingTeamDetailText>
            <NBAEverythingTeamDetailText>{` - `}</NBAEverythingTeamDetailText>
            <NBAEverythingTeamDetailText
              $fontColor='skyblue'
              $isUnderlined
              onPress={() =>
                Linking.openURL(
                  `https://www.stubhub.com/${
                    fullNameFormattedStubHub === 'la-clippers'
                      ? 'los-angeles-clippers'
                      : fullNameFormattedStubHub
                  }-tickets`,
                )
              }
            >
              See tickets on Stubhub
            </NBAEverythingTeamDetailText>
          </NBAEverythingTeamDetailArenaCapacityView>
        </View>
        <NBAEverythingTeamDetailStats
          teamStats={[
            {
              statRowKey: 'r1',
              statCols: [
                {
                  statColKey: 'wl',
                  statColData: {
                    statTitle: 'W-L',
                    stat: `${nbaTeamSelectedData?.wins}-${nbaTeamSelectedData?.losses}`,
                  },
                },
                {
                  statColKey: 'ppg',
                  statColData: {
                    statTitle: 'PPG',
                    stat: nbaTeamSelectedData?.ppg.toFixed(2).toString(),
                  },
                },
              ],
            },
            {
              statRowKey: 'r2',
              statCols: [
                {
                  statColKey: 'apg',
                  statColData: {
                    statTitle: 'APG',
                    stat: nbaTeamSelectedTotals?.apg,
                  },
                },
                {
                  statColKey: 'rpg',
                  statColData: {
                    statTitle: 'RPG',
                    stat: nbaTeamSelectedTotals?.apg,
                  },
                },
              ],
            },
            {
              statRowKey: 'r3',
              statCols: [
                {
                  statColKey: 'spg',
                  statColData: {
                    statTitle: 'SPG',
                    stat: nbaTeamSelectedTotals?.spg,
                  },
                },
                {
                  statColKey: 'bpg',
                  statColData: {
                    statTitle: 'BPG',
                    stat: nbaTeamSelectedTotals?.bpg,
                  },
                },
              ],
            },
          ]}
        />
      </View>
    )
  );
};

const NBAEverythingTeamDetailText = styled(Text)<{
  $isBold?: boolean;
  $isUnderlined?: boolean;
  $fontColor?: string;
  $fontSize?: number;
}>(({ $isBold, $isUnderlined, $fontColor, $fontSize }) => ({
  color: $fontColor ?? 'white',
  fontSize: $fontSize ?? 15,
  fontWeight: $isBold ? 'bold' : 'normal',
  textDecorationLine: $isUnderlined ? 'underline' : 'none',
}));

const NBAEverythingTeamDetailLogo = styled(Image)({
  flex: 1,
  height: undefined,
  left: '15%',
  position: 'relative',
  resizeMode: 'contain',
  weight: undefined,
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

import * as React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components';

import GlobalContext from '../../../../../context/GlobalContext';

type NBAEverythingTeamDetailStatsProps = {
  teamStats: {
    statRowKey: string;
    statCols: {
      statColKey: string;
      statColData: { statTitle: string; stat: string | undefined };
    }[];
  }[];
};

const NBAEverythingTeamDetailStats = ({ teamStats }: NBAEverythingTeamDetailStatsProps) => {
  const {
    state: { isNBAEverythingLoading, nbaSeasonSelected },
  } = React.useContext(GlobalContext);

  return (
    <NBAEverythingTeamDetailStatsRoot>
      <NBAEverythingTeamDetailText
        $fontSize={20}
      >{`${nbaSeasonSelected} Stats`}</NBAEverythingTeamDetailText>
      {teamStats.map(teamStatRow => (
        <NBAEverythingTeamDetailStatsRow key={teamStatRow.statRowKey}>
          {teamStatRow.statCols.map(statCol => (
            <NBAEverythingTeamDetailStatsCol key={statCol.statColKey}>
              <NBAEverythingTeamDetailText $fontSize={24}>
                {statCol.statColData.statTitle}
              </NBAEverythingTeamDetailText>
              <NBAEverythingTeamDetailStatItemView>
                {!isNBAEverythingLoading ? (
                  <NBAEverythingTeamDetailText>
                    {statCol.statColData.stat}
                  </NBAEverythingTeamDetailText>
                ) : (
                  <ActivityIndicator animating color='white' size='small' />
                )}
              </NBAEverythingTeamDetailStatItemView>
            </NBAEverythingTeamDetailStatsCol>
          ))}
        </NBAEverythingTeamDetailStatsRow>
      ))}
    </NBAEverythingTeamDetailStatsRoot>
  );
};

const NBAEverythingTeamDetailStatsRoot = styled(View)({
  marginTop: 25,
});

const NBAEverythingTeamDetailStatsRow = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
});

const NBAEverythingTeamDetailStatsCol = styled(View)({
  flexDirection: 'column',
  alignItems: 'center',
});

const NBAEverythingTeamDetailStatItemView = styled(View)({
  height: 20,
});

const NBAEverythingTeamDetailText = styled(Text)<{
  $isBold?: boolean;
  $fontSize?: number;
}>(({ $isBold, $fontSize }) => ({
  color: 'white',
  fontSize: $fontSize ?? 15,
  fontWeight: $isBold ? 'bold' : 'normal',
}));

export default NBAEverythingTeamDetailStats;

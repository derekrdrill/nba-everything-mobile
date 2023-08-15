import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';

import GlobalContext from '../../../../context/GlobalContext';

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
const NBA_EVERYTHING_LOGOS_LOCATION = process.env.EXPO_PUBLIC_NBA_EVERYTHING_LOGOS_LOCATION;

const NBAEverythingGameScores = () => {
  const {
    state: { isNBAEverythingDarkMode, isNBAEverythingRetro, nbaTeamSelectedData, nbaTeamSelected },
  } = React.useContext(GlobalContext);

  return (
    <NBAEverythingGameScoresRoot>
      {nbaTeamSelectedData?.teamGameData.map(game => (
        <NBAEverythingGameScoreView key={game.id}>
          <NBAeverythingGameScoreRow>
            <NBAEverythingGameScoreLogo
              source={{
                uri: `${BACKEND_URL}/${NBA_EVERYTHING_LOGOS_LOCATION}/${game.visitor_team.full_name.replaceAll(
                  ' ',
                  '',
                )}${isNBAEverythingRetro ? 'Retro' : ''}.png`,
              }}
            />
            <NBAEverythingGameScoreText
              $isAWin={game.win}
              $isDarkMode={isNBAEverythingDarkMode}
              $scoreName={game.visitor_team.full_name}
              $selectedNBATeamName={nbaTeamSelected?.full_name}
            >
              {game.visitor_team.abbreviation}
            </NBAEverythingGameScoreText>
            <NBAEverythingGameScoreText
              $isAWin={game.win}
              $isDarkMode={isNBAEverythingDarkMode}
              $scoreName={game.visitor_team.full_name}
              $selectedNBATeamName={nbaTeamSelected?.full_name}
            >
              {game.visitor_team_score}
            </NBAEverythingGameScoreText>
          </NBAeverythingGameScoreRow>
          <NBAeverythingGameScoreRow>
            <NBAEverythingGameScoreLogo
              source={{
                uri: `${BACKEND_URL}/${NBA_EVERYTHING_LOGOS_LOCATION}/${game.home_team.full_name.replaceAll(
                  ' ',
                  '',
                )}${isNBAEverythingRetro ? 'Retro' : ''}.png`,
              }}
            />
            <NBAEverythingGameScoreText
              $isAWin={game.win}
              $isDarkMode={isNBAEverythingDarkMode}
              $scoreName={game.home_team.full_name}
              $selectedNBATeamName={nbaTeamSelected?.full_name}
            >
              {game.home_team.abbreviation}
            </NBAEverythingGameScoreText>
            <NBAEverythingGameScoreText
              $isAWin={game.win}
              $isDarkMode={isNBAEverythingDarkMode}
              $scoreName={game.home_team.full_name}
              $selectedNBATeamName={nbaTeamSelected?.full_name}
            >
              {game.home_team_score}
            </NBAEverythingGameScoreText>
          </NBAeverythingGameScoreRow>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
            <Text style={{ color: isNBAEverythingDarkMode ? 'white' : 'black' }}>Final</Text>
            <Text style={{ color: 'royalblue', textDecorationLine: 'underline' }}>Game Detail</Text>
          </View>
        </NBAEverythingGameScoreView>
      ))}
    </NBAEverythingGameScoresRoot>
  );
};

const NBAEverythingGameScoresRoot = styled(ScrollView)({
  height: 610,
});

const NBAEverythingGameScoreView = styled(View)({
  padding: 20,
});

const NBAeverythingGameScoreRow = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-around',
});

const NBAEverythingGameScoreLogo = styled(Image)({
  flex: 1,
  height: 70,
  resizeMode: 'contain',
  weight: undefined,
  marginRight: 55,
  marginLeft: 65,
});

const NBAEverythingGameScoreText = styled(Text)<{
  $isDarkMode?: boolean;
  $isAWin?: boolean;
  $scoreName?: string;
  $selectedNBATeamName?: string;
}>(({ $isDarkMode, $isAWin, $scoreName, $selectedNBATeamName }) => ({
  color: $isAWin
    ? $scoreName === $selectedNBATeamName
      ? 'green'
      : $isDarkMode
      ? 'white'
      : 'black'
    : $scoreName === $selectedNBATeamName
    ? 'red'
    : $isDarkMode
    ? 'white'
    : 'black',
  fontSize: 24,
  flex: 2,
  marginTop: 10,
}));

export default NBAEverythingGameScores;

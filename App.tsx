import { Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import styled from 'styled-components';

import Body from './components/common/Body/Body';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

import NBAEverythingSearch from './components/nbaEverything/NBAEverythingSearch/NBAEverythingSearch';

import GlobalProvider from './context/GlobalProvider';
import NBAEverythingTeamDetail from './components/nbaEverything/NBAEverythingTeamDetail/NBAEverythingTeamDetail';

const App = () => {
  return (
    <GlobalProvider>
      <PaperProvider>
        <Root>
          <Header />
          <Body>
            <NBAEverythingSearch />
            <NBAEverythingTeamDetail />
            {/* <StyledText>NBA Everything</StyledText> */}
          </Body>
          <Footer />
        </Root>
      </PaperProvider>
    </GlobalProvider>
  );
};

const Root = styled(View)({
  backgroundColor: 'rgb(3, 2, 0)',
  flex: 1,
  margin: '50px 0px 0px 0px',
});

const StyledText = styled(Text)({
  color: 'white',
});

export default App;

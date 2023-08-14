import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import styled from 'styled-components';

import GlobalProvider from './context/GlobalProvider';

import Body from './components/common/Body/Body';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

import { NBAEverything } from './components/nbaEverything';

const App = () => {
  return (
    <GlobalProvider>
      <PaperProvider>
        <Root>
          <Header />
          <Body>
            <NBAEverything />
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

export default App;

import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import Body from '../Body/Body';
import Header from '..//Header/Header';
import Footer from '../Footer/Footer';

import { NBAEverything } from '../../nbaEverything';
import React from 'react';
import GlobalContext from '../../../context/GlobalContext';

const App = () => {
  const {
    state: { isNBAEverythingDarkMode, isNBAEverythingRetro },
  } = React.useContext(GlobalContext);

  return (
    <PaperProvider>
      <Root $isDarkMode={isNBAEverythingDarkMode}>
        <StatusBar
          backgroundColor={isNBAEverythingDarkMode ? 'rgb(3, 2, 0)' : 'white'}
          style={isNBAEverythingDarkMode ? 'light' : 'dark'}
        />
        <Header />
        <Body>
          <NBAEverything />
        </Body>
        <Footer />
      </Root>
    </PaperProvider>
  );
};

const Root = styled(View)<{ $isDarkMode?: boolean }>(({ $isDarkMode }) => ({
  backgroundColor: $isDarkMode ? 'rgb(3, 2, 0)' : 'white',
  flex: 1,
  margin: '50px 0px 0px 0px',
}));

export default App;

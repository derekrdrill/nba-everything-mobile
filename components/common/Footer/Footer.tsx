import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalContext from '../../../context/GlobalContext';
import { setView } from '../../../actions/common/footer/FooterActions';

const Footer = () => {
  const {
    dispatch,
    state: { isNBAEverythingDarkMode, nbaEverythingView },
  } = React.useContext(GlobalContext);

  return (
    <FooterRoot>
      <Button
        mode='text'
        onPress={async () => {
          dispatch(await setView('team'));
        }}
        style={{
          backgroundColor:
            nbaEverythingView === 'team'
              ? 'gainsboro'
              : isNBAEverythingDarkMode
              ? 'rgb(3, 2, 0)'
              : 'white',
          borderRadius: 0,
        }}
      >
        Team Info
      </Button>
      <Button
        onPress={async () => {
          dispatch(await setView('game'));
        }}
        mode='text'
        style={{
          backgroundColor:
            nbaEverythingView === 'game'
              ? 'gainsboro'
              : isNBAEverythingDarkMode
              ? 'rgb(3, 2, 0)'
              : 'white',
          borderRadius: 0,
        }}
      >
        Game Scores
      </Button>
      <Button
        onPress={async () => {
          dispatch(await setView('player'));
        }}
        mode='text'
        style={{
          backgroundColor:
            nbaEverythingView === 'player'
              ? 'gainsboro'
              : isNBAEverythingDarkMode
              ? 'rgb(3, 2, 0)'
              : 'white',
          borderRadius: 0,
        }}
      >
        Player Stats
      </Button>
    </FooterRoot>
  );
};

const FooterRoot = styled(View)({
  bottom: 0,
  flexDirection: 'row',
  height: 55,
  justifyContent: 'space-around',
  left: 0,
  position: 'absolute',
  right: 0,
  zIndex: 2,
});

export default Footer;

import React from 'react';
import { Image, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import styled from 'styled-components';

import GlobalContext from '../../../context/GlobalContext';

import { setDarkMode, setRetroMode } from '../../../actions/common/header/HeaderActions';

import NBALogo from '../../../assets/nba.png';

const Header = () => {
  const {
    dispatch,
    state: { isNBAEverythingDarkMode, isNBAEverythingRetro },
  } = React.useContext(GlobalContext);

  return (
    <HeaderRoot>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: 30 }}>
        <HeaderLogo source={NBALogo}></HeaderLogo>
        <HeaderTitle>everything...</HeaderTitle>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 30 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {isNBAEverythingRetro ? <Text>👴🏼</Text> : <Text>👶🏼</Text>}
          <Switch
            onValueChange={async () => {
              dispatch(await setRetroMode(!isNBAEverythingRetro));
            }}
            style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
            value={isNBAEverythingRetro}
          />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {isNBAEverythingDarkMode ? <Text>🌙</Text> : <Text>☀️</Text>}
          <Switch
            onValueChange={async () => {
              dispatch(await setDarkMode(!isNBAEverythingDarkMode));
            }}
            style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
            value={isNBAEverythingDarkMode}
          />
        </View>
      </View>
    </HeaderRoot>
  );
};

const HeaderRoot = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: 5,
});

const HeaderLogo = styled(Image)({
  height: 50,
  width: 100,
});

const HeaderTitle = styled(Text)({
  color: 'white',
  fontSize: 20,
  left: 6,
  top: 26,
});

export default Header;

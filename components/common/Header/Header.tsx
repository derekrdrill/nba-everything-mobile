import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

import NBALogo from '../../../assets/nba.png';

// type HeaderProps = {}

const Header = () => (
  <HeaderRoot>
    <HeaderLogo source={NBALogo}></HeaderLogo>
    <HeaderTitle>everything...</HeaderTitle>
  </HeaderRoot>
);

const HeaderRoot = styled(View)({
  flexDirection: 'row',
  height: 50,
  left: 0,
  right: 0,
  position: 'absolute',
  top: 0,
});

const HeaderLogo = styled(Image)({
  height: 50,
  width: 100,
});

const HeaderTitle = styled(Text)({
  color: 'white',
  fontSize: 20,
  left: 6,
  position: 'relative',
  top: 25,
});

export default Header;

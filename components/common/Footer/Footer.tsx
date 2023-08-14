import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

// type FooterProps = {}

const Footer = () => (
  <FooterRoot>
    <Button mode='text'>Team Info</Button>
    <Button mode='text'>Game Stats</Button>
    <Button mode='text'>Player Stats</Button>
  </FooterRoot>
);

const FooterRoot = styled(View)({
  bottom: 0,
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: 65,
  left: 0,
  right: 0,
  position: 'absolute',
});

export default Footer;

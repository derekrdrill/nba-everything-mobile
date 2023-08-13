import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components';

// type FooterProps = {}

const Footer = () => (
  <FooterRoot>
    <Button mode='text'>Team Data</Button>
    <Button mode='text'>Game Data</Button>
    <Button mode='text'>Player Data</Button>
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

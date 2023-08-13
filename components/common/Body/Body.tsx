import { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

type BodyProps = { children: string | ReactNode };

const Body = ({ children }: BodyProps) => <BodyRoot>{children}</BodyRoot>;

const BodyRoot = styled(View)({
  left: 0,
  position: 'relative',
  right: 0,
  top: 55,
});

export default Body;

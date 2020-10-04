import { Text } from '@geist-ui/react';
import styled from 'styled-components/macro';

export const Intro = () => {
  return (
    <StyledIntro>
      <Text h1>Burundi Open Data</Text>
      <Text p>Free and open access to global development data on Burundi</Text>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  text-align: center;
`;

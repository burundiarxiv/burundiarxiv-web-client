import styled from 'styled-components/macro';
import { Text, Divider } from '@geist-ui/react';

import { Layout } from 'components';

export const AboutView = () => {
  return (
    <StyledAboutView>
      <Layout pageTitle="About">
        <div>
          <Text p>
            Ce projet est dirigé par Lionel Kubwimana. D'importantes
            contributions ont été réalisées par :
          </Text>
          <ul>
            <li>Bertrand Rukundo</li>
            <li>Charbel Mugisha</li>
            <li>Chérubin Mugisha</li>
            <li>Jean Davy Nizigama</li>
            <li>Patrick Rumeci</li>
            <li>Trésor Muco</li>
            <li>Trésor Sindihebura</li>
          </ul>
          <Divider />
          <Text em>Contact : data(at)burundiarxiv(point)org</Text>
          <Divider />
        </div>
      </Layout>
    </StyledAboutView>
  );
};

const StyledAboutView = styled.div``;

import styled from 'styled-components/macro';
import { Text } from '@geist-ui/react';

import { Layout } from 'components';

export const AboutView = () => {
  return (
    <StyledAboutView>
      <Layout pageTitle="About">
        <div>
          <Text h3>Credits</Text>
          <Text p>
            This project is lead by Lionel Kubwimana, a Software Engineer living
            in Paris, France. Significant contributions have been made by :
          </Text>
          <ul>
            <li>Bertrand Rukundo</li>
            <li>Charbel Mugisha</li>
            <li>Chérubin Mugisha</li>
            <li>Jean Davy Nizigama</li>
            <li>Patrick Rumeci</li>
            <li>Tresor Muco</li>
            <li>Tresor Sindihebura</li>
          </ul>
        </div>
      </Layout>
    </StyledAboutView>
  );
};

const StyledAboutView = styled.div``;

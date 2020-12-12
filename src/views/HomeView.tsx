import styled from 'styled-components/macro';
import { Row, Col, Text } from '@geist-ui/react';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUp } from '@geist-ui/react-icons';

import { Layout, AllDatasets, FeaturedCategories } from 'components';

export const HomeView = () => {
  return (
    <StyledHomeView>
      <Layout pageTitle="Home">
        <ScrollToTop smooth component={<ArrowUp />} />

        <Row gap={5} style={{ marginLeft: 0, marginRight: 0 }}>
          <Col span={16} style={{ paddingLeft: 0 }} className="datasets-col">
            <Text h3>Jeux de données</Text>
            <AllDatasets />
          </Col>

          <Col span={8} style={{ paddingRight: 0 }} className="sidebar-col">
            <Text h3>Domaines</Text>
            <FeaturedCategories />
          </Col>
        </Row>
      </Layout>
    </StyledHomeView>
  );
};

const StyledHomeView = styled.div`
  @media screen and (max-width: 768px) {
    h3 {
      text-align: center;
      margin-bottom: 30px;
    }
    .datasets-col {
      width: 700px !important;
      padding-right: 0 !important;
    }
    .sidebar-col {
      display: none;
    }
  }
`;

import styled from 'styled-components/macro';
import { Row, Col, Text } from '@geist-ui/react';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUp } from '@geist-ui/react-icons';

import { Layout, AllDatasets, FeaturedCategories } from 'components';

export const AboutView = () => {
  return (
    <StyledHomeView>
      <Layout pageTitle="About"></Layout>
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

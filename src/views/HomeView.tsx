import { Row, Col, Text } from '@geist-ui/react';
import { Layout, AllDatasets, FeaturedCategories } from 'components';

export const HomeView = () => {
  return (
    <Layout pageTitle="Home">
      <Row gap={5} style={{ marginLeft: 0, marginRight: 0 }}>
        <Col span={16} style={{ paddingLeft: 0 }}>
          <Text h3>All datasets</Text>
          <AllDatasets />
        </Col>
        <Col span={8} style={{ paddingRight: 0 }}>
          <Text h3>All Categories</Text>
          <FeaturedCategories />
        </Col>
      </Row>
    </Layout>
  );
};

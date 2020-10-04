import { Text, Note } from '@geist-ui/react';
import { Layout } from 'components';

export const DashboardView = () => {
  return (
    <Layout pageTitle="Dashboard">
      <Text h1 style={{ textAlign: 'center', marginTop: '30px' }}>
        We're Sorry!
      </Text>
      <Note type="success" style={{ width: '400px', margin: '0 auto' }}>
        This page is down for maintenance. We are working to get it back up and
        running as soon as possible. Please check back!
      </Note>
    </Layout>
  );
};

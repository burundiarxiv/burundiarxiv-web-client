import { Text, Grid, Card, Link, Image } from '@geist-ui/react';
import { Layout } from 'components';
import { Doughnut } from 'react-chartjs-2';

export const DashboardView = () => {
  const randomNumber = () => Math.round(Math.random() * 100);

  const data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [400, 300, 34],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const MockItem = () => {
    return <Card shadow style={{ width: '100%', height: '100px' }} />;
  };

  const Item = () => {
    return (
      <Card width="400px">
        <Doughnut data={data} />
        <Text
          type="secondary"
          small
          style={{ textAlign: 'center', marginTop: '30px' }}
        >
          Burundi's main demographic and socio-economic indicators
        </Text>
        <Card.Footer>
          <Link block target="_blank" href="#">
            Download data in CSV
          </Link>
        </Card.Footer>
      </Card>
    );
  };

  const Item2 = () => {
    return (
      <>
        <Text h6 style={{ textAlign: 'center', marginTop: '20px' }}>
          Burundi's main demographic and socio-economic indicators
        </Text>
        <Doughnut data={data} />
      </>
    );
  };
  return (
    <Layout pageTitle="Dashboard">
      <Text h4 style={{ textAlign: 'center' }}>
        POPULATION
      </Text>
      <Grid.Container gap={5} justify="center">
        <Grid xs={24} md={12}>
          <Item />
        </Grid>
        <Grid xs={24} md={12}>
          <Item />
        </Grid>
        <Grid xs={24} md={12}>
          <Item />
        </Grid>
        <Grid xs={24} md={12}>
          <Item2 />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

import { Text, Note } from '@geist-ui/react';
import { Layout } from 'components';
import { Doughnut } from 'react-chartjs-2';

export const DashboardView = () => {
  const randomNumber = () => Math.round(Math.random() * 100);

  const data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [randomNumber(), randomNumber(), randomNumber()],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <Layout pageTitle="Dashboard">
      <Text h4 style={{ textAlign: 'center', marginTop: '30px' }}>
        POPULATION
      </Text>
      <Text h6 style={{ textAlign: 'center', marginTop: '30px' }}>
        Burundi's main demographic and socio-economic indicators
      </Text>
      <Doughnut data={data} />
    </Layout>
  );
};

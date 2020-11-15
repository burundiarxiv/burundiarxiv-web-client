import { Text, Grid, Card, Link } from '@geist-ui/react';
import { Layout } from 'components';
import { Doughnut, Line, Bubble, Radar } from 'react-chartjs-2';

export const DashboardView = () => {
  const randomNumber = () => Math.round(Math.random() * 20);

  const doughnutData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [400, 300, 34],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const radarData = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };

  const bubbleData = {
    labels: ['January'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          { x: 10, y: 20, r: 5 },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
          { x: randomNumber(), y: randomNumber(), r: randomNumber() },
        ],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  const Item = ({ Component, data }) => {
    return (
      <Card width="400px">
        <Text h6 style={{ marginBottom: '0' }}>
          Burundi's main demographic and socio-economic indicators
        </Text>
        <Component data={data} />
        <Card.Footer>
          <Link block target="_blank" href="#">
            Download data in CSV
          </Link>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <Layout pageTitle="Dashboard">
      <Text h4 style={{ textAlign: 'center' }}>
        POPULATION
      </Text>
      <Grid.Container gap={5} justify="center">
        <Grid xs={24} md={12}>
          <Item Component={Doughnut} data={doughnutData} />
        </Grid>
        <Grid xs={24} md={12}>
          <Item Component={Line} data={lineData} />
        </Grid>
        <Grid xs={24} md={12}>
          <Item Component={Bubble} data={bubbleData} />
        </Grid>
        <Grid xs={24} md={12}>
          <Item Component={Radar} data={radarData} />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

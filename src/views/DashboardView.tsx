import styled from 'styled-components/macro';
import { Text, Grid, Card, Link, Note, Tabs, Collapse } from '@geist-ui/react';
import { Layout } from 'components';
import { Doughnut, Line, Bubble, Radar } from 'react-chartjs-2';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUp } from '@geist-ui/react-icons';

import { DashboardTab } from 'components';

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
  const Item = ({ Component, data, title }) => {
    return (
      <Card className="card">
        <Text h6 style={{ marginBottom: '0' }}>
          {title}
        </Text>
        <Component data={data} />
        <Card.Footer>
          <Link block target="_blank" href="#">
            Téléchager au format CSV
          </Link>
        </Card.Footer>
      </Card>
    );
  };

  const categories = [
    [
      'POPULATION',
      'Population par âge et par sexe dans les communes',
      "Population résidante de 10 ans et plus selon l'état matrimonial et le sexe",
      'Population résidante selon la religion et le sexe',
      'Population burundaise par province',
    ],
    [
      'EDUCATION',
      'Répartition des écoles du fondamental par province scolaire',
      'Répartition des effectifs des élèves du fondamental  par province',
      'Evolution des établissements d’enseignement supérieur',
      'Répartition du personnel enseignant du fondamental  par province',
    ],
    [
      'SANTÉ ET NUTRITION',
      'Evolution des infrastructures sanitaires par province',
      'Effectif de médecins soignants par province',
      'Les principales causes de mortalité dans les hôpitaux chez les enfants de moins de 5 ans',
      'Morbidités hospitalières dues au SIDA',
    ],
    [
      'TOURISME ET HOTELLERIE',
      "Hotels du Burundi, leur capacite d'accueil et prix moyen d'une chambre",
      'Tourisme récepteur',
      'Arrivées par mode de transport',
      "Hotels du Burundi, leur capacite d'accueil et prix moyen d'une chambre",
    ],
    [
      'FINANCES PUBLIQUES',
      "Evolution des recettes d'investissement des communes (en milliers de FBU)",
      'Evolution des Recettes fiscales (en millions de FBU)',
      'Evolution de la dette publique (en millions de FBU)',
      'Evolution de fonctionnement des recettes des communes (en milliers de FBU)',
    ],
  ];

  const generalSections = categories.map((category) => ({
    title: category[0],
    content: (
      <div className="grid">
        <Grid.Container gap={5} justify="center">
          <Grid xs={24} sm={24} md={24}>
            <Item
              Component={Doughnut}
              data={doughnutData}
              title={category[1]}
            />
          </Grid>
          <Grid xs={24} sm={24} md={24}>
            <Item Component={Line} data={lineData} title={category[2]} />
          </Grid>
          <Grid xs={24} sm={24} md={24}>
            <Item Component={Bubble} data={bubbleData} title={category[3]} />
          </Grid>
          <Grid xs={24} sm={24} md={24}>
            <Item Component={Radar} data={radarData} title={category[1]} />
          </Grid>
        </Grid.Container>
      </div>
    ),
  }));

  const tabs = [
    {
      label: 'Général',
      sections: generalSections,
    },
    // {
    //   label: 'Provinces',
    //   sections: ProvincesSections,
    // },
    // {
    //   label: 'Communes',
    //   sections: CommunesSections,
    // },
  ];

  return (
    <StyledDashboardView>
      <Layout pageTitle="Dashboard">
        <ScrollToTop smooth component={<ArrowUp />} />

        <Note type="error" style={{ textAlign: 'center' }}>
          Cette page est en cours de construction.
        </Note>
        <br />
        <Tabs initialValue="0">
          {tabs.map(({ label, sections }, index) => (
            <DashboardTab
              label={label}
              sections={sections}
              position={index.toString()}
            />
          ))}
        </Tabs>
      </Layout>
    </StyledDashboardView>
  );
};

const StyledDashboardView = styled.div`
  .grid {
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    margin: 50px 0;
    width: 100%;
  }

  .card {
    width: 100%;
  }
`;

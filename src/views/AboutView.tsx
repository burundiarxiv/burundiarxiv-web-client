import styled from 'styled-components/macro';
import { Text, Divider, Link, Grid, Card } from '@geist-ui/react';
import { Layout } from 'components';

export const AboutView = () => {
  const DashboardItem = ({ size, description }) => {
    return (
      <Card
        shadow
        hoverable
        style={{ width: '100%', height: '100px', textAlign: 'center' }}
      >
        <h4>{size}</h4>
        <p>{description}</p>
      </Card>
    );
  };
  return (
    <StyledAboutView>
      <Layout pageTitle="About">
        <div>
          <Text h3>Publications</Text>
          <Text p>
            Ce projet n'aurait jamais vu le jour sans la publication publique
            des données par ces institutions :
          </Text>
          <ul>
            <li>
              <Link
                color
                target="_blank"
                href="https://www.isteebu.bi/statistiques/"
              >
                Institut de Statistiques et d'Études Économiques du Burundi
                (ISTEEBU)
              </Link>
            </li>
            <li>
              <Link
                color
                target="_blank"
                href="https://brb.bi/fr/content/secteur-r%C3%A9el"
              >
                Banque de la République du Burundi (BRB)
              </Link>
            </li>
          </ul>
        </div>
        <Divider />
        <div>
          <Text h3>Contributeurs</Text>
          <Text p>
            Ce projet est dirigé par Lionel Kubwimana. D'importantes
            contributions ont été réalisées par :
          </Text>
          <ul>
            <li>Armel Michel Ndayikeza</li>
            <li>Bahati Nsaba</li>
            <li>Bertrand Rukundo</li>
            <li>Charbel Mugisha</li>
            <li>Chérubin Mugisha</li>
            <li>Jean Davy Nizigama</li>
            <li>Patrick Rumeci</li>
            <li>Trésor Muco</li>
            <li>Trésor Sindihebura</li>
          </ul>
          <Divider />
          <div>
            <Text h3>Tableau de bord</Text>
            <Grid.Container gap={2} justify="center">
              <Grid xs={24} sm={12} md={8}>
                <DashboardItem size={290} description="Jeux de données" />
              </Grid>
              <Grid xs={24} sm={12} md={8}>
                <DashboardItem size={70} description="Sources" />
              </Grid>
              <Grid xs={24} sm={12} md={8}>
                <DashboardItem size={20} description="Domaines" />
              </Grid>
            </Grid.Container>
          </div>
          <Divider />
          <div>
            <Text h3>Contact</Text>
            <Text p>
              Pour contribuer, publier, corriger ou mettre à jour les données,
              vous pouvez nous contacter à :
              <Text em> data(at)burundiarxiv(point)org</Text>
            </Text>
          </div>
          <Divider />
        </div>
      </Layout>
    </StyledAboutView>
  );
};

const StyledAboutView = styled.div``;

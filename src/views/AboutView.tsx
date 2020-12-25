import { withTranslation } from '../i18n';
import styled from 'styled-components/macro';
import { Text, Divider, Link, Grid, Card } from '@geist-ui/react';
import { Layout } from 'components';

export const AboutView = ({ t }) => {
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
          <Text h3>{t('publications')}</Text>
          <Text p>{t('About.publications.description')}</Text>
          <ul>
            <li>
              <Link
                color
                target="_blank"
                href="https://www.isteebu.bi/statistiques/"
              >
                {t('isteebu')}
              </Link>
            </li>
            <li>
              <Link
                color
                target="_blank"
                href="https://brb.bi/fr/content/secteur-r%C3%A9el"
              >
                {t('brb')}
              </Link>
            </li>
          </ul>
        </div>
        <Divider />
        <div>
          <Text h3>{t('contributors')}</Text>
          <Text p>{t('About.contributors.description')}</Text>
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
            <Text h3>{t('dashboard')}</Text>
            <Grid.Container gap={2} justify="center">
              <Grid xs={24} sm={12} md={8}>
                <DashboardItem size={290} description={t('datasets')} />
              </Grid>
              <Grid xs={24} sm={12} md={8}>
                <DashboardItem size={70} description="Sources" />
              </Grid>
              <Grid xs={24} sm={12} md={8}>
                <DashboardItem size={20} description={t('domains')} />
              </Grid>
            </Grid.Container>
          </div>
          <Divider />
          <div>
            <Text h3>{t('contact')}</Text>
            <Text p>
              {t('About.contact.description')}
              <Text em>data(at)burundiarxiv({t('dot')})org</Text>
            </Text>
          </div>
          <Divider />
        </div>
      </Layout>
    </StyledAboutView>
  );
};

const StyledAboutView = styled.div``;

export const AboutViewTranslated = withTranslation('common')(AboutView);

import { Text } from '@geist-ui/react';
import styled from 'styled-components/macro';
import { withTranslation } from '../../i18n';

const content = {
  Home: {
    title: 'Plateforme ouverte des données sur le Burundi',
    subtitle:
      'Partageons, améliorons et réutilisons les données publiques burundaises.',
    description:
      "Burundiarxiv Open Data est un projet initié et développé par un collectif d'Ingénieurs Informatique, Statisticiens, Économistes et Data scientists Burundais. Il a pour objectif de fournir et de centraliser les données ouvertes et réutilisables sur le Burundi. Il s'agit d'un travail en cours d'élabaration. Pour le moment, nous mettons à disposition les données provenant des annuaires de l'Institut de Statistiques et d'Etudes Economiques du Burundi (ISTEEBU) et bientôt ceux de la Banque de la République du Burundi (BRB). Nous souhaitons proposer un outil gratuit au service des citoyens, chercheurs, ONG et décideurs.",
  },
  Dashboard: {
    title: 'Graphiques',
    subtitle: 'Une image vaut mille mots. - Confucius',
  },
  About: {
    title: 'À Propos',
    subtitle: 'Seul on va plus vite, ensemble on va plus loin.',
  },
};

const Intro = ({ pageTitle, t }) => {
  const { title, subtitle, description } = content[pageTitle];
  return (
    <StyledIntro>
      <Text h1>{title}</Text>
      <Text h2>{t('title')}</Text>
      <Text em p type="secondary" size="1.25rem">
        {subtitle}
      </Text>
      <Text p size="100%">
        {description}
      </Text>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

export default withTranslation('intro')(Intro);

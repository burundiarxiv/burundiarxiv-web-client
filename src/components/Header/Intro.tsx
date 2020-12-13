import { Text } from '@geist-ui/react';
import styled from 'styled-components/macro';

const content = {
  Home: {
    title: 'Plateforme ouverte des données sur le Burundi',
    subtitle:
      'Partageons, amélioreons et réutiliseons les données publiques burundaises.',
    description:
      "Burundiarxiv Open Data est un projet initié et développé par un collectif d'Ingénieurs, Statisticiens et Data scientists Burundais. Il a pour objectif de fournir et de centraliser les données ouvertes et réutilisables sur le Burundi. Il s'agit d'un travail en cours d'élabaration. Pour le moment, nous mettons à disposition les données provenant des annuaires de l'Institut de Statistiques et d'Etudes Economiques du Burundi (ISTEEBU) et bientôt ceux de la Banque de la République du Burundi (BRB). Nous souhaitons proposer un outil gratuit au service des citoyens, chercheurs, ONG et décideurs.",
  },
  Dashboard: {
    title: 'Graphiques',
    subtitle: 'Une image vaut mille mots. - Confucius',
  },
  About: {
    title: 'Contributeurs',
    subtitle: 'Seul on va plus vite, ensemble on va plus loin.',
  },
};

export const Intro = ({ pageTitle }) => {
  debugger;
  const { title, subtitle, description } = content[pageTitle];
  return (
    <StyledIntro>
      <Text h1>{title}</Text>
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

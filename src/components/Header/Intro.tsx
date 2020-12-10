import { Text } from '@geist-ui/react';
import styled from 'styled-components/macro';

export const Intro = () => {
  return (
    <StyledIntro>
      <Text h1>Plateforme ouverte des données sur le Burundi</Text>
      <Text em p type="secondary" size="1.25rem">
        Partageons, amélioreons et réutiliseons les données publiques
        burundaises.
      </Text>
      <Text p size="100%">
        Burundiarxiv Open Data est un projet initié et développé par un groupe
        d'ingénieurs, statisticiens, data scientists Burundais. Il a pour
        objectif de fournir et de centraliser les données ouvertes et
        réutilisables sur le Burundi. Il s'agit d'un travail en cours
        d'élabaration. Pour le moment, nous mettons à disposition les données
        provenant des annuaires de l'Institut de Statistiques et d'Etudes
        Economiques du Burundi (ISTEEBU) et bientôt ceux de la Banque de la
        République du Burundi (BRB). Nous souhaitons proposer un outil gratuit
        au service des citoyens, chercheurs, ONG et décideurs.
      </Text>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

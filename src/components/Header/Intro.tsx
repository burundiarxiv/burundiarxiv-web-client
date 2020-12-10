import { Text } from '@geist-ui/react';
import styled from 'styled-components/macro';

export const Intro = () => {
  return (
    <StyledIntro>
      <Text h1>Portail Open Data sur le Burundi</Text>
      <Text em p type="secondary" size="1.25rem">
        Partageons, amélioreons et réutiliseons les données publiques
        burundaises.
      </Text>
      <Text p size="100%">
        Burundiarxiv Open Data, initié et développé par un groupe d'ingénieurs,
        statisticiens, data scientists Burundais, a pour objectif de fournir des
        données ouvertes et réutilisables à propos du Burundi, et de centraliser
        toutes les données valides à propos du Burundi. Il s'agit d'un travail
        en cours d'élabaration. Pour le moment, nous centralisons les données
        provenant des annuaires de l'ISTEEBU. Nous souhaitons proposer un outil
        gratuit au service des citoyens, chercheurs, ONG et décideurs.
      </Text>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

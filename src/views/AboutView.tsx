import styled from 'styled-components/macro';
import { Text, Divider, Link } from '@geist-ui/react';

import { Layout } from 'components';

export const AboutView = () => {
  return (
    <StyledAboutView>
      <Layout pageTitle="About">
        <div>
          <Text h3>Sources</Text>
          <Text p>
            Ce projet n'aurait jamais vu le jour sans la publication publique
            des données de :
          </Text>
          <ul>
            <li>
              <Link
                color
                target="_blank"
                href="https://www.isteebu.bi/wp-content/uploads/2020/05/Annuaire-2018.pdf"
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
            <li>Bertrand Rukundo</li>
            <li>Charbel Mugisha</li>
            <li>Chérubin Mugisha</li>
            <li>Jean Davy Nizigama</li>
            <li>Patrick Rumeci</li>
            <li>Trésor Muco</li>
            <li>Trésor Sindihebura</li>
          </ul>
          <Divider />
          <Text p>
            Pour contribuer, publier, corriger ou mettre à jour les données,
            vous pouvez nous contacter à :
            <Text em> data(at)burundiarxiv(point)org</Text>
          </Text>
          <Divider />
        </div>
      </Layout>
    </StyledAboutView>
  );
};

const StyledAboutView = styled.div``;

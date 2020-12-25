import { Text } from '@geist-ui/react';
import styled from 'styled-components/macro';
import { withTranslation } from '../../i18n';

const Intro = ({ pageTitle, t }) => {
  return (
    <StyledIntro>
      <Text h2>{t(`${pageTitle}.title`)}</Text>
      <Text em p type="secondary" size="1.25rem">
        {t(`${pageTitle}.subtitle`)}
      </Text>
      <Text p size="100%">
        {t(`${pageTitle}.description`)}
      </Text>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

export default withTranslation('common')(Intro);

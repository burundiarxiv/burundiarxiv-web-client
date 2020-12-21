// import Link from 'next/link';
import { Button } from '@geist-ui/react';
import { i18n, Link, withTranslation } from '../../i18n';
import styled from 'styled-components/macro';

const Nav = ({ t }) => {
  console.log(i18n.language);
  return (
    <StyledNav>
      <div className="link">
        <ul>
          <li>
            <Link href="/">Données</Link>
          </li>
          <li>
            <Link href="/dashboard">Graphiques</Link>
          </li>
          <li>
            <Link href="/about">À Propos</Link>
          </li>
          <li>
            <Button
              onClick={() =>
                i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
              }
            >
              {t('change-locale')}
            </Button>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    margin-left: 0;
  }

  li {
    margin-bottom: none !important;
    flex: auto;
    text-align: center;
    &:not(:last-child) {
      margin-right: 10px;
    }

    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .logo {
      margin: 20px 0;
    }
  }
`;

export default withTranslation('common')(Nav);

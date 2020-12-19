import NextLink from 'next/link';
import styled from 'styled-components/macro';

export const Nav = () => {
  return (
    <StyledNav>
      <div className="link">
        <ul>
          <li>
            <NextLink href="/">
              <a>Données</a>
            </NextLink>
          </li>
          <li>
            <NextLink href="/dashboard">
              <a>Graphiques</a>
            </NextLink>
          </li>
          <li>
            <NextLink href="/about">
              <a>À Propos</a>
            </NextLink>
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

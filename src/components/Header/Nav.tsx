import NextLink from 'next/link';
import styled from 'styled-components/macro';

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NextLink href="/">
            <a>Home</a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/dashboard">
            <a>Dashboard</a>
          </NextLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    margin-left: 0;
  }

  li {
    margin-bottom: none !important;

    &:not(:last-child) {
      margin-right: 30px;
    }

    &::before {
      display: none;
    }
  }
`;

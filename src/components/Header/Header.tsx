import styled from 'styled-components/macro';
import { Intro } from './Intro';
import { Nav } from './Nav';
import { SearchInput } from './SearchInput';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <Intro />
        <SearchInput />
        <Nav />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  margin-bottom: 70px;

  .header-container {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }
`;

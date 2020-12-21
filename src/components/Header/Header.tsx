import styled from 'styled-components/macro';
import Intro from './Intro';
import { Nav } from './Nav';
import { SearchInput } from './SearchInput';

export const Header = ({ pageTitle }) => {
  return (
    <StyledHeader>
      <div className="header-container">
        <Nav />
        <Intro pageTitle={pageTitle} />
        {pageTitle === 'Home' && <SearchInput />}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  .header-container {
    max-width: 80%;
    margin: 0 auto;
  }
  .search-input-container {
    padding-bottom: 22px;
    margin: 0 200px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    .search-input-container {
      margin: 0;
      margin-top: 10px;
    }
  }
`;

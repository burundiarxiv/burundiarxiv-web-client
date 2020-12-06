import { useContext } from 'react';
import styled from 'styled-components/macro';
import { Link } from '@geist-ui/react';
// import { datasets } from 'mock/datasets';
import { Context } from 'context';

export const FeaturedCategories = () => {
  const {
    store: { relatedDatasets },
  } = useContext(Context);
  return (
    <StyledFeaturedCategories>
      <ul>
        {relatedDatasets.map(({ category }, index) => (
          <li key={index}>
            <Link href={`#${category}`} block>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </StyledFeaturedCategories>
  );
};

const StyledFeaturedCategories = styled.aside``;

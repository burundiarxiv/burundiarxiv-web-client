import styled from 'styled-components/macro';
import { Text, Link } from '@geist-ui/react';
import { datasets } from 'mock/datasets';

export const FeaturedCategories = () => {
  return (
    <StyledFeaturedCategories>
      <ul>
        {datasets.map(({ category }, index) => (
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

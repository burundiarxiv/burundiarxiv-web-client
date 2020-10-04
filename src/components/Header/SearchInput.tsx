import { Input } from '@geist-ui/react';
import Search from '@geist-ui/react-icons/search';

export const SearchInput = () => {
  return (
    <Input
      placeholder="Search for a database name"
      width="100%"
      size="large"
      clearable
      icon={<Search />}
    />
  );
};

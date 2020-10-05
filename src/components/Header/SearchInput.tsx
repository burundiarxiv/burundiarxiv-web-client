import { useContext } from 'react';
import { Input } from '@geist-ui/react';
import Search from '@geist-ui/react-icons/search';
import { Context } from 'context';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const SearchInput = () => {
  const { _, dispatch } = useContext(Context);

  const onChangeHandler = (event: ChangeEvent) => {
    const { value } = event.target;

    dispatch({ name: 'SEARCH', payload: { searchTerm: value } });
  };
  return (
    <Input
      placeholder="Search for a database name"
      width="100%"
      size="large"
      clearable
      icon={<Search />}
      onChange={onChangeHandler}
    />
  );
};

import { useContext } from 'react';
import { Input } from '@geist-ui/react';
import Search from '@geist-ui/react-icons/search';
import { Context } from 'context';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const SearchInput = () => {
  const {
    store: { datasets, searchTerm },

    dispatch,
  } = useContext(Context);

  const onChangeHandler = (event: ChangeEvent) => {
    const { value } = event.target;

    dispatch({
      name: 'SEARCH',
      payload: { searchTerm: value, datasets: datasets },
    });
  };

  return (
    <div className="search-input-container">
      <Input
        placeholder="Recherche"
        width="100%"
        size="large"
        clearable
        icon={<Search />}
        value={searchTerm}
        onChange={onChangeHandler}
      />
    </div>
  );
};

import { useContext } from 'react';
import { withTranslation } from '../../i18n';
import { Input } from '@geist-ui/react';
import Search from '@geist-ui/react-icons/search';
import { HomeContext } from 'context';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const SearchInput = ({ t }) => {
  const {
    store: { datasets, searchTerm },

    dispatch,
  } = useContext(HomeContext);

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
        // placeholder="Recherche"
        placeholder={t('search')}
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

export default withTranslation('common')(SearchInput);

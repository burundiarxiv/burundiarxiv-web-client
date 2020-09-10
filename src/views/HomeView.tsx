import { Fragment, useState, useRef } from 'react';
import {
  AutoComplete,
  Text,
  Link,
  Divider,
  Modal,
  Button,
} from '@geist-ui/react';
import { DocumentHead, Container } from 'components';
import { datasets } from 'mock/datasets';

export const HomeView = () => {
  const [modalState, setModalState] = useState(false);
  const [path, setPath] = useState('');
  const [options, setOptions] = useState([]);
  const [searching, setSearching] = useState(false);
  const timer = useRef();

  const allOptions = datasets.map((dataset) => {
    return dataset.data.map((item) => {
      const { name: value, path } = item;
      return { value, label: value, path };
    });
  });

  // triggered every time input
  const searchHandler = (currentValue) => {
    if (!currentValue) return setOptions([] as any);
    setSearching(true);

    const relatedOptions = allOptions
      .flat()
      .filter((item) =>
        item.value.toLowerCase().includes(currentValue.toLowerCase())
      );

    setOptions(relatedOptions as any);
    setSearching(false);
  };

  return (
    <Fragment>
      <DocumentHead />
      <Container>
        <Text className="logo" h1>
          Burundiarxiv
        </Text>
        <AutoComplete
          searching={searching}
          placeholder="Nom de la base de données"
          width="100%"
          size="large"
          options={options}
          onSearch={searchHandler}
        />

        <Text h2 style={{ margin: '30px 0', textAlign: 'center' }}>
          Catégories
        </Text>

        <div className="categories">
          {datasets.map(({ category, data }, dataIndex) => (
            <div className="category" key={dataIndex}>
              <Text h4>{category}</Text>
              {data.map(({ name, path }, i) => (
                <Text
                  key={dataIndex}
                  onClick={() => {
                    setModalState(true);
                    setPath(path);
                  }}
                >
                  <Link href="#" block>
                    {name}
                  </Link>
                </Text>
              ))}

              <Divider />
            </div>
          ))}
        </div>

        <Modal open={modalState} onClose={() => setModalState(false)}>
          <Modal.Title>Télécharger au format</Modal.Title>
          <Modal.Content style={{ textAlign: 'center' }}>
            <Button auto type="success" size="small">
              <Link href={path}>CSV</Link>
            </Button>
          </Modal.Content>
        </Modal>
      </Container>
    </Fragment>
  );
};

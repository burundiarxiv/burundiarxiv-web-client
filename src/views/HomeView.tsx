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
import { searchData } from 'mock/search';

export const HomeView = () => {
  const [modalState, setModalState] = useState(false);
  const [path, setPath] = useState('');

  const allOptions = searchData.map(({ name, path }) => {
    return { label: name, value: name };
  });

  const [options, setOptions] = useState();
  const [searching, setSearching] = useState(false);
  const timer = useRef();

  // triggered every time input
  const searchHandler = (currentValue) => {
    if (!currentValue) return setOptions([] as any);
    setSearching(true);

    const relatedOptions = allOptions.filter((item) =>
      item.value.includes(currentValue)
    );
    // this is mock async request
    // you can get data in any way
    timer.current && clearTimeout(timer.current);
    (timer as any).current = setTimeout(() => {
      setOptions(relatedOptions as any);
      setSearching(false);
      clearTimeout(timer.current);
    }, 1000);
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
          placeholder="Search data here"
          width="100%"
          size="large"
          options={options}
          onSearch={searchHandler}
        />

        <Text h2 style={{ margin: '30px 0', textAlign: 'center' }}>
          Categories
        </Text>

        <div className="categories">
          {datasets.map(({ category, data }, index) => (
            <div className="category" key={index}>
              <Text h4>{category}</Text>
              {data.map(({ name, path }, i) => (
                <Text
                  key={index}
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
          <Modal.Title>Download data in:</Modal.Title>
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

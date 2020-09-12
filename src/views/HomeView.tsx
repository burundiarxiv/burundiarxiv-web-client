import { Fragment, useState } from 'react';
import Search from '@geist-ui/react-icons/search';
import Highlighter from 'react-highlight-words';

import { Text, Link, Divider, Modal, Button, Input } from '@geist-ui/react';
import { DocumentHead, Container } from 'components';
import { datasets as database } from 'mock/datasets';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const HomeView = () => {
  const [modalState, setModalState] = useState(false);
  const [path, setPath] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [datasets, setDatasets] = useState(database);

  const handleChange = (event: ChangeEvent): void => {
    const { value } = event.target;

    setSearchTerm(value);

    let relatedDatasets = database
      .map((dataset) => {
        const filteredData = dataset.data.filter(({ name }) => {
          return name.toLowerCase().includes(value.toLowerCase());
        });

        return { category: dataset.category, data: filteredData };
      })
      // filter out datasets which has empty data
      .filter((dataset) => dataset.data.length !== 0);

    setDatasets(relatedDatasets);
  };

  return (
    <Fragment>
      <DocumentHead />
      <Container>
        <Text className="logo" h1>
          Burundi Open Data
        </Text>

        <Text style={{ margin: '30px 0', textAlign: 'center' }} p>
          Free and open access to global development data on Burundi
        </Text>
        <Input
          placeholder="Search for a database name"
          width="100%"
          size="large"
          clearable
          iconRight={<Search />}
          onChange={handleChange}
        />

        <Text h2 style={{ margin: '30px 0', textAlign: 'center' }}>
          Categories
        </Text>

        <div className="categories">
          {datasets.length !== 0 ? (
            datasets.map(({ category, data }, datasetIndex) => (
              <div className="category" key={datasetIndex}>
                <Text h4>{category}</Text>
                {data.map(({ name, path }, dataIndex) => (
                  <Text
                    key={dataIndex}
                    onClick={() => {
                      setModalState(true);
                      setPath(path);
                    }}
                  >
                    <Link href="#" block>
                      <Highlighter
                        highlightClassName="highlight"
                        searchWords={[searchTerm]}
                        autoEscape={true}
                        textToHighlight={name}
                      />
                    </Link>
                  </Text>
                ))}
                <Divider />
              </div>
            ))
          ) : (
            <Text style={{ textAlign: 'center', width: '100%' }}>
              No data found related to{' '}
              <span className="highlight" style={{ fontWeight: 'bolder' }}>
                {searchTerm}
              </span>
            </Text>
          )}
        </div>

        <Modal open={modalState} onClose={() => setModalState(false)}>
          <Modal.Title>Download data in</Modal.Title>
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

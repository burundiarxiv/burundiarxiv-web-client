import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import {
  Button,
  Divider,
  Link,
  Modal,
  Text,
  Table,
  Spacer,
} from '@geist-ui/react';
import Highlighter from 'react-highlight-words';
import { Context } from 'context';

export const AllDatasets = () => {
  const {
    store: { datasets, searchTerm },
  } = useContext(Context);

  const [modalState, setModalState] = useState(false);
  const [path, setPath] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const data = [
    {
      property: 'type',
      description: 'Content type',
      type: 'secondary | warning',
      default: '-',
    },
    {
      property: 'Component',
      description: 'DOM element to use',
      type: 'string',
      default: '-',
    },
    {
      property: 'bold',
      description: 'Bold style',
      type: 'boolean',
      default: 'true',
    },
  ];
  return (
    <StyledAllDatasets>
      {datasets.length ? (
        datasets.map(({ category, data }, datasetIndex) => (
          <div className="category" id={category} key={datasetIndex}>
            <Text h6>{category}</Text>
            {data.map(({ name, path }, dataIndex) => (
              <Text
                key={dataIndex}
                onClick={() => {
                  setModalState(true);
                  setPath(path);
                  setModalTitle(name);
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

      <Modal
        open={modalState}
        width="100rem"
        onClose={() => setModalState(false)}
      >
        <Modal.Title>{modalTitle}</Modal.Title>
        <Modal.Content style={{ textAlign: 'center' }}>
          <Table data={data}>
            <Table.Column prop="property" label="property" />
            <Table.Column prop="description" label="description" />
            <Table.Column prop="type" label="type" />
            <Table.Column prop="default" label="default" />
          </Table>
        </Modal.Content>
        <Modal.Action passive onClick={() => setModalState(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>
          <Link href={path} download icon color>
            Download in CSV
          </Link>
        </Modal.Action>
      </Modal>
    </StyledAllDatasets>
  );
};

const StyledAllDatasets = styled.div``;

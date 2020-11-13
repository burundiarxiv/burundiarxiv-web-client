import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Divider, Link, Modal, Text } from '@geist-ui/react';
import Highlighter from 'react-highlight-words';
import { Context } from 'context';

export const AllDatasets = () => {
  const {
    store: { datasets, searchTerm },
  } = useContext(Context);

  const [modalState, setModalState] = useState(false);
  const [path, setPath] = useState('');

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

      <Modal open={modalState} onClose={() => setModalState(false)}>
        <Modal.Title>Download data in</Modal.Title>
        <Modal.Content style={{ textAlign: 'center' }}>
          <Button auto type="success" size="small">
            <Link href={path} download>
              CSV
            </Link>
          </Button>
        </Modal.Content>
      </Modal>
    </StyledAllDatasets>
  );
};

const StyledAllDatasets = styled.div``;

import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import { Divider, Link, Modal, Text, Table } from '@geist-ui/react';
import Highlighter from 'react-highlight-words';
import { Context } from 'context';

export const AllDatasets = () => {
  const {
    store: { datasets, searchTerm },
  } = useContext(Context);

  const [modalState, setModalState] = useState(false);
  const [path, setPath] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState({
    headers: [],
    rows: [],
    source: '',
  });

  const fetchModalData = () => {
    fetch(
      'https://raw.githubusercontent.com/burundiarxiv/datasets/master/json/isteebu-annuaire-2018-6-07.json'
    )
      .then((response) => response.json())
      .then(({ headers, rows, source }) => {
        setModalData({
          headers: headers,
          rows: rows,
          source: source,
        });
      });
  };

  const tableColumns = (
    <>
      {modalData.headers.map((column, index) => (
        <Table.Column prop={column} label={column} key={`${column}-${index}`} />
      ))}
    </>
  );

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
                  fetchModalData();
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
          <Table data={modalData.rows}>{tableColumns}</Table>
          <Text
            p
            style={{ textAlign: 'left', fontSize: '12px', fontStyle: 'italic' }}
          >
            Source: {modalData.source}
          </Text>
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

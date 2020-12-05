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
  const [modalData, setModalData] = useState([]);
  const [modalColumns, setModalColumns] = useState([]);

  const getData = () => {
    fetch(
      'https://raw.githubusercontent.com/burundiarxiv/datasets/master/json/isteebu-annuaire-2018-6-07.json'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setModalData(data.data.slice(0, 1));
        setModalColumns(data.headers);
      });
  };

  const tableColumns = (
    <>
      {modalColumns.map((column, index) => (
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
                  getData();
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
          <Table data={modalData}>
            {tableColumns}
            {/* <Table.Column prop="id_tableau" label="id_tableau" />
            <Table.Column prop="titre_tableau" label="titre_tableau" />
            <Table.Column prop="source" label="source" />
            <Table.Column prop="categorie" label="categorie" />
            <Table.Column prop="sous_categorie" label="sous_categorie" />
            <Table.Column prop="2002" label="2002" />
            <Table.Column prop="2006" label="2006" />
            <Table.Column prop="2008" label="2008" />
            <Table.Column prop="2014" label="2014" /> */}
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

import React, { ReactNode, useEffect } from 'react';
import { datasets as database } from 'mock/datasets';
import { searchActionHandler } from './search.action';

/**
 * Types
 ************************************************/
export type Store = {
  datasets: typeof database;
  relatedDatasets: typeof database;
  searchTerm: string;
};

interface Provider {
  children: ReactNode;
}

interface Action {
  name: string;
  payload?: any;
}

/**
 * Initial state/store
 ************************************************/
const initialStore: Store = {
  datasets: [],
  searchTerm: '',
  relatedDatasets: [],
};

/**
 * Setup the reducer
 * @param state
 * @param action
 ************************************************/
const reducer = (store: Store, action: Action): Store => {
  switch (action.name) {
    case 'SEARCH':
      return searchActionHandler(action.payload);
    case 'FETCH_SUCCESS':
      return {
        datasets: action.payload,
        relatedDatasets: action.payload,
        searchTerm: '',
      };
    default:
      return store;
  }
};

/**
 * Create the context
 * and the store provider
 */
export const Context = React.createContext<Store | any>(initialStore);

export const StoreProvider = ({ children }: Provider): JSX.Element => {
  const [store, dispatch] = React.useReducer(reducer, initialStore);

  useEffect(() => {
    const fetchDatasets = async () => {
      await fetch(
        'https://raw.githubusercontent.com/burundiarxiv/datasets/master/json/isteebu-annuaire-2018-6-07.json'
      )
        .then((response) => response.json())
        .then((data) => dispatch({ name: 'FETCH_SUCCESS', payload: database }));
    };

    fetchDatasets();
  }, []);

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
};

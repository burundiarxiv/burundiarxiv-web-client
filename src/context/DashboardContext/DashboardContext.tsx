import React, { ReactNode, useState, useEffect } from 'react';

interface Provider {
  children: ReactNode;
}

export const DashboardContext = React.createContext<any>({});

export const DashboardProvider = ({ children }: Provider): JSX.Element => {
  const [tabsContent, setTabsContent] = useState({
    pays: {
      label: 'Pays',
      sections: [],
    },
    provinces: {
      label: 'Provinces',
      sections: [],
    },
    commune: {
      label: 'Communes',
      sections: [],
    },
  });

  useEffect(() => {
    const fetchTabsContent = async () => {
      await fetch('/dashboard.json')
        .then((response) => response.json())
        .then((data) => setTabsContent(data));
    };

    fetchTabsContent();
  }, []);

  return (
    <DashboardContext.Provider value={{ tabsContent }}>
      {children}
    </DashboardContext.Provider>
  );
};

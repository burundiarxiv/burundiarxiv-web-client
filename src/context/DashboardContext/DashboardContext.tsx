import React, { ReactNode, useState, useEffect } from 'react';

interface Provider {
  children: ReactNode;
}

export const DashboardContext = React.createContext<any>({});

export const DashboardProvider = ({ children }: Provider): JSX.Element => {
  const [tabsContent, setTabsContent] = useState({
    pays: {
      label: 'country',
      sections: [],
    },
    provinces: {
      label: 'provinces',
      sections: [],
    },
    commune: {
      label: 'communes',
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

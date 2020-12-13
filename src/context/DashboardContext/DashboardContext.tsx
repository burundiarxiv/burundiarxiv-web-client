import React, { ReactNode, useState, useEffect } from 'react';

interface Provider {
  children: ReactNode;
}

export const DashboardContext = React.createContext<any>({});

export const DashboardProvider = ({ children }: Provider): JSX.Element => {
  const [tabsContent, setTabsContent] = useState({
    general: {
      label: 'Général',
      sections: [],
    },
  });

  useEffect(() => {
    const fetchtabsContent = async () => {
      await fetch('/dashboard.json')
        .then((response) => response.json())
        .then((data) => setTabsContent(data));
    };

    fetchtabsContent();
  }, []);

  return (
    <DashboardContext.Provider value={{ tabsContent }}>
      {children}
    </DashboardContext.Provider>
  );
};

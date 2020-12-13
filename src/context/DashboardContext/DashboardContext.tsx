import React, { ReactNode, useState, useEffect } from 'react';

interface Provider {
  children: ReactNode;
}

export const DashboardContext = React.createContext<any>({});

export const DashboardProvider = ({ children }: Provider): JSX.Element => {
  const [tabsContent, setTabsContent] = useState({});

  const doughnutData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [400, 300, 34],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  useEffect(() => {
    const fetchtabsContent = async () => {
      await fetch(
        'https://raw.githubusercontent.com/burundiarxiv/datasets/master/json/datasets.json'
      )
        .then((response) => response.json())
        .then((data) => {
          setTabsContent({
            general: {
              label: 'Général',
              sections: [
                {
                  title: 'POPULATION',
                  graphs: [
                    {
                      title: 'Population par âge et par sexe dans les communes',
                      data: doughnutData,
                      type: 'Doughnut',
                    },
                  ],
                },
              ],
            },
          });
        });
    };

    fetchtabsContent();
  }, []);

  return (
    <DashboardContext.Provider value={{ tabsContent }}>
      {children}
    </DashboardContext.Provider>
  );
};

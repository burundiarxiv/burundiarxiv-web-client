import React, { ReactNode, useEffect } from 'react';
// import { Doughnut, Line, Bubble, Radar } from 'react-chartjs-2';
import { Text, Grid, Card, Link, Note, Tabs, Collapse } from '@geist-ui/react';

interface Provider {
  children: ReactNode;
}

// interface Tab {
//   label: string;
//   name: string;
//   sections: { title: string; content: JSX.Element }[];
// }

// const defaultTabs = [
//   {
//     label: 'Général',
//     name: 'general',
//     sections: [{ title: '', graphs: [{ title: '', data: {}, type: '' }] }],
//   },
//   {
//     label: 'Provinces',
//     name: 'provinces',
//     sections: [{ title: '', graphs: [{ title: '', data: {}, type: '' }] }],
//   },
//   {
//     label: 'Communes',
//     name: 'communes',
//     sections: [{ title: '', graphs: [{ title: '', data: {}, type: '' }] }],
//   },
// ];

// export const Context = React.createContext<Store | any>(initialStore);
export const DashboardContext = React.createContext<any>({});

export const DashboardProvider = ({ children }: Provider): JSX.Element => {
  // useEffect(() => {
  //   const fetchDatasets = async () => {
  //     await fetch(
  //       'https://raw.githubusercontent.com/burundiarxiv/datasets/master/json/datasets.json'
  //     )
  //       .then((response) => response.json())
  //       .then((data) => console.log({ data }));
  //   };

  //   fetchDatasets();
  // }, []);

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

  // const generalCategories = [
  //   {
  //     title: 'POPULATION',
  //     graphs: [
  //       {
  //         title: 'Population par âge et par sexe dans les communes',
  //         data: doughnutData,
  //         type: Doughnut,
  //       },
  //     ],
  //   },
  // ];

  // const Item = ({ Component, data, title }) => {
  //   return (
  //     <Card className="card">
  //       <Text h6 style={{ marginBottom: '0' }}>
  //         {title}
  //       </Text>
  //       <Component data={data} />
  //       <Card.Footer>
  //         <Link block target="_blank" href="#">
  //           Téléchager au format CSV
  //         </Link>
  //       </Card.Footer>
  //     </Card>
  //   );
  // };

  // const generalSections = generalCategories.map(({ title, graphs }) => ({
  //   title,
  //   content: (
  //     <div className="grid">
  //       <Grid.Container gap={5} justify="center">
  //         {graphs.map(({ title, data, type }, index) => (
  //           <Grid xs={24} sm={24} md={24} key={`${title}-${index}`}>
  //             <Item Component={type} data={data} title={title} />
  //           </Grid>
  //         ))}
  //       </Grid.Container>
  //     </div>
  //   ),
  // }));

  const tabsContent = {
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
  };

  return (
    <DashboardContext.Provider value={{ tabsContent }}>
      {children}
    </DashboardContext.Provider>
  );
};

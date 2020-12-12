import React, { useContext } from 'react';
import { Tabs } from '@geist-ui/react';
import { DashboardTab } from 'components';
import { DashboardContext } from 'context';

export const DashboardTabs = () => {
  const { tabsContent } = useContext(DashboardContext);

  return (
    <Tabs initialValue="0">
      {Object.keys(tabsContent).map((name, index) => (
        <DashboardTab
          name={name}
          value={index.toString()}
          key={`${name}-${index}`}
        />
      ))}
    </Tabs>
  );
};

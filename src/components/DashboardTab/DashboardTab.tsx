import React, { useContext } from 'react';
import { Tabs, Collapse } from '@geist-ui/react';
import { SectionTab } from 'components';
import { DashboardContext } from 'context';

export const DashboardTab = ({ name, value }) => {
  const { tabsContent } = useContext(DashboardContext);
  const { label, sections } = tabsContent[name];

  return (
    <Tabs.Item label={label} value={value}>
      <Collapse.Group>
        {sections.map(({ title, graphs }, index) => (
          <SectionTab title={title} graphs={graphs} key={`${title}-${index}`} />
        ))}
      </Collapse.Group>
    </Tabs.Item>
  );
};

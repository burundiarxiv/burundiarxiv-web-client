import { Tabs, Collapse } from '@geist-ui/react';

import { SectionTab } from 'components';

export const DashboardTab = ({ label, sections, position }) => {
  return (
    <Tabs.Item label={label} value={position}>
      <Collapse.Group>
        {sections.map(({ title, content }) => (
          <SectionTab title={title} content={content} />
        ))}
      </Collapse.Group>
    </Tabs.Item>
  );
};

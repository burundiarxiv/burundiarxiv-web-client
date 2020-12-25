import React, { useContext } from 'react';
import { withTranslation } from '../../i18n';
import { Tabs, Collapse } from '@geist-ui/react';
import { SectionTab } from 'components';
import { DashboardContext } from 'context';

export const DashboardTab = ({ name, value, t }) => {
  const { tabsContent } = useContext(DashboardContext);
  const { label, sections } = tabsContent[name];

  return (
    <Tabs.Item label={t(label)} value={value}>
      <Collapse.Group>
        {sections.map(({ title, subtitle, graphs }, index) => (
          <SectionTab
            title={title}
            subtitle={subtitle}
            graphs={graphs}
            key={`${title}-${index}`}
          />
        ))}
      </Collapse.Group>
    </Tabs.Item>
  );
};

export const DashboardTabTranslated = withTranslation('common')(DashboardTab);

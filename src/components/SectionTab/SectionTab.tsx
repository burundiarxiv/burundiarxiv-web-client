import { Collapse } from '@geist-ui/react';

export const SectionTab = ({ title, content }) => {
  return (
    <Collapse title={title} shadow>
      {content}
    </Collapse>
  );
};

import { withTranslation } from '../../i18n';
import { Grid, Collapse } from '@geist-ui/react';
import { Graph } from 'components';

const SectionTab = ({ title, subtitle, graphs, t }) => {
  return (
    <Collapse title={t(title)} subtitle={subtitle} shadow>
      <div className="grid">
        <Grid.Container gap={5} justify="center">
          {graphs.map(({ title, data, type, source }, index) => (
            <Graph
              title={title}
              data={data}
              type={type}
              source={source}
              key={`${title}-${index}`}
            />
          ))}
        </Grid.Container>
      </div>
    </Collapse>
  );
};

export const SectionTabTranslated = withTranslation('common')(SectionTab);

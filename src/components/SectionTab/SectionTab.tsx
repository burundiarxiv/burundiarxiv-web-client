import { Grid, Collapse } from '@geist-ui/react';
import { Graph } from 'components';

export const SectionTab = ({ title, graphs }) => {
  return (
    <Collapse title={title} shadow>
      <div className="grid">
        <Grid.Container gap={5} justify="center">
          {graphs.map(({ title, data, type }, index) => (
            <Graph
              title={title}
              data={data}
              type={type}
              key={`${title}-${index}`}
            />
          ))}
        </Grid.Container>
      </div>
    </Collapse>
  );
};

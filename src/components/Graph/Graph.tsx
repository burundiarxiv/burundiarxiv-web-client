import { Doughnut, Line, Bubble, Radar } from 'react-chartjs-2';
import { Text, Grid, Card, Link } from '@geist-ui/react';

const componentMap = {
  Doughnut: Doughnut,
  Line: Line,
  Bubble: Bubble,
  Radar: Radar,
};

const Item = ({ componentName, data, title }) => {
  const Component = componentMap[componentName];
  return (
    <Card className="card">
      <Text h6 style={{ marginBottom: '0' }}>
        {title}
      </Text>
      <Component data={data} />
      <Card.Footer>
        <Link block target="_blank" href="#">
          Téléchager au format CSV
        </Link>
      </Card.Footer>
    </Card>
  );
};

export const Graph = ({ title, data, type }) => {
  return (
    <Grid xs={24} sm={24} md={24}>
      <Item componentName={type} data={data} title={title} />
    </Grid>
  );
};

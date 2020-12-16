import { Doughnut, Line, Bubble, Radar, HorizontalBar } from 'react-chartjs-2';
import { Text, Grid, Card, Link } from '@geist-ui/react';

const componentMap = {
  Doughnut: Doughnut,
  Line: Line,
  Bubble: Bubble,
  Radar: Radar,
  HorizontalBar: HorizontalBar,
};

const Item = ({ componentName, data, title, source }) => {
  const Component = componentMap[componentName];
  return (
    <Card className="card">
      <Text h5 style={{ marginBottom: '0' }}>
        {title}
      </Text>
      <Component data={data} />
      <Card.Footer>
        <Text p em>
          Source: {source}
        </Text>
        {/* <Link block href="#"> */}
        {/* Téléchager au format CSV */}
        {/* </Link> */}
      </Card.Footer>
    </Card>
  );
};

export const Graph = ({ title, data, type, source }) => {
  return (
    <Grid xs={24} sm={24} md={24}>
      <Item componentName={type} data={data} title={title} source={source} />
    </Grid>
  );
};

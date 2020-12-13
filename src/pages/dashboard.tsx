import { DashboardView } from 'views';
import { DashboardProvider } from 'context';

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <DashboardView />
    </DashboardProvider>
  );
};

export default DashboardPage;

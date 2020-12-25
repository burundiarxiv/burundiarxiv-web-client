import { DashboardView } from 'views';
import { DashboardProvider } from 'context';
import { i18n, withTranslation } from '../i18n';

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <DashboardView />
    </DashboardProvider>
  );
};

DashboardPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(DashboardPage);

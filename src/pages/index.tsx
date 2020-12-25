import { HomeView } from 'views';
import { withTranslation } from '../i18n';

const HomePage = () => <HomeView />;

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(HomePage);

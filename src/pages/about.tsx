import { i18n, withTranslation } from '../i18n';
import { AboutView } from 'views';

const AboutPage = () => <AboutView />;

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(AboutPage);

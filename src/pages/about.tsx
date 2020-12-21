import { i18n, withTranslation } from '../i18n';
import { AboutView } from 'views';

const AboutPage = () => <AboutView />;

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'intro'],
});

// AboutPage.propTypes = {
//   t: PropTypes.func.isRequired,
// };

export default withTranslation('common')(AboutPage);

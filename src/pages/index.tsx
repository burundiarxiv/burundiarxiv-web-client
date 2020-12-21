import { HomeView } from 'views';
import { i18n, withTranslation } from '../i18n';

const HomePage = () => <HomeView />;

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'intro'],
});

// HomePage.propTypes = {
//   t: PropTypes.func.isRequired,
// };

export default withTranslation('common')(HomePage);

// export default HomePage;

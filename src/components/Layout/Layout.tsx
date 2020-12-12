import { ReactNode } from 'react';
import { Header, DocumentHead } from 'components';
import { MainContent } from './MainContent';
import { Page, Text } from '@geist-ui/react';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <div className="layout-page">
      <DocumentHead title={pageTitle} />
      <Page size="large" dotBackdrop>
        <Page.Header>
          <Header pageTitle={pageTitle} />
        </Page.Header>
        <Page.Content>
          <MainContent>{children}</MainContent>
        </Page.Content>
        <Page.Footer>
          <Text p style={{ textAlign: 'center' }}>
            © Burundiarxiv 2020
          </Text>
        </Page.Footer>
      </Page>
    </div>
  );
};

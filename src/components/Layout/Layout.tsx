import { ReactNode } from 'react';

import { Header, DocumentHead } from 'components';
import { MainContent } from './MainContent';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <div className="layout-page">
      <DocumentHead title={pageTitle} />
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  );
};

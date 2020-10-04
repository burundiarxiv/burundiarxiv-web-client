import { ReactNode } from 'react';
import { Page } from '@geist-ui/react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <main>{children}</main>
    </div>
  );
};

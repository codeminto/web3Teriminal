import React from 'react';
import { useTheme } from '../../utils/themeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

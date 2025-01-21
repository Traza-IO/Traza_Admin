import React from 'react';
// import Sidebar from './ui/sidebar';
import { FiBarChart2, FiHome, FiSettings, FiUser } from 'react-icons/fi';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const links = [
    { name: 'Inicio', icon: FiHome, path: '/' },
    { name: 'Perfil', icon: FiUser, path: '/profile' },
    { name: 'Dashboard', icon: FiBarChart2, path: '/dashboard' },
    { name: 'Configuración', icon: FiSettings, path: '/settings' },
  ];
  return (
    <div>
      <div>
        <div>{/* <Sidebar links={links} /> */}</div>
        <div>
          <div>{children}</div>
        </div>
      </div>
      <div>© 2025 Mi Proyecto. Todos los derechos reservados.</div>
    </div>
  );
};

export default Layout;

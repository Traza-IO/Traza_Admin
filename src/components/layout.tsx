import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react';
import Sidebar from './ui/sidebar';
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
    <Box minH="100vh" bg="gray.100">
      <Grid templateColumns="240px 1fr">
        <GridItem>
          <Sidebar links={links} />
        </GridItem>
        <GridItem>
          <Box as="main" p={8} minH="100vh">
            {children}
          </Box>
        </GridItem>
      </Grid>
      <Flex as="footer" bg="teal.600" color="white" p={4} justify="center">
        © 2025 Mi Proyecto. Todos los derechos reservados.
      </Flex>
    </Box>
  );
};

export default Layout;

import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Heading>Bienvenido</Heading>
        <Text mt={4}>Esta es la página principal de tu aplicación.</Text>
      </Box>
    </Layout>
  );
};

export default HomePage;

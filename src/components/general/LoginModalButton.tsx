import React, { useState } from 'react';
import { Button, VStack, Text } from '@chakra-ui/react';
import { getPrincipalFromAuthClient } from '../../services/authService';

const LoginModalButton: React.FC = () => {
  const [principal, setPrincipal] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const userPrincipal = await getPrincipalFromAuthClient();
      setPrincipal(userPrincipal);
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  return (
    <VStack gap={4}>
      <Button colorScheme="teal" size="lg" onClick={handleLogin}>
        {principal ? 'Conectado con NFID' : 'Iniciar sesión con NFID'}
      </Button>
      {principal && <Text>Principal: {principal}</Text>}
    </VStack>
  );
};

export default LoginModalButton;

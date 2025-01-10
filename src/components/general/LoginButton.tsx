import React, { useState } from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';
import { getIdentity } from '../../services/authService';

const LoginButton: React.FC = () => {
  const [principal, setPrincipal] = useState<string | null>(null);

  const handleLogin = async () => {
    const userPrincipal = await getIdentity();
    setPrincipal(userPrincipal);
  };

  return (
    <VStack gap={4}>
      <Button colorScheme="teal" size="lg" onClick={handleLogin}>
        {principal ? 'Conectado' : 'Iniciar sesión con NFID'}
      </Button>
      {principal && <Text>Principal: {principal}</Text>}
    </VStack>
  );
};

export default LoginButton;

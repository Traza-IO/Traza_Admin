import React, { useState } from 'react';
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
    <div>
      <button onClick={handleLogin}>
        {principal ? 'Conectado con NFID' : 'Iniciar sesión con NFID'}
      </button>
      {principal && <p>Principal: {principal}</p>}
    </div>
  );
};

export default LoginModalButton;

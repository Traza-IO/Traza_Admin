import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import { idlFactory, canisterId } from './declarations/backend';
import AppRoutes from './router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <AppRoutes />
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);

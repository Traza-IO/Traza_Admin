import { AuthClient } from '@dfinity/auth-client';

const nfidProvider = 'https://nfid.one/authenticate';

export const createAuthClientWithModal = async (): Promise<AuthClient> => {
  const authClient = await AuthClient.create();
  console.log('authClient.isAuthenticated()', authClient.isAuthenticated());
  console.log('boolean', authClient.isAuthenticated());
  if (!authClient.isAuthenticated()) {
    await new Promise<void>((resolve) => {
      authClient.login({
        identityProvider: nfidProvider,
        onSuccess: () => resolve(),
        windowOpenerFeatures: 'width=400,height=700',
      });
    });
  }

  return authClient;
};

export const getPrincipalFromAuthClient = async (): Promise<string | null> => {
  const authClient = await createAuthClientWithModal();
  const identity = authClient.getIdentity();
  return identity.getPrincipal().toText();
};

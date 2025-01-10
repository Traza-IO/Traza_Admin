import { AuthClient } from '@dfinity/auth-client';

const nfidProvider = 'https://nfid.one/authenticate';

export const createAuthClient = async (): Promise<AuthClient> => {
  const authClient = await AuthClient.create();

  if (!authClient.isAuthenticated()) {
    await new Promise<void>((resolve) => {
      authClient.login({
        identityProvider: nfidProvider, // URL de NFID
        onSuccess: () => resolve(),
      });
    });
  }
  console.log('authClient', authClient);
  return authClient;
};

export const getIdentity = async (): Promise<string | null> => {
  const authClient = await createAuthClient();
  const identity = authClient.getIdentity();
  return identity.getPrincipal().toText();
};

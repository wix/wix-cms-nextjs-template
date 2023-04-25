import { createClient, OAuthStrategy } from '@wix/api-client';
import { dataItems } from '@wix/data-items';
export const getWixClient = async () => {
  const wixClient = createClient({
    modules: { dataItems },
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  });
  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);
  return wixClient;
};

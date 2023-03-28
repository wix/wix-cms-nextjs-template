import { createClient, OAuthStrategy } from '@wix/api-client';
import { data } from '@wix/data-backend-public-sdk-poc';
export const getWixClient = async () => {
  const wixClient = createClient({
    modules: { data },
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  });
  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);
  return wixClient;
};

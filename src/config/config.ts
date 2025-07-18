import { ThemeType } from '../themes/types';

interface Config {
  defaultTheme: ThemeType;
  okta: {
    domain: string;
    clientId: string;
    issuer: string;
    redirectUri: string;
  };
}

const config: Config = {
  defaultTheme: 'retail',
  okta: {
    domain: process.env.REACT_APP_OKTA_DOMAIN || '',
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID || '',
    issuer: process.env.REACT_APP_OKTA_ISSUER || '',
    redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URI || `${window.location.origin}/login/callback`
  }
};

export default config; 
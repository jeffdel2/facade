import { ThemeType } from '../themes/types';

interface Config {
  defaultTheme: ThemeType;
  auth0: {
    domain: string;
    clientId: string;
    mgmtDomain: string;
    audience: string;
  };
}

const config: Config = {
  defaultTheme: 'retail',
  auth0: {
    domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
    mgmtDomain: process.env.REACT_APP_AUTH0_MGMT_DOMAIN || '',
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
    audience: process.env.REACT_APP_AUTH0_AUDIENCE || ''
  }
};

export default config; 
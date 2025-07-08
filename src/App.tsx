import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from './themes/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Rewards from './pages/Rewards';
import Stores from './pages/Stores';
import config from './config/config';

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain={config.auth0.domain}
      clientId={config.auth0.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        //audience: `https://${config.auth0.mgmtDomain}/api/v2/`,
        //audience: `https://${config.auth0.mgmtDomain}/api/v2/`,
        audience: `https://my-portal.cic-demo-platform.auth0app.com/api/v2/`,
        scope: 'openid profile email read:current_user update:current_user_metadata'
      }}
    >
      <ThemeProvider initialThemeType={config.defaultTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="rewards" element={<Rewards />} />
              <Route path="products" element={<Products />} />
              <Route path="stores" element={<Stores />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default App;

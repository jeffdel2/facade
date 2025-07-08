import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from './themes/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import config from './config/config';

// Lazy load pages for code splitting
const Profile = lazy(() => import('./pages/Profile'));
const Products = lazy(() => import('./pages/Products'));
const Rewards = lazy(() => import('./pages/Rewards'));
const Stores = lazy(() => import('./pages/Stores'));

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
              <Route path="profile" element={
                <Suspense fallback={<div>Loading Profile...</div>}>
                  <Profile />
                </Suspense>
              } />
              <Route path="rewards" element={
                <Suspense fallback={<div>Loading Rewards...</div>}>
                  <Rewards />
                </Suspense>
              } />
              <Route path="products" element={
                <Suspense fallback={<div>Loading Products...</div>}>
                  <Products />
                </Suspense>
              } />
              <Route path="stores" element={
                <Suspense fallback={<div>Loading Stores...</div>}>
                  <Stores />
                </Suspense>
              } />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default App;

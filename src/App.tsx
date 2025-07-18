import React, { Suspense, lazy, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { ThemeProvider } from './themes/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import SecureRoute from './components/SecureRoute';
import config from './config/config';

// Lazy load pages for code splitting
const Profile = lazy(() => import('./pages/Profile'));
const Products = lazy(() => import('./pages/Products'));
const Rewards = lazy(() => import('./pages/Rewards'));
const Stores = lazy(() => import('./pages/Stores'));

const App: React.FC = () => {
  const oktaAuth = useMemo(() => new OktaAuth({
    issuer: config.okta.issuer,
    clientId: config.okta.clientId,
    redirectUri: config.okta.redirectUri,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    responseType: ['code'],
    tokenManager: {
      autoRenew: true,
      autoRemove: true
    },
    postLogoutRedirectUri: window.location.origin
  }), []);

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
    console.log('Restoring original URI:', originalUri);
    window.location.replace(originalUri);
  };

  // Check for existing session on app load
  React.useEffect(() => {
    const checkSession = async () => {
      try {
        console.log('App: Checking for existing session...');
        const isAuthenticated = await oktaAuth.isAuthenticated();
        console.log('App: Session check result:', isAuthenticated);
        
        if (isAuthenticated) {
          try {
            const user = await oktaAuth.getUser();
            console.log('App: User found:', user);
          } catch (userError) {
            console.error('App: Error getting user:', userError);
          }
        }
      } catch (error) {
        console.error('App: Session check error:', error);
      }
    };
    
    checkSession();
  }, [oktaAuth]);

  // Debug logging
  console.log('Okta Config:', {
    issuer: config.okta.issuer,
    clientId: config.okta.clientId,
    redirectUri: config.okta.redirectUri
  });

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <ThemeProvider initialThemeType={config.defaultTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login/callback" element={<LoginCallback />} />
              <Route path="profile" element={
                <SecureRoute>
                  <Suspense fallback={<div>Loading Profile...</div>}>
                    <Profile />
                  </Suspense>
                </SecureRoute>
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
    </Security>
  );
};

export default App;

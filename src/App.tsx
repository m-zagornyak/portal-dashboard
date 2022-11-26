import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AuthPage, DocsPage, PremiumPage } from '@pages';
import { Layout } from '@common/Layout/Layout';
import { ROUTES } from '@utils/contexts';

export const AuthApp = () => {
  <Routes>
    <Route path={ROUTES.AUTH} element={<AuthPage />} />
  </Routes>
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DOCS} element={<DocsPage />} />
          <Route path={ROUTES.PREMIUM} element={<PremiumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Router from '@/router';
import AuthRoute from '@/router/auth';

const App = () => {
  return (
    <HashRouter>
      <AuthRoute>
        <Router />
      </AuthRoute>
    </HashRouter>
  );
};

export default App;

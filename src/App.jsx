import React, { Suspense } from 'react';
import {
  HashRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import Layout from './containers/Layout';

import { ThemeProvider } from './hooks/useTheme';
import { CancidateListProvider } from './hooks/useCandidateList';

import './tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import routes from '~/src/routes';

const App = () => (
  <ThemeProvider>
    <CancidateListProvider>
      <Router>
        <Layout dark>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              {routes.map(({ component, ...route }, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  component={component}
                  exact={route.exact}
                  name={route.name}
                />
              ))}
              <Redirect to={'/'} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </CancidateListProvider>
  </ThemeProvider>
);

export default App;

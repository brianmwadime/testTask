import React, { lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import Providers from '@components/Providers';

const MainPage = lazy(() => import('@containers/MainPage'));

import { PATH_INDEX } from '@constants/routes.constants';

import 'react-loading-skeleton/dist/skeleton.css';


const App = () => {
  return (
    <Suspense fallback={<div/>}>
      <BrowserRouter>
        <Providers>
          <Routes>
            <Route index path={PATH_INDEX} element={<MainPage />} />
          </Routes>
        </Providers>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

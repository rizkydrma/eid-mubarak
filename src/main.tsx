import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BGPallete } from './assets/images';
import HomePage from './pages/HomePage';
import './styles/main.css';
import EidMubarak from './pages/EidMubarak';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/eid-mubarak',
    element: <EidMubarak />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-gradient-to-tr from-orange-50 to-orange-100 fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-between items-center w-full overflow-hidden">
      <div className="absolute top-0 right-0 left-0 bottom-0 z-0">
        <img
          src={BGPallete}
          alt="pallete background"
          className="opacity-10 h-[100%]"
        />
      </div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

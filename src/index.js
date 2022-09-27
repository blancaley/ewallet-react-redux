import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { 
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import LayoutRoot from './routes/LayoutRoot/LayoutRoot';
import CardsPage from './routes/CardsPage';
import AddCardPage from './routes/AddCardPage';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  // Redirect on the initial render in the client
  // When someone visits /, they will automatically be redirected to /cards
  {
    path: "/",
    element: <Navigate replace to="/cards" />,
  },
  {
    element: <LayoutRoot/>,
    children: [
      {
        path: "/cards",
        element: <CardsPage />
      },
      {
        path: "/addcard",
        element: <AddCardPage/>
      }
    ]
  }
])

root.render(
    <ReduxProvider store={store}>
      <RouterProvider router={router}/>
    </ReduxProvider>
);

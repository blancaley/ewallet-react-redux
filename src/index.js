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
import Cards from './routes/Cards';
import AddCard from './routes/AddCard';

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
        element: <Cards />
      },
      {
        path: "/addcard",
        element: <AddCard/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router}/>
    </ReduxProvider>
  </React.StrictMode>
);

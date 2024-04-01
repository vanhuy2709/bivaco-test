import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import React Router Dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import React Redux Store
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

// Import Utils
import ScrollToTop from './utils/ScrollToTop.js';

// Import Page
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import ShopCartPage from './pages/ShopCartPage/ShopCartPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ResultPage from './pages/ResultPage/ResultPage';

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/shop',
        element: <ShopPage />
      },
      {
        path: '/shop/:id',
        element: <DetailProductPage />
      },
      {
        path: '/cart',
        element: <ShopCartPage />
      },
      {
        path: '/cart/success',
        element: <ResultPage />
      },
      {
        path: '/signup',
        element: <RegisterPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
    ]
  }
])

// Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

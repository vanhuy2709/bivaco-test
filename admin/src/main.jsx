import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import React Router Dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import React Redux Store
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

// Import Page
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: (<App />),
    children: [
      {
        index: true,
        element: <Product />
      },
      {
        path: '/create-product',
        element: <CreateProduct />
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

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import HomePage from './pages/Home.page';
import ShopPage from './pages/Shop.page';
import CartPage from './pages/Cart.page';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';
import ProductDetailsPage from './pages/ProductDetails.page';
import LayoutComponent from './components/Layout.component';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutComponent />,
    children:[
      {
        index:true,
    element:<HomePage />
      },
      {
        path:"shop",
    element:<ShopPage />
      },
      {
        path:"cart",
    element:<CartPage />
      },
    ],
  },
      {
        path:"login",
    element:<LoginPage />
      },
      {
        path:"register",
    element:<RegisterPage />
      },
      {
        path:"product",
    element:<ProductDetailsPage/>
      }
    
  
]);

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

const App=()=>{
  return <RouterProvider router={router}/>
}

export default App;

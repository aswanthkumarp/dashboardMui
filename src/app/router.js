import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import { DashboardPage } from './pages/dashboard';
import { SignInPage } from './pages/Signin';
import { ProductsPage } from './pages/products';
import { OrdersPage } from './pages/orders';
import { SettingsPage } from './pages/settings';


export default  function router() {
  return <Routes>

<Route index element = {<SignInPage/>}/>
<Route path='dashboard' element={<DashboardPage/>}/>
<Route path='products' element={<ProductsPage/>}/>
<Route path='orders' element={<OrdersPage/>}/>
<Route path='settings' element={<SettingsPage/>}/>

  </Routes>
    
  
}


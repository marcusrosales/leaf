import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import Home from './NavElements/Home/Home.tsx'
import Shelf from './NavElements/Shelf.tsx'
import Market from './NavElements/Market.tsx'

import NotFoundPage from './NavElements/NotFoundPage.tsx'


import { createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/shelf',element:<Shelf />},
  {path:'/market',element:<Market />},
  {path:'*',element:<NotFoundPage />},
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
);

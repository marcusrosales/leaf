import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import App from './App.tsx'
import Shelf from './Shelf.tsx'
import Market from './Market.tsx'

import NotFoundPage from './NotFoundPage.tsx'


import { createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {path:'/',element:<App />},
  {path:'/shelf',element:<Shelf />},
  {path:'/market',element:<Market />},
  {path:'*',element:<NotFoundPage />},
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
);

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './_routes/AllRoute';

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}
export default App;
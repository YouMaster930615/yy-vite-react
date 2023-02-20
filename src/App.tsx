import { useState } from 'react'
import { useRoutes } from 'react-router-dom';
import routes from './routers/index';

function App() {
  const GetRoutes = () => useRoutes(routes);

  return (
    <div className="App">
      <GetRoutes></GetRoutes>
    </div>
  )
}

export default App

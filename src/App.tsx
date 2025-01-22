import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import GeneratorPage from './Pages/GeneratorPage';

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/generate", element: <GeneratorPage /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

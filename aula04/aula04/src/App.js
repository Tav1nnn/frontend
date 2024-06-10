import './App.css';
import ToDoList from './pages/ToDoList';
import UserEffect from './pages/UserEffect';
import SimulateApi from './pages/SimulateApi';
import Timer from './pages/Timer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';
import List from './pages/List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SimulateApi></SimulateApi>
  },
  {
    path: '/todo',
    element: <ToDoList></ToDoList>
  },
  {
    path: '/timer',
    element: <Timer></Timer>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/list',
    element: <List></List>
  }
]);

function App() {
  return (
    <div className="App">
      {/* {/* <ToDoList pageTitle={"ToDoList"}>

      </ToDoList>
      <UserEffect/> }

      <SimulateApi/>
      <Timer></Timer> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

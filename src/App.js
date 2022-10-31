
import './App.css';
import Heading from './components/Heading';
import { Route, Routes } from 'react-router-dom'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ContextProvider } from './context/GlobalContext'

function App() {
  return (
    <ContextProvider >
    
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading />  
          <Routes>
            <Route element={<TaskForm/>} path="/add" />
            <Route element={<TaskList/>} path="/"/>
            <Route element={<TaskForm/>} path="/edit/:id"/>
          </Routes>
        </div>
      </div>

    </ContextProvider>

  );
}

export default App;

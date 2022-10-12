
import './App.css';
import FormPage from './Form/FormPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './todo/TodoList';


function App() {
  return (
   

    <>
    
    
    <BrowserRouter>

        <Routes>
          {/* <Route path="/" element={<FormPage/>} />                  */}
          <Route path="/" element={<TodoList/>} />                 
          
        </Routes>
        
      </BrowserRouter>
    
    
    
    
    </>



  );
}

export default App;


import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Students } from './Pages/Student';
import { Contact } from './Pages/Contact';
import { StudentContextProvider } from './StudentContext';

function App() {
  return (
    <StudentContextProvider>
    <BrowserRouter>
    <Routes>
     <Route path={'/'} element={<Home/>} />
      <Route path={'/Pages/Student'} element={<Students/>} />
      <Route path={'/Pages/Contact'} element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;

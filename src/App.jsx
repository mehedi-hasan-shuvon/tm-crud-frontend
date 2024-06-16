
import './App.css'
import { Dashboard } from './Pages/Dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='stylish-regular'>
       <ToastContainer />
      <Dashboard />
    </div>
  )
}

export default App

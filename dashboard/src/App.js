
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MainRoutes from './Pages.jsx/MainRoutes';

function App() {
  return (
    <div className="App">
      <div className='navbar_layout'>
        <Navbar/>
      </div>
      <div className='homePage_Layout'>
        <div className='sidebar_layout'>
          <Sidebar/>
        </div>
        <div className='routes_layout'>
          <MainRoutes/>
        </div>
      </div>
    </div>
  );
}

export default App;

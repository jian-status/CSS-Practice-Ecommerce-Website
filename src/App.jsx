import './App.css';
import TopNavbar from './TopNavbar.jsx';
import { Outlet } from 'react-router-dom';
import SocialMediaSidebar from "./SocialMediaSidebar.jsx";
function App() {

  return (
      <div className="p-5">
          <TopNavbar />
          <SocialMediaSidebar />
          <Outlet/>
      </div>
  )
}

export default App

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function HeaderFooterLayout() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navbar />
      <div className="">
        <Outlet /> {/* Renders the nested routes */}
      </div>
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function HeaderFooterLayout() {
  return (
    <div className="bg-[#0a0a0a] !p-0 !m-0">
      <Navbar />
      <div className="!p-0 !m-0">
        <Outlet /> {/* Renders the nested routes */}
      </div>
    </div>
  );
}

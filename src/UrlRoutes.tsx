import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Other components
import HeaderFooterLayout from './HeaderFooterLayout';

// pages
import HomePage from './pages/HomePage';
import BuildYourAgents from './pages/BuildYourAgents';
import CustomLLMs from './pages/CustomLLMs';
import OurAgents from './pages/OurAgents';

export default function UrlRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooterLayout />}>
          <Route index element={<BuildYourAgents />} />
          <Route path="home" element={<HomePage />} />
          <Route path="build-your-agents" element={<BuildYourAgents />} />
          <Route path="custom-llms" element={<CustomLLMs />} />
          <Route path="our-agents" element={<OurAgents />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Outlet } from 'react-router-dom';
import Accessibility from './components/Accesibility-section';
import ChatbotButton from './components/ChatbotButton';
import Footer from './components/Footer';
import Hero from './components/Hero-section';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useSidebar } from './context/SidebarContext';
import BlogFeed from './pages/BlogFeed';
;

function App() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className='overflow-hidden'>
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Navbar />
        <main className='pt-16'>
          <Outlet />
          <Hero />
          <BlogFeed />
          <Accessibility />
          <Footer />
        </main>
      </div>
      <ChatbotButton />
    </div>
  );
}

export default App;
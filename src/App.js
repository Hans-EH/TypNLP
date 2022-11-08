import { useState } from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FrontPage from './pages/home/FrontPage';
import PeoplePage from './pages/people/PeoplePage';
import PublicationsPage from './pages/publications/PublicationsPage';

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <NavBar setPage={setPage} />

      {page === "People" ? <PeoplePage /> :
        page === "Publications" ? <PublicationsPage /> :
          <FrontPage />}

      <Footer />
    </div>
  );
}

export default App;

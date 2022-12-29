import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import BooksList from './pages/BooksList';
import BookPage from './pages/BookPage';
import EditPage from './pages/EditPage';

export default function App() {
  return (
    <Router>
      <div className="container">
      <div className="App">
        <div className="Header">
        <Header />
        </div>

        <div className="List-Box">
            <BooksList />
        </div>

        <div className="Box">
        <Routes>
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

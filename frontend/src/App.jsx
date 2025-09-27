import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNoteform from './pages/AddNoteform';
import './App.css';
import NoteList from './pages/List';
import Weather from './pages/weather';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NoteList/>} />
          <Route path="/add-note" element={<AddNoteform/>} />
          <Route path="/view-weather" element={<Weather/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

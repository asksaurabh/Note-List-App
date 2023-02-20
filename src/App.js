import { useState } from 'react';
import NoteCreate from './components/NoteCreate';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <NoteCreate />
    </div>
  );
}

export default App;

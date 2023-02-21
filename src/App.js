import { useState } from 'react';
import NoteCreate from './components/NoteCreate';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className='grid justify-items-center'>
      <NoteCreate />
    </div>
  );
}

export default App;

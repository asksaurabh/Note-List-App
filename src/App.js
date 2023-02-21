import { useCallback, useEffect, useState } from 'react';
import NoteCreate from './components/NoteCreate';
import NoteList from './components/NoteList';
import axios from 'axios';
import { faker } from '@faker-js/faker';

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/notes');
    setNotes(response.data);
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleNoteCreate = async (noteTitle, noteDescription) => {
    const response = await axios.post('http://localhost:3001/notes', {
      noteTitle,
      noteDescription,
      url: faker.image.abstract(150, 150, true),
    });
    setNotes([...notes, response.data]);
  };

  return (
    <div className='grid justify-items-center'>
      <NoteCreate onNoteCreate={handleNoteCreate} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;

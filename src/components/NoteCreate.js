import { useState } from 'react';
import axios from 'axios';
// import { faker } from '@faker-js/faker';

function NoteCreate() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleNoteDescriptionChange = (event) => {
    setNoteDescription(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/notes', {
      noteTitle,
      noteDescription,
      url: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleTitleChange}
          placeholder='Note Title'
          value={noteTitle}
        />
        <textarea
          onChange={handleNoteDescriptionChange}
          value={noteDescription}
        />
        <button>Create Note</button>
      </form>
      <button>Add Note Cover</button>
    </div>
  );
}

export default NoteCreate;

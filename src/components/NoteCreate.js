import { useState } from 'react';

function NoteCreate() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleNoteDescriptionChange = (event) => {
    setNoteDescription(event.target.value);
  };

  return (
    <div>
      <form>
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

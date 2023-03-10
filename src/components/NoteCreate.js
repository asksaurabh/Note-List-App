import { useState } from 'react';
import Button from './Button';

function NoteCreate({ onNoteCreate }) {
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
    onNoteCreate(noteTitle, noteDescription);
    setNoteTitle('');
    setNoteDescription('');
  };

  return (
    <div className='flex flex-col w-3/5'>
      <div className='flex flex-col'>
        <input
          onChange={handleTitleChange}
          placeholder='Note Title'
          value={noteTitle}
          className='border border-black mb-3 h-10 mt-3 p-3'
        />
        <textarea
          placeholder='Note Description'
          onChange={handleNoteDescriptionChange}
          value={noteDescription}
          className='h-40 bg-gray-100 mb-3 p-3'
        />
        <div className='flex flex-row justify-between'>
          <Button secondary>Add Note Cover</Button>
          <Button onClick={handleFormSubmit} className='' primary>
            Create Note
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NoteCreate;

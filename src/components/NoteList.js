function NoteList({ notes }) {
  const renderedNotes = notes.map((note) => {
    return (
      <div className='m-3' key={note.id}>
        <img src={note.url} alt={note.noteTitle} />
        <h3>{note.noteTitle}</h3>
      </div>
    );
  });

  return (
    <div className='grid grid-rows-2 grid-flow-col gap-4'>{renderedNotes}</div>
  );
}

export default NoteList;

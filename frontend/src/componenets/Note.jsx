const Note = ({note}) => {
    return ( 
        <div className="note">
            <h1>{note.title}</h1>
            <section>
                <p>{note.body}</p>
            </section>
            <div className="note-buttons">
                <button>Delete</button>
                <button>Add Tag</button>
            </div>
        </div>
     );
}
 
export default Note;
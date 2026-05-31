import Note from "./Note";

const NotesGrid = () => {
    Notes = [];
    return ( 
        Notes.map((note) => (<Note noteContent={note}/>))
     );
}
 
export default NotesGrid;
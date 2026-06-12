import { useState } from "react";
const DeleteModal = ({deleteNote,setDeleteOpen,note}) => {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded p-6">
                    <p>Are you sure you want to delete "{note.title}" ?</p>
                    <div className="flex gap-5 justify-center">
                        <button onClick={() => deleteNote()} className="text-red-500">Confirm</button>
                        <button onClick={() => setDeleteOpen(false)} className="text-blue-500">Cancel</button>
                </div>
                </div>
            </div>
        )
    }

const Note = ({note,notes,setNotes}) => {
    const [error,setError] = useState('');
    const [isDeleteOpen,setDeleteOpen] = useState(false);
    const deleteNote = async () => {
        const filteredNotes = notes.filter((noteCheck) => (noteCheck.id != note.id ));
        try {
            const res = await fetch(`/api/v1/notes/${note.id}`,{
                method: "DELETE"
            });
            if (!res.ok) {
                throw new Error(`Request failed: ${res.status}`);
            }
            setNotes(filteredNotes);
        } catch (err) {
            setError(err.message);
        } finally {
            setDeleteOpen(false);
        }
    }
    const editNote = () => {
        
    }
    return (
        <div>
            <div className="border-1 rounded p-5 bg-white/5">
                <h2>{note.title}</h2>
                <section>
                    <p className="text-lg text-white  ">{note.content}</p>
                    <p className="text-xs text-gray-400 mt-2" >{new Date(note.created_at).toLocaleString("en-GB")}</p>
                </section>
                <div className="mt-5 flex flex-row gap-2 justify-around">
                    <button>Edit</button>
                    <button className="text-red-400" onClick={() => setDeleteOpen(true)}>Delete</button>
                </div>
            </div>
            {isDeleteOpen && <DeleteModal deleteNote={deleteNote} setDeleteOpen={setDeleteOpen} note={note}/>}
        </div>
     );
}
 
export default Note;
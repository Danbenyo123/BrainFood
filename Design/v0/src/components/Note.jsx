import { form } from "motion/react-client";
import { use, useState } from "react";
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
const EditModal = ({note,setNotes,notes,setError,setEditOpen}) => {
    const [editedTitle,setEditedTitle] = useState(note.title);
    const [editedContent,setEditedContent] = useState(note.content);
    const [error,SetError] = useState('')

    const handleEdit = async (e) => {
        e.preventDefault()
        if (!editedTitle.trim() || !editedContent.trim()) {
            setError('Title and Content are required.') 
            return ;
        }
        try {
            const fetchRequest = {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    'title': editedTitle,
                    'content': editedContent
                })
            };
            const res = await fetch(`/api/v1/notes/${note.id}`,fetchRequest);
            if (!res.ok) {
                throw new Error(res?.err?.message || "Unknown error. Try again.")
            }
            const notesArrayEditedNote = notes.map((prevNote) => {
                if (prevNote.id == note.id) {
                    return {...prevNote, title: editedTitle, content: editedContent};
                }
                return prevNote;
            });
            setNotes(notesArrayEditedNote);
            setEditOpen(false);
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div>
            <form onSubmit={handleEdit} className="m-5 flex flex-col justify-center w-50 gap-2">
                <input className="bg-white/10 p-1 rounded" type="text" name="title" id="title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                <textarea className="bg-white/10 p-1 min-w-3xs min-h-20 rounded" name="content" id="content" value={editedContent} onChange={(e) => setEditedContent(e.target.value)}/>
                <input disabled={!editedTitle.trim() || !editedContent.trim()} className=" text-white bg-white/5 p-1 rounded disabled:text-white/9" type="submit" value="Save Edit"/>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
} 
const Note = ({note,notes,setNotes}) => {
    const [error,setError] = useState('');
    const [isDeleteOpen,setDeleteOpen] = useState(false);
    const [isEditOpen,setEditOpen] = useState(false);
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
            setDeleteOpen(false);
        } catch (err) {
            setError(err.message);
        }
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
                    <button onClick={()=> {setEditOpen(!isEditOpen)}}>Edit</button>
                    <button className="text-red-400" onClick={() => setDeleteOpen(true)}>Delete</button>
                </div>
            </div>
            {isDeleteOpen && <DeleteModal deleteNote={deleteNote} setDeleteOpen={setDeleteOpen} note={note}/>}
            {isEditOpen && <EditModal setEditOpen={setEditOpen} setError={setError} setNotes={setNotes} notes={notes} note={note}/>}
        </div>
     );
}
 
export default Note;
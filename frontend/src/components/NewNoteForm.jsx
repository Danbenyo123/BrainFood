import { useState } from "react";

const NewNoteForm = ({setNotes,setAddNote}) => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [error,setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title.trim() || !content.trim()) {
            setError('Title and Content are required.')
            return
        }
        try {
            const res = await fetch('/api/v1/notes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    'title': title, 
                    'content': content
                })
            });
            if (!res.ok) {
                throw new Error(res?.err?.message || "An unkown error occured when sending the note.");
            }
        const newNote = await res.json();
        setNotes((prev) => [...prev,newNote.data]);
        setAddNote(false);
        } catch (err) {
            setError(err.message);
        }
    }
    return ( <form onSubmit={handleSubmit} className="m-5 flex flex-col justify-center w-50 gap-2">
        <input className="bg-white/10 p-1 rounded" type="text" onChange={(e)=>(setTitle(e.target.value))} value={title} name="title" id="title" placeholder="Title"/>
        <textarea className="bg-white/10 p-1 min-w-3xs min-h-20 rounded" type="text" onChange={(e)=>(setContent(e.target.value))} value={content} name="content" id="content" placeholder="Content"/>
        <input disabled={!title.trim() || !content.trim()} className=" bg-white/5 p-1 rounded" type="submit" value="Add New Note"/>
        {error && <p>{error}</p>}
    </form> );
}
 
export default NewNoteForm;
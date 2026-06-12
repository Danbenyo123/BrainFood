import { useState } from "react";
import NewNoteForm from "./NewNoteForm";
const ActionsHeader = ({setNotes}) => {
    const [isAddNote,setAddNote] = useState(false);
    return (
        <div className="flex flex-col items-center">
            <search >
                <input className="bg-white/20 rounded-md p-1" type="search" id="note" placeholder="Search for a Note"/>
            </search>
            <div className="action-buttons">
                <button 
                onClick={() => (setAddNote(!isAddNote))}
                className="text-4xl m-5 transition delay-50 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-120 hover:text-white" id='add-note'>
                    {!isAddNote ? '+' : '-'}</button>
            {isAddNote && <NewNoteForm setAddNote={setAddNote} setNotes={setNotes}/>}
            </div>
        </div>
     );
}
 
export default ActionsHeader;
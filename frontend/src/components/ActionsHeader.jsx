import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import NewNoteForm from "./NewNoteForm";
const ActionsHeader = ({setNotes}) => {
    const [isAddNote,setAddNote] = useState(false);
    return (
        <div className="flex flex-col items-center">
            <search >
                <TextField id="outlined-search" label="Search field" type="search" />            
            </search>
            <div className="action-buttons">
                <Button
                variant='contained' 
                onClick={() => (setAddNote(!isAddNote))}
                className="text-4xl m-5 transition delay-50 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-120 hover:text-white" id='add-note'>
                    {!isAddNote ? '+' : '-'}</Button>
            {isAddNote && <NewNoteForm setAddNote={setAddNote} setNotes={setNotes}/>}
            </div>
        </div>
     );
}
 
export default ActionsHeader;
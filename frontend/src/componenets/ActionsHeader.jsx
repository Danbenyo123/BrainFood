const ActionsHeader = () => {
    return (
        <div className="actions">
            <search className="search-bar">
                <input type="search" id="note" placeholder="Search for a Note"/>
            </search>
            <div className="action-buttons">
                <button id='add-note'>+</button>
            </div>
        </div>
     );
}
 
export default ActionsHeader;
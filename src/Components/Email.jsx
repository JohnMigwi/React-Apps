  import { useState } from "react";
    
    function Email() {
        const [selected, setSelected] = useState(false);

        function handleSelecting(){
            setSelected(selected =>!selected);
        }
      
        return(
            <>
            <label>
             <input type="checkbox" name="Material" checked={selected} onChange={handleSelecting} />
             <span>check</span>
            </label>
            </>
        );
    };


export default Email;
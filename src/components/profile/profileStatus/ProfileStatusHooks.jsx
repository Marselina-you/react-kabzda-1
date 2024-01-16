import React, {useState} from 'react';
import { useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode ] = useState(false);
    let [status, setStatus ] = useState(props.status);

    useEffect(() => {

        setStatus(props.status);
    }, [props.status] );

const activateMode = () => {
    setEditMode(true)
}
const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status)
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    //console.log(e.currentTarget.value)
   
    
}
    return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || "No status"}</span>
                </div>}
            {editMode &&
                <div>
                <input  onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={status}/>
                </div>}
            </div>
        );
    }
  export default ProfileStatusWithHooks;
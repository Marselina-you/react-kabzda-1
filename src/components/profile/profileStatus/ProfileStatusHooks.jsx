import React, {useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode ] = useState(false);
    let [status, setStatus ] = useState(props.status);

const activateMode = () => {
    setEditMode(true)
}
const deactivateMode = () => {
    setEditMode(false);
    //props.updateStatus(this.state.status)
}
const onStatusChange = (e) => {
    //debugger;
    setStatus(e.currentTarget.value);
    props.updateStatus(status)
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
import React, {useState} from 'react';
import { useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode ] = useState(false);//useState инициализирует начальное состояние
    let [status, setStatus ] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);//позволяет синхронизировать компонент с внешней системой.
    }, [props.status] );

const activateMode = () => {
    setEditMode(true)
}
const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status)
}
const onStatusChange = (e) => {
    //debugger;
    setStatus(e.currentTarget.value);
    //props.updateStatus(status)
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
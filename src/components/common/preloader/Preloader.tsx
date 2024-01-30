import React from 'react';
//import loading from '../../../assets/images/loading.gif';
import loading from '../../../assets/images/krevet.gif';
type PropsType = {
}

const Preloader: React.FC = () => {
    return (
        <div>
            <img style={{width: '200px'}} src= {loading} alt=""/>
            </div>
    );
};



export default Preloader;
import React from 'react';
import loading from '../../../assets/images/loading.gif';


const Preloader = (props) => {
    return (
        <div>
            <img style={{width: '200px'}} src= {loading} alt=""/>
            </div>
    );
};



export default Preloader;
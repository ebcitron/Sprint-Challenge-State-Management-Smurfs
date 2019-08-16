import React from 'react';
import Smurf from './Smurf';

function SmurfList(props){
    return(
        <div className ="SmurfList" style ={{background: "blue"}}>
            <h3>Smurf List</h3>
            {props.smurfs.map(smurf => {
                return <Smurf smurf={smurf} />
            })}
        </div>
    )
}

export default SmurfList;
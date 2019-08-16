import React from 'react';

function Smurf(props){
    return(
        <div className="Smurf" >

                            <h3>Name: {props.smurf.name}</h3>
                            <h5>Age: {props.smurf.age}</h5>
                            <h5>Height: {props.smurf.height}</h5>
        </div>
    )
}
export default Smurf;
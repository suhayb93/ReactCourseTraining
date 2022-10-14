import React from 'react';


function Communication(props) {


    return (
        <div>
            <button onClick={props.showText}>
                Show Text at Parent
            </button>
        </div>
    )
}

export default Communication
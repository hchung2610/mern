import React from 'react';

const SuccessChild = ({name, address, story}) => {
    return (
        <div className = "success-child">
            <h2> Child Component</h2>
            <p><strong> Congratulation, {name} </strong></p>
            <p><strong> at {address}, you're so cool!</strong></p>
            <div className="story">
                <h3> Let me tell you about: </h3>
                {story}
            </div>
        </div>
    )
}

export default SuccessChild;
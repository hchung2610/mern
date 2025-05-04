import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory';
class Success extends Component {
    render() {
        const name = "Jason";
        const address = "Seattle, WA";
        return (
            <div className="success-message">
                <h1>This is {name}'s website</h1>
                <h2>Jason will get a SE job soon in the year of 2025</h2>
                <h3>Won't give up no matter what!</h3>
                <SuccessChild 
                    name = {name} 
                    address = {address} 
                    story = {<SuccessStory/>}
                />
            </div>
        );
    }
}

export default Success;
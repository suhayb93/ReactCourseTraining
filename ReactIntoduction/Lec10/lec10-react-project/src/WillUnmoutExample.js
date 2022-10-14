import React from 'react';

class WillUnmountExample extends React.Component {

    constructor(props) {
        super(props)
        console.log('the component is mounting now ');
    }

    componentWillUnmount() {
        console.log('I am in Will Unmount function')
    }
    render() {
        return (
            <div>
                this Compinent is Expirmental Component
            </div>
        )
    }
}


export default WillUnmountExample;



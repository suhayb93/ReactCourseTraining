import React from 'react';

function NavBar() {

    const [color, setColor] = React.useState('red');
    React.useEffect(() => {

        return () => {
            console.log('this component is in unmount phase')
        }
    }, [])

    function onClick() {
        setColor("Green")
    }

    return (
        <div>
            Nav Bar Component
            <div>
                <button onClick={onClick}>update component</button>
            </div>
        </div>
    )
}

export default NavBar;
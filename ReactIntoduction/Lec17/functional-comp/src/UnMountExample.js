import React from 'react';

function UnMounrExample() {

    const [show, setShow] = React.useState(true);

    const hidShowComponent = () => {
        setShow(!show)
    }
    return (
        <>
            <button onClick={hidShowComponent}>
                Show/Hide
            </button>
            {show ?
                <Component />
                : null
            }
        </>

    )
}

function Component() {

    React.useEffect(() => {

        console.log('in Use Effect');
        return function () {
            console.log('When Clear');
        }
    }, [])

    return (
        <div>
            Hello World
        </div>
    )
}

export default UnMounrExample;



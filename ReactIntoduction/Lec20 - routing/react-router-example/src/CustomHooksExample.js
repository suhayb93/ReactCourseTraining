import React, { useState, useEffect } from 'react'

function CustomHooksExample() {


    //     let fullName = useGetName()

    //     return (
    //         <div>{fullName}</div>
    //     )

    console.log('Component is Rendering ...')

    const time = useGetCurrentTime();


    return (
        <div>Time: {time}</div>
    )
}

export default CustomHooksExample;


function useGetName() {
    const firstName = "Suhayb";
    const LastName = "Dwaikat";

    return `${firstName} ${LastName}`
}


function useGetCurrentTime() {
    const initialTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        console.log('time increase 1 second')
    }, [time])

    return time;

}

export function OtherComponent() {

    const time = useGetCurrentTime();
    return (
        <div>this other component

            <div>
                Time is : {time}
            </div>
        </div>
    )
}
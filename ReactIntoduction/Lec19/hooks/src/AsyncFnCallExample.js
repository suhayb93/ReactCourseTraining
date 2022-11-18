import React, { useEffect } from 'react';

function AsyncFnCallExample() {

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        return await AsyncCall()

    }
    async function AsyncCall() {
        console.log('I am Asyc Call function');

    }


    return (
        <div>Async function example</div>
    )
}

export default AsyncFnCallExample;
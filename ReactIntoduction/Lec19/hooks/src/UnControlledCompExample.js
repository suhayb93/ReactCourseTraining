import React, { useEffect, useRef, useState } from 'react';

function UnControlledComponentExample() {

    const [fullName, setFullName] = useState({ name: '' })
    const onBtnClicked = () => {
        setFullName({ name: 'Suhayb Dwaikat' })
    }
    return (
        <div>
            <button onClick={onBtnClicked}>Fill Full Name</button>
            <div><NameFrom fullName={fullName} /></div>

        </div>
    )
}


export default UnControlledComponentExample;


function NameFrom(props) {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');

    useEffect(() => {
        // console.log(firstNameRef);
        firstNameRef.current.value = props.fullName.name.split(" ")[0] || ""
        lastNameRef.current.value = props.fullName.name.split(" ")[1] || ""
        console.log(lastNameRef.current.type);
    }, [props.fullName])

    return (
        <div>
            <div>
                <label htmlFor="#firstName">First Name</label>
                <input ref={firstNameRef} id="firstName" type="text" />
            </div>
            <div>
                <label htmlFor="#lastName">Last Name</label>
                <input ref={lastNameRef} id="lastName" type="text" />
            </div>
        </div>
    )
}
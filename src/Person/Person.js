import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name}
            &nbsp;and I am {props.age}
            &nbsp;years old!
            </p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
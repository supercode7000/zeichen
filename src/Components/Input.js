import React from 'react';

const Input = (props) => {
    console.log(props)
    return (
        <section>
            <div>
                <p>Zu trennende Zeichenkette:</p>
                <input type="text" id="in" onChange={props.handleInput} />
            </div>
            <div>
                <p>Zeichenkette für die Trennungsposition:</p>
                <input type="text" id="dif" onChange={props.handlePosition} />
            </div>
        </section>);
}

export default Input;
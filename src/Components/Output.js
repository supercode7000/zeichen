import React from 'react';

const Output = (props) => {
    return (<section>
        <h2>Ausgabe</h2>
        <div className="ausgabe">
            <div>
                <h3>Vorderer Teil</h3>
                <p id="vorderTeil">{props.vorderer}</p>
            </div>
            <div>
                <h3>Hinterer Teil</h3>
                <p id="hinterTeil">{props.hinterer}</p>
            </div>
        </div>
    </section>);
}

export default Output;
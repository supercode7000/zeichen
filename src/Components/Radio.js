import React from 'react';

const Radio = (props) => {
    return (<section>
        <div className="Neben">
            <input type="radio" name="foobar" checked={props.isDavor} id="buttonOne" value="buttonOne" onChange={props.handleRadio} /> <p> Trennung davor</p>
        </div>
        <div className="Neben">
            <input type="radio" name="foobar" id="bTwo" checked={!props.isDavor} value="buttonTwo" onChange={props.handleRadio} /> <p> Trennung danach</p>
        </div>
        <div>
            <button value="submit" onClick={props.trennen}>Trennen</button>
        </div>
    </section>);
}

export default Radio;
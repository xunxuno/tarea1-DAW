import { useState } from "react";
import Button from './Button';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');

    return (
        <div>
            <div>{displayValue}</div>
            <Button value="1" onClick={() => setDisplayValue(displayValue + '1')}></Button>
            <Button value="+" onClick={() => console.log('logica para la suma')}></Button>
        </div>
    );
}

export default Calculator;
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Count: {count}</h1>
            <div>
                <Button 
                    variant="primary"
                    onClick={handleIncrement}
                    style={{
                        color: 'white',
                        padding: 10,
                        borderRadius: 10,
                        fontSize: 20,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: 10
                    }}
                >
                    Increment
                </Button>
                <Button 
                    variant="danger"
                    onClick={handleDecrement}
                    style={{
                        color: 'white',
                        padding: 10,
                        borderRadius: 10,
                        fontSize: 20,
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Decrement
                </Button>
            </div>
        </div>
    );
}

export default Counter;

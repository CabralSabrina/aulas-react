import React, { useState } from "react";
import"./Counter.css"; 


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <div className="counter-container">

            <h1 className="counter-title">Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)} className="counter-button increment">
                +</button>
            <button onClick={() => setCount(Math.max(0, count - 1))} className="counter-button decrement"> 
                - </button>



        </div>
    )

};
export default Counter;
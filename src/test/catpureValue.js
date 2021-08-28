// 值捕获特性
import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';

function FunctionComponent() {
    const [number, setNumber] = useState(0);
    let numberRef = useRef(null);
    let handleClick = () => {
        numberRef.current = number + 1;
        setNumber(number + 1);
        setTimeout(() => {
            // 这里拿到的number，一直都是当时渲染时的值，不是最新的值
            console.log(number)
        }, 3000);
        // 可以通过useRef来拿到最新的值
        console.log(numberRef.current);
    }
    /**渲染时的number  setTimeoutClickNumber  
     * renderNumber   setTimeoutClickNumber  ref.current
     * 1              0                    1
     * 2              1                    2
     * 3              2                    3
     */
    return (
        <div>
            <p> {number}</p>
            <button onClick={handleClick}>add</button>
        </div>
    )
}



ReactDOM.render(
    <FunctionComponent />,
    document.getElementById('root')
);
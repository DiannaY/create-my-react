import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    render() {
        let arr = Array(10000).fill(0);
        return(
            <ul>
                {arr.map((item, idx) => <li>{idx}</li>)}
            </ul>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
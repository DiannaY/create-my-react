import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import {PureComponent} from '@react';

class ReactComponent extends React.Component {
    state = {
        num: 1
    }
    render() {
        console.log('render React Component')
        return <div>
            <p>{this.state.num}</p>
            <button onClick={() => {
                this.setState({
                    num: 1
                })
            }}>点击(React.Component)</button>
        </div>
    }
}

// 在shoulComponentUpdate声明周期当中，采用浅比较shallowEqual，
// 如果数据相等的话就return false阻止更新，来达到性能优化的目的
class PComponent extends PureComponent {
    state = {
        num: 1
    }
    render() {
        console.log('render PureComponent')
        return <div>
            <p>{this.state.num}</p>
            <button onClick={() => {
                this.setState({
                    num: 1
                })
            }}>点击(实现PureComponent)</button>
        </div>
    }
}

function FunctionComponent() {
    let [number, setNumber] = useState(0);
    console.log('render Function Component')
    return <div>
        <p>{'FunctionComponent'+number}</p>
        <button onClick={() => setNumber(number+1)}>点击(Function Component)</button>
    </div>
}

let MemoFunctionComponent = React.memo(function(){
    console.log('render memo Function Component')
    return <div>
        <p>{'Memo Function Component'}</p>
        <button>点击(memo Function Component)</button>
    </div>
});

/**
 * 点击App组件时，执行了setState，触发App组件的更新，父组件更新，子组件也会更新;
 * PureComponent利用shouldComponentUpdate做了优化，跳过了不必要的更新;
 * FunctionComponent可以采用React.memo(FunctionComponent)去进行优化，跳过不必要的更新.
 */
class App extends React.Component {
    render() {
        console.log('render App Component')
        return(
            <div>
                <button onClick={() => this.setState({})}>点击更新父组件</button>
                <ReactComponent />
                <PComponent />
                <FunctionComponent name="name"/>
                <MemoFunctionComponent />
            </div>
        )
    }
}

ReactDOM.render(
    <App />
   ,
    document.getElementById('root')
);

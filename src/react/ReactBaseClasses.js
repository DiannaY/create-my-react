import shallowEqual from '@common/shared/shallowEqual';

export function Component(props, context) {
    this.props = props;
    this.context = context;
    Component.prototype.setState = function(partialState, callback) {
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
}
// 区分是函数组件还是类组件
// 类组件继承自React.Component Component原型上定义了一个isReactComponent属性，当isReactComponent存在时则为类组件
Component.prototype.isReactComponent = {};

// 
export class PureComponent extends Component {
    isPureReactComponent=true
    shouldComponentUpdate(nextProps, nextState) {
        return !(shallowEqual(this.props, nextProps) || shallowEqual(this.state, nextState));
    }
}
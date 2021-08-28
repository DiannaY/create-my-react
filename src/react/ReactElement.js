import { REACT_ELEMENT_TYPE } from './ReactSymbols';

const RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true,
  };
/**
 * 
 * @param {*} type 元素类型eg: div
 * @param {*} config {id: , className: ,key: }
 * @param {*} children 可能是一个元素、字符串、数字、null或者数组
 * props.children = null|number|string|element | [null|number|string|element]
 * @returns element
 * React.createElement方法返回一个普通的JS对象，它就是所谓的VirtualDOM
 */
export function createElement(type, config, children) {
    let props = {};
    let key = null;
    if(config) {
        key = config.key;
    }
    for(let propName in config) {
        if (Object.hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
        }
    }
    
    let childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength >= 2) {
        let childArray = Array(childrenLength);
        for (let i = 0; i < childrenLength; i ++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    let element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
    }

    return element;
}
// 这是react源码
import React from 'react';
// 这是自己写的React源码
import {Component, createElement} from '@react';
let vitualDom = (
    <div id="keyA" key="A">
        <div id="keyB" key="B">B</div>
        <div id="keyB1" key="B1">B1</div>
    </div>
)

console.log('reactVirutalDom', vitualDom)

let vitualDom2 = createElement('div', {id: 'keyA', key: 'A'}, 
    createElement('div', {id: 'keyB', key: 'B'}, 'B'),
    createElement('div', {id: 'keyB1', key: 'B1'}, 'B1')
)

console.log('myCreateElementVir', vitualDom2);


function FunctionComponent() {
    return virtualDom2;
}
class ClassComponent extends Component{
    render() {
        return vitualDom2;
    }
}

let funcVirtualDom = <FunctionComponent />
let classVirtualDom = <ClassComponent />;
console.log('funcVirtualDom',funcVirtualDom);
console.log('classVirtualDom', classVirtualDom);




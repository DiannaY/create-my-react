import React from 'react';
import {createElement} from './react';
let vitualDom = (
    <div id="keyA" key="A">
        <div id="keyB" key="B">B</div>
        <div id="keyB1" key="B1">B1</div>
    </div>
)

let vitualDom1 = React.createElement('div', {id: 'keyA', key: 'A'}, 
    React.createElement('div', {id: 'keyB', key: 'B'}, 'B'),
    React.createElement('div', {id: 'keyB1', key: 'B1'}, 'B1')
)
console.log(vitualDom1)

let vitualDom2 = createElement('div', {id: 'keyA', key: 'A'}, 
    createElement('div', {id: 'keyB', key: 'B'}, 'B'),
    createElement('div', {id: 'keyB1', key: 'B1'}, 'B1')
)

console.log(vitualDom2);




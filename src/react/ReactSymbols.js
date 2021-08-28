// Symbol.for(key) 返回key对应的Symbol, 找不到就创建新的Symbol
const symbolFor = Symbol.for;
export const REACT_ELEMENT_TYPE = symbolFor('react.element');
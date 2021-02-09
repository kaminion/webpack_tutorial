const path = require('path');

console.log(__dirname);
// resolve는 그 사이에 /를 적용시켜줌
const pathTest = path.resolve(__dirname, 'abc');
console.log(pathTest);
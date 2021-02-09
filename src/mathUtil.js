const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d => d * d;

module.exports = {
    PI,
    getSquareArea,
    getCircleArea
}

//exports.PI = PI;
//exports.getCircleArea = getCircleArea;

// 아래는 ESM

// export {
//     PI,
//     getCircleArea
// }

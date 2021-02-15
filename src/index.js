import 'normalize.css';

// global css의 경우엔 module false 값이므로 모듈로 사용할 수 없다.
import "./global.scss";
// .module 파일의 경우 웹팩에서 module true 값을 주어 모듈로 불러오기가 가능하다. (className에 해시값 적용)
import styles from './index.module.scss';
import $ from 'jquery';

import charImg from '../images/daniel.jpg';
import nestjsSvg from '../images/nestjs.svg';
import '@babel/polyfill';

function component()
{
    const element = document.createElement('div');
    element.innerHTML = "Hello Webpack1";

    // const imgElement = document.createElement('img');
    // imgElement.src = charImg;
    // imgElement.classList = styles.img;

    const svgElement = document.createElement('img');
    svgElement.src = nestjsSvg;
    svgElement.classList = styles.img;

    // element.appendChild(imgElement);
    element.appendChild(svgElement);

    // console.log(styles);
    //
    element.classList = [styles.helloWebpack, 'test'].join(' ');

    return element;
}

document.body.appendChild(component());
// console.log(`${(styles.helloWebpack).length}`);
console.log(`IS_PRODUCTION MODE : ${IS_PRODUCTION} Value`);
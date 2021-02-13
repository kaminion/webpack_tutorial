import 'normalize.css';
import globalCss from './global.scss';
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
    element.classList = styles.helloWebpack;

    return element;
}

document.body.appendChild(component());
// console.log(`${(styles.helloWebpack).length}`);
console.log(`IS_PRODUCTION MODE : ${IS_PRODUCTION} Value`);
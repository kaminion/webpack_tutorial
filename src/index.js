import 'normalize.css';
import styles from './index.css';
import $ from 'jquery';

import charImg from '../images/daniel.jpg';

function component()
{
    const element = document.createElement('div');
    element.innerHTML = "Hello Webpack1";

    const imgElement = document.createElement('img');
    imgElement.src = charImg;

    element.appendChild(imgElement);

    console.log(styles);

    element.classList = styles.helloWebpack;

    return element;
}

document.body.appendChild(component());
console.log(`${(styles.helloWebpack).length}`);
console.log(`IS_PRODUCTION MODE : ${IS_PRODUCTION} Value`);
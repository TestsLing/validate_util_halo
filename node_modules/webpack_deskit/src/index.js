/**
 *  Created By 憧憬
 */

import style from './index.css';
import img from './404-bg.jpg';


const type = () => {
    console.log('hello 装饰器！')
};

@type
class Test {
    static cname = 'lis';

}
console.log(Test.cname)

let test = new Test();

console.log(test);


const testWebpack = () => {

    return () => {

        let image = new Image();

        image.src = img;

        document.body.appendChild(image);



        console.log('test===============dev server')
    };
};

testWebpack()();

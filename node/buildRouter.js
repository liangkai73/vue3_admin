/*
 * @Author: lanck.xie 
 * @Date: 2023-02-16 10:08:23 
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-02-16 11:05:36
 */


// const febs = require('febs');
import fs from 'fs';
import path from 'path';
import * as febs from 'febs';

import { fileURLToPath } from 'url'

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

const PATH = path.join(__dirnameNew, '../', 'src', 'views');

let pages = febs.file.dirExplorerFilesRecursive(PATH, /.*\.(vue|VUE)/);
let routerConfig = `/* eslint-disable */
export default [\r
`;
routerConfig += `{path:'/', component: () => import('@/views/home/index.vue')},\r`


pages.forEach((value, index) => {
    value = febs.string.replace(value, '\\', '/');
    let values = value.split('/');
    let url = febs.string.replace(value, '/index.vue', '');
    url = febs.string.replace(url, '.vue', '');
    if (values.indexOf('components') > 0) {
        return;
    }
    let componentName = undefined;
    let temArr = value.split('/');
    if (temArr[temArr.length - 1] == 'index.vue') { componentName = temArr[temArr.length - 2] }
    else {
        componentName = temArr[temArr.length - 1].split('.vue')[0].toString()
    }

    let data = febs.utils.denodeify(fs.readFile, fs)(PATH + `/${value}`, 'utf-8');
    if (url == 'index') url = '';
    routerConfig += `{path:'/${url}',name:'${componentName}', component: () => import('@/views/${value}')},\r`;

    // arrFn.push(data);
    // data.then(res => {
    //     let str = res.toString();
    //     let arr = str.match(/<breadName>([\s\S]*?)<\/breadName>/);
    //     if (arr) componentName = JSON.stringify(arr[1]);

    // }
    // ).catch(err => {
    //     console.log(err);
    // });
});
// Promise.all(arrFn).then(res => {
// routerConfig += '{path:\'/\', component: () => import(\'../pages/login/index.vue\')},\r';
routerConfig += '{path:"/:catchAll(.*)", component: () => import(\'@/views/error/404.vue\')},\r';
routerConfig += `]
/* eslint-enable */
`;

try {
    fs.writeFileSync(
        path.join(__dirnameNew, '../', 'src', 'router', '_pathConfig.ts'),
        routerConfig,
        'utf8'
    );
    console.log('build router success!')
} catch (e) {
    /* eslint-disable */
    console.log('make router config error')
    console.error(e)
    /* eslint-enable */
}
// });
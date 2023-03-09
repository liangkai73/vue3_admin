/*
 * @Author: lanck.xie
 * @Date: 2023-02-14 10:40:59
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-08 10:15:00
 */

import { configType } from "@/themeInit/config";
import { _layouts } from "@/layouts/index";

/* app初始化函数 */
export function appInit(config: configType) {
  const titleEnv: any = {
    development: "开发环境",
  };

  //TODO:  CONFIG Validate

  /* titel */
  window.document.title =
    config.HTML_TITLE + titleEnv[import.meta.env.MODE] || "";
  /* favicon */
  //   let favicon:any = document.querySelector('link[rel="icon"]')
  //   if (favicon === null) {
  //     favicon = document.createElement('link')
  //     favicon.rel = 'icon'
  //     document.head.appendChild(favicon)
  //   }
  //   favicon.href = '/favicon.ico' || '/faviconkb.ico'
}

/**
 *
 *
 * @export
 * @param {_layouts} layouts
 * @param {*} pathObj
 * @return {*}
 * @description 返回基础layou模板
 */
export function getLayout(layouts: _layouts, pathObj: any) {
  let { path } = pathObj;

  if (path == "/") {
    return layouts.home;
  }

  if (path[0] == "/") path = path.substring(1);

  const pathLv1 = path.split("/")[0];
  for (let p in layouts) {
    if (pathLv1 == p) {
      console.log("now loading layout: " + p);
      return (layouts as any)[p];
    }
  }

  console.log("loading layout default");

  return layouts._default;
}

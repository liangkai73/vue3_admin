/*
 * @Author: lanck.xie
 * @Date: 2023-02-14 10:33:00
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-02-14 11:14:26
 */

export const HTML_TITLE: configType["HTML_TITLE"] = "eveCom_";

export const PC_DEVICE_WIDTH = 1280; // PC视口判断界限

export interface configType {
  HTML_TITLE: string; // htmlTitle
}
export const APP_CONFIG: configType = {
  HTML_TITLE,
};

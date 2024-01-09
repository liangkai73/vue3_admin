/*
 * @Author: lanck.xie
 * @Date: 2023-02-14 10:33:00
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-02 10:19:16
 */
export interface configType {
  HTML_TITLE: string; // htmlTitle
  AMapSecurityConfig: string; // map秘钥
}
// html - head - title 设置
export const HTML_TITLE: configType["HTML_TITLE"] = "LKCMS_";

// PC视口判断界限
export const PC_DEVICE_WIDTH = 1280;

// 开启PC\MOBILE界限判断
export const PC_DEVICE_WATCH = false;

const AMapSecurityConfig = "http://192.168.3.30:5173";

// 默认转场文案

export const COMPONENTS_TRANSFER_MSG = "welcome to lanckOA";

export const APP_CONFIG: configType = {
  HTML_TITLE,
  AMapSecurityConfig,
};

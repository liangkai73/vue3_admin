/*
 * @Author: lanck.xie
 * @Date: 2023-03-02 10:08:46
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-08 10:13:02
 */

import { STORAGE_TOKEN, STORAGE_USER } from "./config";

/**
 * 存储数据
 */
export const setItem = (key: string, value: string) => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  // debugger;
  window.localStorage.setItem(key, value);
};

/**
 * 获取数据
 */
export const getItem = (key: string) => {
  const data: any = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

/**
 * 删除数据
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

/**
 * 删除所有数据
 */
export const removeAllItem = (key: string) => {
  window.localStorage.clear();
};

/**
 *
 * @param token :string
 * 储存token到本地
 */
function setToken(token: string) {
  setItem(STORAGE_TOKEN, token);
}

/**
 *
 * @returns string
 * 获取本地token
 */

function getToken(): string {
  return getItem(STORAGE_TOKEN);
}
/**
 *
 * @returns string
 * 获取本地userInfo
 */
function getUserInfo(): object {
  return JSON.parse(getItem(STORAGE_USER));
}

/**
 *
 * @param userInfo :string
 * 储存userInfo到本地
 */
function setUserInfo(userInfo: string | object | undefined) {
  if (userInfo == undefined) {
    return;
  }
  if (typeof userInfo != "string") {
    userInfo = JSON.stringify(userInfo);
  }
  setItem(STORAGE_USER, userInfo);
}

export default {
  setToken,
  getToken,
  getUserInfo,
  setUserInfo,
};

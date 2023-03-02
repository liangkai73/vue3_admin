import axios from "axios";
import { NetworkHandler } from "./networkHandle";

const netInstance = axios.create({
  // baseURL: "http://127.0.0.1:4523/m1/2268281-0-default/api",
  // baseURL: "https://mock.apifox.cn/m1/2268281-0-default/api",
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// 响应拦截器
netInstance.interceptors.response.use((response) => {
  const { data, status } = response;
  return NetworkHandler.prototype.onErrorHandler(data);
});

/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc get 请求
 */
function get(url: string, option: object) {
  return netInstance.get(url, option);
}
/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc post 请求
 */
function post(url: string, option: object) {
  return netInstance.post(url, option);
}

/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc post 请求
 */
function _delete(url: string, option: object) {
  return netInstance.delete(url, option);
}

/**
 *
 * @param url
 * @param option
 * @returns promise
 * @desc post 请求
 */
function put(url: string, option: object) {
  return netInstance.put(url, option);
}

export default {
  get,
  post,
  delete: _delete,
  put,
};

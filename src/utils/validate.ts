/*
 * @Author: lanck.xie
 * @Date: 2023-02-15 15:31:01
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-02-23 17:56:10
 * @desc 常用校验库
 */

/**
 *
 * @export
 * @param {string} path
 * @return {*}  {boolean}
 * @description 校验是否属于外部链接
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}

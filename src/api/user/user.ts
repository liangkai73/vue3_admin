/*
 * @Author: lanck.xie
 * @Date: 2023-02-Mo 02:57:06
 * @Last Modified by:   lanck.xie
 * @Last Modified time: 2023-02-Mo 02:57:06
 */

import net from "@/utils/request";
import { userApi } from "@/api/config-api";
import { mixStore } from "@/utils/store";

/**
 *
 * @param param
 * @returns promise
 * @desc 获取用户列表
 */

function getUserList(params: any) {
  return net.get(userApi.getUserList, { params }).then((res) => {
    return Promise.resolve(res);
  });
}

export default {
  getUserList,
};

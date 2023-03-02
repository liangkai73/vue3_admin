/*
 * @Author: lanck.xie
 * @Date: 2023-02-Mo 02:57:06
 * @Last Modified by:   lanck.xie
 * @Last Modified time: 2023-02-Mo 02:57:06
 */

import net from "@/utils/request";
import { loginApi } from "@/api/config-api";
import { globalStore } from "@/utils/store";

interface loginParams {
  userId: string;
  passWord: string;
}
/**
 *
 * @param param
 * @returns promise
 * @desc 登录接口
 */
function postLogin(param: loginParams): Promise<any> {
  const _globalStore = globalStore();
  return net.post(loginApi.postLogin, param).then((res: any) => {
    _globalStore.setToken(res.oauth_token);
  });
}

export default { postLogin };

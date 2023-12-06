/*
 * @Author: lanck.xie
 * @Date: 2023-02-Mo 02:57:06
 * @Last Modified by:   lanck.xie
 * @Last Modified time: 2023-02-Mo 02:57:06
 */

import net from "@/utils/request";
import { loginApi } from "@/api/config-api";
import { mixStore } from "@/utils/store";

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
  mixStore.token = "test_token";
  return net.post(loginApi.postLogin, param).then((res: any) => {
    mixStore.token = res.oauth_token;
  });
}
function loginout() {
  mixStore.token = "";
}
export default { postLogin, loginout };

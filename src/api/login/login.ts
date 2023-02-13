/*
 * @Author: lanck.xie
 * @Date: 2023-02-Mo 02:57:06
 * @Last Modified by:   lanck.xie
 * @Last Modified time: 2023-02-Mo 02:57:06
 */

import net from "@/utils/request";
import { loginApi } from "@/api/config-api";

/* 用户登录 */
function postLogin() {
  //   return net.get("/category").then((res) => {
  //     console.log(res);
  //   });
  return net.post(loginApi.postLogin, {}).then((res) => {
    console.log(res);
  });
}

export default { postLogin };

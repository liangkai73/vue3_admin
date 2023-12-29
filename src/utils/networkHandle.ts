/*
 * @Author: lanck.xie
 * @Date: 2023-02-23 17:20:25
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-22 12:38:03
 */
import { globalStore } from "@/utils/store";

import { Axios } from "axios";

import { INetworkHandler } from "./types/networkHandle";
import { ElMessage } from "element-plus";

/**
 * @desc 网络消息处理器.
 */

//  TODO 临时toast
const $UIToast = ElMessage;

export class NetworkHandler implements INetworkHandler {
  /**
   * @desc 获取网络请求的站点地址;
   *
   */
  get requestHost(): string | undefined {
    return process.env.VUE_APP_URL;
  }

  /**
   * @desc 默认的请求选项.
   */
  get defaultRequestOption() {
    const accessToken = globalStore().APP_TOKEN;
    const headers: any = {
      "Content-Type": "application/json",
      "X-HTTP-AUTHENTICATE": "1",
      // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, x-http-authenticate",
    };
    if (!!accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return {
      timeout: 20 * 1000,
      credentials: "include",
      mode: "cors",
      headers,
    };
  }

  /**
   * @desc 默认的查询参数.
   */
  get defaultQueryParam() {
    return;
  }

  /**
   * @desc 用于构造请求url; 如果返回null, 则使用内部默认的方法进行构造.
   */
  onGetEncodeURIComponent(url: string, body: any): string {
    if (body) {
      let i = 0;
      for (const key in body) {
        if (i == 0) {
          if (url.indexOf("?") < 0) url += "?";
          else url += "&";
        } else {
          url += "&";
        }
        i++;
        url += key + "=" + encodeURIComponent(body[key]);
      }
    }
    return url;
  }

  /**
   * @desc 接收到服务器反馈消息后, 先进行一次原始数据的处理并将处理后的结果返回.
   */
  onRawHandler(serverData: Response, url: string): void {
    switch (serverData.status) {
      case 404:
        $UIToast({ type: "error", message: "服务暂时不可用" });
        throw new Error("status: " + serverData.status + "; url: " + url);
        break;
    }
  }

  /**
   * @desc: 处理api错误.
   * @param data: 服务器返回的消息.
   * @param err_msg: 使用err_msg来代替服务器的错误消息.
   * @return: 如果正确将返回data, 否则返回null.
   */
  onErrorHandler(data: any, url?: string): any {
    // common
    switch (data.code) {
      case 401: {
        $UIToast("无权限");
        throw data;
        return;
      }
      case 404: {
        $UIToast("找不到资源");
        throw new Error("404");
      }
      case 500: {
        const prefixs = [
          "com.netflix.client.ClientException: Load balancer does not have available server for client: ",
          "[500 Internal Server Error] during",
          "failed: connect timed out executing",
        ];

        if (data.err_msg) {
          for (const key in prefixs) {
            if (data.err_msg.indexOf(prefixs[key]) >= 0) {
              $UIToast({ type: "error", message: "服务暂时不可用" });
              throw data;
            }
          }
        }
        break;
      }
      case "fail": {
        $UIToast({ type: "error", message: data.msg });
        throw new Error("404");
      }
    }
    return data.data || data;
  }

  /**
   * 显示loading.
   * @param loadingDom 要显示loading的dom.
   * @param delay      延迟多久显示
   */
  onShowLoading(loadingDom?: any, delay?: number): void {
    // if (!loadingDom) {
    //   $UILoading({
    //     delay,
    //   });
    // } else {
    //   bpui.apiWidget.showLoadingTarget(loadingDom, {
    //     delay,
    //   });
    // }
  }

  /**
   * 隐藏loading.
   * @param loadingDom 正在显示loading的dom.
   */
  onHideLoading(loadingDom?: any): void {
    // if (!loadingDom) {
    //   $UILoadingHide();
    // } else {
    //   bpui.apiWidget.hideLoadingTarget(loadingDom);
    // }
  }
}

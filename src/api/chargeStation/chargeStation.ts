/*
 * @Author: lanck.xie
 * @Date: 2023-12-25 14:36:02
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-26 12:25:58
 */

import net from "@/utils/request";
import { chargeStationApi } from "@/api/config-api";
import { mixStore } from "@/utils/store";

/**
 *
 * @description 获取充电桩列表
 * @param {station.listParams} params
 * @return {*}
 */
function getChargeStation(params: station.listParams): Promise<any> {
  return net
    .get(chargeStationApi.getList, { params })
    .then((res) => {
      console.log(res);
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * @description 新增站点
 * @param {station.addSitParams} params
 * @return {*}  {Promise<any>}
 */
function postChargeStation(params: station.addSitParams): Promise<any> {
  return net
    .post(chargeStationApi.postList, params)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 *
 * @description 获取站点详情
 * @param {(string | number)} id
 * @return {*}  {Promise<any>}
 */
function getStation(id: string | number): Promise<any> {
  return net
    .get(chargeStationApi.getStie(id))
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * @description 修改站点信息
 * @param {(string | number)} id
 * @param {station.addSitParams} params
 * @return {*}  {Promise<any>}
 */
function putStation(
  id: string | number,
  params: station.addSitParams
): Promise<any> {
  return net
    .put(chargeStationApi.putSite(id), params)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 *
 * @description 删除站点
 * @param {(string | number)} id
 * @return {*}  {Promise<any>}
 */
function deleteStation(id: string | number): Promise<any> {
  return net
    .delete(chargeStationApi.deleteSite(id))
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export default {
  getChargeStation,
  postChargeStation,
  getStation,
  putStation,
  deleteStation,
};

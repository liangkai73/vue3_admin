/*
 * @Author: lanck.xie
 * @Date: 2023-12-14 11:30:10
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-29 14:36:09
 */
import { couponApi } from "@/api/config-api";
import net from "@/utils/request";

/**
 *
 * @description 获取优惠券模板列表
 * @param {coupon.list} params
 * @return {*}
 */
function getCouponList(params: coupon.list) {
  return net
    .get(couponApi.getCouponList, { params })
    .then((res: any) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * @description 创建优惠券模板
 * @param {coupon.template} params
 * @return {*}
 */
function postCouponTem(params: coupon.template) {
  return net.post(couponApi.postCoupon, params).then((res: any) => {
    console.log(res);
  });
}

/**
 *
 * @description 获取优惠券模板
 * @param {string} id
 * @return {*}
 */
function getCouponTem(id: string) {
  return net
    .get(couponApi.getCoupon(id))
    .then((res: any) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
/**
 *
 * @description 修改优惠券模板
 * @param {string} id
 * @param {coupon.template} params
 * @return {*}
 */
function putCouponTem(id: string, params: coupon.template) {
  return net
    .put(couponApi.putCoupon(id), params)
    .then((res: any) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
/**
 *
 * @description 删除优惠券模板
 * @param {string} id
 * @return {*}
 */
function deleteCouponTem(id: string) {
  return net
    .delete(couponApi.deleteCoupon(id))
    .then((res: any) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 *
 * @description 启用优惠券模板
 * @param {string} id
 * @return {*}
 */
function putCouponEnable(id: string) {
  return net
    .put(couponApi.enableCoupon(id), {})
    .then((res: any) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
/**
 *
 * @description 停用优惠券模板
 * @param {string} id
 * @return {*}
 */
function putCouponDisable(id: string) {
  return net
    .put(couponApi.disableCoupon(id), {})
    .then((res: any) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export default {
  getCouponList,
  getCouponTem,
  postCouponTem,
  putCouponTem,
  deleteCouponTem,
  putCouponEnable,
  putCouponDisable,
};

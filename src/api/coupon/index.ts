/*
 * @Author: lanck.xie
 * @Date: 2023-12-14 11:30:10
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-14 12:33:10
 */
import { couponApi } from "@/api/config-api";
import net from "@/utils/request";

/**
 *
 *
 * @param {coupon.params} params
 * @return {*}
 */
function getCouponList(params: coupon.params) {
  return net.get(couponApi.getCouponList, params).then((res: any) => {
    console.log(res);
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
export default {
  getCouponList,
  postCouponTem,
};

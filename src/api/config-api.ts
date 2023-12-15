/*
 * @Author: lanck.xie
 * @Date: 2023-02-13 14:42:23
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-14 12:02:51
 */

// 登陆模块
export const loginApi = {
  postLogin: "login",
};

// 优惠券模块
export const couponApi = {
  getCouponList: "coupon/templates", // 获取优惠模板列表
  postCoupon: "coupon/templates", // 获取优惠模板列表
  putCoupon: (id: string | number): string => `coupon/template/${id}`, // 修改优惠模板
  deleteCoupon: (id: string | number): string => `coupon/template/${id}`, // 删除优惠模板
  disableCoupon: (id: string | number): string =>
    `coupon/template/${id}/disable`, // 停用优惠券
  enableCoupon: (id: string | number): string => `coupon/template/${id}/enable`, // 启用优惠券
};

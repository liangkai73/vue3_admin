/*
 * @Author: lanck.xie
 * @Date: 2023-02-13 14:42:23
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-29 14:34:23
 */

// 登陆模块
export const loginApi = {
  postLogin: "iam/admin/login",
};
// 用户模块
export const userApi = {
  getUserList: "ops/iam/users",
};
// 电站管理
export const chargeStationApi = {
  getList: "site",
  postList: "site",
  getStie: (id: string | number) => `site/${id}`,
  putSite: (id: string | number) => `site/${id}`,
  deleteSite: (id: string | number) => `site/${id}`,
  getConnects: (id: string | number) => `site/connector/${id}`,
  postConnects: "site/connector",
  putConnects: (id: string | number) => `site/connector/${id}`,
  deleteConnects: (id: string | number) => `site/connector/${id}`,
};
// 优惠券模块
export const couponApi = {
  getCouponList: "coupon/templates", // 获取优惠模板列表
  getCoupon: (id: string | number): string => `coupon/template/${id}`, // 获取优惠模板
  postCoupon: "coupon/template", // 获取优惠模板列表
  putCoupon: (id: string | number): string => `coupon/template/${id}`, // 修改优惠模板
  deleteCoupon: (id: string | number): string => `coupon/template/${id}`, // 删除优惠模板
  disableCoupon: (id: string | number): string =>
    `coupon/template/${id}/disable`, // 停用优惠券
  enableCoupon: (id: string | number): string => `coupon/template/${id}/enable`, // 启用优惠券
};

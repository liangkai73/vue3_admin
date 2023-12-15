declare namespace coupon {
  interface params {}
  interface template {
    applyType: number; //适用类型
    content: string; // 优惠券说明
    couponType: number; // 优惠券类型
    discount: number; // 折扣
    endTime: Date; // 有效期结束时间
    maxDiscount: number; // 最大折扣
    name: string; //名称
    startTime: Date; // 开始时间
    threshold: number; // 使用门槛
    timeLimitType: number; // 时间类型
    total: number; // 优惠券总量
    userType: 0 | 1 | 2; //适用用户 0:不限 1:新用户 2:老用户
  }
}

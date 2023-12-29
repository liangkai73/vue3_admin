declare namespace coupon {
  interface list {
    couponType: 0 | 1 | ""; //优惠券类型 满减0,满折1
    currentPage: number; // 当前页
    desc?: boolean; // 降序排列
    name?: string; // 名称
    sizeOfPage?: number; // 分页数量
    status?: 0 | 1 | 2 | ""; // 优惠券状态 [0:正常, 1:已过期, 10:已使用]
    userType?: 0 | 1 | 2; // 领取对象 [0:不限制,1:新用户,2:老用户]
  }
  interface template {
    applyType?: number; //适用类型
    closeTime?: string; // 活动关闭书剑
    content?: string; // 优惠券说明
    couponType: number; // 优惠券类型
    discount?: number; // 折扣
    endTime?: string; // 有效期结束时间
    maxDiscount?: number; // 最大折扣
    name: string; //名称
    openTime?: string; // 活动开启时间
    startTime?: string; // 开始时间
    threshold?: number; // 使用门槛
    timeLimitType?: number; // 时间类型
    total?: number; // 优惠券总量
    userType?: 0 | 1 | 2; //适用用户 0:不限 1:新用户 2:老用户
  }
}

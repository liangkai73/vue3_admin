declare namespace station {
  interface params {
    [key: string]: any;
  }
  interface listParams {
    centerLat?: string; // 纬度
    centerLng?: string; // 经度
    key?: string; // 查询关键字
  }
  interface addSitParams extends params {
    address: string; // 地址
    bannerImg?: string; // banner图片
    busineHours?: string; //营业时间
    electricityFee?: string; // 充电电费率
    id: string; // 电站id
    operatorId?: string; //运营商id
    owner?: string; // 站点所属
    parkFee?: string; // 停车费
    parkInfo?: string; // 车位楼层信息
    serviceFee?: string; // 服务费率
    serviceTel?: string; // 站点电话
    siteTags?: string; // 站点标签
    stationLat?: number; // 站点纬度
    stationLng?: number; // 站点经度
    stationName: string; // 站点名称
    stationStatus: 0 | 1; // 站点状态
    stationTel?: string; // 站点电话
  }
}

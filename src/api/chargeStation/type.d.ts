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
    stationLat?: number | string; // 站点纬度
    stationLng?: number | string; // 站点经度
    stationName: string; // 站点名称
    stationStatus: 0 | 1; // 站点状态
    stationTel?: string; // 站点电话
  }

  interface connectListParams {
    stationId: string;
  }

  interface connectParams {
    connectorIdx: 1 | 2; // 充电设备接口序号、默认1
    connectorName: string; // 充电设备接口名称
    connectorType: number; // 接口类型
    current: number; // 额定电流
    equipmentId: string; //所属充电桩
    lockStatus: number; //地锁状态
    nationalStandard: number; // 国家标准
    parkNo: string; // 车位号
    parkStatus: number; // 车位状态
    power: number; // 额定功率
    status: number; //充电设备接口状态
    voltageLowerLimits: number; // 电压下线
    voltageUpperLimits: number; // 电压上线
  }
}

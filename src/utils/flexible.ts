import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { PC_DEVICE_WIDTH } from "@/constants";

/**
 * 判断当前是否为移动设备，判断依据为屏幕的宽度是否大于指定值（1280）
 */
export const isMobileTerminal = computed(() => {
  // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //  )

  // getBy deviceWidth
  // const { width } = useWindowSize();
  // return width.value < PC_DEVICE_WIDTH;
  console.log(navigator.userAgent);
  return false;
});

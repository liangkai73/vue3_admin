/*
 * @Author: lanck.xie
 * @Date: 2023-03-13 09:40:38
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-13 14:43:55
 * @desc 懒加载指令
 */

enum bingValue {}

export const lzRender = {
  beforeMount(el: any, bind: any) {
    el.style.visibility = "hidden";
  },
  mounted: (el: any, bind: any) => {
    // console.log(el.clientHeight);
    // console.dir(el);
    // console.log(bind);
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        // 如果 intersectionRatio 为 0，则目标在视野外，
        if (entries[0].intersectionRatio > 0) {
          el.style.visibility = "inherit";
          el.classList.add("fadeIn80");
        } else {
        }
      },
      {
        rootMargin: "0px 0px -300px 0px", // 监视区向下拓展500px
      }
    );
    intersectionObserver.observe(el);
  },
};

function getTemEl(el: any) {
  let temEl = el;
  return {
    temEl,
  };
}

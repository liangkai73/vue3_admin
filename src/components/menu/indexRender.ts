import {
  defineComponent,
  ref,
  Ref,
  PropType,
  reactive,
  watchEffect,
  renderSlot,
  Slots,
  VNode,
  h,
} from "vue";
import { useRouter } from "vue-router";

import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup } from "element-plus";

import icon from "@/libs/svgIcon/index.vue";

export interface ElMenuItemType {
  title: string;
  path: string;
  icon?: string;
  callBack?: () => {};
  children?: ElMenuItemchild[];
}
export interface ElMenuItemchild {
  title: string;
  path: string;
  icon?: string;
  callBack?: () => {};
}

let _router: any = null;
// init mune
function init(arr: any[], router: any, context: any) {
  _router = router;
  //
  // console.dir(router);
  // const now_router = router.currentRoute.value;
  // console.dir(context);
  // console.dir(context.attrs);
  // console.dir(context.attrs.defaultActive);

  return rendElMenu(arr, context);
}

// 渲染 ElMenu

function rendElMenu(arr: ElMenuItemType[], context: any) {
  const { class: _class } = context;
  return h(ElMenu, { ...context.attrs }, () => renderElMenuItem(arr));
}

// 渲染 ElMenuItem

function renderElMenuItem(arr: ElMenuItemType[]) {
  let nodes = arr.map((obj) => {
    // props
    const props = {
      index: obj.path,
      onClick: () => {
        callBack_hooks(obj);
      },
    };
    if (obj.children) {
      //   return h(ElSubMenu, renderElSubMenu(obj.children, obj));
      const defaultSolt = obj.children.map((cNode) => {
        const cprops = {
          index: cNode.path,
          onClick: () => {
            callBack_hooks(cNode);
          },
        };
        return h(
          ElMenuItem,
          { ...cprops, style: { paddingLeft: "68px" } },
          {
            default: () => createTitleNode(cNode),
          }
        );
      });
      const titleSolt = (pNode: ElMenuItemType) => {
        return createTitleNode(pNode);
      };
      return h(
        ElSubMenu,
        { ...props },
        { default: () => defaultSolt, title: () => titleSolt(obj) }
      );
    } else {
      return h(ElMenuItem, { ...props }, () => createTitleNode(obj));
    }
  });
  return nodes;
}

// create props
function createProps(obj: ElMenuItemType | ElMenuItemchild) {
  const { title, icon, callBack } = obj;

  return {
    title,
    icon,
    onClick: () => {
      callBack_hooks(obj);
    },
  };
}
//  默认回调 没有回调着默认绑定click 事件为router.push   /（含有child的对象无默认事件）
function callBack_hooks(obj: ElMenuItemType | ElMenuItemchild) {
  try {
    (obj as any).callBack();
  } catch {
    if ("children" in obj) {
      return;
    }
    _router.push({
      path: obj.path,
    });
  }
}
//  选择最终节点
function createTitleNode(obj: ElMenuItemType | ElMenuItemchild): VNode[] {
  let hArr = [];

  if (obj.icon) {
    hArr.push(h(icon, { icon: obj.icon, style: { fontSize: "20px" } }));
  }
  hArr.push(h("span", obj.title));
  return hArr;
}

export default defineComponent({
  props: {
    menuArr: {
      type: Array as PropType<ElMenuItemType[]>,
      required: true,
    },
  },
  setup(props, context) {
    const router = useRouter();
    return () => {
      return init(props.menuArr, router, context);
    };
  },
});

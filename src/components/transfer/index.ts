import transferCom from "./transfer.vue";
import Vue from "vue";
import { createApp, h, render, App } from "vue";

// const transferConstructor = Vue.extend(transferCom);

interface option {
  title: string;
}

export const transfer = (options?: option): Promise<boolean> => {
  let instance: App;

  instance = createApp(transferCom, { ...options });
  const el = document.createElement("div");

  instance.mount(el);
  document.body.appendChild(el);

  setTimeout(() => {
    instance.unmount();
    document.body.removeChild(el);
  }, 2500);
  // 触发autoenter
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

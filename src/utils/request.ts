import axios from "axios";

const net = axios.create({
  // baseURL: "http://127.0.0.1:4523/m1/2268281-0-default/api",
  // baseURL: "https://mock.apifox.cn/m1/2268281-0-default/api",
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// 响应拦截器
net.interceptors.response.use((response) => {
  const { code, msg, data } = response.data;

  //   要根据success的成功与否决定下面的操作
  if (code == "200") {
    return response.data;
  } else {
    // TODO：业务错误
    return Promise.reject(new Error(msg));
  }
});

export default net;

import { useAuthStore } from "@/stores/authStore";
import axios from "axios";

class Http {
  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 1000,
    });

    this.http.interceptors.request.use(
      (config) => {
        const authStore = useAuthStore();
        const token = authStore.token;
        if (token) {
          config.headers.Authorization = `JWT ${token}`;
        }
        return config;
      },
      (error) => {
        // Handle the error
        return Promise.reject(error);
      }
    );
  }

  post(path, data) {
    return new Promise(async (resolve, reject) => {
      // await: 网络请求发出后, 线程会挂起等待, 释放cpu资源, 直到请求返回结果
      try {
        const response = await this.http.post(path, data);
        resolve(response.data);
      } catch (error) {
        try {
          console.log(error);

          let detail = error.response.data.detail;
          reject(detail);
        } catch {
          reject("服务器错误！");
        }
      }
    });
  }

  get(path, params) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await this.http.get(path, { params });
        resolve(result.data);
      } catch (err) {
        console.log(err);
        let detail = err.response.data.detail;
        reject(detail);
      }
    });
  }

  put(path, data) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await this.http.put(path, data);
        resolve(result.data);
      } catch (err) {
        let detail = err.response.data.detail;
        reject(detail);
      }
    });
  }

  delete(path) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await this.http.delete(path);
        // 因为服务端的delete方法，只是返回一个状态码，并没有数据，所以直接把result返回回去就可以了
        resolve(result);
      } catch (err) {
        let detail = err.response.data.detail;
        reject(detail);
      }
    });
  }
}

export default new Http();

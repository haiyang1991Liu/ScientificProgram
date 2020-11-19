/*
 * @Author: @yzcheng
 * @Date: 2020-08-04 16:27:00
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:   ajax请求工具类
 * @LastEditTime: 2020-11-19 15:01:18
 */
import axios from 'axios'
import { isAuthenticated, logout } from './Session'
import { Modal, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { HashRouter } from 'react-router-dom'

const router = new HashRouter()
const { confirm } = Modal
const server = axios.create({
  //超时时间60s
  timeout: 120000,
})
//设置post请求的请求头
server.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
//请求拦截器
server.interceptors.request.use(
  (config) => {
    // if (isAuthenticated()) {
    //   config.headers['Authorization'] = 'Bearer ' + isAuthenticated() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  (error) => {
    return Promise.error(error)
  }
)

function debounce(fn, wait) {
  let timerId = null
  let flag = true
  return function () {
    clearTimeout(timerId)
    if (flag) {
      fn.apply(this, arguments)
      flag = false
    }
    timerId = setTimeout(() => {
      flag = true
    }, wait)
  }
}

const authError = debounce((message) => {
  confirm({
    title: '登录过期',
    icon: <ExclamationCircleOutlined />,
    content: '当前登陆已经过期，请选择是否继续留在当前页面',
    okText: '重新登录',
    cancelText: '取消',
    onOk() {
      logout()
      router.history.push('/login')
      Modal.destroyAll()
    },
    onCancel() {},
  })
}, 1000)
//响应拦截器
server.interceptors.response.use(
  (response) => {
    const code = response.data.code
    switch (code) {
      case 401:
        authError()
        break
      default:
        break
    }
    return Promise.resolve(response)
  },
  (error) => {
    const { status } = error.response
    switch (status) {
      case 500:
      case 501:
      case 502:
      case 503:
        message.warning('服务端错误')
        break
      default:
        break
    }
    return Promise.reject(error)
  }
)
/**
 * get方法
 * @param url            请求地址
 * @param params         参数
 * @returns  {Promise}   请求结果
 */
export let get = (url, params) => {
  return new Promise((reslove, reject) => {
    server
      .get(url, {
        params,
      })
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export let post = (url, data) => {
  return new Promise((reslove, reject) => {
    server
      .post(url, data)
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * post传入data参数方法
 * @param url            请求地址
 * @param data           data参数
 * @returns  {Promise}   请求结果
 */
export let post_data = (url, data) => {
  return new Promise((reslove, reject) => {
    server
      .post(url, data)
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * post传入params参数方法
 * @param url            请求地址
 * @param params         params参数
 * @returns  {Promise}   请求结果
 */
export let post_params = (url, params) => {
  return new Promise((reslove, reject) => {
    server
      .post(url, null, params)
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export let post_formData = (url, data) => {
  console.log(data);
  return new Promise((reslove, reject) => {
    server({
      url,
      method: 'post',
      data,
      processData: false,
      contentType: false,
    })
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * put方法
 * @param url            请求地址
 * @param params         参数
 * @returns  {Promise}   请求结果
 */
export let put = (url, params) => {
  return new Promise((reslove, reject) => {
    server
      .put(url, params)
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * delete方法
 * @param url            请求地址
 * @param params         参数
 * @returns  {Promise}   请求结果
 */
export let deletes = (url, params) => {
  return new Promise((reslove, reject) => {
    server
      .delete(url, { data: params })
      .then((res) => {
        reslove(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export default server

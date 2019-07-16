/**
 * Encapsulation of the fetch method
 */
import { message } from 'antd'
import { Component } from 'react'

class Fetch extends Component {
    static Fetch_last_url = {} // 之前请求的URL信息
    static CryptoJS = require('crypto-js')
    static Url_prex = ''  // 请求前缀 
 
    /**
     * Asynchronous         异步
     * @param url           请求地址api
     * @param params        请求参数
     * @param history       路由跳转api
     * @param headers       请求头参数（非必传）
     */
    static async post (url, params, history, headers) {
        params = params || {}

        // 重复请求校验
        if (Fetch.Fetch_last_url[url] === JSON.stringify(params)) {
            return
        }
        Fetch.Fetch_last_url[url] = JSON.stringify(params)

        params = Fetch.manageParams(params)
        
        let uriParams = new FormData()
        if (params) {
            Object.keys(params).forEach(key => {
                uriParams.append(key, params[key])
            })
        }

        return new Promise((resolve, reject) => {
            let reLoginFunc = ()=> {
                sessionStorage.removeItem('USER_INFO')
                history && history.replace('/login')
            }

            fetch(Fetch.Url_prex + url, {
                method: 'POST',
                headers: headers,
                body: uriParams,
                credentials: 'include'
            }).then((response) => {
                Fetch.Fetch_last_url[url] = null
                if (response.ok) {
                    return response.json()
                } else {
                    reject({success: false, errCode:'500', errDesc: '网络异常，请稍后重试'})
                }
            }).then((respResult) => {
                if (respResult && respResult.errCode) {
                    switch (respResult.errCode) {
                    case '10000':   // 成功
                        resolve(respResult.result)
                        break
                    case '20001':   // 鉴权失败
                        reLoginFunc()
                        break
                    case '40006':   // 权限不足
                        reLoginFunc()
                        break
                    case '20002':   // 访问授权过期，重新鉴权
                        reLoginFunc()
                        break
                    default :
                        respResult.errDesc && message.warning(respResult.errDesc)
                        reject(respResult)
                        break
                    }
                } else {
                    reject({success: false, errCode:'500', errDesc: '网络异常，请稍后重试'})
                }
            }).catch((error) => {
                Fetch.Fetch_last_url[url] = null
                error.errDesc && message.warning(error.errDesc)
                reject({success: false, errCode:'500', error: error.errDesc})
            })
        })
    }

    /**
     * 参数处理（处理数组或对象的value，格式：数组arr[i]、对象obj.key）
    */
    static manageParams (params) {
        for (let key in params) {
            let item = params[key]
            if (item && item !== '' && item !== null) {
                if (Array.isArray(item)) {
                    // 数组
                    item.forEach((val, i) => {
                        if (val.constructor === Object) {
                            params[`${key}[${i}]`] = val
                        }
                    })
                    delete params[key]
                    Fetch.manageParams(params)
                } else if (item.constructor === Object) {
                    // 对象
                    for (let i in item) {
                        params[`${key}.${i}`] = item[i]
                    }
                    delete params[key]
                    Fetch.manageParams(params)
                }
            }
        }
        
        // 返回最终参数
        let allString = false
        for (let key in params) {
            let item = params[key]
            if (typeof item === 'string' || typeof item === 'number') {
                allString = true
            }
        }
        if (allString) {
            return params
        }
    }

}

export default Fetch
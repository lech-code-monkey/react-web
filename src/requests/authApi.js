import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class AuthApi {
    /**
     * 登录
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079852
     */
    login = (params) => {
        return Fetch.post(constants.URL_CUST_LOGIN, params).then(res => {
            return res
        })
    }

    /**
     * 获取短信验证码
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079862
     */
    getAuthCode = (params) => {
        return Fetch.post(constants.URL_CUST_GETAUTHCODE, params).then(res => {
            return res
        })
    }
    

    /**
     * 校验验证码
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079864
     */
    checkAuthCode = (params) => {
        return Fetch.post(constants.URL_CUST_CHECKAUTHCODE, params).then(res => {
            return res
        })
    }

    /**
     * 忘记密码
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079868
     */
    updatePwd = (params) => {
        return Fetch.post(constants.URL_CUST_UPDATEPWD, params).then(res => {
            return res
        })
    }
}

export default new AuthApi()
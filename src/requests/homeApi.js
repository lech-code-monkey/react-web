import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class homeApi {
    /**
     * 会员搜索
     */
    userList = (params) => {
        return Fetch.post(constants.URL_INDEX_USERLIST, params).then(res => {
            return res
        })
    }

    /**
     * 导购搜索
     */
    custGuide = (params) => {
        return Fetch.post(constants.URL_INDEX_CUSTGUIDE, params).then(res => {
            return res
        })
    }

    /**
     * 商品类目
     */
    productClassify = (params) => {
        return Fetch.post(constants.URL_INDEX_PRODUCTCLASSIFY, params).then(res => {
            return res
        })
    }

    /**
     * 用户信息
     */
    loginInfo = (params) => {
        return Fetch.post(constants.URL_EMPLACCOUNT_LOGININFO, params).then(res => {
            return res
        })
    }
    /**
     * 修改密码
     */
    updPwd = (params) => {
        return Fetch.post(constants.URL_INDEX_UPDPWD, params).then(res => {
            return res
        })
    }
    /**
     * 挂单/取消挂单
     */
    updProdStock = (params,history) => {
        return Fetch.post(constants.URL_INDEX_UPDPRODSTOCK, params,history).then(res => {
            return res
        })
    }


  
    
 
    

}

export default new homeApi()
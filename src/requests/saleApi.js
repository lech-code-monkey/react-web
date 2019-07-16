import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class SaleApi {
    /**
     * 销售状况
     */
    saleReport = (params) => {
        return Fetch.post(constants.URL_SALE_REPORT, params,history).then(res => {
            return res
        })
    }

    /**
     * 销售详情
     */
    saleDetail = (params) => {
        return Fetch.post(constants.URL_SALE_DETAIL, params).then(res => {
            return res
        })
    }
    

    /**
     * 员工列表
     */
    emplList = (params) => {
        return Fetch.post(constants.URL_SALE_EMPLLIST, params).then(res => {
            return res
        })
    }

    /**
     * 员工订单记录列表
     */
    emplOrderList = (params) => {
        return Fetch.post(constants.URL_SALE_EMPLORDERLIST, params).then(res => {
            return res
        })
    }

    /**
     * 订单详情（公用）
     */
    orderDetail=(params)=>{
        return Fetch.post(constants.URL_ORDERDETAIL, params).then(res => {
            return res
        })
    }

}

export default new SaleApi()
import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class RefundApi {
    /**
     * 发起退货
     */
    refund = (params) => {
        return Fetch.post(constants.URL_REFUND_REFUND, params).then(res => {
            return res
        })
    }

    /**
     * 店铺订单列表
     */
    refundOrderList = (params) => {
        return Fetch.post(constants.URL_REFUND_ORDERLIST, params).then(res => {
            return res
        })
    }
    

    /**
     * 订单详情
     */
    refundDetail = (params) => {
        return Fetch.post(constants.URL_REFUND_DETAIL, params).then(res => {
            return res
        })
    }

}

export default new RefundApi()
import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class OrderApi {
    /**
     * 下单
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079936
     */
    orderSubmit = (params, history) => {
        return Fetch.post(constants.URL_ORDER_SUBMIT, params, history).then(res => {
            return res
        })
    }

    /**
     * 付款优惠券列表
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080462
     */
    queryCouponList = (params, history) => {
        return Fetch.post(constants.URL_BM_COUPON_LIST, params, history).then(res => {
            return res
        })
    }
    

    /**
     * 撤销订单
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080331
     */
    orderReverse = (params, history) => {
        return Fetch.post(constants.URL_ORDER_REVERSE, params, history).then(res => {
            return res
        })
    }

    /**
     * 支付
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080329
     */
    orderPay = (params, history) => {
        return Fetch.post(constants.URL_ORDER_PAY, params, history).then(res => {
            return res
        })
    }

    /**
     * 查询支付结果
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080333
     */
    queryOrderResult = (params, history) => {
        return Fetch.post(constants.URL_ORDER_ORDERQUERY, params, history).then(res => {
            return res
        })
    }

    /**
     * 查询有效支付渠道
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=14680069
     */
    queryVaildPay = (params, history) => {
        return Fetch.post(constants.URL_ORDER_FINDPAYCHN, params, history).then(res => {
            return res
        })
    }
}

export default new OrderApi()
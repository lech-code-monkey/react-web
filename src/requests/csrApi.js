import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class CsrApi {
    /**
     * 交接班
     */
    csr = (params) => {
        return Fetch.post(constants.URL_CSR_SAVE, params).then(res => {
            return res
        })
    }

    /**
     * 交接班主页
     */
    csrHome = (params) => {
        return Fetch.post(constants.URL_CSR_INDEXDATA, params).then(res => {
            return res
        })
    }
    

    /**
     * 交接班记录
     */
    csrPageList = (params) => {
        return Fetch.post(constants.URL_CSR_PAGELIST, params).then(res => {
            return res
        })
    }

    /**
     * 订单列表
     */
    csrOrderList = (params) => {
        return Fetch.post(constants.URL_CSR_ORDERLIST, params).then(res => {
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

    /**
     * 员工下拉选
     */
    emplList=(params)=>{
        return Fetch.post(constants.URL_CSR_EMPLLIST, params).then(res => {
            return res
        })
    }


}

export default new CsrApi()
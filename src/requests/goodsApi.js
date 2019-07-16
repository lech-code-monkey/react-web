import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class goodsApi {
    /**
     * 商品列表
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079890
     */
    findList = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_FINDLIST, params,history).then(res => {
            return res
        })
    }

    /**
     * 商品分类列表
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080220
     */
    classifyList = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_CLASSIFYLIST, params,history).then(res => {
            return res
        })
    }

    /**
     * 商品上架/下架
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079906
     */
    upStatus = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_UPSTATUS, params,history).then(res => {
            return res
        })
    }

    /**
     * 商品删除
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079911
     */
    delete = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_DELETE, params,history).then(res => {
            return res
        })
    }

    /**
     * 商品导入
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079904
     */
    importProduct = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_IMPORTPRODUCT, params,history).then(res => {
            return res
        })
    }

    /**
     * 商品新增编辑
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11079913
     */
    saveProd = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_SAVEPROD, params,history).then(res => {
            return res
        })
    }
    /**
     * 商品 生成商品条码
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080516
     */
    getProdCode = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_GETPRODCODE, params,history).then(res => {
            return res
        })
    }
    
    /**
     * 商品获取信息
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080014
     */
    getInfo = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_GETINFO, params,history).then(res => {
            return res
        })
    }

    /**
     * 挂单列表获取信息
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080560
     */
    getListByIds = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_LISTBYUDS, params,history).then(res => {
            return res
        })
    }

    /**
     * 商家自定义分类 创建/编辑
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080180
     */
    saveClassify = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_SAVECLASSIFY, params,history).then(res => {
            return res
        })
    }

    /**
     * 商家自定义分类 删除
     * wiki地址：http://wiki.hiwitech.com/pages/viewpage.action?pageId=11080182
     */
    deleteClassify = (params,history) => {
        return Fetch.post(constants.URL_PRODUCT_DELETECLASSIFY, params,history).then(res => {
            return res
        })
    }
    
}

export default new goodsApi()
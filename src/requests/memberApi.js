/**
 * 会员管理、账户、优惠券相关接口
 */
import Fetch from '../utils/fetch'
import constants from '../configs/constants'

class MemberApi {
    //会员列表
    requestMemberListInfo = (params,history) => {
        return Fetch.post(constants.URL_MEM_USERLIST, params,history).then(res => {
            return res
        })
    }
    //会员详情
    requestMemberDetail = (params,history) => {
        return Fetch.post(constants.URL_MEM_CUSUSERINFO, params,history).then(res => {
            return res
        })
    }
    //会员订单记录
    requestMemberOderList = (params,history) => {
        return Fetch.post(constants.URL_MEM_ORDERLIST, params,history).then(res => {
            return res
        })
    }
     //会员订单详情
     requestMemberOderDetail = (params,history) => {
         return Fetch.post(constants.URL_MEM_ORDERDETAIL, params,history).then(res => {
             return res
         })
     }
     //新增会员
     requestMemberAddUser = (params,history) => {
         return Fetch.post(constants.URL_MEM_ADDCUSTUSER, params,history).then(res => {
             return res
         })
     }
     //用户优惠券列表
     requestCouponList = (params,history) => {
         return Fetch.post(constants.URL_COU_COUPONLIST, params,history).then(res => {
             return res
         })
     }
     //商家优惠券列表
     requestSoleCouponList = (params,history) => {
         return Fetch.post(constants.URL_CONCUST_SOLELIST, params,history).then(res => {
             return res
         })
     }
      //补发优惠券
      requestCouponReissue = (params,history) => {
          return Fetch.post(constants.URL_COU_REISSUE, params,history).then(res => {
              return res
          })
      }
     //新增商家优惠券优惠券
     requestCouponCreate = (params,history) => {
         return Fetch.post(constants.URL_COU_CREATE, params,history).then(res => {
             return res
         })
     }
     
    //停用商家优惠券列表
     requestSoleCouponStop = (params,history) => {
         return Fetch.post(constants.URL_COU_STOP, params,history).then(res => {
             return res
         })
     }
       //获取商品分类
       requestSoleClassifyList = (params,history) => {
           return Fetch.post(constants.URL_CLASSIFY_LIST, params,history).then(res => {
               return res
           })
       }
     //获取商品列表
     requestSoleFindList = (params,history) => {
         return Fetch.post(constants.URL_CLASSIFY_FINDLIST, params,history).then(res => {
             return res
         })
     }

     /**
      * 账户管理
      */
    //员工列表
    requestAccountList = (params,history) => {
        return Fetch.post(constants.URL_ACCOUNT_LIST, params,history).then(res => {
            return res
        })
    }
    //员工详情
    requestAccountDetail = (params,history) => {
        return Fetch.post(constants.URL_ACCOUNT_DETAIL, params,history).then(res => {
            return res
        })
    }
    //员工编辑
    requestAccountEdit = (params,history) => {
        return Fetch.post(constants.URL_ACCOUNT_EDIT, params,history).then(res => {
            return res
        })
    }
     //员工新增
     requestAccountAdd = (params,history) => {
         return Fetch.post(constants.URL_ACCOUNT_ADD, params,history).then(res => {
             return res
         })
     }
     //修改分佣比例
     requestAccountEditComRate = (params,history) => {
         return Fetch.post(constants.URL_ACCOUNT_EDTRCOMRATE, params,history).then(res => {
             return res
         })
     }
     //删除员工
     requestAccountDeleMpl= (params,history) => {
         return Fetch.post(constants.URL_ACCOUNT_DELEMPL, params,history).then(res => {
             return res
         })
     }
     //角色列表
     requestAccountRoleList= (params,history) => {
         return Fetch.post(constants.URL_ACCOUNT_ROLELIST, params,history).then(res => {
             return res
         })
     }
  //角色详情
  requestAccountRoleDetail= (params,history) => {
      return Fetch.post(constants.URL_ACCOUNT_ROLEDETAIL, params,history).then(res => {
          return res
      })
  }
  //角色新增
  requestAccountRoleAdd= (params,history) => {
      return Fetch.post(constants.URL_ACCOUNT_ROLEADD, params,history).then(res => {
          return res
      })
  }
  //角色删除
  requestAccountRoleDel= (params,history) => {
      return Fetch.post(constants.URL_ACCOUNT_ROLEDEL, params,history).then(res => {
          return res
      })
  }
  //角色编辑
  requestAccountRoleEdit= (params,history) => {
      return Fetch.post(constants.URL_ACCOUNT_ROLEEDIT, params,history).then(res => {
          return res
      })
  }
  //获取导购列表
  
    requestAccountCustGuide= (params,history) => {
        return Fetch.post(constants.URL_ACCOUNT_CUSTGUIDE, params,history).then(res => {
            return res
        })
    }



}
export default new MemberApi()
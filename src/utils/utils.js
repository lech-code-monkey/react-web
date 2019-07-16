module.exports = {
// 用户名校验
    get RegExp_UserName() {
        return/^[\u4E00-\u9FA5]{1,8}$/
    },

    // 密码校验
    get RegExp_Pwd() {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    },

    // 手机号校验
    get RegExp_Phone() {
        return /^1[345678]\d{9}$/
    },

    // 电子邮箱校验
    get RegExp_Email() {
        return /^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    },

    // 验证码校验
    get RegExp_Code() {
        return /^\d{6}$/
    },
    PhoneNumcard: (value) => {
        // 手机号脱敏处理
        let val = ''
        if (value) {
            val = value.substring(0, 3) + '****' + value.substring(value.length - 3)
        }
        return val
    },

    //正整数校验
    get RegExp_zero (){
        return /^\+?[1-9][0-9]*$/
    },
    // 身份证校验
    get RegExp_IdCard() {
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    },
 
    // 数据格式转换
    get DateFormat() {
        return (date, fmt) => {
            let o = {
                'M+': date.getMonth() + 1, //月份
                'd+': date.getDate(), //日
                'h+': date.getHours(), //小时
                'm+': date.getMinutes(), //分
                's+': date.getSeconds(), //秒
                'q+': Math.floor((date.getMonth() + 3) / 3), //季度
                'S': date.getMilliseconds() //毫秒
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))

            return fmt
        }
    },

    // 获取length（中英文）
    get ExchangeLength() {
        return (val) => {
            let valLength = val.length
            for(let i = 0; i < val.length; i++) {
                if(val.charCodeAt(i) > 127) {
                    ++valLength
                }
            }
            return valLength
        }
    },

    // 保留两位小数（不四舍五入）
    get TwoDecimalPlaces() {
        return (number) => {
            number = Number(number.toString().match(/^\d+(?:\.\d{0,2})?/))
            return number
        }
    }
}